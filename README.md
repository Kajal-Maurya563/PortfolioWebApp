# Portfolio Web App

This is a modern, responsive portfolio web application built with [Next.js](https://nextjs.org/), React, and Tailwind CSS. It showcases your professional profile, skills, projects, and provides a way for visitors to get in touch. The app is designed for developers, designers, and professionals who want to present their work and experience in a visually appealing and interactive way.

---

## Table of Contents
- [About](#about)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Running the App](#running-the-app)
- [Customization](#customization)
- [Limitations](#limitations)
- [License](#license)

---

## About

This portfolio app includes:
- A landing page with your name, profile image, and a short introduction.
- A section for companies/brands you have worked with.
- A projects page to showcase your works with descriptions, tech stack, and links.
- A skills page displaying your technical skills with logos.
- A contact page with a form and social links.
- Responsive design and smooth UI animations.

---

## Features
- Built with Next.js 15 and React 19
- Tailwind CSS for rapid and modern styling
- Modular component structure (Navbar, Cards, Skill Cards, etc.)
- Animated sparkles and interactive UI elements
- Easy to customize content and styles
- Mobile-friendly and accessible

---

## Project Structure

```
PortfolioWebApp/
├── app/
│   ├── components/         # Reusable UI components
│   ├── getintouch/         # Contact page
│   ├── projects/           # Projects showcase
│   ├── skills/             # Skills display
│   ├── globals.css         # Global styles
│   ├── layout.js           # App layout
│   └── page.js             # Home page
├── lib/                    # Utility functions
├── public/                 # Static assets (images, icons, logos)
├── package.json            # Project metadata and scripts
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.mjs      # PostCSS config
├── next.config.mjs         # Next.js config
└── README.md               # Project documentation
```

---

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd PortfolioWebApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **(Optional) Configure environment variables:**
   - If you add features like email sending, API keys, or analytics, create a `.env.local` file and add your variables there.

---

## Running the App

### Development
Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production
Build and start the app for production:
```bash
npm run build
npm start
```

---

## Customization

- **Profile Info:** Edit `app/page.js` to update your name, introduction, and profile image.
- **Projects:** Update the projects array in `app/projects/page.js` with your own projects, descriptions, and links.
- **Skills:** Edit the skills array in `app/skills/page.js` to reflect your tech stack and add logos to `public/logos/`.
- **Contact Info:** Customize the contact form and social links in `app/getintouch/page.js` and `app/components/socialDock.js`.
- **Branding:** Update colors, fonts, and styles in `globals.css` and Tailwind config as needed.

---

## Limitations

- **Static Content:** All content (projects, skills, profile info) is currently hardcoded in the source files. There is no CMS or admin panel.
- **No Backend:** The contact form does not send emails by default. You need to integrate an email service or backend API for full functionality.
- **Demo Assets:** Some images/logos are placeholders. Replace them with your own assets in the `public/` directory.
- **Accessibility:** While basic accessibility is considered, further improvements may be needed for full WCAG compliance.
- **No Authentication:** There is no user login or protected routes.

---

## License

This project is open source and free to use for personal and educational purposes. For commercial use, please check the license terms or contact the author.
