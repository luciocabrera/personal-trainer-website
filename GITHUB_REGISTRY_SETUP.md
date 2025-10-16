# GitHub Container Registry Setup Guide

## 🎯 Goal
Build Docker images on your local machine (with more RAM) and deploy to production without building on the server.

---

## 📋 Step-by-Step Setup

### **1. Create GitHub Personal Access Token**

1. Go to: https://github.com/settings/tokens/new
2. Settings:
   - **Note:** `Docker Container Registry`
   - **Expiration:** No expiration (or your preference)
   - **Scopes:** Check these boxes:
     - ✅ `write:packages`
     - ✅ `read:packages`
     - ✅ `delete:packages`
     - ✅ `repo` (for private repos)
3. Click "Generate token"
4. **COPY THE TOKEN** - save it somewhere safe!

---

### **2. Login on Your Local Machine**

```bash
# Login to GitHub Container Registry
docker login ghcr.io -u luciocabrera

# When prompted for password, paste your GitHub token
```

**Test it worked:**
```bash
docker pull ghcr.io/luciocabrera/test:latest 2>&1 | grep -q "pull access denied" && echo "✓ Login successful" || echo "Already logged in"
```

---

### **3. Login on Production Server**

```bash
# SSH to server
ssh root@142.93.139.242

# Save token securely on server
echo 'YOUR_GITHUB_TOKEN' > ~/.github-token
chmod 600 ~/.github-token

# Login using the token
cat ~/.github-token | docker login ghcr.io -u luciocabrera --password-stdin

# Verify
docker login ghcr.io -u luciocabrera --password-stdin < ~/.github-token
```

---

### **4. Update docker-compose.prod.yml**

The app service needs to use the pre-built image instead of building locally.

**Option A: Use image (pull from registry)**
```yaml
services:
  app:
    image: ghcr.io/luciocabrera/personal-trainer:latest
    container_name: personal-trainer-app
    # ... rest of config stays the same
```

**Option B: Support both (recommended)**
```yaml
services:
  app:
    image: ghcr.io/luciocabrera/personal-trainer:latest
    build: .  # Fallback to build if needed
    container_name: personal-trainer-app
    # ... rest of config stays the same
```

---

## 🚀 Deployment Workflow

### **Method 1: Using the Automated Script** ⭐ (Easiest)

```bash
# Make script executable
chmod +x deploy-with-registry.sh

# Run deployment
./deploy-with-registry.sh
```

This script will:
1. ✅ Build image locally
2. ✅ Push to GitHub Container Registry
3. ✅ SSH to server
4. ✅ Pull the image
5. ✅ Restart containers
6. ✅ Verify deployment

---

### **Method 2: Manual Steps** (If you want control)

**On Local Machine:**
```bash
cd /home/lcabrera/code/vibe/personal-trainer

# 1. Build the image
docker build -t ghcr.io/luciocabrera/personal-trainer:latest .

# 2. Push to registry
docker push ghcr.io/luciocabrera/personal-trainer:latest
```

**On Production Server:**
```bash
# SSH to server
ssh root@142.93.139.242

cd /root/personal-trainer

# 1. Pull latest code
git pull origin main

# 2. Pull Docker image (no build needed!)
docker pull ghcr.io/luciocabrera/personal-trainer:latest

# 3. Restart containers
docker compose -f docker-compose.prod.yml down app nginx
docker compose -f docker-compose.prod.yml up -d

# 4. Verify
curl https://desi4fit.nl/sitemap.xml
```

---

## ✅ Benefits

| Before (Build on Server) | After (Build Locally) |
|--------------------------|----------------------|
| ❌ Server freezes | ✅ No server strain |
| ❌ 5-10 minutes | ✅ 1-2 minutes deployment |
| ❌ High memory usage | ✅ Low memory usage |
| ❌ Risk of crashes | ✅ Stable deployment |

---

## 🔐 Security Notes

1. **Token Storage:**
   - Local: Stored in `~/.docker/config.json` (encrypted)
   - Server: Stored in `~/.github-token` (chmod 600)

2. **Image Privacy:**
   - Images are **PRIVATE** by default on GitHub Container Registry
   - Only accessible with authentication

3. **Best Practices:**
   - Use tokens with minimal required scopes
   - Set expiration dates on tokens
   - Rotate tokens periodically

---

## 🆘 Troubleshooting

### **"unauthorized: unauthenticated"**
```bash
# Re-login
docker login ghcr.io -u luciocabrera
```

### **"denied: permission_denied"**
```bash
# Check token has write:packages scope
# Create new token with correct permissions
```

### **"Cannot connect to Docker daemon"**
```bash
# Make sure Docker is running
sudo systemctl start docker
```

### **Server still builds instead of pulling**
```bash
# Remove build context on server
cd /root/personal-trainer
docker compose -f docker-compose.prod.yml pull app
docker compose -f docker-compose.prod.yml up -d --no-build
```

---

## 📊 Quick Reference

**Build & Deploy:**
```bash
# One-liner for quick deployments
docker build -t ghcr.io/luciocabrera/personal-trainer:latest . && \
docker push ghcr.io/luciocabrera/personal-trainer:latest && \
ssh root@142.93.139.242 "cd /root/personal-trainer && \
  docker pull ghcr.io/luciocabrera/personal-trainer:latest && \
  docker compose -f docker-compose.prod.yml up -d"
```

**View Images:**
- Your packages: https://github.com/luciocabrera?tab=packages
- Specific package: https://github.com/luciocabrera/personal-trainer/pkgs/container/personal-trainer

---

## 🎉 Ready to Deploy?

1. ✅ Create GitHub token
2. ✅ Login locally: `docker login ghcr.io -u luciocabrera`
3. ✅ Login on server: `cat ~/.github-token | docker login ghcr.io -u luciocabrera --password-stdin`
4. ✅ Run: `./deploy-with-registry.sh`

**That's it! No more server freezing!** 🚀
