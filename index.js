
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

