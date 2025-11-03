# Email Configuration Guide

## Environment Variables Required

Add these environment variables to your Railway project or `.env` file for local development:

### Gmail Configuration (Recommended)

```env
EMAIL_PROVIDER=gmail
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-app-password
EMAIL_TO=desi4fit@gmail.com
EMAIL_FROM=your-gmail@gmail.com
SEND_AUTO_REPLY=true
```

### SMTP Configuration (Alternative)

```env
EMAIL_PROVIDER=smtp
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@domain.com
SMTP_PASSWORD=your-password
EMAIL_TO=desi4fit@gmail.com
EMAIL_FROM=your-email@domain.com
SEND_AUTO_REPLY=true
```

### Outlook Configuration (Alternative)

```env
EMAIL_PROVIDER=outlook
OUTLOOK_USER=your-email@outlook.com
OUTLOOK_PASSWORD=your-password
EMAIL_TO=desi4fit@gmail.com
EMAIL_FROM=your-email@outlook.com
SEND_AUTO_REPLY=true
```

## Setting up Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to "App passwords" section
4. Generate a new app password for "Mail"
5. Use this app password (not your regular password) in `GMAIL_APP_PASSWORD`

## Railway Environment Variables Setup

1. Go to your Railway project dashboard
2. Click on your service
3. Go to "Variables" tab
4. Add the required environment variables above

## Testing Email Configuration

The email service includes a test function. You can test it by temporarily adding this to your route:

```typescript
import { testEmailConfig } from '@/services/emailService';

// Add this to test email config (remove after testing)
const isEmailConfigValid = await testEmailConfig();
console.log('Email config valid:', isEmailConfigValid);
```

## Features

✅ **Multiple Email Providers**: Gmail, SMTP, Outlook  
✅ **Auto-Reply**: Optional automatic response to customers  
✅ **HTML & Text**: Rich HTML emails with plain text fallback  
✅ **Dutch Localization**: All emails in Dutch  
✅ **Error Handling**: Graceful error handling with user-friendly messages  
✅ **Security**: Environment variables for sensitive data

## Email Templates

### Contact Form Email (to you)

- Professional HTML layout
- Customer contact details
- Message content
- Timestamp in Dutch format
- Reply-to customer email

### Auto-Reply Email (to customer)

- Thank you message in Dutch
- Copy of their message
- Your contact information
- Social media links
- Professional branding

## Production Deployment

When deploying to Railway, make sure to:

1. Set all required environment variables
2. Test email sending after deployment
3. Monitor logs for any email errors
4. Consider email rate limits for high volume

## Troubleshooting

**Email not sending?**

- Check environment variables are set correctly
- Verify Gmail app password is correct
- Check Railway logs for detailed error messages
- Test with `testEmailConfig()` function

**Auto-reply not working?**

- Set `SEND_AUTO_REPLY=true`
- Check `EMAIL_FROM` is valid
- Monitor logs for auto-reply errors
