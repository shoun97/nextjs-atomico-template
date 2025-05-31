/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config:any) => {
    config.resolve.alias['@atoms'] = require('path').resolve(__dirname, 'src/components/atoms');
    config.resolve.alias['@molecules'] = require('path').resolve(__dirname, 'src/components/molecules');
    config.resolve.alias['@organisms'] = require('path').resolve(__dirname, 'src/components/organisms');
    config.resolve.alias['@templates'] = require('path').resolve(__dirname, 'src/templates');
    return config;
  },
};

module.exports = nextConfig;
