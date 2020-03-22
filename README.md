# awesome

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of form8ion related tools

<!-- status badges -->

[![Build Status][ci-badge]][ci-link]

<!-- consumer badges -->

[![MIT license][license-badge]][license-link]

## Table of Contents

* [Scaffolding](#scaffolding)
  * [Official](#official)
    * [Core](#core)
    * [Version Control Services](#version-control-services)
    * [Languages](#languages)
    * [JavaScript Application Types](#javascript-application-types)
    * [Hosts](#hosts)
    * [Continuous Integration Services](#continuous-integration-services)
    * [Dependency Update Services](#dependency-update-services)
  * [User-land](#user-land)
* [Shareable Config](#shareable-config)
  * [Core](#core-1)
    * [ESLint](#eslint)
    * [Babel](#babel)
    * [commitlint](#commitlint)
    * [remark-lint](#remark-lint)
  * [Templates for extending core configs](#templates-for-extending-core-configs)
    * [ESLint](#eslint-1)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Scaffolding

### Official

#### Core

* [project-scaffolder](https://github.com/travi/project-scaffolder)

#### Version Control Services

* [github-scaffolder](https://github.com/travi/github-scaffolder)
* [gitlab-scaffolder](https://github.com/travi/gitlab-scaffolder)

#### Languages

* [javascript-scaffolder](https://github.com/travi/javascript-scaffolder)
* [ruby-scaffolder](https://github.com/form8ion/ruby-scaffolder)
* [shell-scaffolder](https://github.com/travi/shell-scaffolder)

#### JavaScript Application Types

* [hapi-scaffolder](https://github.com/form8ion/hapi-scaffolder)
* [spectacle-scaffolder](https://github.com/travi/spectacle-scaffolder)

#### Hosts

##### Node.js Application

* [node-app-engine-standard-scaffolder](https://github.com/travi/node-app-engine-standard-scaffolder)

##### Static Website

* [netlify-scaffolder](https://github.com/travi/netlify-scaffolder)

#### Continuous Integration Services

* [travis-scaffolder-javascript](https://github.com/travi/travis-scaffolder-javascript)
* [circle-scaffolder-javascript](https://github.com/travi/circle-scaffolder-javascript)
* [travis-scaffolder-shell](https://github.com/travi/travis-scaffolder-shell)

#### Dependency Update Services

* [renovate-scaffolder](https://github.com/form8ion/renovate-scaffolder)
* [dependabot-scaffolder](https://github.com/form8ion/dependabot-scaffolder)

### User-land

* [python-scaffolder](https://github.com/GainCompliance/python-scaffolder)

## Shareable Config

### Core

#### ESLint

##### Source Code

* [eslint-config](https://github.com/form8ion/eslint-config)
* [eslint-config-react](https://github.com/form8ion/eslint-config-react)
* [eslint-config-hal](https://github.com/form8ion/eslint-config-hal)

##### Tests

* [eslint-config-mocha](https://github.com/form8ion/eslint-config-mocha)
* [eslint-config-cucumber](https://github.com/form8ion/eslint-config-cucumber)
* [eslint-config-cypress](https://github.com/form8ion/eslint-config-cypress)

#### Babel

* [babel-preset](https://github.com/form8ion/babel-preset)

#### commitlint

* [commitlint-config](https://github.com/form8ion/commitlint-config)

#### remark-lint

* [remark-lint-preset](https://github.com/form8ion/remark-lint-preset)

### Templates for extending core configs

#### ESLint

* [eslint-config-template](https://github.com/form8ion/eslint-config-template)

## Contributing

<!-- contribution badges -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![Greenkeeper badge](https://badges.greenkeeper.io/form8ion/awesome.svg)](https://greenkeeper.io/)

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/awesome.svg

[ci-link]: https://travis-ci.com/form8ion/awesome

[ci-badge]: https://img.shields.io/travis/com/form8ion/awesome/master.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
