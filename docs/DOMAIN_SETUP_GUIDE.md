# 🌐 desi4fit.nl Domain Setup Guide

## 📋 Prerequisites

1. **Register desi4fit.nl domain** at a registrar
2. **Choose your hosting solution** (DigitalOcean recommended for Netherlands)

---

## 🚀 Option 1: DigitalOcean Amsterdam (Recommended)

### Step 1: Create DigitalOcean Droplet

```bash
# 1. Create new Droplet in Amsterdam
# - Region: Amsterdam 3
# - Image: Ubuntu 22.04 LTS
# - Size: Basic $6/month (1GB RAM, 1 vCPU) or $12/month (2GB RAM) for better performance
# - Add SSH key for secure access
```

### Step 2: Domain DNS Configuration

In your domain registrar's DNS settings, add these records:

```dns
# A Records (point to your server IP)
A    @           YOUR_DROPLET_IP
A    www         YOUR_DROPLET_IP

# Optional: Add these for better email/subdomain setup
CNAME api       desi4fit.nl
CNAME mail      desi4fit.nl
```

### Step 3: Server Setup

```bash
# SSH into your droplet
ssh root@YOUR_DROPLET_IP

# Update system
apt update && apt upgrade -y

# Install Docker & Docker Compose
curl -fsSL https://get.docker.com | sh
apt install docker-compose-plugin -y

# Install git if not present
apt install git -y

# Clone your repository
git clone https://github.com/luciocabrera/personal-trainer-website.git
cd personal-trainer-website
```

### Step 4: SSL Certificate Setup

```bash
# Make SSL setup script executable
chmod +x setup-ssl.sh

# Run SSL setup for your domain
./setup-ssl.sh desi4fit.nl info@desi4fit.nl

# Choose option 2 for Let's Encrypt (production)
```

### Step 5: Deploy Application

```bash
# Build and start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

### Step 6: Verify Setup

```bash
# Test HTTP (should redirect to HTTPS)
curl -I http://desi4fit.nl

# Test HTTPS
curl -I https://desi4fit.nl

# Check SSL certificate
openssl s_client -connect desi4fit.nl:443 -servername desi4fit.nl
```

---

## 🚂 Option 2: Railway with Custom Domain

### Step 1: Deploy to Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and initialize
railway login
railway init

# Select Frankfurt region for better EU performance
# Deploy
railway up
```

### Step 2: Custom Domain in Railway

1. Go to Railway Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add custom domain: `desi4fit.nl`
5. Add www subdomain: `www.desi4fit.nl`
6. Railway will provide DNS instructions

### Step 3: DNS Configuration

In your domain registrar, add:

```dns
# Use Railway's provided values
CNAME www    your-app.up.railway.app
CNAME @      your-app.up.railway.app
# OR A record if CNAME @ is not supported
A     @      RAILWAY_PROVIDED_IP
```

---

## 🔒 SSL Certificate Management

### Automatic Renewal (Let's Encrypt)

Add to crontab for automatic renewal:

```bash
# Edit crontab
crontab -e

# Add this line for monthly renewal check
0 0 1 * * cd /path/to/your/app && docker-compose run --rm certbot renew --quiet && docker-compose restart nginx
```

### Manual Renewal

```bash
# Renew certificates
docker-compose run --rm certbot renew

# Restart nginx to use new certificates
docker-compose restart nginx
```

---

## 🔧 Production Optimizations

### 1. Enable HSTS (Security)

In `nginx.conf`, uncomment:

```nginx
add_header Strict-Transport-Security "max-age=63072000" always;
```

### 2. Setup Monitoring

```bash
# Install monitoring tools
apt install htop nethogs iotop -y

# Monitor Docker containers
docker stats

# Monitor logs
docker-compose logs -f --tail=100
```

### 3. Backup Strategy

```bash
# Create backup script
cat > backup.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p backups
tar -czf backups/ssl_$DATE.tar.gz ssl/
tar -czf backups/logs_$DATE.tar.gz logs/
echo "Backup created: $DATE"
EOF

chmod +x backup.sh

# Add to crontab for weekly backups
# 0 2 * * 0 cd /path/to/your/app && ./backup.sh
```

---

## 🌍 DNS Propagation Check

After setting up DNS, check propagation:

```bash
# Check from different locations
dig desi4fit.nl @8.8.8.8
dig desi4fit.nl @1.1.1.1
dig www.desi4fit.nl @8.8.8.8

# Online tools:
# - https://dnschecker.org
# - https://whatsmydns.net
```

---

## 🚨 Troubleshooting

### Common Issues:

1. **Domain not accessible:**
   - Check DNS propagation (can take 24-48 hours)
   - Verify A records point to correct IP
   - Check firewall: `ufw allow 80,443/tcp`

2. **SSL certificate issues:**
   - Ensure domain points to server before running certbot
   - Check nginx configuration: `nginx -t`
   - Restart services: `docker-compose restart`

3. **Application not starting:**
   - Check logs: `docker-compose logs app`
   - Verify build: `docker-compose build --no-cache`
   - Check ports: `netstat -tlnp | grep :3000`

### Useful Commands:

```bash
# View all running containers
docker ps

# Restart specific service
docker-compose restart nginx

# View nginx logs
docker-compose logs nginx

# Test nginx configuration
docker-compose exec nginx nginx -t

# Check certificate expiry
openssl x509 -in ssl/cert.pem -text -noout | grep "Not After"
```

---

## 📈 Performance Monitoring

### Setup Simple Monitoring:

```bash
# Install monitoring script
cat > monitor.sh << 'EOF'
#!/bin/bash
echo "=== System Status $(date) ==="
echo "Memory Usage:"
free -h
echo ""
echo "Disk Usage:"
df -h
echo ""
echo "Docker Containers:"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
echo ""
echo "Application Response:"
curl -s -o /dev/null -w "Response Time: %{time_total}s\nHTTP Code: %{http_code}\n" https://desi4fit.nl
EOF

chmod +x monitor.sh
```

---

## ✅ Final Checklist

- [ ] Domain registered and DNS configured
- [ ] Server deployed (DigitalOcean/Railway)
- [ ] SSL certificate installed and working
- [ ] HTTPS redirect working
- [ ] Application accessible at https://desi4fit.nl
- [ ] Dutch content loading by default
- [ ] Mobile responsive design working
- [ ] Forms working (contact form)
- [ ] Images loading correctly
- [ ] SEO meta tags correct for Dutch market
- [ ] Google Maps integration working (if applicable)
- [ ] SSL certificate auto-renewal configured

---

## 🎯 Next Steps

1. **Setup Google Analytics** for Dutch market
2. **Submit to Google Search Console** with Dutch content
3. **Setup local business listings** (Google My Business)
4. **Configure backup monitoring**
5. **Setup uptime monitoring** (UptimeRobot, etc.)

Your desi4fit.nl website will be optimized for Dutch users with low latency and proper GDPR compliance! 🇳🇱
