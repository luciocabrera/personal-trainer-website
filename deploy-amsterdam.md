# Deploy to DigitalOcean Amsterdam

## 1. Create Amsterdam Droplet
- Go to digitalocean.com
- Create new Droplet
- **Choose Amsterdam 3 datacenter**
- Ubuntu 22.04 LTS
- Basic plan: $6/month (1GB RAM, 1 vCPU)

## 2. Deploy Your App
```bash
# SSH into your droplet
ssh root@your-droplet-ip

# Install Docker & Docker Compose
curl -fsSL https://get.docker.com | sh
sudo apt install docker-compose-plugin

# Clone your repo
git clone https://github.com/luciocabrera/personal-trainer-website
cd personal-trainer-website

# Deploy with your existing docker-compose
docker-compose up -d
```

## 3. Setup Domain (Optional)
- Point your domain to droplet IP
- Update nginx.conf with your domain
- Run certbot for SSL:
```bash
docker-compose run --rm certbot certonly --webroot -w /var/www/html -d yourdomain.nl
```

## Benefits for Netherlands Users:
- ✅ **~5ms latency** from Netherlands
- ✅ **EU GDPR compliance**
- ✅ **Perfect for local SEO**
- ✅ **Your existing setup works perfectly**
- ✅ **Full control over configuration**