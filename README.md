# Personal Website

A modern, multilingual personal website built with Next.js, featuring dark mode support and internationalization.

## Features

- 🌍 Internationalization (i18n) support for English, Russian, and German
- 🌓 Dark/Light mode toggle
- 🎨 Modern and responsive design
- ⚡ Built with Next.js and TypeScript
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized

## Technologies Used

- Next.js 13.4
- React 18
- TypeScript
- Tailwind CSS
- next-i18next
- next-themes
- Framer Motion
- Emotion

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── public/
│   └── locales/          # Translation files
│       ├── en/
│       ├── ru/
│       └── de/
├── src/
│   ├── components/       # React components
│   ├── pages/           # Next.js pages
│   └── styles/          # Global styles
├── next.config.ts       # Next.js configuration
├── next-i18next.config.js # i18next configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Adding New Languages

1. Create a new folder in `public/locales` with the language code
2. Copy the structure from an existing language folder
3. Translate the content in the JSON files
4. Add the language code to the `locales` array in `next-i18next.config.js`

## Contributing

Feel free to submit issues and enhancement requests!
