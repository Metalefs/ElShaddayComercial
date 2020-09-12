# ElShaddayCommercial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

angular.json
 "styles": [
  "node_modules/@clr/icons/clr-icons.min.css",
  "node_modules/@clr/ui/clr-ui.min.css",
  "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
  "src/styles.css",
  "./node_modules/bulma/css/bulma.css"
],
"scripts": [
  "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
  "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
  "node_modules/@clr/icons/clr-icons.min.js"
]

package.json

"scripts": {
    "ng": "ng",
    "heroku-postbuild": "ng build --prod",
    "start": "node server.js",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "engines": {
    "node": "12.18.2",
    "npm": "6.14.5"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~10.0.3",
    "@angular/cdk": "^10.0.1",
    "@angular/cli": "~10.0.2",
    "@angular/common": "~10.0.3",
    "@angular/compiler": "~10.0.3",
    "@angular/compiler-cli": "~10.0.3",
    "@angular/core": "~10.0.3",
    "@angular/flex-layout": "^10.0.0-beta.32",
    "@angular/forms": "~10.0.3",
    "@angular/material": "^10.0.1",
    "@angular/platform-browser": "~10.0.3",
    "@angular/platform-browser-dynamic": "~10.0.3",
    "@angular/router": "~10.0.3",
    "@angular/service-worker": "~10.0.3",
    "@clr/angular": "^3.1.4",
    "@clr/icons": "next",
    "@clr/ui": "next",
    "@creativebulma/bulma-divider": "^1.1.0",
    "@webcomponents/webcomponentsjs": "^2.0.0",
    "bulma": "^0.9.0",
    "express": "^4.17.1",
    "gsap": "^3.4.0",
    "ngx-countup": "^7.3.1",
    "ngx-mask": "^9.1.2",
    "ngx-page-scroll": "^7.0.3",
    "ngx-page-scroll-core": "^7.0.3",
    "rxjs": "~6.5.5",
    "tslib": "^2.0.0",
    "typescript": "^3.9.7",
    "web-animations-js": "^2.3.2",
    "zone.js": "~0.10.3"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.1000.2",
    "@angular/cli": "~10.0.2",
    "@angular/compiler-cli": "~10.0.3",
    "@types/jasmine": "~3.5.0",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "^12.11.1",
    "codelyzer": "^6.0.0",
    "enhanced-resolve": "^3.3.0",
    "jasmine-core": "~3.5.0",
    "jasmine-spec-reporter": "~5.0.0",
    "karma": "~5.0.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage-istanbul-reporter": "~3.0.2",
    "karma-jasmine": "~3.3.0",
    "karma-jasmine-html-reporter": "^1.5.0",
    "protractor": "~7.0.0",
    "ts-node": "~8.3.0",
    "ts-node-dev": "^1.0.0-pre.52",
    "tslint": "~6.1.0",
    "typescript": "^3.9.7"
  }