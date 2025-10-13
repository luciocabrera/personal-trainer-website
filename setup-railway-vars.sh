#!/bin/bash

# Set Railway environment variables for email
echo "Setting up Railway environment variables..."

# Use railway CLI to set variables
railway variables --set "EMAIL_PROVIDER=gmail"
railway variables --set "GMAIL_USER=desi4fitapp@gmail.com"  
railway variables --set "GMAIL_APP_PASSWORD=4fm#yv\\$B8m7Cmf1S%RCB"
railway variables --set "EMAIL_TO=luciocabrera1978@gmail.com"
railway variables --set "EMAIL_FROM=desi4fitapp@gmail.com"
railway variables --set "SEND_AUTO_REPLY=true"

echo "✅ All environment variables set!"
echo "🚀 Deploying with new variables..."

# Deploy the changes
railway up