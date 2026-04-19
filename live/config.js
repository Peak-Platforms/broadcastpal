// viewer-portal/config.js
// Include this script BEFORE index.html's closing </body> tag
// when deploying to Cloudflare Pages or any static host.
// Set these to your actual service URLs.

window.XSEN_ORCHESTRATOR_URL = 'https://broadcastpal-server-production.up.railway.app';
window.XSEN_NGINX_HLS_BASE   = 'https://broadcastpal-nginx-production.up.railway.app';   // e.g. nginx-production-xxxx.up.railway.app
window.XSEN_AZURACAST_URL    = 'https://stream.xsen.fun';

// REMOVED: window.XSEN_ANT_MEDIA_URL — AntMedia replaced by nginx on Railway
