# How to Add Your Resume PDF

To enable the "Download Resume" button functionality, follow these steps:

## Step 1: Prepare Your Resume

1. Create or update your resume
2. Save it as a PDF file
3. Name it `resume.pdf` (or any name you prefer)

## Step 2: Add Resume to Project

### Option A: Using the public folder (Recommended)

1. Create a `public` folder in your project root if it doesn't exist
2. Place your `resume.pdf` file inside the `public` folder

```
your-project/
├── public/
│   └── resume.pdf    <-- Place your resume here
├── src/
├── package.json
└── ...
```

3. The resume will be accessible at `/resume.pdf` when your site is deployed

### Option B: Using a different filename

If you want to use a different filename:

1. Place your PDF in the `public` folder (e.g., `shreya-raval-resume.pdf`)
2. Update the code in these files:

**src/components/Navbar.jsx** (line 15):
```javascript
const handleDownloadResume = () => {
  window.open('/shreya-raval-resume.pdf', '_blank')
}
```

## Step 3: Test Locally

1. Run your development server:
```bash
npm run dev
```

2. Click the "Download Resume" button in the navbar
3. Your resume should open in a new tab

## Step 4: For Production/Deployment

When you build and deploy your project:

```bash
npm run build
```

The `public` folder contents are automatically copied to the build output, so your resume will be included.

## Alternative: Host Resume Externally

If you prefer to host your resume on Google Drive, Dropbox, or another service:

1. Upload your resume and get a public sharing link
2. Update the code:

```javascript
const handleDownloadResume = () => {
  window.open('https://your-resume-link-here.pdf', '_blank')
}
```

## Current Resume Button Locations

The "Download Resume" button appears in:
- Navbar (top right)

Make sure to update the `handleDownloadResume` function in the Navbar component.
