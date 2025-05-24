/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de'],
    localeDetection: false,
  },
  reactStrictMode: true,
}

module.exports = nextConfig 