# App Store Connect Metadata Reference

**How to use this document:** This is a copy-paste reference for filling out App Store Connect. Each section below corresponds to a field or configuration screen in App Store Connect. Copy the exact values into the corresponding fields. Notes in *italics* are instructions for you -- do not paste them.

**Last updated:** 2026-03-31

---

## 1. App Identity

| Field | Value |
|-------|-------|
| **App Name** | Frank |
| **Subtitle** | Your Personal Tech Helper |
| **Primary Category** | Utilities |
| **Secondary Category** | Lifestyle |
| **Bundle ID** | com.fixitfrank.app *(reference only -- set in Xcode/EAS)* |

---

## 2. Description

*Copy the text below into the Description field. It is 1,874 characters (well under the 4,000 character limit).*

```
Meet Frank -- your friendly, patient tech helper who's just a phone call away.

Having trouble with your WiFi? Can't figure out your printer? Not sure how to set up that new tablet? Just call Frank. He listens carefully, asks simple questions, and walks you through each step in plain language. No confusing menus. No long hold times. Just a calm, helpful voice ready to guide you.

Here's how it works: tap the big green "Call Frank" button and start talking. Describe what's going on in your own words -- Frank will figure out the rest. He'll give you step-by-step instructions you can follow at your own pace, and he'll wait patiently while you try each one.

What makes Frank special:

- He remembers your devices and past conversations, so you never have to explain everything from scratch
- After every call, you get a written summary and checklist you can refer back to anytime
- He knows his way around WiFi routers, printers, phones, tablets, computers, TVs, email, and more
- He adapts to your comfort level -- whether you're a complete beginner or just need a quick pointer
- You can share photos of error messages or confusing screens, and Frank will look at them with you
- He's available whenever you need him -- mornings, evenings, weekends

Start with 20 free minutes -- no credit card needed. Just sign in and call.

Frank was built with one goal in mind: to give you the confidence to handle technology on your own terms. No judgment. No rush. Just friendly, reliable help whenever you need it.
```

---

## 3. Keywords

*Copy the exact string below into the Keywords field. It is 96 characters (within the 100 character limit). Do not add spaces after commas.*

```
tech support,help,elderly,senior,voice,assistant,troubleshoot,wifi,printer,computer,phone,tablet,fix
```

*Important: Do not add "Frank", "Personal", "Tech", or "Helper" -- these words are already indexed from the App Name and Subtitle.*

---

## 4. Age Rating

**Target rating: 13+**

*In App Store Connect, navigate to App Information > Age Rating. Complete the content questionnaire with the answers below.*

| Content Category | Answer |
|-----------------|--------|
| Cartoon or Fantasy Violence | None |
| Realistic Violence | None |
| Prolonged Graphic or Sadistic Realistic Violence | None |
| Profanity or Crude Humor | None |
| Mature/Suggestive Themes | None |
| Horror/Fear Themes | None |
| Medical/Treatment Information | None |
| Alcohol, Tobacco, or Drug Use or References | None |
| Simulated Gambling | None |
| Sexual Content and Nudity | None |
| Contests | None |
| Unrestricted Web Access | None |

*After completing the questionnaire, the auto-assigned rating will be 4+. You MUST use the "Override to Higher Age Rating" option to manually set the rating to 13+. This matches the privacy policy's statement that the app is "not intended for children under 13."*

---

## 5. URLs and Contact Information

| Field | Value |
|-------|-------|
| **Privacy Policy URL** | `https://phatts3262.github.io/frank-privacy/privacy.html` |
| **Support URL** | `https://phatts3262.github.io/frank-privacy/` |
| **Marketing URL** | `https://phatts3262.github.io/frank-privacy/` |
| **Contact Email** | `support@frank-app.net` |
| **Contact Phone** | *(leave blank or fill in your own number)* |

---

## 6. App Store Icon

| Property | Value |
|----------|-------|
| **File** | `assets/app-store-icon.png` |
| **Dimensions** | 1024 x 1024 pixels |
| **Format** | PNG, no alpha channel, no rounded corners |
| **Regenerate** | `node scripts/generate-app-icon.mjs` |

*Upload location in App Store Connect: App Information > General Information > App Icon. Drag and drop the file or click to upload.*

*Note: Do not round the corners -- Apple applies its own squircle mask automatically.*

---

## 7. Additional Configuration Notes

### Copyright
```
2026 Frank App
```

### Content Rights
*Select "Does not contain, show, or access third-party content" -- Frank generates original responses.*

### Pricing
*Set to "Free" with in-app purchases. The free tier (20 minutes) and premium tiers are managed through Apple IAP.*

### Distribution
*Request unlisted distribution through Apple's contact form after the app enters review. Unlisted apps go through the same review process but are not discoverable in App Store search.*
