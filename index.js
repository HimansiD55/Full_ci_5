const express = require('express');
const app = express();
const { version } = require('./package.json');

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/crash', (req, res) => {
  const config = require('./config.json')  // ← only crashes when THIS route is hit
  res.json(config)
});

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

module.exports = app;


     /* 
      const express = require('express');
      const app = express();
      
      const { version } = require('./package.json');
      
      app.get('/', (req, res) => {
        res.json({ status: "ok" });
      });
      // Health endpoint
      app.get('/health', (req, res) => {
        res.json({ version: version });
      });
      
      module.exports = app; // 👈 important for testing
      
      // Only run server if not in test
      if (require.main === module) {
        const PORT = 3000;
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
          });
        }
*/
