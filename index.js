const express = require('express');
const app = express();

// Load version from package.json
const { version } = require('./package.json');

// Root endpoint
app.get('/', (req, res) => {
  res.json({ status: "ok" });
});

// Health endpoint
app.get('/health', (req, res) => {
  res.json({ version: version });
});

// Export app for testing
module.exports = app;

// Start server only if run directly
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
