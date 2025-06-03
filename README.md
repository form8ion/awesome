# awesome

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of form8ion related tools

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]

<!--status-badges end -->

<!--consumer-badges start -->

[![MIT license][license-badge]][license-link]

<!--consumer-badges end -->

## Table of Contents

* [Scaffolding](#scaffolding)
  * [Official](#official)
    * [Core](#core)
    * [Version Control System Hosts](#version-control-system-hosts)
    * [Languages](#languages)
    * [High-Level Scaffolders](#high-level-scaffolders)
    * [JavaScript](#javascript)
    * [Hosts](#hosts)
    * [Continuous Integration Services](#continuous-integration-services)
    * [Dependency Update Services](#dependency-update-services)
  * [User-land](#user-land)
* [Lifting](#lifting)
  * [Core](#core-1)
* [Shareable Config](#shareable-config)
  * [Core](#core-2)
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

* [project](https://github.com/form8ion/project)

#### Version Control System Hosts

* [github](https://github.com/form8ion/github)
* [gitlab-scaffolder](https://github.com/travi/gitlab-scaffolder)

#### Languages

* [javascript](https://github.com/form8ion/javascript)
* [php](https://github.com/form8ion/php)
* [java](https://github.com/form8ion/java)
* [python](https://github.com/form8ion/python)
* [ruby-scaffolder](https://github.com/form8ion/ruby-scaffolder)
* [shell-scaffolder](https://github.com/travi/shell-scaffolder)

#### High-Level Scaffolders

* [eslint-config-extender](https://github.com/form8ion/eslint-config-extender)

#### JavaScript

##### Application Types

* [hapi-scaffolder](https://github.com/form8ion/hapi-scaffolder)
* [spectacle-scaffolder](https://github.com/travi/spectacle-scaffolder)
* [probot-scaffolder](https://github.com/form8ion/probot-scaffolder)
* [gatbsy](https://github.com/form8ion/gatsby)
* [nuxt](https://github.com/form8ion/nuxt)

##### Package Types

* [react-components-scaffolder](https://github.com/form8ion/react-components-scaffolder)
* [scaffolder-scaffolder](https://github.com/form8ion/scaffolder-scaffolder)
* [remark-plugin-scaffolder](https://github.com/form8ion/remark-plugin-scaffolder)

##### Unit-Testing Frameworks

* [mocha-scaffolder](https://github.com/form8ion/mocha-scaffolder)
* [jest-scaffolder](https://github.com/form8ion/jest-scaffolder)

#### Hosts

##### Node.js Application

* [node-app-engine-standard-scaffolder](https://github.com/travi/node-app-engine-standard-scaffolder)

##### Static Website

* [netlify-scaffolder](https://github.com/travi/netlify-scaffolder)

#### Continuous Integration Services

* [github-actions-node-ci](https://github.com/form8ion/github-actions-node-ci)
* [travis-scaffolder-javascript](https://github.com/travi/travis-scaffolder-javascript)
* [circle-scaffolder-javascript](https://github.com/travi/circle-scaffolder-javascript)
* [travis-scaffolder-shell](https://github.com/travi/travis-scaffolder-shell)

#### Dependency Update Services

* [renovate-scaffolder](https://github.com/form8ion/renovate-scaffolder)
* [dependabot-scaffolder](https://github.com/form8ion/dependabot-scaffolder)

### User-land

* [python-scaffolder](https://github.com/GainCompliance/python-scaffolder)

## Lifting

### Core

* [lift](https://github.com/form8ion/lift)

## Shareable Config

### Core

#### ESLint

##### Source Code

* [eslint-config](https://github.com/form8ion/eslint-config)
* [eslint-config-react](https://github.com/form8ion/eslint-config-react)
* [eslint-config-hal](https://github.com/form8ion/eslint-config-hal)

##### Tests

* [eslint-config-vitest](https://github.com/form8ion/eslint-config-vitest)
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

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

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

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[github-actions-ci-link]: https://github.com/form8ion/awesome/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/form8ion/awesome/node-ci.yml.svg?branch=master&logo=github
