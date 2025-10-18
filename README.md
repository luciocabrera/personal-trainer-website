# Level Up Training - Personal Trainer Website

A modern, responsive website for outdoor personal training services built with React Router 7, featuring Server-Side Rendering (SSR), multi-language support, and optimized performance.

## 🌟 Features

- **Server-Side Rendering (SSR)** with React Router 7
- **Multi-language support** (English, Dutch, Spanish)
- **Optimized performance** with LCP image preloading
- **Responsive design** for all devices
- **Professional styling** with modern CSS
- **Static asset optimization** with compression and caching
- **Docker support** for easy deployment
- **Accessibility features** with proper ARIA labels, skip links, and descriptive iframe titles

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your computer:

### Required Software

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Choose the "LTS" (Long Term Support) version
   - To check if installed: Open terminal/command prompt and type `node --version`

2. **npm** (comes with Node.js)
   - To check if installed: Type `npm --version` in terminal

3. **Docker** (optional, only needed for Docker deployment)
   - Download from: https://www.docker.com/products/docker-desktop/
   - Choose the version for your operating system

### How to Check if Prerequisites are Installed

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and run:

```bash
node --version
npm --version
```

You should see version numbers. If you see "command not found" or similar errors, you need to install Node.js first.

## 🚀 Getting Started

### Step 1: Download the Project

1. **Option A: Download ZIP**
   - Click the green "Code" button on GitHub
   - Select "Download ZIP"
   - Extract the ZIP file to your desired location

2. **Option B: Clone with Git** (if you have Git installed)
   ```bash
   git clone [repository-url]
   cd personal-trainer
   ```

### Step 2: Navigate to Project Directory

Open your terminal and navigate to the project folder:

```bash
cd path/to/personal-trainer
```

Replace `path/to/personal-trainer` with the actual path where you extracted/cloned the project.

### Step 3: Install Dependencies

Install all required packages by running:

```bash
npm install
```

This will download all necessary dependencies. It may take a few minutes.

## 🖥️ Running the Application Locally

### Method 1: Development Mode (Recommended for Development)

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open your browser:**
   - The terminal will show a message like "Server running on http://localhost:3000"
   - Open your web browser and go to: http://localhost:3000

3. **You should see the website!**
   - The page will automatically reload when you make changes to the code

### Method 2: Production Mode (Recommended for Testing)

1. **Build the application:**

   ```bash
   npm run build
   ```

   This creates optimized files for production. Wait for it to complete.

2. **Start the production server:**

   ```bash
   npm start
   ```

3. **Open your browser:**
   - Go to: http://localhost:3000
   - The website will be running in production mode with all optimizations

### Accessing from Different Devices

If you want to access the website from other devices on your network (like your phone or tablet):

1. **Find your computer's IP address:**
   - **Windows:** Open Command Prompt and run `ipconfig`
   - **Mac/Linux:** Open Terminal and run `ifconfig` or `ip addr show`
   - Look for an IP address like `192.168.1.xxx` or `172.x.x.x`

2. **Access from other devices:**
   - Connect to the same WiFi network
   - Open browser and go to: `http://YOUR-IP-ADDRESS:3000`
   - Replace `YOUR-IP-ADDRESS` with the IP you found

## 🐳 Running with Docker

Docker allows you to run the application in a container, ensuring it works the same way on any computer. We provide two Docker deployment options:

### Option 1: Simple Docker Container (HTTP Only)

For development and simple deployments without SSL.

#### Step 1: Build the Docker Image

Open terminal in the project directory and run:

```bash
docker build -t personal-trainer-app .
```

This command:

- `docker build` - Creates a Docker image
- `-t personal-trainer-app` - Gives it the name "personal-trainer-app"
- `.` - Uses the current directory

**Wait for completion** - This may take 5-10 minutes the first time.

#### Step 2: Run the Docker Container

**Option A: Run in Foreground (see logs directly)**

```bash
docker run -p 3000:3000 personal-trainer-app
```

- Press `Ctrl+C` to stop the container

**Option B: Run in Background (detached mode)**

```bash
docker run -d -p 3000:3000 --name personal-trainer-container personal-trainer-app
```

This runs the container in the background with the name "personal-trainer-container".

#### Step 3: Access the Application

Open your browser and go to: http://localhost:3000

### Option 2: Docker Compose with SSL (Production Ready)

For production deployments with SSL, security headers, caching, and advanced features.

#### Features Included:

- 🔒 **SSL/TLS termination** with Let's Encrypt or custom certificates
- 🚀 **HTTP/2 support** for better performance
- 🛡️ **Security headers** (CSP, HSTS, X-Frame-Options, etc.)
- 📦 **Gzip compression** for all text assets
- ⚡ **Static asset caching** (1 year cache for images, fonts, etc.)
- 🚫 **Rate limiting** to prevent abuse
- 🔄 **Automatic HTTP → HTTPS redirect**

#### Quick Start with SSL:

**Step 1: Set up SSL certificates**

For **development/testing** with self-signed certificates:

```bash
./setup-ssl.sh localhost
```

For **production** with Let's Encrypt (free SSL):

```bash
./setup-ssl.sh yourdomain.com your-email@domain.com
```

**Step 2: Start all services**

```bash
docker-compose up -d
```

**Step 3: Access your site**

- **HTTP**: http://yourdomain.com (automatically redirects to HTTPS)
- **HTTPS**: https://yourdomain.com

#### SSL Setup Options:

1. **Self-Signed Certificates** (Development)
   - Quick setup for testing
   - Browser will show security warnings
   - Not suitable for production

2. **Let's Encrypt** (Production - Recommended)
   - Free, trusted SSL certificates
   - Automatic renewal available
   - Requires domain validation

3. **Custom Certificates** (Enterprise)
   - Use your own SSL certificates
   - Full control over certificate chain

#### Docker Compose Management:

**View logs:**

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f nginx
docker-compose logs -f app
```

**Restart services:**

```bash
docker-compose restart nginx
docker-compose restart app
```

**Stop all services:**

```bash
docker-compose down
```

**Update SSL certificates (Let's Encrypt):**

```bash
docker-compose run --rm certbot renew
docker-compose restart nginx
```

#### 🧪 Testing Your SSL Setup Locally

Follow these exact steps to test the SSL Docker setup on your computer:

**Step 1: Build the application**

Open your terminal and navigate to the project directory, then build:

```bash
npm run build
```

Wait for the build to complete (should take 30-60 seconds).

**Step 2: Set up SSL certificates for localhost**

Run the SSL setup script and choose option 1 when prompted:

```bash
./setup-ssl.sh localhost
```

When you see "Choose your SSL setup method (1-3):", type `1` and press Enter.

You should see:

```
🔨 Creating self-signed certificate...
✅ Self-signed certificate created!
```

**Step 3: Start all Docker services**

```bash
docker-compose up -d
```

You should see:

```
✔ Container personal-trainer-app    Running
✔ Container personal-trainer-nginx  Running
```

**Step 4: Verify containers are running**

```bash
docker-compose ps
```

Both containers should show "Up" status.

**Step 5: Test the website URLs**

Open your web browser and go to these URLs:

1. **HTTP URL (will redirect to HTTPS):**
   - http://localhost

2. **HTTPS URL (main URL):**
   - https://localhost

**Step 6: Handle the SSL security warning**

Since we're using self-signed certificates for testing, your browser will show a security warning:

- **Chrome/Edge:** Click "Advanced" → "Proceed to localhost (unsafe)"
- **Firefox:** Click "Advanced" → "Accept the Risk and Continue"
- **Safari:** Click "Show Details" → "visit this website"

This is **normal and safe for local testing**.

**Step 7: Verify everything is working**

You should see:

- ✅ Your personal trainer website loads
- ✅ The URL shows `https://localhost` (with lock icon, possibly crossed out)
- ✅ All styling and functionality works
- ✅ HTTP automatically redirects to HTTPS

**Step 8: Test the redirect (optional)**

Open terminal and test the HTTP to HTTPS redirect:

```bash
curl -I http://localhost
```

You should see:

```
HTTP/1.1 301 Moved Permanently
Location: https://localhost/
```

**Step 9: View logs (optional)**

To see what's happening behind the scenes:

```bash
# View all logs from all services
docker-compose logs -f

# View only nginx logs (press Ctrl+C to stop)
docker-compose logs -f nginx

# View only app logs
docker-compose logs -f app
```

**Step 10: Stop the services when done**

```bash
docker-compose down
```

#### 🎯 What You'll See When Testing

When you visit **https://localhost** in your browser, you should see:

**🔒 Security Warning (Normal for Local Testing):**

- Chrome: "Your connection is not private" → Click "Advanced" → "Proceed to localhost (unsafe)"
- Firefox: "Warning: Potential Security Risk" → Click "Advanced" → "Accept the Risk and Continue"
- Safari: "This Connection Is Not Private" → Click "Show Details" → "visit this website"

**🌐 The Website Content:**

- **Header:** Navigation with logo, menu (Trainings, Schedule, Pricing, Contact), language switcher (EN/NL/ES)
- **Hero Section:** Large title, description, and hero image
- **Trainings Section:** Cards showing different training types with images
- **Schedule Section:** Training schedules and locations with interactive Google Maps
- **Pricing Section:** Different pricing plans and packages
- **Contact Section:** Contact form and social media links
- **Footer:** Contact information and links

**🔧 Technical Features Working:**

- ✅ **HTTPS with HTTP/2** (check in browser dev tools → Network tab)
- ✅ **Language switching** (try EN/NL/ES buttons in header)
- ✅ **Responsive design** (try resizing browser window)
- ✅ **Fast loading** (optimized images and caching)
- ✅ **Security headers** (check in dev tools → Network → Response Headers)

**📱 Test on Different Devices:**

- **Desktop:** https://localhost
- **Mobile/Tablet on same WiFi:** https://YOUR-IP-ADDRESS (replace with your computer's IP)

To find your IP address:

```bash
# On Linux/Mac
hostname -I
# Or
ip addr show | grep "inet " | grep -v 127.0.0.1

# On Windows (Command Prompt)
ipconfig
```

#### 📋 Quick Reference - Essential Commands

**Complete Local SSL Test (Copy & Paste):**

```bash
# Navigate to project directory
cd /path/to/personal-trainer

# Build the app
npm run build

# Set up SSL for localhost (choose option 1)
./setup-ssl.sh localhost

# Start services
docker-compose up -d

# Check status
docker-compose ps

# View logs (optional)
docker-compose logs -f

# Stop when done
docker-compose down
```

**URLs to Test:**

- **Main site:** https://localhost
- **HTTP redirect:** http://localhost (should redirect to HTTPS)

**Useful Commands:**

```bash
# Check what's running
docker-compose ps

# View all logs
docker-compose logs

# Restart everything
docker-compose restart

# Stop everything
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# Check SSL certificates exist
ls -la ssl/
```

#### Expected Test Results:

✅ **What should work:**

- Website loads at https://localhost (after accepting SSL warning)
- HTTP redirects to HTTPS automatically
- All images, fonts, and styling display correctly
- Multi-language switching works (EN/NL/ES)
- All sections (Hero, Trainings, Schedule, etc.) display properly
- Responsive design works on mobile and desktop
- Contact form displays correctly
- **Google Maps display correctly** in the Schedule section (4 location maps)
- Maps are interactive (zoom, pan, street view)

⚠️ **What's normal for local testing:**

- Browser security warning (due to self-signed certificate)
- SSL certificate error in browser (crossed-out lock icon)
- "Not secure" or "Certificate invalid" warnings

❌ **If something doesn't work:**

- Check container status: `docker-compose ps`
- View error logs: `docker-compose logs`
- Restart services: `docker-compose restart`
- Rebuild if needed: `npm run build && docker-compose up -d --build`

#### Environment Configuration:

Create a `.env` file for custom settings:

```env
DOMAIN=yourdomain.com
EMAIL=your-email@domain.com
NODE_ENV=production
```

### Docker Management Commands (Simple Container)

#### Check if container is running:

```bash
docker ps
```

#### View container logs:

```bash
docker logs personal-trainer-container
```

#### Stop the container:

```bash
docker stop personal-trainer-container
```

#### Remove the container:

```bash
docker rm personal-trainer-container
```

#### Remove the image (to free up space):

```bash
docker rmi personal-trainer-app
```

## 📁 Project Structure

```
personal-trainer/
├── app/                          # React Router 7 app structure
│   ├── components/              # Reusable UI components
│   ├── layouts/                 # Page layouts
│   └── routes/                  # Page routes
├── public/                      # Static assets (images, favicon)
├── build/                       # Built files (generated automatically)
├── ssl/                         # SSL certificates (generated by setup-ssl.sh)
├── logs/                        # Nginx and application logs
├── nginx/                       # Nginx-related files
├── server-express.js            # Express server (backup option)
├── Dockerfile                   # Docker configuration
├── docker-compose.yml           # Multi-container Docker setup with SSL
├── nginx.conf                   # Nginx configuration with SSL & security
├── setup-ssl.sh                 # SSL certificate setup script
├── SSL-README.md                # Detailed SSL setup documentation
├── package.json                 # Project dependencies and scripts
├── vite.config.ts              # Vite build configuration
└── README.md                   # This file
```

## 🛠️ Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm install`     | Install all dependencies          |
| `npm run dev`     | Start development server          |
| `npm run build`   | Build for production              |
| `npm start`       | Start production server           |
| `npm run preview` | Build and start production server |
| `npm run lint`    | Check code for errors             |

## 🌐 Multi-Language Support

The website supports three languages:

- **English (EN)** - Default language
- **Dutch (NL)** - Nederlandse taal
- **Spanish (ES)** - Idioma español

Users can switch languages using the language selector in the navigation bar.

## 🎨 Customization

### Changing Content

1. **Text Content:** Edit files in `app/i18n/` directory for different languages
2. **Images:** Replace images in `public/images/` directory
3. **Styling:** Modify CSS files in `app/` directory

### Adding New Languages

1. Create a new language file in `app/i18n/`
2. Add the language option to the language selector
3. Update the i18n configuration

## 🚨 Troubleshooting

### Common Issues and Solutions

#### "npm not found" or "node not found"

- **Solution:** Install Node.js from https://nodejs.org/

#### "Port 3000 is already in use"

- **Solution:** Either stop other applications using port 3000, or change the port:
  ```bash
  PORT=3001 npm start
  ```

#### "Permission denied" errors on Mac/Linux

- **Solution:** Try running with `sudo` (not recommended) or fix Node.js permissions:
  ```bash
  sudo chown -R $(whoami) ~/.npm
  ```

#### Docker "command not found"

- **Solution:** Install Docker Desktop from https://www.docker.com/

#### Website not loading in browser

1. **Check the terminal** - Look for error messages
2. **Try a different port** - Maybe 3000 is occupied
3. **Clear browser cache** - Press Ctrl+F5 (or Cmd+Shift+R on Mac)
4. **Check firewall** - Make sure port 3000 isn't blocked

#### Build fails with memory errors

- **Solution:** Increase Node.js memory:
  ```bash
  export NODE_OPTIONS="--max-old-space-size=4096"
  npm run build
  ```

#### Docker Compose / SSL Issues

**"Certificate not found" errors:**

````bash
#### Testing Issues

**"Build failed" or "Command not found":**
```bash
# Make sure you're in the project directory
pwd
# Should show: /path/to/personal-trainer

# Check if Node.js is installed
node --version
npm --version

# If missing, install Node.js from https://nodejs.org/
````

**"Permission denied" when running ./setup-ssl.sh:**

```bash
# Make the script executable
chmod +x setup-ssl.sh
./setup-ssl.sh localhost
```

**"docker-compose command not found":**

```bash
# Install Docker Desktop from https://www.docker.com/
# Or try with docker compose (without dash)
docker compose up -d
```

**Website doesn't load at https://localhost:**

```bash
# Check if containers are running
docker-compose ps

# Both should show "Up" status
# If not, check logs:
docker-compose logs
```

**"This site can't be reached" error:**

```bash
# Check if ports are available
curl -I http://localhost
# Should return 301 redirect

# Check what's using port 80/443
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

**SSL certificate issues in browser:**

- This is **normal for self-signed certificates**
- Click "Advanced" and "Proceed to localhost"
- The website will work despite the warning

**Maps not showing/loading:**

```bash
# The issue is usually Content Security Policy (CSP) blocking Google Maps
# This should be fixed in the nginx.conf, but if maps still don't load:

# 1. Check browser console for CSP errors
# Open browser dev tools (F12) → Console tab
# Look for errors mentioning "refused to frame" or "CSP"

# 2. Restart nginx with updated config
docker-compose restart nginx

# 3. Clear browser cache and reload
# Press Ctrl+Shift+R (or Cmd+Shift+R on Mac)
```

#### Docker Compose / SSL Issues

**"Certificate not found" errors:**

```bash
# Check if SSL certificates exist
ls -la ssl/
# If missing, run the SSL setup script again
./setup-ssl.sh localhost
```

````

**"Address already in use" on port 80/443:**

```bash
# Check what's using the ports
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
# Stop conflicting services or change ports in docker-compose.yml
````

**Let's Encrypt certificate creation fails:**

- Make sure your domain points to your server's IP address
- Ensure ports 80 and 443 are accessible from the internet
- Check firewall settings

**Nginx container won't start:**

```bash
# Check nginx configuration syntax
docker-compose exec nginx nginx -t
# View detailed nginx logs
docker-compose logs nginx
```

**SSL certificate renewal issues:**

```bash
# Test renewal without actually renewing
docker-compose run --rm certbot renew --dry-run
# Check certbot logs for errors
docker-compose logs certbot
```

**Services can't communicate:**

```bash
# Check if containers are on the same network
docker network ls
docker network inspect personal-trainer_app-network
```

#### Docker Compose Management Commands

**View service status:**

```bash
docker-compose ps
```

**Restart specific service:**

```bash
docker-compose restart nginx
docker-compose restart app
```

**View real-time logs:**

```bash
docker-compose logs -f --tail=100
```

**Clean up everything:**

```bash
docker-compose down -v --rmi all
```

### Getting Help

1. **Check the terminal output** - Error messages usually explain the problem
2. **Try restarting** - Stop the server (Ctrl+C) and start again
3. **For Docker issues** - Check container logs with `docker-compose logs`
4. **For SSL issues** - Verify certificate files exist in `ssl/` directory
5. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules
   npm install
   ```

## 📞 Support

If you encounter issues not covered in this guide:

1. Check that all prerequisites are properly installed
2. Make sure you're in the correct project directory
3. Try the troubleshooting steps above
4. Restart your terminal and try again

## 🔒 Security Notes

- This application is configured to run in production mode with security best practices
- Static files are served with appropriate caching headers
- The server binds to all interfaces for Docker compatibility
- No sensitive data is exposed in the client-side code

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
