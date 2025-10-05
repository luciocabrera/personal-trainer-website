# SSL Docker Setup

This directory contains the SSL-enabled Docker Compose setup for your Personal Trainer website.

## 🚀 Quick Start

### 1. Choose your SSL setup:

**For Development/Testing:**

```bash
./setup-ssl.sh localhost
```

**For Production with Let's Encrypt:**

```bash
./setup-ssl.sh yourdomain.com your-email@domain.com
```

### 2. Start the services:

```bash
docker-compose up -d
```

### 3. Access your site:

- **HTTP**: http://yourdomain.com (redirects to HTTPS)
- **HTTPS**: https://yourdomain.com

## 📁 File Structure

```
├── docker-compose.yml    # Multi-container setup
├── nginx.conf           # Nginx configuration with SSL
├── setup-ssl.sh         # SSL setup helper script
├── ssl/                # SSL certificates directory
├── logs/               # Nginx and Let's Encrypt logs
└── nginx/html/         # Let's Encrypt challenge files
```

## 🔧 Configuration Options

### Environment Variables

Create a `.env` file for custom configuration:

```env
DOMAIN=yourdomain.com
EMAIL=your-email@domain.com
NODE_ENV=production
```

### Nginx Features Included:

- ✅ **SSL/TLS termination** with modern cipher suites
- ✅ **HTTP/2 support** for better performance
- ✅ **Automatic HTTP → HTTPS redirect**
- ✅ **Security headers** (CSP, HSTS, X-Frame-Options, etc.)
- ✅ **Gzip compression** for all text assets
- ✅ **Static asset caching** (1 year cache for images, fonts, etc.)
- ✅ **Rate limiting** to prevent abuse
- ✅ **Let's Encrypt integration** for free SSL certificates

## 🔄 Management Commands

### View logs:

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f nginx
docker-compose logs -f app
```

### Restart services:

```bash
docker-compose restart nginx
docker-compose restart app
```

### Update SSL certificates (Let's Encrypt):

```bash
docker-compose run --rm certbot renew
docker-compose restart nginx
```

### Stop services:

```bash
docker-compose down
```

## 🔒 SSL Certificate Types

### 1. Self-Signed (Development)

- ✅ Quick setup for testing
- ❌ Browser warnings
- ❌ Not trusted by browsers

### 2. Let's Encrypt (Production)

- ✅ Free and trusted certificates
- ✅ Automatic renewal available
- ✅ Supports multiple domains
- ⚠️ Requires domain validation

### 3. Custom Certificates

- ✅ Use your own certificates
- ✅ Full control over certificate chain
- 💰 Usually requires paid certificate

## 🛡️ Security Features

- **TLS 1.2+ only** with secure cipher suites
- **Security headers** for XSS, clickjacking protection
- **Content Security Policy** configured for your app
- **Rate limiting** on API endpoints
- **HSTS** ready (uncomment for production)

## 📊 Monitoring

Access logs are available in `logs/nginx/access.log`:

```bash
# Follow access logs
tail -f logs/nginx/access.log

# Follow error logs
tail -f logs/nginx/error.log
```

## 🚨 Troubleshooting

### Certificate Issues:

```bash
# Check certificate validity
openssl x509 -in ssl/cert.pem -text -noout

# Test SSL connection
openssl s_client -connect yourdomain.com:443
```

### Container Issues:

```bash
# Check container status
docker-compose ps

# Check container health
docker-compose exec app curl -f http://localhost:3000/health || echo "Health check failed"
```

### Let's Encrypt Issues:

```bash
# Check certbot logs
docker-compose logs certbot

# Test certificate renewal
docker-compose run --rm certbot renew --dry-run
```
