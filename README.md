# Shreya Raval - Developer Portfolio

A modern, responsive developer portfolio website built with React.js and CSS.

## Features

- Modern dark theme design
- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling navigation
- Animated sections and hover effects
- Contact form with EmailJS integration
- Clean and reusable components

## Tech Stack

- React.js
- CSS (CSS Modules)
- EmailJS (for contact form)
- Vite (build tool)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Get your Service ID, Template ID, and Public Key
   - Update the credentials in `src/components/Contact.jsx`:
     ```javascript
     emailjs.sendForm(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       form.current,
       'YOUR_PUBLIC_KEY'
     )
     ```

3. Add your resume:
   - Place your resume PDF in the `public` folder as `resume.pdf`

## Running the Project

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## EmailJS Setup Instructions

1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{name}}` - sender's name
   - `{{email}}` - sender's email
   - `{{message}}` - message content
4. Copy your Service ID, Template ID, and Public Key
5. Replace the placeholders in `Contact.jsx`

## Customization

- Colors: Edit CSS variables in `src/styles/index.css`
- Content: Update component files in `src/components/`
- Projects: Modify the projects array in `src/components/Projects.jsx`
- Skills: Update skills array in `src/components/Skills.jsx`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/
│   ├── index.css
│   ├── App.css
│   ├── Navbar.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Education.css
│   ├── Projects.css
│   ├── Contact.css
│   └── Footer.css
├── App.jsx
└── main.jsx
```

## Contact

- Email: shreyaraval482@gmail.com
- Phone: +91 9265841913
- Location: Ahmedabad, India

## License

© 2025 Shreya Raval. All rights reserved.
