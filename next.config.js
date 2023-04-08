/** @type {import('next').NextConfig} */
const path = require('path');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  i18n: {
    locales: ['en-US', 'fi-FI'],
    defaultLocale: 'fi-FI',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@resources': path.resolve(__dirname, 'src/styles/resources'),
      '@variables': path.resolve(__dirname, 'src/styles/resources/variables'),
      '@mixins': path.resolve(__dirname, 'src/styles/resources/mixins'),
      '@rfs': path.resolve(__dirname, 'node_modules/rfs/scss')
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});

const nextConfig = {
  /* config options here */
}
module.exports = nextConfig