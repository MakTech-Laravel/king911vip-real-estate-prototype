# DAR.KW Static Prototype

Premium static product prototype for a Kuwait real-estate marketplace.

## Open the prototype

Open `index.html` directly in a modern browser, or serve this folder with any simple static-file server. No installation, build command, backend, database, or authentication is required.

The prototype loads pinned React 18 and Tailwind browser scripts from public CDNs, so an internet connection is required for the first load.

## Demo roles

- Marketplace: `#/home`
- Role selector: `#/roles`
- Property seeker dashboard: `#/user-dashboard`
- Office workspace: `#/office-dashboard`
- Admin workspace: `#/admin`
- Sign in: `#/login`
- Registration: `#/register`

All content and identities are fictional. Changes are stored only in browser `localStorage` and can be restored with **Reset demo**.

## Recommended client walkthrough

1. Start at `#/home`, search the marketplace, and open a property.
2. Save it and use the inquiry action to show the lightweight seeker history.
3. Open `#/office-dashboard`, review performance, then create a property through the five-step wizard.
4. Select an advertisement tier and publish. The selected point cost is deducted and the listing becomes pending.
5. If needed, use `#/office-dashboard/points` to simulate purchasing Starter, Professional, or Premium points.
6. Switch to `#/admin/properties`, approve the new listing, then return to `#/search` to see it live.
7. Switch the language to Arabic on any screen to demonstrate full RTL mirroring and localized KWD formatting.

## Included experience

- Public home, search, property detail, office profile, saved properties, inquiry history, and settings
- Office overview, property management, publishing wizard, preview, points, transactions, messages, and profile
- Admin overview, moderation, users, offices, categories, locations, and analytics
- English-first presentation, Arabic RTL, responsive mobile navigation, persistence, and demo reset

## 20-second teaser storyboard

- **0–5s:** Kuwait skyline, luxury villas, apartments, and commercial spaces
- **5–10s:** Search, filters, browsing, and property details
- **10–15s:** Office dashboard, listing wizard, and advertising points
- **15–20s:** Admin approval followed by the DAR.KW message: “Find your perfect property in Kuwait.”

The image library in `assets/images` contains nine custom-generated, text-free anchor visuals. The 24-property fixture catalog intentionally reuses these curated images to keep this static prototype fast and compact.
