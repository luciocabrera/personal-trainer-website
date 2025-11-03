/**
 * Network diagnostics for Railway email issues
 * This will help us understand what's happening with SMTP connections
 */

// Simple network test without dependencies
const testSMTPConnectivity = async () => {
  console.log("🔍 Railway Network Diagnostics for SMTP");
  console.log("=====================================");

  // Test environment variables first
  console.log("📧 Environment Variables:");
  console.log("EMAIL_PROVIDER:", process.env.EMAIL_PROVIDER);
  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log(
    "GMAIL_APP_PASSWORD:",
    process.env.GMAIL_APP_PASSWORD ? "✅ Set" : "❌ Missing"
  );

  console.log("\n🌐 Testing SMTP Connectivity...");

  try {
    // Test different SMTP configurations
    const configs = [
      {
        host: "smtp.gmail.com",
        name: "Gmail SMTP (Port 587 - TLS)",
        port: 587,
        secure: false,
      },
      {
        host: "smtp.gmail.com",
        name: "Gmail SMTP (Port 465 - SSL)",
        port: 465,
        secure: true,
      },
      {
        host: "smtp.gmail.com",
        name: "Gmail SMTP (Port 25 - Plain)",
        port: 25,
        secure: false,
      },
    ];

    // Dynamic import
    const nodemailer = (await import("nodemailer")).default;

    for (const config of configs) {
      console.log(`\n⏳ Testing ${config.name}...`);

      try {
        const transporter = nodemailer.createTransport({
          auth: {
            pass: process.env.GMAIL_APP_PASSWORD,
            user: process.env.GMAIL_USER,
          },
          connectionTimeout: 10000,
          debug: true,
          // 10 seconds
greetingTimeout: 10000,
          
host: config.host, 
          
logger: false,
          
port: config.port,
          secure: config.secure,
          socketTimeout: 10000, // Reduce noise
        });

        await transporter.verify();
        console.log(`✅ ${config.name} - SUCCESS!`);

        // If this works, try sending a test email
        console.log("📤 Sending test email...");
        await transporter.sendMail({
          from: process.env.EMAIL_FROM || process.env.GMAIL_USER,
          html: `
            <h2>🚀 Railway SMTP Test</h2>
            <p>This email was sent successfully using <strong>${config.name}</strong> from Railway production environment.</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
            <p><strong>Environment:</strong> ${process.env.NODE_ENV || "unknown"}</p>
          `,
          subject: `🚀 Railway SMTP Test - ${  config.name}`,
          text: `This email was sent successfully using ${config.name} from Railway production environment.`,
          to: process.env.EMAIL_TO,
        });
        console.log(`✅ Test email sent via ${config.name}!`);
        return; // Success! Exit after first working config
      } catch (error: any) {
        console.log(`❌ ${config.name} - FAILED:`);
        if (error.code === "ETIMEDOUT") {
          console.log(
            `   Connection timeout - Port ${config.port} may be blocked`
          );
        } else if (error.code === "ECONNREFUSED") {
          console.log(`   Connection refused - Port ${config.port} is blocked`);
        } else {
          console.log(`   Error: ${error.message || error}`);
        }
      }
    }

    console.log("\n❌ All SMTP configurations failed!");
    console.log(
      "🔍 This indicates Railway is blocking outbound SMTP connections."
    );
  } catch (error) {
    console.error("❌ Failed to load nodemailer:", error);
  }
};

// Alternative: Test basic TCP connectivity
const testTCPConnection = async (host, port) => {
  return new Promise((resolve) => {
    const net = require("net");
    const socket = new net.Socket();

    const timeout = setTimeout(() => {
      socket.destroy();
      resolve(false);
    }, 5000);

    socket.connect(port, host, () => {
      clearTimeout(timeout);
      socket.destroy();
      resolve(true);
    });

    socket.on("error", () => {
      clearTimeout(timeout);
      resolve(false);
    });
  });
};

const testBasicConnectivity = async () => {
  console.log("\n🔌 Testing Basic TCP Connectivity...");

  const ports = [25, 465, 587];
  for (const port of ports) {
    const canConnect = await testTCPConnection("smtp.gmail.com", port);
    console.log(
      `Port ${port}: ${canConnect ? "✅ Open" : "❌ Blocked/Timeout"}`
    );
  }
};

// Run diagnostics
const runDiagnostics = async () => {
  await testSMTPConnectivity();
  await testBasicConnectivity();

  console.log("\n💡 Solutions if SMTP is blocked:");
  console.log("1. Use Railway's SendGrid add-on");
  console.log("2. Use a webhook-based email service (Resend, Postmark)");
  console.log("3. Use Railway's email service integration");
  console.log("4. Proxy through a different service");
};

runDiagnostics().catch(console.error);
