#!/usr/bin/env node
import * as inquirer from "inquirer";

import downloadGitFile from "./downloadGitFile";
import fetchFiles from "./fetchGitFiles";

const user = "ayonious";
const repo = "dot-templates";
const templatesLocation = "templates";

const runProg = async (filesLocation: string) => {
  const files = await fetchFiles(user, repo, filesLocation);

  const options = files.map((file) => file.path);
  const questions = [
    {
      type: "checkbox",
      choices: options,
      message: "Which files/folders do you want to be added?",
      name: "fileNames",
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    answers.fileNames.map((fileName: string) => {
      downloadGitFile(filesLocation, fileName);
    });
  });
};

runProg(templatesLocation);
