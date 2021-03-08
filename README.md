# dot-templates

> Create your own collection of dotfiles and each time you need them just run dots

## ⌨️ Setup

1. Download this repo
2. Replace the remote url location of directory in github that contains all your files.

```bash
npm install
npx tsc
npm link
```

This will setup this took in your computer. Now goto any folder and run

```
dots
```

## The Idea

dots should be able to fetch files remotely from github and put it in current repository.

The input should be:

1. Remote URL of files
2. Which files are needed

## To be worked later

1. Folder download
2. Multiple Folder inputting, currently only from one folder I can get all templates
