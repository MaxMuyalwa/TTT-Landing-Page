# Custom Developer Instructions

## Asset Retention and Synchronization Rules

1. **DO NOT delete, overwrite, or modify user-uploaded asset files** in the `/public` directory, including but not limited to:
   - `/public/logo.png` (Horizontal logo image)
   - `/public/favicon.png` (Tab icon image)
   - `/public/images/hero-bg.jpg` (Hero background image)
   - `/public/videos/hero-video.mp4` (Hero background video)
   - Any other custom user-uploaded asset in `/public/images/*` or `/public/videos/*`.

2. **Support Dynamic Asset Fallbacks in Code**:
   - The user syncs and uploads these files directly in GitHub or through manual upload workflows. They may not always be present in the sandbox's local file tree at all times, but **the code MUST remain configured to try loading them first**.
   - Do not revert, replace, or modify the background video code (`/videos/hero-video.mp4`) or logo image paths in `src/components/Hero.tsx` or `src/components/Navbar.tsx` unless the user explicitly requests a change to that specific section.

3. **Preserve Navigation and Hero Layout**:
   - Keep the video player in the hero section active, playing in a seamless muted loop, and fallback to the gradient/image correctly.
   - Do not replace the video element with an image element unless explicitly instructed to.
