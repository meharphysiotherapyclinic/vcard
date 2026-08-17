# Mehar Physiotherapy Clinic — Digital vCard

Professional digital vCard for **Dr. Govindpreet Singh Arneja (B.P.T., M.I.A.P.)**, Senior Physiotherapist at **Mehar Physiotherapy Clinic**, Greater Noida West.

**Live vCard:** https://meharphysiotherapyclinic.github.io/vcard/  
**Clinic Website:** https://meharphysiotherapyclinic.github.io/website/

## Features

- Responsive mobile-first design
- Professional physiotherapist and clinic profile
- Direct Call and WhatsApp actions
- Save contact as `.vcf`
- Native Share and Copy Link options
- QR code for easy sharing
- Clinic directions and Google Reviews
- Physiotherapy services and areas of expertise
- Patient reviews
- "Ask Physiotherapist" assistant
- Progressive Web App (PWA) support
- SEO and Schema.org structured data
- Optimized images and self-hosted fonts
- Automated sitemap generation with GitHub Actions

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- SVG
- WebP
- WOFF2 fonts
- GitHub Pages
- GitHub Actions

No traditional backend is required.

## Project Structure

```text
.
├── index.html
├── govindpreet.vcf
├── style.css
├── ai-chatbot.css
├── ai-chatbot.js
├── manifest.json
├── sw.js
├── robots.txt
├── sitemap.xml
├── fonts/
├── .github/workflows/
└── README.md
```

## Deployment

This is a static website designed for **GitHub Pages**.

For local testing:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Maintenance

- Keep `index.html` and `govindpreet.vcf` synchronized when contact details change.
- Keep images optimized and update references when filenames change.
- Test Call, WhatsApp, Share, QR and `.vcf` download functions after major updates.
- Do not commit passwords, API keys or other private credentials.
- `sitemap.xml` is maintained automatically through GitHub Actions.

## License

The website, branding, content, images and original source code are proprietary to **Mehar Physiotherapy Clinic** and may not be reproduced or redistributed without permission.
