// PM2 process definition for running the Next.js production server on a VPS.
// Usage (from the project root, after `npm run build`):
//   pm2 start ecosystem.config.js
//   pm2 save && pm2 startup   # keep it running after reboot
module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
