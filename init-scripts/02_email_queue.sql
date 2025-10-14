-- Email Queue System for PostgreSQL
-- This creates a system where PostgreSQL triggers queue emails for processing

-- Create email queue table
CREATE TABLE IF NOT EXISTS email_queue (
    id SERIAL PRIMARY KEY,
    contact_message_id UUID REFERENCES contact_messages(id),
    to_email VARCHAR(255) NOT NULL,
    from_email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    body_text TEXT NOT NULL,
    body_html TEXT,
    status VARCHAR(50) DEFAULT 'pending', -- pending, sent, failed, retry
    attempts INTEGER DEFAULT 0,
    max_attempts INTEGER DEFAULT 3,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    scheduled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sent_at TIMESTAMP,
    failed_at TIMESTAMP,
    error_message TEXT,
    priority INTEGER DEFAULT 1, -- 1=high, 2=normal, 3=low
    
    -- Indexes for performance
    INDEX idx_email_queue_status (status),
    INDEX idx_email_queue_scheduled (scheduled_at),
    INDEX idx_email_queue_priority (priority)
);

-- Trigger function to automatically queue emails when contact forms are submitted
CREATE OR REPLACE FUNCTION queue_contact_emails()
RETURNS TRIGGER AS $$
BEGIN
    -- Queue admin notification email
    INSERT INTO email_queue (
        contact_message_id,
        to_email,
        from_email,
        subject,
        body_text,
        body_html,
        priority
    ) VALUES (
        NEW.id,
        'luciocabrera1978@gmail.com',
        'desi4fitapp@gmail.com',
        'New Contact Form Submission from ' || NEW.name,
        'New Contact Form Submission' || E'\n\n' ||
        'Name: ' || NEW.name || E'\n' ||
        'Email: ' || NEW.email || E'\n' ||
        'Message: ' || E'\n' || NEW.message || E'\n\n' ||
        'Submitted: ' || NEW.created_at,
        '<h2>New Contact Form Submission</h2>' ||
        '<p><strong>Name:</strong> ' || NEW.name || '</p>' ||
        '<p><strong>Email:</strong> ' || NEW.email || '</p>' ||
        '<p><strong>Message:</strong></p>' ||
        '<p>' || replace(NEW.message, E'\n', '<br>') || '</p>' ||
        '<hr>' ||
        '<p><em>Sent from Personal Trainer Website at ' || NEW.created_at || '</em></p>',
        1 -- High priority
    );
    
    -- Queue auto-reply email (if enabled)
    INSERT INTO email_queue (
        contact_message_id,
        to_email,
        from_email,
        subject,
        body_text,
        body_html,
        priority
    ) VALUES (
        NEW.id,
        NEW.email,
        'desi4fitapp@gmail.com',
        'Thank you for contacting Desi4Fit - Personal Trainer',
        'Hi ' || NEW.name || ',' || E'\n\n' ||
        'Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.' || E'\n\n' ||
        'Your message:' || E'\n' || NEW.message || E'\n\n' ||
        'Best regards,' || E'\n' ||
        'Desi4Fit Personal Trainer Team' || E'\n\n' ||
        'This is an automated response. Please do not reply to this email.',
        '<h2>Thank you for your message!</h2>' ||
        '<p>Hi ' || NEW.name || ',</p>' ||
        '<p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>' ||
        '<p><strong>Your message:</strong></p>' ||
        '<p style="background-color: #f5f5f5; padding: 10px; border-left: 3px solid #007bff;">' ||
        replace(NEW.message, E'\n', '<br>') || '</p>' ||
        '<p>Best regards,<br>Desi4Fit Personal Trainer Team</p>' ||
        '<hr>' ||
        '<p><em>This is an automated response. Please do not reply to this email.</em></p>',
        2 -- Normal priority
    );
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger on contact_messages table
DROP TRIGGER IF EXISTS trigger_queue_contact_emails ON contact_messages;
CREATE TRIGGER trigger_queue_contact_emails
    AFTER INSERT ON contact_messages
    FOR EACH ROW
    EXECUTE FUNCTION queue_contact_emails();

-- Function to get pending emails for processing
CREATE OR REPLACE FUNCTION get_pending_emails(batch_size INTEGER DEFAULT 10)
RETURNS TABLE (
    id INTEGER,
    contact_message_id UUID,
    to_email VARCHAR(255),
    from_email VARCHAR(255),
    subject VARCHAR(255),
    body_text TEXT,
    body_html TEXT,
    attempts INTEGER,
    priority INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        eq.id,
        eq.contact_message_id,
        eq.to_email,
        eq.from_email,
        eq.subject,
        eq.body_text,
        eq.body_html,
        eq.attempts,
        eq.priority
    FROM email_queue eq
    WHERE eq.status = 'pending' 
       OR (eq.status = 'retry' AND eq.scheduled_at <= CURRENT_TIMESTAMP)
    ORDER BY eq.priority ASC, eq.created_at ASC
    LIMIT batch_size
    FOR UPDATE SKIP LOCKED;
END;
$$ LANGUAGE plpgsql;

-- Function to mark email as sent
CREATE OR REPLACE FUNCTION mark_email_sent(email_id INTEGER)
RETURNS VOID AS $$
BEGIN
    UPDATE email_queue 
    SET status = 'sent', 
        sent_at = CURRENT_TIMESTAMP 
    WHERE id = email_id;
END;
$$ LANGUAGE plpgsql;

-- Function to mark email as failed
CREATE OR REPLACE FUNCTION mark_email_failed(email_id INTEGER, error_msg TEXT)
RETURNS VOID AS $$
BEGIN
    UPDATE email_queue 
    SET status = CASE 
        WHEN attempts >= max_attempts THEN 'failed'
        ELSE 'retry'
    END,
    attempts = attempts + 1,
    failed_at = CURRENT_TIMESTAMP,
    error_message = error_msg,
    scheduled_at = CASE 
        WHEN attempts < max_attempts THEN CURRENT_TIMESTAMP + INTERVAL '5 minutes'
        ELSE scheduled_at
    END
    WHERE id = email_id;
END;
$$ LANGUAGE plpgsql;