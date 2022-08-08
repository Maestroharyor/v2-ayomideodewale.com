/** @type {import('next').NextConfig} */
const nextSettings = {
  reactStrictMode: true,
  env: {
      title: 'Ayomide Odewale (MaestroHaryor)',
      name: "Ayomide Odewale",
      titleDescription: 'Welcome to Me',
  },
    i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextSettings;
