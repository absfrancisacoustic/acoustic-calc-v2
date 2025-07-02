import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// next.config.js
module.exports = {
  reactStrictMode: false, // optional
  onDemandEntries: {
    // disables the error overlay completely
    websocketPort: 0
  },
}
