// Import the next-pwa plugin
import withPWA from "@ducanh2912/next-pwa";

// Initialize the PWA plugin with options
const pwaConfig = withPWA({
  dest: "public", // Output directory for PWA files
  // disable: process.env.NODE_ENV === "development", // Optional: disable in development
  // register: true, // Optional: auto-register service worker
  // skipWaiting: true, // Optional: skip waiting for service worker activation
  // Additional options can be added here as needed
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

// Export the configuration wrapped with PWA settings
export default pwaConfig(nextConfig);
