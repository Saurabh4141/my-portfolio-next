# Deploying to a Hostinger VPS (Node.js)

This app runs as a real Next.js Node server. Below is a clean, repeatable setup
on a Hostinger VPS (Ubuntu).

> Replace `gaikwadsaurabh.com` with your domain and `/var/www/portfolio` with
> your chosen path.

## 1. Point your domain at the VPS

In Hostinger → your domain's DNS, create an **A record** for `@` (and `www`)
pointing to your VPS IP address.

## 2. SSH in and install the toolchain

```bash
ssh root@YOUR_VPS_IP

# Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs git nginx

# PM2 (keeps the app running / restarts on boot)
npm install -g pm2
```

## 3. Get the code onto the server

Either `git clone` your repo, or upload the project folder (without
`node_modules`/`.next`) via SFTP, into `/var/www/portfolio`.

```bash
cd /var/www/portfolio
```

## 4. Configure the environment

No environment variables are required for this build.

## 5. Build and start

```bash
npm install
npm run build
pm2 start ecosystem.config.js   # serves on 127.0.0.1:3000
pm2 save
pm2 startup                     # run the command it prints, to persist on reboot
```

App is now live locally at `http://127.0.0.1:3000`. Next we expose it.

## 6. Nginx reverse proxy

Create `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    server_name gaikwadsaurabh.com www.gaikwadsaurabh.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it and reload:

```bash
ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

## 7. Free HTTPS (Let's Encrypt)

```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d gaikwadsaurabh.com -d www.gaikwadsaurabh.com
```

Certbot adds the SSL config and auto-renews.

## Updating later

```bash
cd /var/www/portfolio
git pull            # or re-upload changed files
npm install         # only if dependencies changed
npm run build
pm2 reload portfolio
```

## Notes

- The 3D model, GSAP/Lenis animations, chess engine, and chat all run exactly as
  in development.
- The 3D character model files (`public/models/character.enc`) and the Draco
  decoder are plain static files served by Next from `public/` — no extra config
  needed.
- Security headers (`X-Frame-Options`, etc.) are set in `next.config.mjs` and are
  served by the Node app automatically.
