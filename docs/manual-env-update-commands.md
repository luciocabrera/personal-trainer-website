# Manual Commands to Update .env on DigitalOcean Droplet

## Option 1: Using the automated script

```bash
# Make sure you have your droplet's IP address
./update-remote-env.sh YOUR_DROPLET_IP_ADDRESS

# Example:
./update-remote-env.sh 64.227.123.45
```

## Option 2: Manual step-by-step commands

### Step 1: Copy the .env file to your droplet

```bash
# Replace YOUR_DROPLET_IP with your actual IP
scp .env.production root@YOUR_DROPLET_IP:~/personal-trainer-website/.env
```

### Step 2: SSH into your droplet and restart services

```bash
# SSH into your droplet
ssh root@YOUR_DROPLET_IP

# Navigate to your project directory
cd ~/personal-trainer-website

# Stop current services
docker-compose -f docker-compose.prod.yml down

# Start services with new environment variables
docker-compose -f docker-compose.prod.yml up -d --build

# Check that services are running
docker-compose -f docker-compose.prod.yml ps

# Check logs if needed
docker-compose -f docker-compose.prod.yml logs -f app

# Exit SSH session
exit
```

### Step 3: Test your website

```bash
# Test from your local machine
curl -I http://YOUR_DOMAIN_OR_IP

# Or visit in browser:
# http://desi4fit.nl (if domain is configured)
# or http://YOUR_DROPLET_IP
```

## Option 3: Edit .env directly on the server

If you prefer to edit the file directly on the server:

```bash
# SSH into your droplet
ssh root@YOUR_DROPLET_IP

# Navigate to project directory
cd ~/personal-trainer-website

# Edit the .env file
nano .env

# Copy the contents from .env.production (shown below)
# Save and exit (Ctrl+X, Y, Enter)

# Restart services
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d --build
```

## Current .env.production contents to use:

```bash
# Production Environment Variables for DigitalOcean
# Copy this file to .env and fill in your production values

# Email Provider Configuration
EMAIL_PROVIDER=resend

# Gmail Configuration
GMAIL_USER=desi4fitapp@gmail.com
GMAIL_APP_PASSWORD="njtn glhs dcda zjeu"
GMAIL_EMAIL_PASSWORD="4fm#yv\$B8m7Cmf1S%RCB"

# Email Recipients and Sender
EMAIL_TO=desi4fit@gmail.com
EMAIL_FROM=noreply@desi4fit.nl

# Features
SEND_AUTO_REPLY=true

# Resend API (for production email when SMTP is blocked)
RESEND_API_KEY=re_YoCEyZhp_3Qb7EVFioFCbxc4Ff2UWPzwA

# Database Configuration (PRODUCTION - Use strong passwords!)
POSTGRES_DB=personal_trainer
POSTGRES_USER=admin
POSTGRES_PASSWORD="7i7j7xb7OEJopEiElK5zUAAyXrM="
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
DATABASE_URL=postgresql://admin:7i7j7xb7OEJopEiElK5zUAAyXrM%3D@postgres:5432/personal_trainer

# pgAdmin Configuration (Optional for production)
PGADMIN_EMAIL=admin@desi4fit.nl
PGADMIN_PASSWORD="eUg2/iRIW4a/TZIN+L0Z/Q=="

# Node Environment
NODE_ENV=production

# Security Note: Use strong, unique passwords in production!
# Generate strong passwords: https://passwordsgenerator.net/
```

## Troubleshooting

If you encounter issues:

1. **Check service status:**

   ```bash
   ssh root@YOUR_DROPLET_IP 'cd ~/personal-trainer-website && docker-compose -f docker-compose.prod.yml ps'
   ```

2. **View logs:**

   ```bash
   ssh root@YOUR_DROPLET_IP 'cd ~/personal-trainer-website && docker-compose -f docker-compose.prod.yml logs -f'
   ```

3. **Restart specific service:**
   ```bash
   ssh root@YOUR_DROPLET_IP 'cd ~/personal-trainer-website && docker-compose -f docker-compose.prod.yml restart app'
   ```
