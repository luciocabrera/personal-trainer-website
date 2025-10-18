# 🚂 Railway Deployment Guide for desi4fit.nl

## Why Railway for desi4fit.nl?

✅ **Frankfurt Region**: Perfect for Netherlands users (~15ms latency)  
✅ **Automatic SSL**: Free SSL certificates for your custom domain  
✅ **Zero Config**: No Docker/server management needed  
✅ **Auto Scaling**: Handles traffic spikes automatically  
✅ **Easy Setup**: Deploy in minutes, not hours  
✅ **Built-in CDN**: Fast static asset delivery

---

## 🚀 Quick Railway Deployment

### Step 1: Install Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Or using curl
curl -fsSL https://railway.app/install.sh | sh
```

### Step 2: Login and Initialize Project

```bash
# Login to Railway
railway login

# Initialize project in your app directory
cd /path/to/personal-trainer
railway init

# Choose "Create a new project"
# Project name: "desi4fit-personal-trainer"
# IMPORTANT: Select "Frankfurt" region for EU users
```

### Step 3: Deploy Your Application

```bash
# Deploy to Railway
railway up

# Or if you prefer linking to GitHub:
# 1. Push your code to GitHub
# 2. Connect GitHub repo in Railway dashboard
# 3. Enable auto-deploys
```

### Step 4: Get Your Railway URL

After deployment, Railway provides a URL like:

```
https://desi4fit-personal-trainer-production.up.railway.app
```

Test this URL to ensure your app is working!

---

## 🌐 Custom Domain Setup (desi4fit.nl)

### Step 1: Add Domain in Railway Dashboard

1. Go to **Railway Dashboard** → Your Project
2. Click **Settings** → **Domains**
3. Click **+ Add Domain**
4. Add: `desi4fit.nl`
5. Add: `www.desi4fit.nl` (optional but recommended)

Railway will show you DNS instructions like:

```
CNAME: your_subdomain → your-app.up.railway.app
```

### Step 2: Configure DNS at Your Domain Registrar

In your domain registrar (TransIP, Namecheap, etc.), add these records:

#### Option A: CNAME Records (Recommended)

```dns
CNAME  www    desi4fit-personal-trainer-production.up.railway.app
CNAME  @      desi4fit-personal-trainer-production.up.railway.app
```

#### Option B: A Records (If CNAME @ not supported)

Railway will provide an IP address, then use:

```dns
A      @      RAILWAY_PROVIDED_IP
CNAME  www    desi4fit-personal-trainer-production.up.railway.app
```

### Step 3: Wait for SSL Certificate

Railway automatically provisions SSL certificates:

- ⏱️ Usually takes 5-15 minutes
- 🔒 Automatic renewal
- ✅ HTTPS redirect enabled automatically

---

## 🔧 Railway-Specific Configuration

### Environment Variables

Set these in Railway Dashboard → Settings → Variables:

```env
NODE_ENV=production
PORT=3000
RAILWAY_STATIC_URL=https://desi4fit.nl
```

### Build Configuration

Railway auto-detects your setup, but you can customize in `railway.toml`:

```toml
[build]
builder = "nixpacks"

[deploy]
startCommand = "npm start"
healthcheckPath = "/"
healthcheckTimeout = 300
restartPolicyType = "always"
```

---

## 📊 Monitoring & Logs

### View Logs

```bash
# View live logs
railway logs

# View specific service logs
railway logs -s your-service-name
```

### Monitoring in Dashboard

- **Metrics**: CPU, Memory, Network usage
- **Logs**: Real-time application logs
- **Deployments**: Deployment history and status
- **Usage**: Bandwidth and compute usage

### Health Checks

Railway automatically monitors your app:

- HTTP health checks on `/`
- Automatic restart on failures
- Email alerts for downtime

---

## 🌍 Domain Verification & Testing

### Check DNS Propagation

```bash
# Check if DNS has propagated
dig desi4fit.nl
dig www.desi4fit.nl

# Check from multiple locations
nslookup desi4fit.nl 8.8.8.8
nslookup desi4fit.nl 1.1.1.1
```

### Test Your Site

```bash
# Test HTTP (should redirect to HTTPS)
curl -I http://desi4fit.nl

# Test HTTPS
curl -I https://desi4fit.nl

# Test response time
curl -w "@curl-format.txt" -o /dev/null -s https://desi4fit.nl
```

Create `curl-format.txt`:

```
     time_namelookup:  %{time_namelookup}\n
        time_connect:  %{time_connect}\n
     time_appconnect:  %{time_appconnect}\n
    time_pretransfer:  %{time_pretransfer}\n
       time_redirect:  %{time_redirect}\n
  time_starttransfer:  %{time_starttransfer}\n
                     ----------\n
          time_total:  %{time_total}\n
```

---

## 🚀 Advanced Railway Features

### Custom Build Process

Create `nixpacks.toml` for custom build:

```toml
[phases.setup]
nixPkgs = ['nodejs', 'npm']

[phases.install]
cmds = ['npm ci']

[phases.build]
cmds = ['npm run build']

[start]
cmd = 'npm start'
```

### Cron Jobs & Background Tasks

For scheduled tasks, use Railway's Cron service:

```bash
# Add a cron service
railway add

# Choose "Cron Job"
# Set schedule: "0 2 * * *" (daily at 2 AM)
# Command: "npm run sitemap-update"
```

### Database Integration

If you need a database later:

```bash
# Add PostgreSQL
railway add postgresql

# Add Redis
railway add redis

# Environment variables are automatically provided
```

---

## 💰 Railway Pricing for desi4fit.nl

### Hobby Plan (Free)

- ✅ Perfect for starting out
- ✅ Custom domains included
- ✅ SSL certificates included
- ✅ 500 hours/month execution time
- ✅ Up to $5 resource usage

### Pro Plan ($20/month)

- ✅ Unlimited execution time
- ✅ Higher resource limits
- ✅ Priority support
- ✅ Advanced metrics

For a fitness website like desi4fit.nl, the **Hobby plan** should be sufficient initially.

---

## 🔒 Security Best Practices

### 1. Environment Variables

Store sensitive data in Railway environment variables:

```bash
railway variables set EMAIL_PASSWORD="your_secure_password"
railway variables set API_KEY="your_api_key"
```

### 2. Enable Security Headers

Your nginx configuration already includes good security headers.

### 3. Regular Updates

```bash
# Update dependencies
npm audit fix

# Deploy updates
railway up
```

---

## 🌐 CDN & Performance

### Automatic CDN

Railway includes CDN for static assets:

- ✅ Images, CSS, JS automatically cached
- ✅ Global edge locations
- ✅ Gzip compression enabled

### Performance Optimization

```bash
# Check your site performance
railway metrics

# Optimize images (do this locally, then deploy)
npm install -g imagemin-cli
imagemin public/images/*.jpg --out-dir=public/images --plugin=imagemin-mozjpeg
```

---

## 🚨 Troubleshooting Railway Deployment

### Common Issues:

#### 1. Build Failures

```bash
# Check build logs
railway logs --build

# Common fixes:
# - Ensure package.json has correct start script
# - Check Node.js version compatibility
# - Verify all dependencies are listed
```

#### 2. Domain Not Working

```bash
# Check domain status in Railway dashboard
railway status

# Verify DNS records
dig desi4fit.nl
nslookup desi4fit.nl
```

#### 3. SSL Certificate Issues

- Wait 15-30 minutes after DNS changes
- Ensure DNS is properly propagated
- Check Railway dashboard for SSL status

#### 4. App Not Starting

```bash
# Check runtime logs
railway logs

# Common issues:
# - Wrong PORT environment variable
# - Missing start script in package.json
# - Node.js version mismatch
```

---

## 📋 Railway Deployment Checklist

### Pre-Deployment

- [ ] Code tested locally (`npm run build` works)
- [ ] Domain registered (desi4fit.nl)
- [ ] Railway account created
- [ ] Railway CLI installed

### Deployment

- [ ] Railway project created in Frankfurt region
- [ ] Code deployed successfully
- [ ] Railway URL working
- [ ] Custom domain added in Railway dashboard
- [ ] DNS records configured at registrar
- [ ] SSL certificate provisioned (15-30 min wait)

### Post-Deployment

- [ ] HTTPS working at https://desi4fit.nl
- [ ] Dutch content loading by default
- [ ] Contact form working
- [ ] Images loading properly
- [ ] Mobile responsive
- [ ] Performance test passed
- [ ] Google Analytics setup
- [ ] Search Console verification

---

## 🎯 Railway vs DigitalOcean Comparison

| Feature                | Railway           | DigitalOcean     |
| ---------------------- | ----------------- | ---------------- |
| **Setup Time**         | 5-10 minutes      | 30-60 minutes    |
| **SSL Setup**          | Automatic         | Manual/Certbot   |
| **Scaling**            | Automatic         | Manual           |
| **Server Management**  | None              | Full control     |
| **Cost (low traffic)** | Free-$20/month    | $6-12/month      |
| **Performance (NL)**   | Frankfurt (~15ms) | Amsterdam (~5ms) |
| **Best For**           | Quick deployment  | Full control     |

### Recommendation:

- **Choose Railway if**: You want quick, hassle-free deployment
- **Choose DigitalOcean if**: You need full server control or lowest latency

---

## 🚂 Quick Railway Commands Reference

```bash
# Project management
railway login
railway init
railway link [project-id]

# Deployment
railway up
railway deploy

# Monitoring
railway logs
railway logs -f  # follow logs
railway status

# Environment
railway variables
railway variables set KEY=value
railway shell  # access your deployed app shell

# Domain management
railway domain  # list domains
railway open    # open your app in browser
```

---

## 🎉 Your desi4fit.nl is Railway-Ready!

With Railway, your Dutch personal training website will be:

✅ **Live in Frankfurt** - Perfect for Netherlands users  
✅ **Automatically Scaled** - Handles traffic spikes  
✅ **Secure by Default** - HTTPS and security headers  
✅ **Zero Maintenance** - No server management needed  
✅ **Fast Deployment** - Updates deploy in minutes

**Next Steps:**

1. Register desi4fit.nl domain
2. Run `railway login && railway init`
3. Deploy with `railway up`
4. Add custom domain in Railway dashboard
5. Configure DNS records
6. You're live! 🚀

Your professional fitness website will be serving Dutch clients with excellent performance and zero hassle! 🏋️‍♀️🇳🇱
