# 🚀 Deployment Guide

This guide explains how to deploy the Personal Trainer app to your server.

## 📋 Prerequisites

1. **Server Requirements:**
   - Ubuntu/Debian Linux server
   - Docker installed
   - Root or sudo access
   - Port 3000 available (or configure differently)

2. **GitHub Access:**
   - GitHub Personal Access Token with `read:packages` permission
   - Access to `ghcr.io/luciocabrera/personal-trainer-website` repository

3. **Server Setup:**
   - Create deployment directory (default: `/opt/personal-trainer`)
   - Optional: Place `.env` file in deployment directory
   - Optional: Copy `docker-compose.prod.yml` from `docker/` folder

## 🎯 Quick Start

### 1. On Your Local Machine (Build & Push):

```bash
# Build and push new image
cd /home/lcabrera/code/vibe/personal-trainer
sh scripts/deploy-with-version.sh
```

### 2. On Your Server (Pull & Deploy):

```bash
# Transfer the deployment script to your server
scp scripts/deploy-server.sh user@your-server:/opt/personal-trainer/

# SSH into your server
ssh user@your-server

# Run the deployment script
export GITHUB_TOKEN="your_github_personal_access_token"
sudo -E bash /opt/personal-trainer/deploy-server.sh
```

## 📁 Directory Structure on Server

The default deployment directory is `/opt/personal-trainer/`. You can customize this.

```
/opt/personal-trainer/
├── .env                          # Environment variables (optional but recommended)
├── docker-compose.prod.yml       # Docker compose config (optional)
├── deploy-server.sh              # Deployment script
└── logs/                         # Application logs (auto-created)
```

## 🔧 Configuration Files

### `.env` File Location

The deployment script looks for the `.env` file at:

- **Default:** `/opt/personal-trainer/.env`
- **Custom:** `${DEPLOY_DIR}/.env`

**Example `.env` file:**

```bash
# Database Configuration
POSTGRES_DB=personal_trainer
POSTGRES_USER=admin
POSTGRES_PASSWORD=your_secure_password

# Email Configuration
EMAIL_PROVIDER=gmail
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your_app_password
EMAIL_TO=admin@example.com
EMAIL_FROM=noreply@example.com
SEND_AUTO_REPLY=true

# Or use Resend
EMAIL_PROVIDER=resend
RESEND_API_KEY=your_resend_api_key
```

## 🛠 Customization Options

### Change Deployment Directory

**Option 1: Command line argument**

```bash
sudo bash deploy-server.sh /home/user/myapp
```

**Option 2: Environment variable**

```bash
DEPLOY_DIR=/var/www/personal-trainer sudo bash deploy-server.sh
```

**Option 3: Edit the script**
Edit `deploy-server.sh` and change:

```bash
DEPLOY_DIR="${DEPLOY_DIR:-/opt/personal-trainer}"
```

### Change Network Name

The script uses the network name `app-network` (matching docker-compose.prod.yml).
To change it, edit this line in the script:

```bash
NETWORK_NAME="app-network"
```

### Change Container Name

To change the container name, edit:

```bash
CONTAINER_NAME="personal-trainer-app"
```

## 📝 Step-by-Step Deployment Process

### What the Script Does:

1. ✅ **Validates** Docker installation
2. 🔐 **Logs in** to GitHub Container Registry
3. 📦 **Pulls** latest image: `ghcr.io/luciocabrera/personal-trainer-website:latest`
4. 🛑 **Stops** old container (if running)
5. 🗑️ **Removes** old container
6. 🌐 **Creates** Docker network (if needed)
7. 🚀 **Starts** new container with:
   - Port 3000 exposed
   - Auto-restart enabled
   - Environment variables from `.env` file
8. 🏥 **Health check** to verify app is running
9. 🧹 **Cleans up** old Docker images

## 🔑 GitHub Token Setup

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scope: `read:packages`
4. Copy the token
5. Use it when running the deployment script

**To avoid entering token each time:**

```bash
# Add to your server's ~/.bashrc or ~/.bash_profile
export GITHUB_TOKEN="ghp_your_token_here"
```

## 🐳 Using Docker Compose (Alternative)

If you prefer using docker-compose instead of the script:

```bash
# On your server
cd /opt/personal-trainer

# Copy docker-compose.prod.yml from repo
# Copy .env file with your configuration

# Login to GitHub Container Registry
echo $GITHUB_TOKEN | docker login ghcr.io -u luciocabrera --password-stdin

# Pull and start services
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f app
```

## 📊 Monitoring & Management

### View Logs

```bash
# Real-time logs
docker logs -f personal-trainer-app

# Last 100 lines
docker logs --tail 100 personal-trainer-app
```

### Restart Container

```bash
docker restart personal-trainer-app
```

### Stop Container

```bash
docker stop personal-trainer-app
```

### Check Container Status

```bash
docker ps -a | grep personal-trainer
```

### Inspect Container

```bash
docker inspect personal-trainer-app
```

### Check Resource Usage

```bash
docker stats personal-trainer-app
```

## 🔄 Update Process

When you need to deploy a new version:

1. **Build locally and push:**

   ```bash
   sh scripts/deploy-with-version.sh
   ```

2. **Deploy on server:**
   ```bash
   sudo bash /opt/personal-trainer/deploy-server.sh
   ```

That's it! The script handles everything automatically.

## ⚠️ Troubleshooting

### Container won't start

```bash
# Check logs for errors
docker logs personal-trainer-app

# Check if port is already in use
sudo netstat -tulpn | grep 3000

# Verify .env file exists and has correct values
cat /opt/personal-trainer/.env
```

### Can't pull image

```bash
# Verify you're logged in
docker login ghcr.io

# Check token permissions
# Token needs read:packages permission

# Try pulling manually
docker pull ghcr.io/luciocabrera/personal-trainer-website:latest
```

### Network issues

```bash
# List networks
docker network ls

# Inspect network
docker network inspect app-network

# Recreate network
docker network rm app-network
docker network create app-network
```

## 🌐 Nginx Reverse Proxy Setup

If using nginx (from docker-compose.prod.yml), the app is available through:

- **HTTP:** http://your-domain.com (port 80)
- **HTTPS:** https://your-domain.com (port 443)

The nginx config should be at: `/opt/personal-trainer/nginx/nginx.conf`

## 📞 Support

If you encounter issues:

1. Check the logs: `docker logs personal-trainer-app`
2. Verify .env file has correct values
3. Ensure GitHub token has proper permissions
4. Check if port 3000 is available
5. Verify Docker is running: `docker ps`

## 🎉 Success!

Once deployed, your app will be accessible at:

- Direct: `http://your-server:3000`
- Via Nginx: `http://your-domain.com`

The container will automatically restart if the server reboots.
