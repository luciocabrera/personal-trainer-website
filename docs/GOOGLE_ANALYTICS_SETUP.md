# Google Analytics 4 Setup Guide

## ✅ Completed Setup

### 1. Google Analytics Property Created

- **Property Name**: Desi4Fit
- **Stream Name**: Desi4Fit Main Site
- **Measurement ID**: `G-WM9RR9YD6N`
- **Website URL**: https://desi4fit.nl

### 2. Tracking Code Implemented

The Google Analytics tracking code has been added to `app/root.tsx` and uses environment variables for security.

## 🔧 Environment Variables

The GA Measurement ID is stored in environment variables:

### Development (`.env`)

```bash
VITE_GA_MEASUREMENT_ID=G-WM9RR9YD6N
```

### Production (`.env.production`)

```bash
VITE_GA_MEASUREMENT_ID=G-WM9RR9YD6N
```

### Example (`.env.example`)

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🚀 How It Works

The tracking code in `root.tsx` will:

1. Only load if `VITE_GA_MEASUREMENT_ID` is set
2. Load the Google Tag Manager script
3. Initialize Google Analytics with your Measurement ID
4. Start tracking page views, events, and user behavior

## 📊 Verifying It's Working

After deployment, verify Google Analytics is tracking:

1. **Visit your website**: https://desi4fit.nl
2. **Go to Google Analytics**: https://analytics.google.com
3. **Navigate to**: Reports → Realtime
4. **You should see**: Yourself as a live visitor! 🎉

## 📈 What Google Analytics Tracks

Once deployed, GA4 will automatically track:

- **Page Views**: Which pages users visit
- **Sessions**: How long users stay on your site
- **Traffic Sources**: Where visitors come from (Google, social media, direct, etc.)
- **User Demographics**: Age, gender, location, device type
- **Engagement**: Scroll depth, time on page, bounce rate
- **Events**: Button clicks, form submissions, video plays (if configured)

## 🔐 Security Best Practices

✅ **DO**:

- Use environment variables for all API keys and IDs
- Keep `.env` files in `.gitignore` (never commit them)
- Use different GA properties for dev/staging/prod if needed

❌ **DON'T**:

- Hardcode the Measurement ID in your code
- Commit `.env` files to Git
- Share your GA Measurement ID publicly (though it's visible in browser anyway)

## 📝 Next Steps

1. ✅ **Deploy the changes** to production
2. ✅ **Verify tracking** in GA4 Realtime reports
3. ⏳ **Wait 24-48 hours** for data to populate in standard reports
4. 📊 **Explore reports** to understand your audience
5. 🎯 **Set up goals** and conversions (contact form submissions, etc.)
6. 📧 **Configure alerts** for traffic spikes or drops

## 🔗 Useful Links

- [Google Analytics Dashboard](https://analytics.google.com)
- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Realtime Reports](https://support.google.com/analytics/answer/9271392)
- [GA4 Event Tracking](https://support.google.com/analytics/answer/9322688)

## 🎓 Learning Resources

- **GA4 for Beginners**: https://analytics.google.com/analytics/academy/
- **Understanding Reports**: Check "Reports" tab for user behavior insights
- **Custom Events**: You can track form submissions, button clicks, etc.
- **Conversions**: Set up goals to track business objectives

---

**Status**: ✅ Configured and ready for deployment
**Last Updated**: October 17, 2025
