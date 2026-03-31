# App Store Review Notes

This document contains the review notes text for App Store Connect and supplementary information for Apple's review team.

**Last updated:** 2026-03-31

---

## Section 1: Review Notes (Copy-Paste for App Store Connect)

*Copy the text below into the "Review Notes" field in App Store Connect (App Review Information section).*

```
Frank is a voice-based tech support assistant that helps users troubleshoot
everyday technology problems through natural conversation.

AI Disclosure: This app uses AI to provide voice-based tech support. AI generates
spoken responses during calls and written summaries after calls. No user data is
used to train AI models.

Demo Access: New accounts receive 20 free minutes automatically upon first
sign-in. No promo code or special account is needed. To test the app:

1. Sign in using your Apple ID (Apple Sign-In is the only authentication method)
2. Complete the brief onboarding (enter a display name and accept the AI
   data processing disclosure)
3. Tap the green "Call Frank" button on the home screen to start a voice call
4. Speak naturally about any tech issue (e.g., "My WiFi keeps disconnecting"
   or "How do I set up email on my new tablet")
5. After ending the call, a written summary with step-by-step checklist appears
6. Free minutes are granted automatically -- no purchase required to test
   core functionality

Voice calls require microphone access and an internet connection. The app uses
WebRTC for real-time voice communication. Calls are available 24/7.

Privacy: The privacy policy is available at
https://phatts3262.github.io/frank-privacy/privacy.html
```

*Word count: approximately 190 words (well under the 500-word limit).*

---

## Section 2: Supplementary Information

*The information below is NOT pasted into App Store Connect. It is reference material in case Apple asks follow-up questions during review.*

### Billing Model

Frank uses a three-bucket minute ledger via Apple In-App Purchases (StoreKit 2):

| Bucket | Details |
|--------|---------|
| **Free minutes** | 20 minutes granted to every new account on first sign-in. Annual refresh. Anti-fraud gated (device fingerprint + Apple ID hash). |
| **Pro subscriptions** | Monthly ($14.99/mo, 60 min/month) and Annual ($129.99/yr, 60 min/month loaded monthly). Auto-renewable via Apple IAP. |
| **Top-up packs** | 10 min ($3.99), 20 min ($5.99), 40 min ($9.99). Consumable IAP. Never expire. |

Deduction order: free minutes first, then monthly minutes, then purchased minutes.

Pre-call billing gate blocks depleted users. Mid-call time awareness injection every 5 minutes. Exhaustion pauses the call with a resume flow after purchase.

### Technical Architecture

- **Voice calls:** WebRTC peer connection for real-time audio. Edge functions generate ephemeral session tokens.
- **Summaries:** AI generates a written summary and step-by-step checklist after each call.
- **Memory:** RAG (Retrieval-Augmented Generation) with vector search. Frank remembers past calls and devices discussed.
- **Authentication:** Apple Sign-In only (no email/password or third-party auth).
- **Backend:** Supabase (PostgreSQL, Auth, Edge Functions, Storage).

### Data Collection Summary

See `docs/legal/app-privacy-labels.md` for the full privacy label breakdown. Key points:

- Data linked to identity: email, name, call transcripts, device descriptions, IDFV (anti-fraud), IAP transaction records
- Data NOT collected: location, health, financial info (Apple handles payments), contacts, browsing history
- Crash reporting via Sentry (includes user ID and email for correlation)
- No data used for tracking or advertising

### Unlisted Distribution

This app is intended for unlisted distribution. The unlisted distribution request will be submitted through Apple's contact form after the app enters review. Unlisted apps go through the standard review process but are not discoverable in App Store search.

### Contact Information

- **Support email:** support@frank-app.net
- **Support URL:** https://phatts3262.github.io/frank-privacy/
- **Privacy policy:** https://phatts3262.github.io/frank-privacy/privacy.html

---

*Document: docs/app-store/review-notes.md*
*Phase: 05-app-store-listing*
*Created: 2026-03-31*
