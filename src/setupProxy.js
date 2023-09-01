// 必须使用cjs
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://localhost:5001/',
      changeOrigin: true,
      pathRewrite: {
        '^/api1': '',
      },
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5002/',
      changeOrigin: true,
      pathRewrite: {
        '^/api2': '',
      },
    }),
  );
};
