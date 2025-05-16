/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    // Activer l'optimiseur d'images intégré de Next.js 15
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**',
      },
    ],
  },
  // Activer le support TypeScript pour la configuration
  typescript: {
    // Vérification de type pendant la construction
    ignoreBuildErrors: false,
  },
  // Activer Turbopack en développement
  experimental: {
    turbo: {
      rules: {
        // Configurations spécifiques pour Turbopack
      },
    },
  },
};

module.exports = nextConfig;