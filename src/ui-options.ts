#!/usr/bin/env node

import * as inquirer from "inquirer";
import * as fs from "fs";
import * as https from "https";
import fetchFiles from "./fetchGitFiles";
import { promisify } from "util";
import downloadGitFile from "./downloadGitFile";

const runProg = async (filesLocation: string) => {
  const files = await fetchFiles("ayonious", "js-bootstrapper", filesLocation);

  const options = files.map((file) => file.name);

  const questions = [
    {
      type: "checkbox",
      choices: options,
      message: "Which files do you want to be added?",
      name: "fileNames",
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    answers.fileNames.map((fileName: string) => {
      downloadGitFile(filesLocation, fileName);
    });
  });
};

runProg("templates/common");
