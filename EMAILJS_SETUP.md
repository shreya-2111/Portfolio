# EmailJS Setup Guide

Follow these steps to configure EmailJS for your contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email: **shreyaraval482@gmail.com**
5. Copy the **Service ID** (e.g., `service_abc1234`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Message from {{name}}
```

**Content:**
```
You have received a new message from your portfolio contact form.

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template
5. Copy the **Template ID** (e.g., `template_xyz5678`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcXYZ123456789`)

## Step 5: Update Contact.jsx

Open `src/components/Contact.jsx` and replace:

```javascript
emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  form.current,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
)
```

Example:
```javascript
emailjs.sendForm(
  'service_abc1234',
  'template_xyz5678',
  form.current,
  'abcXYZ123456789'
)
```

## Step 6: Test

1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check your email: **shreyaraval482@gmail.com**

## Troubleshooting

- **Error 401**: Check your Public Key
- **Error 404**: Verify Service ID and Template ID
- **No email received**: Check spam folder and EmailJS dashboard logs
- **Form not submitting**: Check browser console for errors

## Free Tier Limits

- 200 emails per month
- Perfect for a portfolio website

## Security Note

The Public Key is safe to expose in frontend code. EmailJS handles authentication securely.
