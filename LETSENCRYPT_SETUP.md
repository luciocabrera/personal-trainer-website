# Let's Encrypt SSL Setup Guide

This guide explains how to set up free, trusted SSL certificates using Let's Encrypt for desi4fit.nl.

## Why Let's Encrypt?

- ✅ **Free** - No cost for SSL certificates
- ✅ **Trusted** - Recognized by all browsers and security software
- ✅ **Automatic renewal** - Certificates renew every 90 days automatically
- ✅ **Easy setup** - Docker-based configuration

## Prerequisites

- Domain `desi4fit.nl` pointing to your server IP (142.93.139.242) ✅
- Ports 80 and 443 open on the server ✅
- Docker and Docker Compose installed ✅

## Files Created

1. **`init-letsencrypt.sh`** - Initial certificate setup script
2. **`nginx-letsencrypt.conf`** - Nginx configuration for Let's Encrypt
3. **`docker-compose-letsencrypt.yml`** - Docker Compose with Certbot service

## Installation Steps

### Step 1: Update Email in init-letsencrypt.sh

Edit `init-letsencrypt.sh` and replace:
```bash
email="your-email@example.com"
```
with your actual email address (used for certificate expiry notifications).

### Step 2: Upload Files to Production Server

```bash
# Copy new files to server
scp init-letsencrypt.sh root@142.93.139.242:/root/personal-trainer-website/
scp nginx-letsencrypt.conf root@142.93.139.242:/root/personal-trainer-website/
scp docker-compose-letsencrypt.yml root@142.93.139.242:/root/personal-trainer-website/
```

### Step 3: SSH into Server and Run Setup

```bash
ssh root@142.93.139.242
cd /root/personal-trainer-website

# Make script executable
chmod +x init-letsencrypt.sh

# Stop current containers
docker compose -f docker-compose.prod.yml down

# Backup current configuration
cp docker-compose.prod.yml docker-compose.prod.yml.backup
cp nginx.conf nginx.conf.backup

# Replace with Let's Encrypt configuration
cp docker-compose-letsencrypt.yml docker-compose.prod.yml
cp nginx-letsencrypt.conf nginx.conf

# Run Let's Encrypt setup
./init-letsencrypt.sh
```

### Step 4: Start Services

```bash
# Start all services with Let's Encrypt
docker compose -f docker-compose.prod.yml up -d

# Check logs
docker compose -f docker-compose.prod.yml logs -f
```

### Step 5: Verify SSL Certificate

```bash
# Test from your local machine
curl -I https://desi4fit.nl

# Should show:
# HTTP/2 200
# server: nginx
# No SSL errors!
```

## What Happens

1. **Dummy certificate created** - Temporary cert to start nginx
2. **Let's Encrypt challenge** - Verifies you control the domain
3. **Real certificate issued** - Valid for 90 days
4. **Auto-renewal** - Certbot checks twice daily and renews when needed

## Certificate Renewal

Certbot automatically renews certificates when they're within 30 days of expiry. The renewal process:

- Runs twice daily (configured in docker-compose)
- Nginx reloads every 6 hours to pick up new certificates
- No manual intervention needed

## Troubleshooting

### Rate Limits Hit

If you get rate limit errors, edit `init-letsencrypt.sh`:
```bash
staging=1  # Enable staging mode for testing
```

Run the script again, then once working, set `staging=0` and run once more for the real certificate.

### Certificate Not Working

```bash
# Check certbot logs
docker compose logs certbot

# Check nginx logs
docker compose logs nginx

# Verify certificate files exist
ls -la /root/personal-trainer-website/certbot/conf/live/desi4fit.nl/
```

### Nginx Won't Start

```bash
# Check nginx configuration syntax
docker compose exec nginx nginx -t

# View detailed error logs
docker compose logs nginx --tail 100
```

## Rollback to Self-Signed

If you need to rollback:

```bash
cd /root/personal-trainer-website
docker compose down
cp docker-compose.prod.yml.backup docker-compose.prod.yml
cp nginx.conf.backup nginx.conf
docker compose up -d
```

## Security Benefits

✅ **No more browser warnings** - Trusted by all browsers  
✅ **NordVPN/security software compatible** - Won't be blocked  
✅ **Google SEO boost** - HTTPS is a ranking factor  
✅ **User trust** - Visitors see the padlock icon  
✅ **Google Analytics working** - No security blocks  

## Next Steps After Setup

1. **Test Google Analytics** - Check if tracking works without NordVPN blocking
2. **Monitor renewal** - Check logs after 60 days to verify auto-renewal
3. **Update documentation** - Note the certificate expiry date (90 days from setup)

## Useful Commands

```bash
# Check certificate expiry
docker compose exec certbot certbot certificates

# Force renewal (for testing)
docker compose exec certbot certbot renew --force-renewal

# Reload nginx after cert renewal
docker compose exec nginx nginx -s reload

# View all certbot logs
docker compose logs certbot --tail 100
```

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Docker logs: `docker compose logs`
3. Verify DNS: `nslookup desi4fit.nl`
4. Test port 80: `curl http://desi4fit.nl/.well-known/acme-challenge/test`

## References

- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Certbot Documentation](https://certbot.eff.org/docs/)
- [Docker Certbot Image](https://hub.docker.com/r/certbot/certbot/)
