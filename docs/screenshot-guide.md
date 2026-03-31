# App Store Screenshot Capture Guide

Step-by-step instructions for capturing iPhone and iPad screenshots for the App Store listing.

**Last updated:** 2026-03-31

---

## 1. Prerequisites

Before capturing screenshots, make sure:

- [ ] The app is running on a simulator or physical device
- [ ] Demo data has been seeded (see [seed script instructions](#seeding-demo-data) below)
- [ ] You are signed in with a display name visible (the seed script sets it to "Margaret")
- [ ] At least one completed call is visible in the History tab
- [ ] The app is in **dark mode** for visual consistency with the app icon

### Seeding Demo Data

The seed script populates your dev database with 5 realistic call records, a follow-up card, and a display name.

1. Sign in to the app on your dev device or simulator
2. Copy your `user_id` from the Supabase dashboard (Authentication > Users)
3. Open `scripts/seed-screenshot-data.sql` and replace `YOUR_DEV_USER_ID_HERE` with your actual user_id
4. Run the script against your **local/development** database:
   ```bash
   psql $DATABASE_URL -f scripts/seed-screenshot-data.sql
   ```
5. Refresh the app (pull down or restart) to see populated screens

**Cleanup after screenshots:**
```sql
DELETE FROM frank_followups WHERE prompt LIKE '%[DEMO]%';
DELETE FROM calls WHERE summary LIKE '%[DEMO]%';
```

---

## 2. iPhone 6.9" Screenshots (ASL-04)

| Property | Value |
|----------|-------|
| **Resolution** | 1260 x 2736 pixels (portrait) |
| **Simulator** | iPhone 16 Pro Max |
| **Physical devices** | iPhone 16 Pro Max, 15 Pro Max, or 14 Pro Max |
| **Capture shortcut** | Cmd+S in Simulator (saves to Desktop) |
| **Minimum count** | 1 (recommended: 4) |
| **Maximum count** | 10 |

### 4 Screenshots to Capture

Capture these screens in order. This is also the display order in App Store Connect.

#### Screenshot 1: Home Screen

- **Route:** Home tab (`app/(tabs)/index.tsx`)
- **What to show:** The "Call Frank" button prominently visible at the bottom. Above it, the greeting ("Good morning, Margaret"), a continuity surface showing a recent call, and optionally the "Things to check on" follow-up card.
- **Tips:**
  - Make sure the billing indicator ("X minutes left with Frank") is visible below the Call button
  - If possible, ensure the follow-up card is visible for a more populated look
  - Dark mode preferred

#### Screenshot 2: Active Call

- **Route:** Active call screen (`app/active-call.tsx`)
- **What to show:** Frank in his "listening" pose with the call timer showing some elapsed time (e.g., 0:45 or 1:12). The mute and speaker buttons should be visible at the bottom.
- **Tips:**
  - Start a real call and wait a moment before capturing (the timer needs to show elapsed time)
  - Make sure the status bar shows full signal, WiFi, and battery
  - The call timer and Frank's avatar are the focal points

#### Screenshot 3: Call Summary

- **Route:** Call summary screen (`app/call-summary.tsx`)
- **What to show:** A completed call summary with the "What Happened" section and the "Steps to Remember" checklist. Navigate from the History tab by tapping one of the seeded demo calls.
- **Tips:**
  - Pick the WiFi or printer call for the most visually complete summary
  - The numbered checklist steps should be fully visible
  - Scroll position should show the top of the summary (not scrolled down)

#### Screenshot 4: Settings

- **Route:** Settings tab (`app/(tabs)/settings.tsx`)
- **What to show:** The Settings screen with the display name ("Margaret") visible at the top, the plan/minutes card, and the list of settings rows (Edit Profile, Add Minutes, My Devices, How Frank Helps You, Frank's Voice).
- **Tips:**
  - Make sure the display name is populated (the seed script sets "Margaret")
  - The minutes remaining count should be visible in the plan card

### Capture Notes

- Ensure the status bar shows full signal, WiFi icon, and full battery
- Hide any debug overlays, developer tools, or Expo DevTools banners
- Capture in dark mode for consistency with the app icon
- Use Cmd+S in the iOS Simulator to save the screenshot to your Desktop
- Verify each screenshot is exactly 1260 x 2736 pixels (check in Finder > Get Info or Preview)

---

## 3. iPad 13" Screenshots (ASL-05)

| Property | Value |
|----------|-------|
| **Resolution** | 2064 x 2752 pixels (portrait) |
| **Simulator** | iPad Pro 13-inch (M4) |
| **Minimum count** | 1 (recommended: 4) |
| **Maximum count** | 10 |

### Important: Do NOT Resize iPhone Screenshots

iPad screenshots must be captured separately on an iPad simulator. Do NOT resize, scale up, or letterbox iPhone screenshots to fit the iPad dimensions. Apple requires native-resolution captures.

### Capture the Same 4 Screens

1. **Home Screen** -- same content as iPhone Screenshot 1
2. **Active Call** -- same content as iPhone Screenshot 2
3. **Call Summary** -- same content as iPhone Screenshot 3
4. **Settings** -- same content as iPhone Screenshot 4

The app renders at phone-style layout on iPad (Expo default), but screenshots are still mandatory because `app.json` has `supportsTablet: true`.

### iPad Capture Method

1. Open the iOS Simulator
2. Select Hardware > Device > iPad Pro 13-inch (M4)
3. Run the app on the iPad simulator
4. Seed the same demo data (if using a different simulator instance)
5. Navigate to each screen and press Cmd+S to capture
6. Verify each screenshot is exactly 2064 x 2752 pixels

---

## 4. Upload Instructions

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Navigate to: My Apps > Frank > iOS App > (Version) > Screenshots
3. **iPhone 6.9" Display:** Upload all 4 screenshots
4. **iPad 13" Display:** Upload all 4 screenshots
5. Drag to reorder if needed. Recommended order: Home, Active Call, Summary, Settings

Screenshots auto-scale to smaller device sizes, so you only need the largest size for each platform (6.9" for iPhone, 13" for iPad).

---

## 5. Screenshot Framing (Optional)

For an unlisted launch, raw screenshots (no device frames or captions) are recommended. They look clean and Apple's store display already provides device context.

If you want to add frames later (for a public launch):

- [screenshots.pro](https://screenshots.pro) -- free device frame mockups
- [mockuphone.com](https://mockuphone.com) -- simple drag-and-drop mockups
- Apple's [Design Resources](https://developer.apple.com/design/resources/) include official device frames

Framing is purely cosmetic and does not affect review or approval.

---

*Document: docs/app-store/screenshot-guide.md*
*Phase: 05-app-store-listing*
*Created: 2026-03-31*
