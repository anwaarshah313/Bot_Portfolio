/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add file-loader for video files
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'static/videos/', // Directory within `.next/static` where videos will be saved
              publicPath: '/_next/static/videos/', // Public URL to access the video files
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  