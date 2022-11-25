const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
      experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === "chrome") {
          
          launchOptions.args.push("--disable-site-isolation-trials");
    
          // whatever you return here becomes the new args
          return launchOptions;
        }
      
        return launchOptions
      });
    },
  },watchForFileChanges: false,
  viewportHeight: 1200,
});
