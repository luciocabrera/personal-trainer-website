/**
 * Email service for sending contact form submissions
 */
import type { Transporter } from "nodemailer";

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

// Email configuration - using environment variables for security
const createTransporter = async () => {
  // Dynamic import to fix bundler issues
  const nodemailer = (await import("nodemailer")).default;

  // Support multiple email providers
  const emailProvider = process.env.EMAIL_PROVIDER || "gmail";

  switch (emailProvider) {
    case "gmail":
      return nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
        },
      });

    case "smtp":
      return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

    case "outlook":
      return nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: process.env.OUTLOOK_USER,
          pass: process.env.OUTLOOK_PASSWORD,
        },
      });

    default:
      throw new Error(`Unsupported email provider: ${emailProvider}`);
  }
};

export const sendContactEmail = async (data: EmailData): Promise<void> => {
  try {
    const transporter = await createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || data.email,
      to: process.env.EMAIL_TO || "desi4fit@gmail.com",
      subject: `Nieuwe contactaanvraag van ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            Nieuwe Contactaanvraag - Desi4Fit
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contactgegevens:</h3>
            <p><strong>Naam:</strong> ${data.name}</p>
            <p><strong>E-mail:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Bericht:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>Ontvangen op:</strong> ${new Date().toLocaleString(
                "nl-NL",
                {
                  timeZone: "Europe/Amsterdam",
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </p>
            <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">
              Via: desi4fit.nl contactformulier
            </p>
          </div>
        </div>
      `,
      text: `
Nieuwe Contactaanvraag - Desi4Fit

Contactgegevens:
Naam: ${data.name}
E-mail: ${data.email}

Bericht:
${data.message}

Ontvangen op: ${new Date().toLocaleString("nl-NL", {
        timeZone: "Europe/Amsterdam",
      })}
Via: desi4fit.nl contactformulier
      `.trim(),
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    // Send auto-reply to customer (optional)
    if (process.env.SEND_AUTO_REPLY === "true") {
      await sendAutoReply(data, transporter);
    }
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
};

// Optional auto-reply function
const sendAutoReply = async (
  data: EmailData,
  transporter: Transporter
): Promise<void> => {
  try {
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM || "desi4fit@gmail.com",
      to: data.email,
      subject: "Bedankt voor je bericht - Desi4Fit",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50; text-align: center;">Bedankt voor je bericht!</h2>
          
          <p>Hallo ${data.name},</p>
          
          <p>Bedankt voor je interesse in Desi4Fit! We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Je bericht:</h3>
            <p style="font-style: italic;">"${data.message}"</p>
          </div>
          
          <p>In de tussentijd kun je:</p>
          <ul>
            <li>Onze website bekijken: <a href="https://desi4fit.nl">desi4fit.nl</a></li>
            <li>Ons volgen op Instagram: <a href="https://instagram.com/desi4fit">@desi4fit</a></li>
            <li>Direct contact opnemen: <a href="mailto:desi4fit@gmail.com">desi4fit@gmail.com</a></li>
          </ul>
          
          <p>Met sportieve groeten,<br>
          <strong>Desi - Personal Trainer</strong></p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 12px; color: #666; text-align: center;">
            Dit is een automatisch gegenereerd bericht. Reageer niet op deze e-mail.
          </p>
        </div>
      `,
      text: `
Bedankt voor je bericht!

Hallo ${data.name},

Bedankt voor je interesse in Desi4Fit! We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.

Je bericht: "${data.message}"

In de tussentijd kun je:
- Onze website bekijken: https://desi4fit.nl
- Ons volgen op Instagram: @desi4fit
- Direct contact opnemen: desi4fit@gmail.com

Met sportieve groeten,
Desi - Personal Trainer

Dit is een automatisch gegenereerd bericht. Reageer niet op deze e-mail.
      `.trim(),
    };

    await transporter.sendMail(autoReplyOptions);
    console.log("Auto-reply sent successfully to:", data.email);
  } catch (error) {
    console.error("Failed to send auto-reply:", error);
    // Don't throw error for auto-reply failure
  }
};

// Test email configuration
export const testEmailConfig = async (): Promise<boolean> => {
  try {
    const transporter = await createTransporter();
    await transporter.verify();
    console.log("Email configuration is valid");
    return true;
  } catch (error) {
    console.error("Email configuration error:", error);
    return false;
  }
};
