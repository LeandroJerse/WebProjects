# ⏱️ Chronos Pomodoro

A Pomodoro timer app built with React, TypeScript, and Vite.

## 📋 About the Project

Chronos Pomodoro is a web application that implements the Pomodoro Technique for time management. It helps you stay focused by splitting work into concentrated intervals, traditionally 25 minutes, followed by short breaks.

## 🚀 Tech Stack

- **React 19** – UI library
- **TypeScript** – Static typing for JavaScript
- **Vite** – Fast dev server and build tool
- **Lucide React** – Modern icon set
- **CSS Modules** – Locally scoped styling
- **ESLint** – Linting for code quality
- **Prettier** – Code formatter

## 🎨 Features

- ⏱️ Pomodoro timer
- 🌙 Dark theme
- 🎯 Clean, modern UI
- 📱 Responsive design
- ⚡ Optimized performance with Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-user/chronos-pomodoro.git
```

2. Navigate to the project folder:
```bash
cd chronos-pomodoro
```

3. Install dependencies:
```bash
npm install
```

## 🛠️ Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Create production build
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint
- `npm run format` – Format code with Prettier
- `npm run format:check` – Check code formatting

## 🧱 Project Structure

```
chronos-pomodoro/
├── src/
│   ├── components/            # React components (CSS Module co-location)
│   │   ├── Container/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── Heading/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── Logo/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   ├── styles/                # Global styles and theme
│   │   ├── global.css
│   │   └── theme.css
│   ├── App.tsx                # Root component
│   └── main.tsx               # Entry point
├── public/                    # Static assets
└── index.html                 # HTML entry
```

## 📝 Recent Changes

- Restructured components into dedicated folders with `index.tsx` and `styles.module.css` (style co-location).
- Added `Logo` component and imported it in `App.tsx`.
+- Updated `App.tsx` to use `Container`, `Heading`, and `Logo` to organize Menu, Form, and Footer sections.
- Adjusted `styles/global.css` (reset/base) and consolidated theme variables in `styles/theme.css`.

## 🎨 Theme System

The project uses CSS Custom Properties for color management:

- **Gray Scale** – Shades from 100 to 900
- **Primary Colors** – Primary palette and variations
- **Semantic Colors** – Success, warning, error, and info
- **Text Colors** – Text for different surfaces

## 📝 License

This project is licensed under the MIT License.