# Gmail App Password Setup Guide

## Problem Identified

The Gmail app password `4fm#yv$B8m7Cmf1S%RCB` is being rejected by Gmail's SMTP server.

## Error Details

```
535-5.7.8 Username and Password not accepted
https://support.google.com/mail/?p=BadCredentials
```

## Required Gmail Account Setup

### 1. Enable 2-Factor Authentication

- Go to https://myaccount.google.com/security
- Under "Signing in to Google", click "2-Step Verification"
- Follow the setup process if not already enabled

### 2. Generate App Password

- In Google Account → Security → 2-Step Verification
- Scroll down to "App passwords"
- Click "Generate app password"
- Select "Mail" or "Other (Custom name)"
- Copy the 16-character password (format: xxxx-xxxx-xxxx-xxxx)

### 3. Update .env File

Replace the current password in `.env`:

```env
GMAIL_APP_PASSWORD=your-new-16-char-password
```

## Alternative: Use OAuth2 (More Secure)

Instead of app passwords, you can use OAuth2:

1. Create Google Cloud Project
2. Enable Gmail API
3. Create OAuth2 credentials
4. Use refresh tokens for authentication

## Testing

Run the test script to verify:

```bash
npx tsx test-email.ts
```

## Troubleshooting

- Ensure no spaces in the app password
- Remove any hyphens if present
- Make sure 2FA is enabled on the Gmail account
- Try generating a fresh app password
- Check that the Gmail account isn't locked or suspended
