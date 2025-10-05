# Railway Deployment Guide for Desi4Fit

## 🚂 Railway Frankfurt Deployment Steps

### 1. Login to Railway

```bash
railway login
```

### 2. Initialize Project

```bash
railway init
# Choose: "Create a new project"
# Name: "desi4fit-personal-trainer"
# Select: "Frankfurt" region when prompted
```

### 3. Deploy

```bash
railway up
```

### 4. Get Your Live URL

Railway will provide a URL like: `https://desi4fit-personal-trainer-production.up.railway.app`

## 🌐 Custom Domain Setup (desi4fit.nl)

### After you register desi4fit.nl:

1. **In Railway Dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Add custom domain: `desi4fit.nl`
   - Add www subdomain: `www.desi4fit.nl`

2. **In Your Domain Registrar:**
   - Add CNAME record: `www` → `your-app.up.railway.app`
   - Add A record: `@` → Railway's IP (they'll provide this)
   - Or use CNAME: `@` → `your-app.up.railway.app`

### Railway will automatically:

- ✅ Provision SSL certificate for desi4fit.nl
- ✅ Handle HTTPS redirects
- ✅ Manage renewals

## 📍 Region Selection - IMPORTANT FOR NETHERLANDS USERS

### ⚠️ Current Status: Deployed to US West (not optimal for Netherlands)

### To Move to Frankfurt Region:

1. **Go to Railway Dashboard:** https://railway.com/project/3f902ef5-9ca6-48af-92e2-9e0b3d8bdb3e
2. **Click on Settings**
3. **Select "Advanced"**
4. **Change Region** from `us-west1` to `frankfurt` (eu-west-1)
5. **Redeploy** the service

### Or Recreate Project:

1. Delete current project
2. Create new project with Frankfurt region selected from start

## 🔧 Environment Variables

If needed, set in Railway dashboard:

- NODE_ENV=production (usually automatic)
- Any Google Maps API keys
- Any other production configs
