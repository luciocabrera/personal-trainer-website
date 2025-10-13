#!/bin/bash

# Railway Environment Variables Setup Script for Email
# Run this script to set up email environment variables in Railway

echo "🚀 Setting up Email Configuration for Railway..."
echo ""

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI is not installed. Please install it first:"
    echo "npm install -g @railway/cli"
    exit 1
fi

echo "📧 Email Configuration Setup"
echo "Choose your email provider:"
echo "1) Gmail (Recommended)"
echo "2) Custom SMTP"  
echo "3) Outlook"
echo ""

read -p "Enter your choice (1-3): " provider_choice

case $provider_choice in
    1)
        EMAIL_PROVIDER="gmail"
        echo ""
        echo "Gmail Setup:"
        read -p "Enter your Gmail address: " gmail_user
        echo ""
        echo "⚠️  You need a Gmail App Password (not your regular password)"
        echo "   1. Go to Google Account → Security → 2-Step Verification"
        echo "   2. Generate App Password for 'Mail'"
        echo "   3. Use the 16-character password below"
        echo ""
        read -p "Enter your Gmail App Password (16 characters): " gmail_password
        
        # Set Gmail variables
        railway variables set EMAIL_PROVIDER="$EMAIL_PROVIDER"
        railway variables set GMAIL_USER="$gmail_user"
        railway variables set GMAIL_APP_PASSWORD="$gmail_password"
        ;;
    2)
        EMAIL_PROVIDER="smtp"
        echo ""
        echo "SMTP Setup:"
        read -p "Enter SMTP host (e.g., smtp.yourprovider.com): " smtp_host
        read -p "Enter SMTP port (usually 587): " smtp_port
        read -p "Enter SMTP username: " smtp_user
        read -p "Enter SMTP password: " smtp_password
        read -p "Use secure connection? (true/false): " smtp_secure
        
        # Set SMTP variables
        railway variables set EMAIL_PROVIDER="$EMAIL_PROVIDER"
        railway variables set SMTP_HOST="$smtp_host"
        railway variables set SMTP_PORT="$smtp_port"
        railway variables set SMTP_USER="$smtp_user"
        railway variables set SMTP_PASSWORD="$smtp_password"
        railway variables set SMTP_SECURE="$smtp_secure"
        ;;
    3)
        EMAIL_PROVIDER="outlook"
        echo ""
        echo "Outlook Setup:"
        read -p "Enter your Outlook email: " outlook_user
        read -p "Enter your Outlook password: " outlook_password
        
        # Set Outlook variables
        railway variables set EMAIL_PROVIDER="$EMAIL_PROVIDER"
        railway variables set OUTLOOK_USER="$outlook_user"
        railway variables set OUTLOOK_PASSWORD="$outlook_password"
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        exit 1
        ;;
esac

echo ""
echo "📬 General Email Settings:"
read -p "Email address to receive contact forms (default: desi4fit@gmail.com): " email_to
email_to=${email_to:-"desi4fit@gmail.com"}

read -p "Email address to send from: " email_from
read -p "Send auto-reply to customers? (true/false, default: true): " auto_reply
auto_reply=${auto_reply:-"true"}

# Set general email variables
railway variables set EMAIL_TO="$email_to"
railway variables set EMAIL_FROM="$email_from"
railway variables set SEND_AUTO_REPLY="$auto_reply"
railway variables set NODE_ENV="production"

echo ""
echo "✅ Email configuration complete!"
echo ""
echo "📋 Variables set:"
echo "   EMAIL_PROVIDER: $EMAIL_PROVIDER"
echo "   EMAIL_TO: $email_to"
echo "   EMAIL_FROM: $email_from"
echo "   SEND_AUTO_REPLY: $auto_reply"
echo ""
echo "🚀 Ready to deploy! Run: railway up"
echo ""
echo "💡 To test email after deployment:"
echo "   1. Visit your deployed website"
echo "   2. Submit the contact form"
echo "   3. Check Railway logs: railway logs"