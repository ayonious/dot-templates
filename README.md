# js-bootstrapper

> Create your own collection of dotfiles and each time you need them just run js-boot

# Setup

1. Download this repo
2. Replace the remote url location of directory in github that contains all your files.

```bash
npm install
npx tsc
npm link
```

This will setup this took in your computer. Now goto any folder and run

```
js-boot
```

# The Idea

js-boot should be able to fetch files remotely from github and put it in current repository.

The input should be:

1. Remote URL of files
2. Which files are needed

# To be worked later:

1. Folder download
2. Dynamically read the files collection. Currently with each file addition it has to be added in code.
