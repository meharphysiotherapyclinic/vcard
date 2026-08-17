# Mehar Physiotherapy Clinic — Digital vCard

A professional, mobile-friendly digital vCard and clinic profile for **Mehar Physiotherapy Clinic**, Gaur City-2, Greater Noida West, Uttar Pradesh.

**Live vCard:** https://meharphysiotherapyclinic.github.io/vcard/

**Main Website:** https://meharphysiotherapyclinic.github.io/website/

---

## Overview

This project provides a fast, responsive digital identity card for:

**Dr. Govindpreet Singh Arneja (B.P.T., M.I.A.P.)**  
**Senior Physiotherapist**  
**Mehar Physiotherapy Clinic**

The vCard page combines professional information, clinic contact details, physiotherapy services, patient reviews, directions, appointment/contact actions, QR sharing, downloadable contact information, and a lightweight physiotherapy assistant.

---

## Highlights

- Professional digital vCard
- Responsive mobile-first design
- Clinic and physiotherapist profile
- Direct Call button
- WhatsApp appointment button
- Share vCard functionality
- Downloadable `.vcf` contact card
- Copy Link functionality
- Main clinic website link
- Google Reviews link
- Lazy-loaded Google Maps
- QR code for easy sharing
- Physiotherapy services grouped by category
- Patient review carousel
- "Ask Physiotherapist" chat assistant
- Progressive Web App (PWA) support
- Service-worker caching
- Self-hosted DM Sans and DM Serif Display fonts
- SVG icon system
- Open Graph metadata
- Schema.org structured data
- Google and Bing verification
- SEO-friendly canonical URL
- Automated XML sitemap generation
- Automated `lastmod` updates
- Automatic `robots.txt` sitemap management

---

## Clinic Information

**Mehar Physiotherapy Clinic**

**Address:**

F-42 (Ground Floor), 16th Avenue,  
Gaur City-2, Greater Noida West,  
Opposite Gaur's International School,  
Sector 16C, Gautam Buddha Nagar – 201318, Uttar Pradesh, India

**Phone:** +91 9810359247

**Clinic Hours:** Monday–Sunday, 8:00 AM–9:00 PM

**Primary Website:**  
https://meharphysiotherapyclinic.github.io/website/

---

## About the Physiotherapist

**Dr. Govindpreet Singh Arneja (B.P.T., M.I.A.P.)** is a Senior Physiotherapist with over 20 years of clinical experience.

The clinic provides personalized physiotherapy and rehabilitation for orthopedic, neurological, sports, post-surgical, pediatric, and mobility-related conditions.

### Areas of Expertise

- Orthopedic Physiotherapy
- Neurological Rehabilitation
- Sports Physiotherapy
- Manual Therapy
- PNF Techniques
- Post-Surgical Rehabilitation
- Gait Analysis
- Stroke Rehabilitation
- Pediatric Physiotherapy
- Senior Citizen Care
- Home Visit Physiotherapy

---

## Services Featured on the vCard

### Orthopaedic Conditions

- Back Pain
- Neck Pain
- Knee Pain
- Frozen Shoulder
- Slip Disc
- Sciatica
- Tennis Elbow
- Tailbone Pain / Coccydynia

### Neurological Conditions

- Stroke Recovery
- Paralysis Care
- Parkinson's
- Bell's Palsy
- Balance Training

### Sports Injuries

- Sprains & Strains
- Ligament Injuries
- Sports Rehabilitation

### Post-Surgery & Paediatric

- Joint Replacement Rehabilitation
- Fracture Rehabilitation
- Spinal Surgery Rehabilitation
- Cerebral Palsy
- Developmental Delays

### Specialised Treatments

- Manual Therapy
- Gait Analysis
- PNF Techniques
- Postural Correction
- Home Visit Physiotherapy

Service buttons link to the corresponding detailed articles on the main clinic website.

---

## Contact and Sharing Features

The vCard includes several direct-action options:

| Feature | Function |
|---|---|
| Call | Opens the phone dialer |
| WhatsApp | Opens WhatsApp with an appointment message |
| Share vCard | Uses the device's native sharing interface where supported |
| Website | Opens the main clinic website |
| Save .vcf | Downloads the contact as a standard vCard file |
| Copy Link | Copies the current vCard URL |
| Google Reviews | Opens the clinic's Google reviews |
| Find Us | Displays the clinic location on Google Maps |
| QR Code | Provides a scannable shortcut to the vCard |

---

## Contact File

The project includes:

```text
govindpreet.vcf
```

The contact file uses the standard **vCard 3.0** format.

It contains:

- Name
- Organization
- Professional title
- Mobile number
- Website
- Work address

The `.vcf` file can be downloaded directly from the vCard page using the **Save .vcf** button.

---

## QR Code

The project includes:

```text
qr_vcard.png
```

The QR code is displayed on the vCard page so users can quickly open the digital contact card using a smartphone.

---

## AI / Physiotherapy Chat Assistant

The vCard includes a lightweight client-side chat assistant:

```text
ai-chatbot.js
ai-chatbot.css
chat-bot.webp
```

The assistant can respond to common queries related to:

- Clinic timings
- Location
- Home visits
- Appointments
- Contact information
- Treatment/session duration
- Common physiotherapy conditions
- Senior citizen care
- Basic safety/hygiene information

The assistant provides direct Call, WhatsApp and Directions actions where appropriate.

### Important

The current assistant is **rule-based JavaScript**, not a server-connected generative AI system. It does not send patient conversations to an external AI API.

---

## Technology Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- SVG
- WebP
- WOFF2 fonts

### Platform

- GitHub Pages
- GitHub Actions

### Integrations

- Google Maps
- Google Reviews
- WhatsApp
- Native Web Share API
- Browser Clipboard API

No traditional backend server is required.

---

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── generate-sitemap.yml
│
├── index.html
├── govindpreet.vcf
├── manifest.json
├── sw.js
├── robots.txt
├── sitemap.xml
│
├── style.css
├── ai-chatbot.css
├── ai-chatbot.js
│
├── fonts/
│   ├── dm-sans-v17-latin-regular.woff2
│   ├── dm-sans-v17-latin-500.woff2
│   ├── dm-sans-v17-latin-600.woff2
│   ├── dm-sans-v17-latin-700.woff2
│   └── dm-serif-display-v17-latin-regular.woff2
│
├── doctor.webp
├── logo.png
├── logo.webp
├── chat-bot.webp
├── qr_vcard.png
│
├── BingSiteAuth.xml
├── google6d91481cd7d4c371.html
│
└── README.md
```

---

## Progressive Web App

The project includes:

```text
manifest.json
sw.js
```

The web app manifest defines:

- Application name
- Short name
- Start URL
- Standalone display mode
- Theme color
- Background color
- Application icons

The service worker provides browser caching for supported resources and improves repeat-visit performance.

---

## Performance Optimizations

The vCard is designed to remain lightweight and fast.

Implemented optimizations include:

- Self-hosted fonts
- Font preloading
- WebP imagery
- Explicit image dimensions where appropriate
- Lazy loading of the doctor image
- Lazy loading of the Google Maps iframe using `IntersectionObserver`
- Minimal JavaScript dependencies
- SVG icons
- Service-worker caching
- Deferred loading of chatbot CSS
- Responsive layout
- Mobile-first interface

The Google Maps iframe is intentionally created only when the map section approaches the viewport, reducing unnecessary initial page loading.

---

## SEO

The page includes:

- SEO title
- Meta description
- Canonical URL
- Robots metadata
- Open Graph metadata
- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `og:site_name`
- Schema.org structured data
- MedicalClinic structured data
- Person structured data
- Geographic coordinates
- Opening hours
- Areas served
- Medical specialties
- Google Search Console verification
- Bing Webmaster verification
- XML sitemap
- `robots.txt`

### Structured Data

The page currently provides structured data for:

```text
MedicalClinic
Person
```

The clinic schema includes information such as:

- Clinic name
- Telephone
- Address
- Coordinates
- Opening hours
- Medical specialties
- Areas served
- Website
- Related profiles

The Person schema identifies Dr. Govindpreet Singh Arneja as a Senior Physiotherapist and associates him with Mehar Physiotherapy Clinic.

---

## Sitemap Automation

The GitHub Actions workflow:

```text
.github/workflows/generate-sitemap.yml
```

automatically manages the sitemap.

### Workflow actions

1. Checks out the repository.
2. Sets up Node.js 20.
3. Installs `sitemap-generator-cli`.
4. Generates `sitemap.xml`.
5. Installs `xmlstarlet`.
6. Reads the latest Git modification date of HTML files.
7. Adds or updates `lastmod` values.
8. Ensures `robots.txt` contains the correct sitemap URL.
9. Commits and pushes changes automatically.

### Schedule

The workflow is configured to run daily at:

```text
11:00 PM IST
```

It also runs:

- On pushes to `main`
- Manually through GitHub Actions

---

## Robots.txt

The automation maintains the sitemap declaration in:

```text
robots.txt
```

with the vCard sitemap URL.

This helps search engines discover the site's XML sitemap.

---

## Deployment

The project is designed for GitHub Pages.

### GitHub Pages

Recommended configuration:

1. Open the repository's **Settings**.
2. Select **Pages**.
3. Choose **Deploy from a branch**.
4. Select the `main` branch.
5. Select `/ (root)`.
6. Save.

The published site should be available at:

```text
https://meharphysiotherapyclinic.github.io/vcard/
```

---

## Local Development

The project is a static website and does not require a backend.

For local testing, use a simple HTTP server.

### Python

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Using an HTTP server is preferable to opening `index.html` directly because service workers, some browser APIs, and other web features may require a proper origin.

---

## Updating the vCard

### Clinic information

Edit:

```text
index.html
```

### Contact information

Update both:

```text
index.html
govindpreet.vcf
```

when changing contact details.

### Styling

Edit:

```text
style.css
```

### Chat assistant

Edit:

```text
ai-chatbot.js
ai-chatbot.css
```

### Images

Replace optimized image assets such as:

```text
doctor.webp
logo.webp
chat-bot.webp
qr_vcard.png
```

while keeping filenames consistent, or update their references in `index.html`.

### PWA

Update:

```text
manifest.json
sw.js
```

when changing PWA metadata or cached resources.

### Sitemap

Normally, do not manually edit:

```text
sitemap.xml
```

The GitHub Actions workflow is responsible for maintaining it.

---

## Maintenance Guidelines

- Keep the vCard information synchronized with the main website.
- Keep the `.vcf` contact file accurate.
- Verify the phone and WhatsApp links after changing the phone number.
- Test the QR code after changing the vCard URL.
- Test the native Share feature on mobile devices.
- Test the downloadable `.vcf` file on Android, iOS and desktop where practical.
- Keep images optimized.
- Preserve explicit image dimensions to reduce layout shifts.
- Test the map loading behavior after significant JavaScript changes.
- Keep structured data synchronized with the visible clinic information.
- Do not expose API keys, passwords, tokens or other secrets in the repository.
- Test the PWA after changing `manifest.json` or `sw.js`.
- Check both light and dark themes after major CSS changes.

---

## Browser Support

The vCard is intended for modern browsers including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Android browsers
- iOS Safari

Some functionality depends on browser support, including:

- Web Share API
- Clipboard API
- Service Workers
- IntersectionObserver
- PWA installation

The basic contact information and standard links remain usable without these advanced features.

---

## Related Website

The vCard complements the full clinic website:

https://meharphysiotherapyclinic.github.io/website/

The main website contains more extensive information about:

- Physiotherapy services
- Conditions
- Rehabilitation
- Articles
- FAQs
- Clinic information
- Patient resources

---

## License

The website, branding and original content are proprietary to **Mehar Physiotherapy Clinic**.

Unless explicitly stated otherwise, the following may not be reproduced, redistributed or used commercially without permission:

- Clinic branding
- Logo
- Original images
- Written content
- Clinical content
- Website design
- Original source code

---

## Contact

**Mehar Physiotherapy Clinic**  
F-42 (Ground Floor), 16th Avenue, Gaur City-2, Greater Noida West, Uttar Pradesh – 201318, India

**Phone:** +91 9810359247

**Website:**  
https://meharphysiotherapyclinic.github.io/website/

**Digital vCard:**  
https://meharphysiotherapyclinic.github.io/vcard/

**Physiotherapist:**  
Dr. Govindpreet Singh Arneja, B.P.T., M.I.A.P.
