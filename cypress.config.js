const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    requestTimeout: 15000,
    responseTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
