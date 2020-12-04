# Contributing to Korus-UI

We encourage anyone to propose bugfixes and improvements to library. Here are a few guidelines that will help you along the way.

## Sending a Pull Request

Before starting to work on changes we strongly recommend to [open an issue](https://github.com/kksng/korus-ui/issues/new/choose) or contact development team to discuss them.
It is also recommended to follow the rule of 1 feature or bugfix per Pull Request.

Next steps will help you to proceed with contributing:

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote:

```
git clone https://github.com/<your username>/korus-ui.git
cd korus-ui
git remote add upstream https://github.com/kksng/korus-ui.git
```
3. Synchronize your local `develop` branch with the upstream one:

```
git checkout develop
git pull upstream develop
```
4. Install the dependencies:

```
npm i
```
5. Create a new feature or bugfix branch from `develop` branch:

```
git checkout -b feature/feature-description
```
or
```
git checkout -b bugfix/bugfix-description
```
6. Make changes, commit and push to your fork:

```
git push -u origin HEAD
```
7. Go to the [repository](https://github.com/kksng/korus-ui) and make a Pull Request.

Our team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.
