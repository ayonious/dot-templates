# dot-templates

> Create your own collection of dotfiles and each time you need them just run dots

## ⌨️ Setup

1. Download this repo

2. change the following lines from src/ui-options.ts

```text
const user = "ayonious";
const repo = "dot-templates";
const templatesLocation = "templates";
```

3. Now install your package like this

```bash
npm install
npx tsc
npm link
```

This will setup this took in your computer. Now goto any folder and run

```
dots
```

## � The Idea

dots should be able to fetch files remotely from github and put it in current repository.

The input should be:

1. Remote URL of files
2. Which files are needed

## 📅 To be worked later

1. Api rate limit. Add cache or maybe Oauth
2. ability to configure this CLI after the first installation.
3. Multiple Folder inputting, currently only from one folder I can get all templates
