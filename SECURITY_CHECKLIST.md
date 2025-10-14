# 🔒 SECURITY CHECKLIST

## Environment Files - NEVER COMMIT TO GIT

### ❌ Files that should NEVER be in Git:
- `.env` (local development)
- `.env.production` (production secrets)
- `.env.local`
- `.env.development.local`
- `.env.test.local`
- Any file containing:
  - Database passwords
  - API keys
  - Gmail app passwords
  - Email credentials

### ✅ Files that CAN be in Git:
- `.env.example` (template with dummy values)
- `.gitignore` (prevents accidental commits)

## Security Actions Taken:

### 2025-10-14 - Environment File Removal
- ✅ Removed `.env.production` from Git tracking
- ✅ Updated `.gitignore` to exclude all `.env*` files
- ✅ Verified files are properly ignored
- ✅ Pushed security fix to GitHub

## Prevention Measures:

### 1. Always Check Before Committing:
```bash
git status
git diff --cached
```

### 2. Verify .gitignore is Working:
```bash
git check-ignore .env .env.production
```

### 3. Use Environment Templates:
- Copy `.env.example` to `.env` for development
- Copy `.env.example` to `.env.production` for production
- Fill in real values locally, never commit

### 4. Production Deployment:
- Create `.env.production` directly on the server
- Never transfer via Git
- Use secure methods (SCP, direct server editing)

## If Environment Files Are Accidentally Committed:

### Immediate Actions:
1. `git rm --cached .env .env.production`
2. `git commit -m "SECURITY: Remove sensitive environment files"`
3. `git push origin main`
4. **Change all passwords/API keys immediately**
5. Update `.gitignore` if needed

### Complete History Removal (if needed):
```bash
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch .env .env.production' \
  --prune-empty --tag-name-filter cat -- --all
```

## 🚨 REMEMBER:
- Environment files contain sensitive data
- Always double-check before committing
- When in doubt, exclude rather than include