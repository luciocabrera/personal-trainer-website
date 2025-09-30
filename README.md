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
- **Accessibility features** with proper ARIA labels and skip links

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

Docker allows you to run the application in a container, ensuring it works the same way on any computer.

### Step 1: Build the Docker Image

Open terminal in the project directory and run:

```bash
docker build -t personal-trainer-app .
```

This command:
- `docker build` - Creates a Docker image
- `-t personal-trainer-app` - Gives it the name "personal-trainer-app"
- `.` - Uses the current directory

**Wait for completion** - This may take 5-10 minutes the first time.

### Step 2: Run the Docker Container

#### Option A: Run in Foreground (see logs directly)

```bash
docker run -p 3000:3000 personal-trainer-app
```

- Press `Ctrl+C` to stop the container

#### Option B: Run in Background (detached mode)

```bash
docker run -d -p 3000:3000 --name personal-trainer-container personal-trainer-app
```

This runs the container in the background with the name "personal-trainer-container".

### Step 3: Access the Application

Open your browser and go to: http://localhost:3000

### Docker Management Commands

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
├── server-express.js            # Express server for production
├── Dockerfile                   # Docker configuration
├── package.json                 # Project dependencies and scripts
├── vite.config.ts              # Vite build configuration
└── README.md                   # This file
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run preview` | Build and start production server |
| `npm run lint` | Check code for errors |

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

### Getting Help

1. **Check the terminal output** - Error messages usually explain the problem
2. **Try restarting** - Stop the server (Ctrl+C) and start again
3. **Reinstall dependencies:**
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
