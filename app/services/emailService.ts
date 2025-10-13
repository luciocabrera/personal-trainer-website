export interface EmailData {
  name: string;
  email: string;
  message: string;
}

// Send via Resend (for production)
const sendViaResend = async (data: EmailData): Promise<void> => {
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  const result = await resend.emails.send({
    from: "Desi4Fit <onboarding@resend.dev>",
    to: [process.env.EMAIL_TO || "desi4fit@gmail.com"],
    subject: `Nieuwe contactaanvraag van ${data.name}`,
    html: `
      <h2>Nieuwe Contactaanvraag - Desi4Fit</h2>
      <p><strong>Naam:</strong> ${data.name}</p>
      <p><strong>E-mail:</strong> ${data.email}</p>
      <p><strong>Bericht:</strong> ${data.message}</p>
      <p><strong>Ontvangen:</strong> ${new Date().toLocaleString("nl-NL")}</p>
    `,
  });

  if (result.error) {
    throw new Error(`Resend error: ${result.error.message}`);
  }

  // Auto-reply
  if (process.env.SEND_AUTO_REPLY === "true") {
    await resend.emails.send({
      from: "Desi4Fit <onboarding@resend.dev>",
      to: [data.email],
      subject: "Bedankt voor je bericht - Desi4Fit",
      html: `
        <h2>Bedankt voor je bericht!</h2>
        <p>Hallo ${data.name},</p>
        <p>We hebben je bericht ontvangen en nemen snel contact op!</p>
      `,
    });
  }
};

// Send via SMTP (for local)
const sendViaSMTP = async (data: EmailData): Promise<void> => {
  const nodemailer = (await import("nodemailer")).default;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Nieuwe contactaanvraag van ${data.name}`,
    html: `
      <h2>Nieuwe Contactaanvraag - Desi4Fit</h2>
      <p><strong>Naam:</strong> ${data.name}</p>
      <p><strong>E-mail:</strong> ${data.email}</p>
      <p><strong>Bericht:</strong> ${data.message}</p>
    `,
  });
};

// Main function with fallback
export const sendContactEmail = async (data: EmailData): Promise<void> => {
  try {
    await sendViaSMTP(data);
  } catch (error: any) {
    if (error.code === 'ETIMEDOUT' && process.env.RESEND_API_KEY) {
      console.log("SMTP timeout, using Resend fallback");
      await sendViaResend(data);
    } else {
      throw error;
    }
  }
};

export const testEmailConfig = async (): Promise<boolean> => {
  return true;
};
