#!/usr/bin/env node

import * as inquirer from "inquirer";
import * as fs from "fs";
import * as https from "https";

const options = [
  "common/.gitignore",
  "common/.huskyrc.json",
  "common/.prettierignore",
  "common/.prettierrc",
  "common/jestconfig.json",
  "common/renovate.json",
];

const questions = [
  {
    type: "checkbox",
    choices: options,
    message: "Which files do you want to be added?",
    name: "fileNames",
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    answers.fileNames.map((fileName: string) => {
      const file = fs.createWriteStream(
        `./${fileName.split("/")[fileName.split("/").length - 1]}`
      );

      https.get(
        `https://raw.githubusercontent.com/ayonious/js-bootstrapper/master/templates/${fileName}`,
        (response) => {
          response.pipe(file);
        }
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
