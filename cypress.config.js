const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "watchForFileChanges": false,
    "baseUrl": "http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com"
  },
});
