import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MultiStepForm",
  assetPrefix: "/MultiStepForm",
  env: {
    __NEXT_PUBLIC_BASE_PATH: "/MultiStepForm",
  },
  /* config options here */
};

export default nextConfig;
