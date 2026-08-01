# Images Folder

Drop your image files right here. This folder is public, so anything you
add can be referenced in the code as `/images/your-file-name.jpg`.

## What's already here
- `profile.jpg` — your photo, pulled automatically from your CV.

## Adding your own images

1. Add your logo, photo, or any other project images into this folder,
   for example: `logo.png`, `profile.jpg`, `project1.png`.
2. Reference them in any component like this:
   ```jsx
   <img src="/images/logo.png" alt="My Logo" />
   ```
   Note the path starts with `/images/...`, NOT `/public/images/...` —
   Vite serves everything inside `public/` from the site root.

## Where images are currently used
- `src/components/Hero.jsx` → `/images/profile.jpg` (your profile photo)
- `src/components/Navbar.jsx` → text logo by default; swap in `/images/logo.png`
  if you'd like an image logo instead (see comment in that file).

## Tips
- Keep photos under ~500KB for fast loading (compress at squoosh.app if needed).
- Square images work best for the profile photo (it's cropped into a circle/rounded frame).
- Recommended logo size: transparent PNG, roughly 200x200px.
