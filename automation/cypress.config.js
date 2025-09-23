const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    defaultCommandTimeout: 8000
  }
});
