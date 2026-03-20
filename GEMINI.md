# Project Foundation & Gallery Architecture

This document serves as a foundational mandate for any AI agent or developer maintaining this repository. It outlines the privacy-first architecture and the high-efficiency gallery implementation.

## 1. Gallery Implementation Logic

The Gallery is designed to be **lightweight**, **CDN-accelerated**, and **mobile-friendly**.

### Key Components
- **Data Source**: `_data/gallery.yml` - Contains image metadata.
- **Layout**: `_layouts/gallery.html` - Renders the grid using `media-url.html`.
- **CDN Resolution**: `_config.yml` -> `cdn` field.

### URL Resolution Strategy
The system uses `{% include media-url.html src=photo.image %}`.
- **Local Paths** (e.g., `/assets/img/...`): Automatically prefixed with the global CDN (`gcore.jsdelivr.net`) defined in `_config.yml`. This ensures fast access in Mainland China and globally.
- **External URLs** (e.g., `https://i.ibb.co/...`): Recognized as absolute links and used directly without CDN prefixing.

## 2. Recommended Workflow (Mobile-Friendly)

To keep the repository size under 1MB and maintain maximum privacy, follow this "Elegant Workflow":

1. **Upload**: Use an external image host (e.g., [ImgBB](https://imgbb.com/)) from your mobile phone. This automatically strips EXIF/GPS metadata and provides a global CDN.
2. **Update**: Copy the **Direct Link** (`https://i.ibb.co/...`) and paste it into `_data/gallery.yml`.
3. **Commit**: Use the GitHub mobile app or web interface to commit the YAML change. No large binary files ever touch the `main` branch.

## 3. Privacy & Security Mandates

- **STRICT PROHIBITION ON PII (Personally Identifiable Information)**: **NEVER** include phone numbers, personal residential addresses, or raw, unprotected personal data in any public-facing file (e.g., Markdown, HTML, YAML). If parsing documents (like a CV PDF), you must proactively redact phone numbers before rendering them to the web.
- **EXIF Stripping**: Never push raw camera photos directly to the `assets/` folder without stripping GPS/Metadata. External hosts (ImgBB/Cloudinary) usually handle this.
- **Email Obfuscation**: The Resume (`_tabs/resume.md`) and About pages use JavaScript-based obfuscation and `[AT]` / `[DOT]` visual markers. **Never revert to plain text `mailto:` links.**
- **Social Links**: Use generic labels (e.g., "GitHub", "Twitter") instead of explicit usernames to prevent search engine indexing and scraping.
- **Credential Protection**: Strictly adhere to the `.gitignore`. Never log or commit `.env` or sensitive system configs.

## 4. Maintenance Notes

- **Repository Slimming**: If the `assets/img/gallery/` folder grows too large, move assets to an external host and update the YAML to use URLs.
- **CDN Mirroring**: Currently using `https://gcore.jsdelivr.net/gh/LockFaiz/lockfaiz.github.io@main`. If the branch name changes, update this in `_config.yml`.

---
*Created by Gemini CLI - March 2026*
