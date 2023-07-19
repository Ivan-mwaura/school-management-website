const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api/v1',
      createProxyMiddleware({
        target: 'http://localhost:5000', // Replace with the URL of your Node.js backend
        changeOrigin: true,
      })
    );
  };
  