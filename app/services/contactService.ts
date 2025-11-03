import { query } from '@/utils/database';
import { type EmailTranslations, sendContactEmail } from '@/utils/emailService';

// Simple contact form handler - database first approach
export interface ContactFormData {
  email: string;
  message: string;
  name: string;
}

export const handleContactSubmission = async (
  data: ContactFormData,
  emailTranslations: EmailTranslations
): Promise<void> => {
  console.log('📝 Processing contact form submission');
  console.log('Name:', data.name);
  console.log('Email:', data.email);
  console.log('Message length:', data.message.length);
  console.log('Timestamp:', new Date().toISOString());

  try {
    // Insert contact message into PostgreSQL database
    const result = await query(
      `INSERT INTO contact_messages (name, email, message, status, created_at, updated_at) 
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) 
       RETURNING id, created_at`,
      [data.name, data.email, data.message, 'new']
    );

    const insertedRecord = result.rows[0];

    console.log('💾 Contact message saved to database:', {
      created_at: insertedRecord.created_at,
      email: data.email,
      id: insertedRecord.id,
      name: data.name,
    });

    // Send email notification asynchronously (non-blocking)
    sendContactEmail(data, emailTranslations)
      .then(() => {
        console.log('📧 Email notification sent successfully!');
      })
      .catch((emailError) => {
        console.error(
          '⚠️ Email sending failed (non-critical):',
          emailError?.message || emailError
        );
        // Email failure doesn't affect user experience - just log it
      });

    console.log('✅ Contact form submission processed successfully!');
  } catch (error) {
    console.error('❌ Database error saving contact message:', error);

    // Log the contact for debugging even if DB fails
    console.log('📋 Contact details (DB save failed):', {
      email: data.email,
      message: `${data.message.substring(0, 100)}...`,
      name: data.name,
      timestamp: new Date().toISOString(),
    });

    // Re-throw error so the form can show appropriate error message
    throw new Error('Failed to save contact message to database');
  }
};

export const testContactService = (): boolean => {
  console.log('📞 Contact service is ready');
  return true;
};
