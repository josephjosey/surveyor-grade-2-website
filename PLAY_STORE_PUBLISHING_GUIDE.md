# 📱 SurveyRank Academy: Android APK & Google Play Store Publishing Guide

This guide explains how to:
1. **Download and install the APK on your Android phone immediately.**
2. **Ensure changes to the web app reflect instantly in the mobile app in real-time.**
3. **Publish the app on the Google Play Store step-by-step.**
4. **Allow students to install the app directly from their browser (PWA).**

---

## ⚡ 1. How to Download the APK File for Your Phone

A production GitHub Actions build workflow has been created in `.github/workflows/build-android.yml`.

Whenever you push to `main` on GitHub:
1. Open your repository on GitHub:
   👉 **[https://github.com/josephjosey/surveyor-grade-2-website](https://github.com/josephjosey/surveyor-grade-2-website)**
2. Click on the **"Actions"** tab at the top.
3. Click on the latest workflow run named **"Build Android APK & Google Play AAB Bundle"**.
4. Scroll to the bottom under **"Artifacts"**:
   - 📥 **`SurveyRankAcademy-DirectInstall-APK`**: Download this zip file! Extract it to get `app-debug.apk`.
   - 📥 **`SurveyRankAcademy-PlayStore-AAB`**: Download this for Google Play Console submission (`app-release.aab`).
5. Transfer `app-debug.apk` to your Android phone (via WhatsApp, Google Drive, or USB cable).
6. On your phone, tap `app-debug.apk` to install! (Allow "Install from unknown sources" if prompted).

---

## 🔄 2. Real-Time Live Sync: How Changes Reflect Instantly

You asked:
> *"If I make any changes in the web app, it should also reflect in the mobile app or APK file."*

We designed this architecture using **Capacitor Remote Origin Sync**:

### How it works:
In [`capacitor.config.ts`](file:///C:/Users/hp/.gemini/antigravity/scratch/kerala-psc-survey-academy/capacitor.config.ts):
```ts
server: {
  // When set to your live website URL, the APK boots directly from your cloud server:
  url: 'https://kerala-psc-survey-academy.vercel.app', // <-- Replace with your live web app URL
  cleartext: true,
  androidScheme: 'https'
}
```

- **When `url` is configured**:
  Every time a student opens the mobile app on their phone, it connects to your live web app.
  - If you add new questions to the Question Bank, they appear **instantly** in the app.
  - If you schedule a new Mock Test, it appears **instantly**.
  - If you update study notes or styles, they update **immediately**!
  - **No need to rebuild or reinstall the APK!**

- **When offline**:
  The built-in Service Worker ([`public/sw.js`](file:///C:/Users/hp/.gemini/antigravity/scratch/kerala-psc-survey-academy/public/sw.js)) caches assets locally so students can still practice cached content even with spotty internet.

---

## 🚀 3. Publishing to Google Play Store Step-by-Step

Google Play Store requires an **Android App Bundle (`.aab`)** and specific assets, all of which are already generated for you:

### Pre-Generated Store Assets:
- **App Icon (512x512 PNG)**: [`public/icons/playstore-icon-512.png`](file:///C:/Users/hp/.gemini/antigravity/scratch/kerala-psc-survey-academy/public/icons/playstore-icon-512.png)
- **Feature Graphic (1024x500 PNG)**: [`public/icons/feature-graphic-1024x500.png`](file:///C:/Users/hp/.gemini/antigravity/scratch/kerala-psc-survey-academy/public/icons/feature-graphic-1024x500.png)
- **Splash Screen & Mipmaps**: Configured in `android/app/src/main/res/`
- **Package ID**: `com.surveyrank.academy`

---

### Step A: Google Play Console Setup
1. Go to **[Google Play Console](https://play.google.com/console)**.
2. Sign in with your Google Account and pay the one-time $25 developer registration fee.
3. Click **"Create App"**:
   - **App Name**: `SurveyRank Academy - Kerala PSC Survey Coaching`
   - **Default Language**: `English (United States)` or `English (India)`
   - **App or Game**: `App`
   - **Free or Paid**: `Free`

---

### Step B: App Dashboard Checklist
Google Play Console requires completing the standard declaration tasks:
1. **Privacy Policy**: Provide a link to your privacy policy page.
2. **App Access**: Select "All functionality is available without special access" (or provide demo login credentials for reviewers: PIN `1234`).
3. **Ads**: Select "No, my app does not contain ads".
4. **Content Rating**: Complete the questionnaire (Education category -> Rated 3+ / Everyone).
5. **Target Audience**: Select 18 and over (Competitive exam aspirants).
6. **Data Safety**:
   - Data collected: Name, Email (optional for student profiles), User responses (exam submissions).
   - Data encryption in transit: Yes (HTTPS).
7. **Government Apps**: Select "No" (Explain that this is a private coaching academy preparing students for Kerala PSC exams).

---

### Step C: Store Listing
1. **Short Description** (up to 80 chars):
   > Comprehensive coaching & mock tests for Kerala PSC Survey & Land Records exams.
2. **Full Description** (up to 4000 chars):
   > SurveyRank Academy is Kerala's premier online coaching platform for Kerala PSC Survey and Land Records, Surveyor Grade II, and Kerala Water Authority (KWA) Overseer examinations. Led by expert Course Director Joseph Josey, the app features 1,080+ official PYQs with comprehensive explanations, timed mock tests with state-level rank leaderboards, and module-wise syllabus notes.
3. **Graphics**:
   - Upload `public/icons/playstore-icon-512.png` as the App Icon.
   - Upload `public/icons/feature-graphic-1024x500.png` as the Feature Graphic.
   - Upload 2 to 4 phone screenshots (captured from the mobile viewport).

---

### Step D: Upload the Bundle (.aab) & Release
1. In the Play Console sidebar, go to **Production** (or **Closed Testing**).
2. Click **Create new release**.
3. Let Google manage the app signing key (Google Play App Signing - recommended).
4. Upload the **`app-release.aab`** file downloaded from GitHub Actions Artifacts.
5. Enter Release notes:
   > Initial release of SurveyRank Academy featuring 1,080+ Kerala PSC questions, 11 mock exams, and state rank leaderboards.
6. Click **Save** ➔ **Review release** ➔ **Start rollout to Production**!
7. Google will review the app within 24 to 48 hours, and it will be live on Google Play!

---

## 📲 4. Alternative: 1-Click PWA Installation (No Play Store Required)

Your app is also a certified **Progressive Web App (PWA)**!

Any student opening your website in Chrome on Android:
1. Opens `https://your-domain.com`.
2. Taps the **"Install App"** prompt (or taps the 3 dots in Chrome ➔ **"Add to Home screen"** / **"Install app"**).
3. The app installs **instantly** onto their phone with the custom SurveyRank icon.
4. It opens in full-screen standalone mode without any browser URL bar.
5. All future updates are synced in real-time instantly!
