import nodemailer from "nodemailer";
import { Resend } from "resend";

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface EmailTranslations {
  adminSubject: string;
  adminTitle: string;
  adminNameLabel: string;
  adminEmailLabel: string;
  adminMessageLabel: string;
  adminFooter: string;
  autoReplySubject: string;
  autoReplyTitle: string;
  autoReplyGreeting: string;
  autoReplyThankYou: string;
  autoReplyYourMessage: string;
  autoReplyClosing: string;
  autoReplyTeam: string;
  autoReplyDisclaimer: string;
}

// Create Resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

// Create email transporter (for Gmail fallback)
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Send contact form email using Resend (with Gmail fallback)
export const sendContactEmail = async (
  data: EmailData,
  translations: EmailTranslations
): Promise<void> => {
  const emailProvider = process.env.EMAIL_PROVIDER?.toLowerCase() || "resend";

  try {
    console.log(`📧 Preparing to send contact email via ${emailProvider}...`);

    if (emailProvider === "resend") {
      await sendWithResend(data, translations);
    } else if (emailProvider === "gmail") {
      await sendWithGmail(data, translations);
    } else {
      throw new Error(`Unsupported email provider: ${emailProvider}`);
    }
  } catch (error) {
    console.error("❌ Error sending email:", error);
    // If Resend fails, try Gmail as fallback
    if (emailProvider === "resend") {
      console.log("🔄 Resend failed, trying Gmail fallback...");
      try {
        await sendWithGmail(data, translations);
        console.log("✅ Gmail fallback successful");
      } catch (fallbackError) {
        console.error("❌ Gmail fallback also failed:", fallbackError);
        throw fallbackError;
      }
    } else {
      throw error;
    }
  }
};

// Send emails using Resend SDK
const sendWithResend = async (
  data: EmailData,
  translations: EmailTranslations
): Promise<void> => {
  // 1️⃣ Send notification to admin
  await resend.emails.send({
    from: process.env.EMAIL_FROM || "Contact Form <noreply@desi4fit.nl>",
    to: process.env.EMAIL_TO || "info@desi4fit.nl",
    subject: `${translations.adminSubject} ${data.name}`,
    html: `
      <h2>${translations.adminTitle}</h2>
      <p><strong>${translations.adminNameLabel}:</strong> ${data.name}</p>
      <p><strong>${translations.adminEmailLabel}:</strong> ${data.email}</p>
      <p><strong>${translations.adminMessageLabel}:</strong></p>
      <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4ecdc4; margin: 15px 0;">
        ${data.message.replace(/\n/g, "<br>")}
      </p>
      <hr>
      <p><em>${translations.adminFooter}</em></p>
    `,
  });
  console.log("✅ Admin notification email sent via Resend");

  // 2️⃣ Send auto-reply to user (if enabled)
  if (process.env.SEND_AUTO_REPLY === "true") {
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "Desi4Fit <noreply@desi4fit.nl>",
      to: data.email,
      subject: translations.autoReplySubject,
      html: `
        <h2>${translations.autoReplyTitle}</h2>
        <p>${translations.autoReplyGreeting} ${data.name},</p>
        <p>${translations.autoReplyThankYou}</p>
        <p><strong>${translations.autoReplyYourMessage}:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4ecdc4; margin: 15px 0;">
          ${data.message.replace(/\n/g, "<br>")}
        </p>
        <p>${translations.autoReplyClosing}<br>${translations.autoReplyTeam}</p>
        <hr>
        <p style="color: #666; font-size: 0.9em;"><em>${translations.autoReplyDisclaimer}</em></p>
      `,
    });
    console.log("✅ Auto-reply email sent via Resend");
  }
};

// Send emails using Gmail (fallback method)
const sendWithGmail = async (
  data: EmailData,
  translations: EmailTranslations
): Promise<void> => {
  const transporter = createTransporter();

  // Email to admin
  const adminMailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `${translations.adminSubject} ${data.name}`,
    html: `
      <h2>${translations.adminTitle}</h2>
      <p><strong>${translations.adminNameLabel}:</strong> ${data.name}</p>
      <p><strong>${translations.adminEmailLabel}:</strong> ${data.email}</p>
      <p><strong>${translations.adminMessageLabel}:</strong></p>
      <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4ecdc4; margin: 15px 0;">
        ${data.message.replace(/\n/g, "<br>")}
      </p>
      <hr>
      <p><em>${translations.adminFooter}</em></p>
    `,
  };

  await transporter.sendMail(adminMailOptions);
  console.log("✅ Admin notification email sent via Gmail");

  // Auto-reply to user (if enabled)
  if (process.env.SEND_AUTO_REPLY === "true") {
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: translations.autoReplySubject,
      html: `
        <h2>${translations.autoReplyTitle}</h2>
        <p>${translations.autoReplyGreeting} ${data.name},</p>
        <p>${translations.autoReplyThankYou}</p>
        <p><strong>${translations.autoReplyYourMessage}:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4ecdc4; margin: 15px 0;">
          ${data.message.replace(/\n/g, "<br>")}
        </p>
        <p>${translations.autoReplyClosing}<br>${translations.autoReplyTeam}</p>
        <hr>
        <p style="color: #666; font-size: 0.9em;"><em>${translations.autoReplyDisclaimer}</em></p>
      `,
    };

    await transporter.sendMail(autoReplyOptions);
    console.log("✅ Auto-reply email sent via Gmail");
  }
};
