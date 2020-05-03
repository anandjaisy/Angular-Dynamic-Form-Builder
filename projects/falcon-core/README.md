# FalconCore

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Build

Run `ng build @falcon-ng/core` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test @falcon-ng/core` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Angular Dynamic Forms

* Check the [Demo](https://anandjaisy.github.io/Angular-Dynamic-Form-Builder/). 

## In Production
* Add the dependencies to the project `npm i @falcon-ng/core`

## In Development
* During development the best way to consume library is using `npm link`
* `cd dist/@falcon-ng`
* `npm link`
* We can link an Angular project to this library from anywhere on local machine. From the project root folder:
* `npm link @falcon-ng`
* If we now build the library with the watch flag `ng build @falcon-ng/core --watch`, and at the same time run `ng serve -o` to another   project in another terminal window.
* This will allow us to develop an application and (one or more) linked libraries simultaneously, and see the app recompile with each modification to the library’s source code.
* add `preserveSymlinks = true` to the angular.json located at the other project ` {"architect": {"build": {"builder": "@angular-devkit/build-angular:browser","options": {"preserveSymlinks": true}}}} `

