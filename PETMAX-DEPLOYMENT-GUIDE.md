# Petmax deployment guide

Deployment completed: 18 October 2026

## Essential information

| Item | Value |
|---|---|
| Website | https://petmax.com.bd |
| Alternate address | https://www.petmax.com.bd |
| Hosting | OVHcloud VPS |
| VPS name | vps-48c48331.vps.ovh.us |
| Public IPv4 | 40.160.225.25 |
| Operating system | Ubuntu 24.04.3 LTS |
| SSH user | admin |
| Local project | D:\PetCare\PetCare Hub |
| Local deployment archive | D:\PetCare\petmax-deploy.tar.gz |
| Server application folder | /home/admin/petmax |
| Application address | http://127.0.0.1:3100 (inside VPS only) |
| Application service | petmax.service |
| Web server | Apache, ports 80 and 443 |
| Domain registrar | BTCL |
| DNS provider | Cloudflare, Free plan |
| Nameservers | gina.ns.cloudflare.com / ken.ns.cloudflare.com |

Passwords and private keys are deliberately excluded. SSH uses the VPS admin credentials, which are separate from OVH account login credentials. Change any passwords previously shared in screenshots.

## 1. Connect to the server

Run on your Windows computer in CMD or PowerShell:

```powershell
ssh admin@40.160.225.25
```

Enter the VPS admin password when prompted. Password characters are not displayed.

Run inside the VPS to inspect the environment:

```bash
whoami
cat /etc/os-release
sudo -v
node --version
npm --version
sudo ss -ltnp
ls -la /var/www /opt
sudo apache2ctl -S
sudo apache2ctl -M
sudo ufw status
```

At deployment, Node.js was v20.19.5 and npm was 10.8.2. Apache, MySQL, MongoDB and another Next.js application on port 3000 already existed. Petmax uses port 3100. Preserve existing applications and Apache sites.

## 2. Build locally and package

The production build was fixed by aligning Vite to version 8, enabling the application build, and selecting the Nitro Node server preset. The existing Windows build used Node.js v24.21.0. Use Node.js 24 for local builds.

Relevant package.json scripts:

```json
"build": "vite build --app",
"start": "node .output/server/index.mjs"
```

Relevant vite.config.ts option, within the existing defineConfig call:

```typescript
nitro: { preset: "node-server" },
```

One-time dependency correction already applied; do not repeat for routine deployments:

```powershell
cd "D:\PetCare\PetCare Hub"
npm.cmd install --save-dev vite@^8 --legacy-peer-deps --cache D:\PetCare\.npm-cache
```

For future builds, run on Windows PowerShell:

```powershell
cd "D:\PetCare\PetCare Hub"
# Install dependencies on a fresh checkout, or after lockfile changes:
npm.cmd ci --legacy-peer-deps
npm.cmd run build
```

Only package after the build succeeds:

```powershell
tar -czf "D:\PetCare\petmax-deploy.tar.gz" -C "D:\PetCare\PetCare Hub" .output
scp "D:\PetCare\petmax-deploy.tar.gz" admin@40.160.225.25:/home/admin/
```

The archive contains the entire .output folder, including server and public assets. It does not include the source project. Keep the source and package-lock.json backed up separately.

## 3. Initial extraction and temporary test

Run inside VPS (initial deployment only):

```bash
mkdir -p ~/petmax
tar -xzf ~/petmax-deploy.tar.gz -C ~/petmax
cd ~/petmax
HOST=127.0.0.1 PORT=3100 node .output/server/index.mjs
```

From a second SSH connection:

```bash
curl -I http://127.0.0.1:3100
```

Expected: HTTP 200. Stop the temporary foreground application with Ctrl+C before starting the service below. Opening 127.0.0.1 in your computer's browser addresses your computer, not the VPS.

## 4. Permanent service (already configured)

This is the configuration used during initial deployment. Routine updates do not require recreating it.

```bash
sudo tee /etc/systemd/system/petmax.service > /dev/null <<'EOF'
[Unit]
Description=Petmax website
After=network.target

[Service]
Type=simple
User=admin
WorkingDirectory=/home/admin/petmax
Environment=NODE_ENV=production
Environment=HOST=127.0.0.1
Environment=PORT=3100
ExecStart=/usr/bin/env node /home/admin/petmax/.output/server/index.mjs
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now petmax
sudo systemctl status petmax --no-pager
curl -I http://127.0.0.1:3100
```

The enabled service starts on reboot and restarts after application failures. SSH can be closed safely.

## 5. Apache reverse proxy (already configured)

Original HTTP configuration used during setup:

```bash
sudo tee /etc/apache2/sites-available/petmax.conf > /dev/null <<'EOF'
<VirtualHost *:80>
    ServerName petmax.com.bd
    ServerAlias www.petmax.com.bd

    ProxyRequests Off
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3100/
    ProxyPassReverse / http://127.0.0.1:3100/

    ErrorLog ${APACHE_LOG_DIR}/petmax-error.log
    CustomLog ${APACHE_LOG_DIR}/petmax-access.log combined
</VirtualHost>
EOF

sudo a2ensite petmax.conf
sudo apache2ctl configtest
```

Only if configtest reports Syntax OK:

```bash
sudo systemctl reload apache2
curl -I -H 'Host: petmax.com.bd' http://127.0.0.1
```

Certbot subsequently added HTTPS and HTTP redirects. Do not overwrite the current configuration with the original example during routine updates.

Important configuration files:

```text
/etc/apache2/sites-available/petmax.conf
/etc/apache2/sites-available/petmax-le-ssl.conf
/etc/systemd/system/petmax.service
```

## 6. DNS configuration

Cloudflare DNS records:

| Type | Name | Content | Proxy | TTL |
|---|---|---|---|---|
| A | @ | 40.160.225.25 | DNS only | Auto |
| A | www | 40.160.225.25 | DNS only | Auto |

Use @ for the root domain, not @www. Keep DNS only for the documented setup.

BTCL navigation: Domain → Domain-Market → Search → search petmax.com.bd → DNS column → Edit.

| BTCL field | Value |
|---|---|
| Primary DNS | gina.ns.cloudflare.com |
| Secondary DNS | ken.ns.cloudflare.com |
| Tertiary DNS | Empty |
| DS Records | Empty in the deployed configuration |

Nameserver changes were submitted successfully. The registry initially still returned BTCL's old nameservers, causing SERVFAIL. Once it updated, public resolvers returned the Cloudflare nameservers and VPS address. Do not repeatedly resubmit settings while waiting.

No mail records were imported by the initial Cloudflare scan. If domain email is needed, obtain and add the mail provider's MX, SPF, DKIM and other required records separately.

VPS DNS checks:

```bash
dig @gina.ns.cloudflare.com petmax.com.bd A +short
dig @gina.ns.cloudflare.com www.petmax.com.bd A +short
dig @1.1.1.1 petmax.com.bd NS +short
dig @1.1.1.1 petmax.com.bd A +short
dig @1.1.1.1 www.petmax.com.bd A +short
```

Troubleshooting with full responses:

```bash
dig @1.1.1.1 petmax.com.bd NS
dig @8.8.8.8 petmax.com.bd A
dig +trace petmax.com.bd NS
```

Windows CMD checks:

```cmd
nslookup -type=ns petmax.com.bd 1.1.1.1
nslookup petmax.com.bd 1.1.1.1
nslookup www.petmax.com.bd 1.1.1.1
```

## 7. HTTPS certificate (already installed)

Certbot version at deployment: 2.9.0. After both domain names resolved to the VPS, these commands were used:

```bash
certbot --version
sudo certbot --apache -d petmax.com.bd -d www.petmax.com.bd --redirect
```

Certificate paths:

```text
/etc/letsencrypt/live/petmax.com.bd/fullchain.pem
/etc/letsencrypt/live/petmax.com.bd/privkey.pem
/etc/letsencrypt/renewal/petmax.com.bd.conf
```

The initial certificate expires on 16 January 2027; its expiry date changes after renewal. Certbot reported that automatic renewal was scheduled. Do not share or copy the private key into the public website or source repository.

Verification commands:

```bash
curl -I https://petmax.com.bd
curl -I https://www.petmax.com.bd
sudo certbot renew --dry-run
```

Verified results: both HTTPS addresses returned HTTP 200. Simulated renewals succeeded for Petmax and the existing nuhashgazi.com certificate. The dry-run command tests all configured certificates; it does not require manual renewal after each deployment.

## 8. Future website updates

Build and upload using section 2 first. No DNS or certificate changes are needed for ordinary content/design updates.

The following safer update procedure uses a staging folder and retains the previous build for rollback. Run commands one step at a time and stop if any command fails.

Inside VPS:

```bash
petmax_release=$(date +%Y%m%d-%H%M%S)
petmax_stage=$(mktemp -d /home/admin/petmax-stage.XXXXXX)
tar -xzf /home/admin/petmax-deploy.tar.gz -C "$petmax_stage"
test -f "$petmax_stage/.output/server/index.mjs" && echo "Staged build ready"
```

Continue only after Staged build ready is shown:

```bash
sudo systemctl stop petmax
mv /home/admin/petmax/.output "/home/admin/petmax/.output-backup-$petmax_release"
mv "$petmax_stage/.output" /home/admin/petmax/.output
sudo systemctl start petmax
sudo systemctl status petmax --no-pager
```

After the service starts (wait a few seconds if needed):

```bash
curl -I http://127.0.0.1:3100
curl -I https://petmax.com.bd
```

This procedure causes a brief interruption while switching builds. Keep the backup until the updated site has been checked in a browser.

If the new version fails, rollback in the same SSH session:

```bash
sudo systemctl stop petmax
mv /home/admin/petmax/.output "/home/admin/petmax/.output-failed-$petmax_release"
mv "/home/admin/petmax/.output-backup-$petmax_release" /home/admin/petmax/.output
sudo systemctl start petmax
```

If reconnecting first, replace the variable-based backup name with the actual backup folder shown by ls -la /home/admin/petmax. Do not remove backups until you have verified the active build.

## 9. Troubleshooting and maintenance

Run inside VPS:

```bash
# Application status and recent errors
sudo systemctl status petmax --no-pager
sudo journalctl -u petmax -n 100 --no-pager

# Restart application after investigating a problem
sudo systemctl restart petmax

# Apache status and configuration
sudo apache2ctl configtest
sudo apache2ctl -S
sudo systemctl status apache2 --no-pager
sudo tail -n 100 /var/log/apache2/petmax-error.log

# Certificate details
sudo certbot certificates

# Disk usage
df -h
```

| Symptom | Check |
|---|---|
| SSH Permission denied | Use admin, not root; verify VPS credentials |
| 127.0.0.1 fails in PC browser | It is local to the computer; use the public HTTPS domain |
| Apache 502/503 | Check petmax service, logs and localhost:3100 |
| Domain SERVFAIL | Check authoritative nameservers, delegation and DNS responses |
| Wrong website | Check DNS IP and Apache ServerName/VirtualHost mapping |
| SSL issue | Check certificate status, both DNS records, ports 80/443 and renewal logs |

The VPS reported pending OS updates and a required restart during deployment. Schedule OS maintenance separately, considering the other existing applications. No OS upgrade or reboot was performed in this deployment.

## 10. Functional limits and final checklist

- The appointment form is presentational; it does not submit bookings to a backend.
- Check desktop/mobile layout, images, navigation, contact links and all visible buttons after updates.
- Keep source code and lockfile backed up; a build archive is not a source backup.
- Keep Cloudflare and BTCL access under the domain owner's control.
- Final verified infrastructure state: systemd service running, Apache routing working, DNS resolving, both HTTPS URLs returning HTTP 200, and certificate renewal simulation successful.
