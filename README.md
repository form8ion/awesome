# awesome

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of form8ion related tools

<!--status-badges start -->

[![Build Status][ci-badge]][ci-link]

<!--status-badges end -->

<!--consumer-badges start -->

[![MIT license][license-badge]][license-link]

<!--consumer-badges end -->

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

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![Greenkeeper badge](https://badges.greenkeeper.io/form8ion/awesome.svg)](https://greenkeeper.io/)
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

[ci-link]: https://travis-ci.com/form8ion/awesome

[ci-badge]: https://img.shields.io/travis/com/form8ion/awesome/master.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjkgMzY5Ij48Y2lyY2xlIGN4PSIxODkuOSIgY3k9IjE5MC4yIiByPSIxODQuNSIgZmlsbD0iI2ZmZTQyZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUgLTYpIi8+PHBhdGggZmlsbD0iIzhiYjViNSIgZD0iTTI1MSAyNTZsLTM4LTM4YTE3IDE3IDAgMDEwLTI0bDU2LTU2YzItMiAyLTYgMC03bC0yMC0yMWE1IDUgMCAwMC03IDBsLTEzIDEyLTktOCAxMy0xM2ExNyAxNyAwIDAxMjQgMGwyMSAyMWM3IDcgNyAxNyAwIDI0bC01NiA1N2E1IDUgMCAwMDAgN2wzOCAzOHoiLz48cGF0aCBmaWxsPSIjZDk1NjEyIiBkPSJNMzAwIDI4OGwtOCA4Yy00IDQtMTEgNC0xNiAwbC00Ni00NmMtNS01LTUtMTIgMC0xNmw4LThjNC00IDExLTQgMTUgMGw0NyA0N2M0IDQgNCAxMSAwIDE1eiIvPjxwYXRoIGZpbGw9IiMyNGJmYmUiIGQ9Ik04MSAxODVsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzI1YzRjMyIgZD0iTTIyMCAxMDBsMjMgMjNjNCA0IDQgMTEgMCAxNkwxNDIgMjQwYy00IDQtMTEgNC0xNSAwbC0yNC0yNGMtNC00LTQtMTEgMC0xNWwxMDEtMTAxYzUtNSAxMi01IDE2IDB6Ii8+PHBhdGggZmlsbD0iIzFkZGVkZCIgZD0iTTk5IDE2N2wxOC0xOCAxOCAxOC0xOCAxOHoiLz48cGF0aCBmaWxsPSIjMDBhZmIzIiBkPSJNMjMwIDExMGwxMyAxM2M0IDQgNCAxMSAwIDE2TDE0MiAyNDBjLTQgNC0xMSA0LTE1IDBsLTEzLTEzYzQgNCAxMSA0IDE1IDBsMTAxLTEwMWM1LTUgNS0xMSAwLTE2eiIvPjxwYXRoIGZpbGw9IiMyNGJmYmUiIGQ9Ik0xMTYgMTQ5bDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMxZGRlZGQiIGQ9Ik0xMzQgMTMxbDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMxYmNmY2UiIGQ9Ik0xNTIgMTEzbDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMyNGJmYmUiIGQ9Ik0xNzAgOTVsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzFiY2ZjZSIgZD0iTTYzIDE2N2wxOC0xOCAxOCAxOC0xOCAxOHpNOTggMTMxbDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMzNGVkZWIiIGQ9Ik0xMzQgOTVsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzFiY2ZjZSIgZD0iTTE1MyA3OGwxOC0xOCAxOCAxOC0xOCAxOHoiLz48cGF0aCBmaWxsPSIjMzRlZGViIiBkPSJNODAgMTEzbDE4LTE3IDE4IDE3LTE4IDE4ek0xMzUgNjBsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzk4ZWRlYiIgZD0iTTI3IDEzMWwxOC0xOCAxOCAxOC0xOCAxOHoiLz48cGF0aCBmaWxsPSIjYjUzZTAyIiBkPSJNMjg1IDI1OGw3IDdjNCA0IDQgMTEgMCAxNWwtOCA4Yy00IDQtMTEgNC0xNiAwbC02LTdjNCA1IDExIDUgMTUgMGw4LTdjNC01IDQtMTIgMC0xNnoiLz48cGF0aCBmaWxsPSIjOThlZGViIiBkPSJNODEgNzhsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwYTNhMiIgZD0iTTIzNSAxMTVsOCA4YzQgNCA0IDExIDAgMTZMMTQyIDI0MGMtNCA0LTExIDQtMTUgMGwtOS05YzUgNSAxMiA1IDE2IDBsMTAxLTEwMWM0LTQgNC0xMSAwLTE1eiIvPjxwYXRoIGZpbGw9IiMzOWQ5ZDgiIGQ9Ik0yMjggMTA4bC04LThjLTQtNS0xMS01LTE2IDBMMTAzIDIwMWMtNCA0LTQgMTEgMCAxNWw4IDhjLTQtNC00LTExIDAtMTVsMTAxLTEwMWM1LTQgMTItNCAxNiAweiIvPjxwYXRoIGZpbGw9IiNhMzM5MDQiIGQ9Ik0yOTEgMjY0bDggOGM0IDQgNCAxMSAwIDE2bC04IDdjLTQgNS0xMSA1LTE1IDBsLTktOGM1IDUgMTIgNSAxNiAwbDgtOGM0LTQgNC0xMSAwLTE1eiIvPjxwYXRoIGZpbGw9IiNlYjZlMmQiIGQ9Ik0yNjAgMjMzbC00LTRjLTYtNi0xNy02LTIzIDAtNyA3LTcgMTcgMCAyNGw0IDRjLTQtNS00LTExIDAtMTZsOC04YzQtNCAxMS00IDE1IDB6Ii8+PHBhdGggZmlsbD0iIzEzYWNiZCIgZD0iTTEzNCAyNDhjLTQgMC04LTItMTEtNWwtMjMtMjNhMTYgMTYgMCAwMTAtMjNMMjAxIDk2YTE2IDE2IDAgMDEyMiAwbDI0IDI0YzYgNiA2IDE2IDAgMjJMMTQ2IDI0M2MtMyAzLTcgNS0xMiA1em03OC0xNDdsLTQgMi0xMDEgMTAxYTYgNiAwIDAwMCA5bDIzIDIzYTYgNiAwIDAwOSAwbDEwMS0xMDFhNiA2IDAgMDAwLTlsLTI0LTIzLTQtMnoiLz48cGF0aCBmaWxsPSIjYmY0NDA0IiBkPSJNMjg0IDMwNGMtNCAwLTgtMS0xMS00bC00Ny00N2MtNi02LTYtMTYgMC0yMmw4LThjNi02IDE2LTYgMjIgMGw0NyA0NmM2IDcgNiAxNyAwIDIzbC04IDhjLTMgMy03IDQtMTEgNHptLTM5LTc2Yy0xIDAtMyAwLTQgMmwtOCA3Yy0yIDMtMiA3IDAgOWw0NyA0N2E2IDYgMCAwMDkgMGw3LThjMy0yIDMtNiAwLTlsLTQ2LTQ2Yy0yLTItMy0yLTUtMnoiLz48L3N2Zz4=
