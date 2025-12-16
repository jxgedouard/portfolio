# Portfolio

Personal portfolio website showcasing software engineering projects and technical skills.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Responsive design
- Multi-language support (FR/EN)

## Features

- Interactive project showcase
- Contact modal
- Background music with audio visualizer
- Intro loader animation
- Language switcher (French/English)

## Structure

```
portfolio/
├── index.html
├── projects.html
├── about.html
├── src/
│   ├── css/style.css
│   ├── js/main.js
│   └── assets/
└── README.md
```

## Local Development

Open `index.html` in your browser or use a local server:

```bash
python -m http.server 8000
```

Navigate to `http://localhost:8000`

## Deployment on GitHub Pages

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub named `portfolio`

3. Push to GitHub:
```bash
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

5. Access your site at: `https://yourusername.github.io/portfolio`

## License

© 2025 Edouard Joggerst. All rights reserved.
