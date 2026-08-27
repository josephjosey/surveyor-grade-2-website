# 🚀 SurveyRank Academy - Production Deployment & Hosting Guide

This guide explains how to publish the **SurveyRank Kerala PSC Academy** web application on the internet for free or with your custom domain (`.in` or `.com`).

---

## 🛠️ Step 1: Verify the Production Build

Your project is built with React + Vite + TypeScript + Tailwind CSS.
To compile the production build on your computer:

```bash
cd "C:\Users\hp\.gemini\antigravity\scratch\kerala-psc-survey-academy"
npm run build
```

This generates a folder named `dist/` containing all optimized HTML, CSS, JavaScript, and asset files.

---

## ⚡ Step 2: Publish on Vercel (1-Click & 100% Free Hosting)

### Method A: Direct Upload via Vercel CLI (No GitHub needed)
1. In your terminal inside the project directory, run:
   ```bash
   npx vercel
   ```
2. Follow the 3 prompts:
   - *Set up and deploy?* ➔ Press **Y**
   - *Which scope?* ➔ Select your account
   - *Link to existing project?* ➔ Press **N**
   - *What's your project's name?* ➔ `kerala-psc-survey-academy`
3. In ~30 seconds, Vercel will output your live URL (e.g. `https://kerala-psc-survey-academy.vercel.app`)!

---

### Method B: Deploy via GitHub (Automatic Updates)
1. Create a repository on [GitHub.com](https://github.com).
2. Push your project:
   ```bash
   git init
   git add .
   git commit -m "Deploy SurveyRank Kerala PSC Academy"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/kerala-psc-survey-academy.git
   git push -u origin main
   ```
3. Go to [Vercel.com](https://vercel.com) ➔ Click **"Add New Project"** ➔ Select your repository ➔ Click **"Deploy"**.

---

## ⚡ Step 3: Alternative Free Hosting on Netlify

1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the compiled **`dist`** folder from `C:\Users\hp\.gemini\antigravity\scratch\kerala-psc-survey-academy\dist`.
3. Netlify will publish your website instantly on a free HTTPS domain!

---

## 🔑 Step 4: Login Credentials & Access Control

Your website comes with separate login portals:

| Portal | Login Target | Default Credentials | Permissions |
| :--- | :--- | :--- | :--- |
| **Student Portal** | Students | Any student email / phone | Read study notes, download PDFs, practice PYQs, take mock tests with -0.33 marking, ask doubts |
| **Instructor Portal** | Joseph Josey | `joseph.surveyrankers@gmail.com`<br>PIN: `1234` | Full Admin Control: Upload study notes/PDFs, create mock tests, publish PYQs, post verified answers, manage student list |

---

## 🌐 Step 5: Connecting Your Custom Domain (e.g. `www.surveyrankers.in`)

1. Buy your domain on GoDaddy, Hostinger, or Namecheap (~₹499/year).
2. In your **Vercel Project Dashboard**:
   - Go to **Settings ➔ Domains**.
   - Enter your domain name (e.g. `surveyrankers.in`).
3. Add the DNS records shown by Vercel in your GoDaddy/Hostinger DNS management panel:
   - **Type**: `CNAME` | **Name**: `www` | **Value**: `cname.vercel-dns.com`
   - **Type**: `A` | **Name**: `@` | **Value**: `76.76.21.21`
4. Your website will be live worldwide on your custom domain with free automatic SSL encryption!
