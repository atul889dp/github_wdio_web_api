## WebdriverIO web automation project

### Project uses the following architecture:

 * WebdriverIO as test automation API
 * Page-object pattern
 * MochaJS test framework
 * Chai assertion library
 * HTML Report - wdio-html-nice-reporter library  


### Requirements for running the tests:

 * NodeJS (LTS version)
 * Chrome (v97+)

### Documentation:
 * [WebdriverIO](https://webdriver.io/docs/api) tool api documentation
 * [MochaJS](https://mochajs.org/) test runner used to run test cases
 * [Page-object](https://webdriver.io/docs/pageobjects) pattern usage
 * [Report](https://www.npmjs.com/package/wdio-html-nice-reporter) reporter usage

### Steps for Installation and running the tests :
 
 * Download project
 * Run `$> npm install` to install all the dependencies present in package.json
 * Run `$> npm run test` to run all tests present in specs declared of wdio.config.js file
 * Run `$> npm run test -- --spec=specs/your-file-name.js` to run one specific spec


 * Reports after execution
 * Spec report can be found in console
 * Html report can be found in path `./reports/html-reports/`


