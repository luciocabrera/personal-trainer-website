import nodemailer from "nodemailer";

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

// Create email transporter
const createTransporter = () => {
  const emailProvider = process.env.EMAIL_PROVIDER?.toLowerCase() || "gmail";

  if (emailProvider === "gmail") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }

  if (emailProvider === "resend") {
    return nodemailer.createTransport({
      host: "smtp.resend.com",
      port: 587,
      secure: false,
      auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
      },
    });
  }

  // Add other email providers as needed
  throw new Error(`Unsupported email provider: ${emailProvider}`);
};

// Send contact form email
export const sendContactEmail = async (data: EmailData): Promise<void> => {
  try {
    console.log("📧 Preparing to send contact email...");

    const transporter = createTransporter();

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Sent from Personal Trainer Website</em></p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    console.log("✅ Admin notification email sent successfully");

    // Auto-reply to user (if enabled)
    if (process.env.SEND_AUTO_REPLY === "true") {
      const autoReplyOptions = {
        from: process.env.EMAIL_FROM,
        to: data.email,
        subject: "Thank you for contacting us - Personal Trainer",
        html: `
          <h2>Thank you for your message!</h2>
          <p>Hi ${data.name},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 10px; border-left: 3px solid #007bff;">
            ${data.message.replace(/\n/g, "<br>")}
          </p>
          <p>Best regards,<br>Personal Trainer Team</p>
          <hr>
          <p><em>This is an automated response. Please do not reply to this email.</em></p>
        `,
      };

      await transporter.sendMail(autoReplyOptions);
      console.log("✅ Auto-reply email sent successfully");
    }
  } catch (error) {
    console.error("❌ Error sending email:", error);
    // Re-throw for logging but don't crash the application
    throw error;
  }
};
