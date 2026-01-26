# Contact Form Setup Guide

Your contact form is currently using a `mailto:` link which opens the user's email client. For a more professional setup with better reliability, here are your options:

## Option 1: Formspree (Recommended - Easiest)

**Best for:** Quick setup, no backend needed, free tier available

1. **Sign up at [formspree.io](https://formspree.io)**
2. **Create a new form** and get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
3. **Update ContactForm.tsx:**

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        primaryGoal: formData.primaryGoal,
        budget: formData.budget,
        launchDate: formData.launchDate,
        message: formData.message,
        _subject: `Strategy Call Request: ${formData.projectType}`,
      }),
    });

    if (response.ok) {
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "",
        primaryGoal: "",
        budget: "",
        launchDate: "",
        message: "",
      });
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

**Free tier:** 50 submissions/month
**Paid plans:** Start at $10/month for 250 submissions

---

## Option 2: EmailJS (Free Tier Available)

**Best for:** Direct email delivery without backend

1. **Sign up at [emailjs.com](https://www.emailjs.com)**
2. **Set up email service** (Gmail, Outlook, etc.)
3. **Create email template** with your form fields
4. **Get your Service ID, Template ID, and Public Key**
5. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```
6. **Update ContactForm.tsx:**

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        primaryGoal: formData.primaryGoal,
        budget: formData.budget,
        launchDate: formData.launchDate,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    setSubmitStatus("success");
    // Reset form...
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

**Free tier:** 200 emails/month

---

## Option 3: Netlify Forms (If Using Netlify)

**Best for:** If you're using Netlify for hosting

1. **Add `netlify` attribute to form:**
   ```tsx
   <form className="contact-form__form" onSubmit={handleSubmit} netlify>
   ```
2. **Add hidden input:**
   ```tsx
   <input type="hidden" name="form-name" value="contact" />
   ```
3. **Deploy to Netlify** - forms are automatically detected

---

## Option 4: Custom Backend API

**Best for:** Full control, custom logic

Since you're on Hostinger, you could:

1. **Create a simple Node.js/Express API** on Hostinger
2. **Use Nodemailer** to send emails
3. **Update form to POST to your API endpoint**

Example endpoint:
```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  // Send email using nodemailer
  // Return success/error
});
```

---

## Recommendation

**Start with Formspree (Option 1)** - it's the easiest to set up, works immediately, and you can always migrate to a custom solution later if needed.

### Quick Setup Steps:

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form
3. Copy your form endpoint
4. Update the `handleSubmit` function in `ContactForm.tsx` with the code from Option 1 above
5. Test the form
6. Deploy!

The form will send you an email notification for each submission, and you can view all submissions in the Formspree dashboard.

---

## Current Implementation

Right now, the form uses `mailto:` which:
- ✅ Works immediately, no setup needed
- ❌ Requires user to have email client configured
- ❌ Less reliable across devices
- ❌ No submission tracking

For a professional portfolio, I'd recommend switching to Formspree or EmailJS.
