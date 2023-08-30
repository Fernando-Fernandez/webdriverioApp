## Logging into Salesforce using headless browser

- uses [Webdriverio](https://webdriver.io/docs/gettingstarted) to silently log in Salesforce and take a screenshot

### Setup steps:

- `npm init`
- `npm init wdio .`
- answer the prompts (E2E testing/Web, Mocha, no compiler, Page Object pattern, then defaults) or use this to have it select for you:  `npm init wdio . -- --yes` 
- run with `node ./app.js`

