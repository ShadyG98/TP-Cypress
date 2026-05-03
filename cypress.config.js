const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationintesting.online',
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});