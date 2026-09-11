import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  devIndicators: false,
  // Lets devices on the local network load dev assets when testing on mobile.
  allowedDevOrigins: [
    "192.168.1.*",
    "192.168.0.*",
    "192.168.*.*",
    "10.*.*.*",
    "172.20.*.*",
    "172.21.*.*",
  ],
};

export default nextConfig;
