import nodemailer from "nodemailer";
import { Resend } from "resend";

export interface EmailData {
  name: string;
  email: string;
  message: string;
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
export const sendContactEmail = async (data: EmailData): Promise<void> => {
  const emailProvider = process.env.EMAIL_PROVIDER?.toLowerCase() || "resend";

  try {
    console.log(`📧 Preparing to send contact email via ${emailProvider}...`);

    if (emailProvider === "resend") {
      await sendWithResend(data);
    } else if (emailProvider === "gmail") {
      await sendWithGmail(data);
    } else {
      throw new Error(`Unsupported email provider: ${emailProvider}`);
    }
  } catch (error) {
    console.error("❌ Error sending email:", error);
    // If Resend fails, try Gmail as fallback
    if (emailProvider === "resend") {
      console.log("🔄 Resend failed, trying Gmail fallback...");
      try {
        await sendWithGmail(data);
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
const sendWithResend = async (data: EmailData): Promise<void> => {
  // 1️⃣ Send notification to admin
  await resend.emails.send({
    from: process.env.EMAIL_FROM || "Contact Form <noreply@desi4fit.nl>",
    to: process.env.EMAIL_TO || "info@desi4fit.nl",
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4ecdc4; margin: 15px 0;">
        ${data.message.replace(/\n/g, "<br>")}
      </p>
      <hr>
      <p><em>Sent from Desi4Fit Personal Trainer Website</em></p>
    `,
  });
  console.log("✅ Admin notification email sent via Resend");

  // 2️⃣ Send auto-reply to user (if enabled)
  if (process.env.SEND_AUTO_REPLY === "true") {
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "Desi4Fit <noreply@desi4fit.nl>",
      to: data.email,
      subject: "Bedankt voor je bericht - Desi4Fit",
      html: `
        <h2>Bedankt voor je bericht!</h2>
        <p>Hallo ${data.name},</p>
        <p>Bedankt voor je interesse in Desi4Fit! We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
        <p><strong>Jouw bericht:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4ecdc4; margin: 15px 0;">
          ${data.message.replace(/\n/g, "<br>")}
        </p>
        <p>Met vriendelijke groet,<br>Het Desi4Fit Team</p>
        <hr>
        <p style="color: #666; font-size: 0.9em;"><em>Dit is een automatische bevestiging. Gelieve niet te antwoorden op deze email.</em></p>
      `,
    });
    console.log("✅ Auto-reply email sent via Resend");
  }
};

// Send emails using Gmail (fallback method)
const sendWithGmail = async (data: EmailData): Promise<void> => {
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
      <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4ecdc4; margin: 15px 0;">
        ${data.message.replace(/\n/g, "<br>")}
      </p>
      <hr>
      <p><em>Sent from Desi4Fit Personal Trainer Website</em></p>
    `,
  };

  await transporter.sendMail(adminMailOptions);
  console.log("✅ Admin notification email sent via Gmail");

  // Auto-reply to user (if enabled)
  if (process.env.SEND_AUTO_REPLY === "true") {
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: "Bedankt voor je bericht - Desi4Fit",
      html: `
        <h2>Bedankt voor je bericht!</h2>
        <p>Hallo ${data.name},</p>
        <p>Bedankt voor je interesse in Desi4Fit! We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
        <p><strong>Jouw bericht:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4ecdc4; margin: 15px 0;">
          ${data.message.replace(/\n/g, "<br>")}
        </p>
        <p>Met vriendelijke groet,<br>Het Desi4Fit Team</p>
        <hr>
        <p style="color: #666; font-size: 0.9em;"><em>Dit is een automatische bevestiging. Gelieve niet te antwoorden op deze email.</em></p>
      `,
    };

    await transporter.sendMail(autoReplyOptions);
    console.log("✅ Auto-reply email sent via Gmail");
  }
};
