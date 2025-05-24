/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de'],
    localeDetection: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig 