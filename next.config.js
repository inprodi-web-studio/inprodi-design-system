
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // transpilePackages: [
  //   "antd",
  //   "rc-util",
  //   "@babel/runtime",
  //   "@babel/runtime/helpers",
  //   "@ant-design/icons",
  //   "@ant-design/icons-svg",
  //   "rc-pagination",
  //   "rc-picker",
  //   "rc-tree",
  //   "rc-table",
  // ],
};

module.exports = nextConfig;