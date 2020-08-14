# Marvel App

> Application that consumes the Marvel API

<a href="https://github.com/joaovictorpsantos">
<img alt="Autor" src="https://img.shields.io/badge/autor-JoãoVictorPereiraSantos-DB3833?style=flat-square">
</a>

<a href="#">
<img alt="Linguagens" src="https://img.shields.io/github/languages/count/joaovictorpsantos/marvel-app?color=DB3833&style=flat-square">
</a>

<a href="https://github.com/joaovictorpsantos/marvel-app/stargazers">
<img alt="Stars" src="https://img.shields.io/github/stars/joaovictorpsantos/marvel-app?color=DB3833&style=flat-square">
</a>

<a href="https://github.com/joaovictorpsantos/marvel-app/network/members">
<img alt="Forks" src="https://img.shields.io/github/forks/joaovictorpsantos/marvel-app?color=DB3833&style=flat-square">
</a>

<a href="#">
<img alt="Tamanho do código em bytes" src="https://img.shields.io/github/languages/code-size/joaovictorpsantos/marvel-app?color=DB3833&style=flat-square">
</a>

<a href="https://github.com/joaovictorpsantos/social-app/commits/master">
<img alt="Commits" src="https://img.shields.io/github/last-commit/joaovictorpsantos/marvel-app?color=DB3833&style=flat-square">
</a>

<br/><br/>

<p align="center">
  <img src=".github/gif_1.gif" alt="Marvel App" border="0"  height="500" >
  <img src=".github/gif_2.gif" alt="Marvel App" border="0" height="500">
  <img src=".github/gif_3.gif" alt="Marvel App" border="0" height="500">
</p>

<blockquote align="center">
  This project is open-source, you can also contribute: D
</blockquote>

<hr/>

## 💡 About the project:

This project consists of an app made with react native that uses the Marvel API to list all the heroes, appearances and the description

## 🔥 Techs:

- ReactNative
- JavaScript
- StyledComponents
- Hooks
- Tests

## 👀 Tools used to standardize the code:

- Conventional Commits
- ESLint
- Prettier
- EditorConfig

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/), [Android SDK](https://medium.com/surabayadev/setting-up-react-native-android-without-android-studio-35a496e1dfa3) first and then, in order to clone the project via HTTPS, run this command:**

`git clone https://github.com/joaovictorpsantos/marvel-app.git`

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

`git clone git@github.com:joaovictorpsantos/marvel-app.git`

**Install dependencies**

`yarn install`

**Install IOS native dependencies**

`cd ios && pod install`

# :runner: Getting Started

**Before running the app, you should:**

- Create your account on the [Marvel website](https://developer.marvel.com/) and request your public key and private key to access the API
- Create a file in the root called "config.json" that contains your keys, in this format:
  ```
     {
      "PUBLIC_KEY": "your public key here from marvel api",
      "PRIVATE_KEY": "your private key here from marvel api"
     }
  ```

Make sure you have the emulator on or a physical device connected

Run the following command in order to start the application in a development environment:

```
  // Install the application in a Android device
  yarn android

  // Install the application in a IOS device
  yarn ios
```

After the build process, the metro bundler will start the app automatically but
in case you already have the app built, just run the following command to start it:

```
yarn start
```

<br/>

<h4 align="center">
  Let's share knowledge and grow together!!!
</h4>

<br/>

---

<h3 align="center">
Author: <a alt="João Victor Pereira Santos" href="https://github.com/joaovictorpsantos">João Victor Pereira Santos</a>
</h3>

<p align="center">

  <a alt="João Victor Pereira Santos Linkedin" href="https://www.linkedin.com/in/joao-victor-pereira-santos//">
    <img src="https://img.shields.io/badge/LinkedIn-Jo%C3%A3o%20Victor%20Pereira%20Santos-blue?logo=linkedin"/></a>
  <a alt="João Victor Pereira Santos GitHub" href="https://github.com/joaovictorpsantos">
  <img src="https://img.shields.io/badge/GitHub-joaovictorpsantos-lightgrey?logo=github"/></a>
 <a alt="João Victor Pereira Santos Twitter" href="https://twitter.com/_joaovictorps">
  <img src="https://img.shields.io/badge/Twitter-__joaovictorps-blue?logo=twitter"/></a>

</p>
