# React Native Boilerplate

## Introduction
This is a boilerplate project for setting up a react native project.
It includes features such as:

- Navigation
- Global State Provider (with hooks support)
- Authentication Scaffolding
- Multiple Themes (with hooks support)
- i18n (with hooks support)
- Commonly used components
- Automated workflows for building production releases

## Installation
This repository aims to be the foundation for new projects. To install it, follow the React Native setup guide.
Once the environment is up and running, just git clone the repository and start building something amazing 🔥

## Directory Structure
RNBoilerplate comes with a directory structure that one can build on top of.
source for project lies within the `src` directory. The directory names under `src` are self explainatory.

## Deployment
Currently, we support android production release builds only. However, we are working on providing something for the ios platform too.

### Android
For android production releases, you need to set some action secrets that are required to build the apps.

`ANDROID_KEYSTORE_CONTENT` is the base64 string generated using the pgp tool
`ANDROID_KEYSTORE_NAME` is the name of keystore file.
`ANDROID_KEYSTORE_PASSWORD` is the keystore password.
`ANDROID_KEY_ALIAS` is the key alias.
`ANDROID_KEY_PASSWORD` is the key password.
`KEYSTORE_GPG_PASSWORD` is the password used to create `ANDROID_KEYSTORE_CONTENT` base64 string.

While genedating the signing key, please keep track of your signing key name, alias, password, keystore name and keystore passsword.
Keep those values in the secrets with respective names.

To create `ANDROID_KEYSTORE_CONTENT`, use pgp as follows:
`gpg -c --armor <production-keystore.keystore>`
After running this command, you'll get a new file named `<production-keystore.keystore>.asc`. Copy the content of that file and paste it on the `ANDROID_KEYSTORE_CONTENT` secret field.


### IOS
TODO: Create Production Release workflow for ios
