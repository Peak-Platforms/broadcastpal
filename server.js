const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set CSP header on all responses
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self' https:; media-src 'self' https: blob:; connect-src 'self' https: wss:; script-src 'self' https: 'unsafe-inline'; worker-src blob:; img-src 'self' https: data:; style-src 'self' https: 'unsafe-inline';"
  );
  next();
});

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`BroadcastPal static server running on port ${PORT}`);
});
