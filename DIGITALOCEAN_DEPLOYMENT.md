# 🌊 DigitalOcean Droplet Deployment Guide

## Overview

Deploy the Personal Trainer app with PostgreSQL database to a DigitalOcean Droplet using Docker Compose.

## 💰 Cost Estimate

- **Droplet**: $4-6/month (512MB-1GB RAM)
- **Domain**: Already configured (desi4fit.nl)
- **SSL**: Free (Let's Encrypt)
- **Total**: $4-6/month

## 🛠️ Prerequisites

### 1. DigitalOcean Account

- Sign up at [digitalocean.com](https://digitalocean.com)
- Add payment method

### 2. Domain Configuration

- Point desi4fit.nl to DigitalOcean nameservers (if not already done)
- Or update A records to droplet IP

## 🚀 Deployment Steps

### Step 1: Create Droplet

1. **Choose Droplet**:
   - OS: Ubuntu 22.04 LTS
   - Plan: Basic ($4-6/month)
   - CPU: 512MB-1GB RAM
   - Region: Amsterdam/Frankfurt (closest to Netherlands)

2. **Add SSH Key** (recommended for security)
3. **Enable Monitoring**
4. **Create Droplet**

### Step 2: Initial Server Setup

```bash
# SSH into your droplet
ssh root@your-droplet-ip

# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install docker-compose-plugin -y

# Create non-root user (recommended)
adduser deploy
usermod -aG docker deploy
usermod -aG sudo deploy

# Switch to deploy user
su - deploy
```

### Step 3: Deploy Application

```bash
# Clone repository
git clone https://github.com/luciocabrera/personal-trainer-website.git
cd personal-trainer-website

# Create production environment file
cp .env.example .env

# Edit .env with your production values
nano .env
```

**Required .env values**:

```env
# Database Configuration
POSTGRES_DB=personal_trainer
POSTGRES_USER=admin
POSTGRES_PASSWORD=your-secure-production-password
DATABASE_URL=postgresql://admin:your-password@postgres:5432/personal_trainer

# Email Configuration
GMAIL_USER=desi4fitapp@gmail.com
GMAIL_APP_PASSWORD="your-app-password"
EMAIL_TO=luciocabrera1978@gmail.com
RESEND_API_KEY=your-resend-key

# Production
NODE_ENV=production
```

```bash
# Start services
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

### Step 4: Configure Domain & SSL

```bash
# Install Certbot for Let's Encrypt SSL
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d desi4fit.nl -d www.desi4fit.nl

# Test SSL renewal
sudo certbot renew --dry-run
```

### Step 5: Configure Firewall

```bash
# Enable UFW firewall
sudo ufw enable

# Allow SSH, HTTP, HTTPS
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443

# Optional: Allow pgAdmin (secure it first!)
# sudo ufw allow 5050

# Check firewall status
sudo ufw status
```

## 🔧 Production Optimizations

### 1. Environment Security

```bash
# Secure .env file
chmod 600 .env
chown deploy:deploy .env
```

### 2. Database Backup

```bash
# Create backup script
cat > backup-db.sh << 'EOF'
#!/bin/bash
docker-compose exec postgres pg_dump -U admin personal_trainer > backup_$(date +%Y%m%d_%H%M%S).sql
EOF

chmod +x backup-db.sh

# Add to crontab (daily backup at 2 AM)
crontab -e
# Add: 0 2 * * * /home/deploy/personal-trainer-website/backup-db.sh
```

### 3. Log Rotation

```bash
# Configure Docker log rotation
sudo tee /etc/docker/daemon.json > /dev/null <<EOF
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
EOF

sudo systemctl restart docker
```

## 📊 Monitoring & Maintenance

### Health Checks

```bash
# Check all services
docker-compose ps

# Check app health
curl -f http://localhost/health || echo "App unhealthy"

# Check database
docker-compose exec postgres pg_isready -U admin

# View recent logs
docker-compose logs --tail=50 -f app
```

### Updates

```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose up -d --build

# Clean old images
docker image prune -f
```

## 🌐 DNS Configuration

### Option 1: DigitalOcean DNS (Recommended)

1. Go to DigitalOcean Dashboard → Networking → Domains
2. Add domain: `desi4fit.nl`
3. Create A records:
   - `@` → Droplet IP
   - `www` → Droplet IP

### Option 2: Current DNS Provider

Update A records to point to your droplet IP:

```
desi4fit.nl     A    your-droplet-ip
www.desi4fit.nl A    your-droplet-ip
```

## 🔐 Security Checklist

- [ ] SSH key authentication (disable password auth)
- [ ] UFW firewall enabled
- [ ] SSL certificate installed
- [ ] Strong database password
- [ ] .env file permissions secured
- [ ] Regular backups configured
- [ ] Docker log rotation enabled

## 📞 Troubleshooting

### Common Issues

1. **SSL Certificate Issues**

```bash
sudo certbot renew --force-renewal
```

2. **Database Connection Issues**

```bash
docker-compose logs postgres
docker-compose restart postgres
```

3. **App Not Starting**

```bash
docker-compose logs app
docker-compose build --no-cache app
```

4. **Out of Disk Space**

```bash
docker system prune -af
sudo apt autoremove -y
```

## 🎉 Success Verification

After deployment, verify:

- [ ] https://desi4fit.nl loads correctly
- [ ] Contact form works and saves to database
- [ ] SSL certificate is valid (green lock in browser)
- [ ] pgAdmin accessible (if configured)

---

**Total Deployment Time**: ~30-45 minutes
**Monthly Cost**: $4-6 USD
**Performance**: Excellent for small business website
