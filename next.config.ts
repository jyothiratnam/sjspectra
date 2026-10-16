import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: { root: process.cwd() },
  outputFileTracingRoot: process.cwd(),
  experimental: { useTypeScriptCli: false },
};

export default nextConfig;
