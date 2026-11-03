# Resume.V2Site

## Table of Contents

1. [Overview](#overview)
   1. [Key Components](#key-components)
   2. [Technology](#technology)
2. [Rules, Practices and Principles](#rules-practices-and-principles)
3. [Resources](#resources)

## Overview

**What is the project?**
A multi-page personal resume website for David Miguel D. Agruda in a cyberpunk (Edgerunners-inspired) theme. The landing page (Home) links to three pages: About, Skills & Projects, and Contact.

**What is the purpose?**
To present education, tech stack, projects, and contact details in one shareable site, based on the single-page resume at <https://dukeerizzia.github.io/Resume/>.

**What are the key components?**
See below.

**What technology is used and how?**
See below.

### Key Components

* **Multi-page website**
  * `index.html`: Home (landing page with buttons to every page)
  * `pages/about/index.html`: Page 1, About (profile, education, achievements, printable resume)
  * `pages/skillsProjects/index.html`: Page 2, Skills and Projects (tech stack, filterable projects)
  * `pages/contact/index.html`: Page 3, Contact
* **Parallax transition**: elements marked `data-parallax="speed"` drift at a different rate than the scroll (`assets/js/script.js`).
* **Transactional**: the contact form validates its fields and hands the message to the visitor's mail app (`mailto:`), so no backend is required.
* **Cyberpunk theme**: neon yellow/cyan/pink palette, cut-corner panels, scanlines, glitch text, and glitch-fade page transitions.

### Technology

| Tech | Use |
| --- | --- |
| HTML5 | Page structure and semantic markup |
| CSS3 (external only) | CSS variables, grid/flexbox, clip-path panels, animations, print styles |
| JavaScript (ES6) | Mobile menu, page transitions, parallax, scroll reveal, project filter, form validation |
| Google Fonts | Orbitron, Rajdhani, Share Tech Mono |

## Rules, Practices and Principles

1. Do not rename any `.html` files; always use `index.html`.
2. Place files in their respective folders.
3. All file names are in camelCase (example: `buttonAnimatedStyle.css`).
4. Use only external CSS.
5. Page folder names describe what the page does or holds.
6. Follow the file structure below.

```
WD-ResumeSite
└─ assets
|   └─ css
|   |   └─ style.css
|   └─ img
|   |   └─ photo.jpg   (add your own photo here)
|   └─ js
|       └─ script.js
└─ pages
|  └─ about
|  |  └─ assets (css/style.css, img, js/script.js)
|  |  └─ index.html
|  └─ skillsProjects
|  |  └─ assets (css/style.css, img, js/script.js)
|  |  └─ index.html
|  └─ contact
|     └─ assets (css/style.css, img, js/script.js)
|     └─ index.html
└─ index.html
└─ readme.md
```

## Resources

* Reference resume: <https://dukeerizzia.github.io/Resume/>
* Fonts: [Google Fonts](https://fonts.google.com/)
* MDN Web Docs: <https://developer.mozilla.org/>
