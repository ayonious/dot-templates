#!/usr/bin/env node
import * as fs from "fs";
import * as https from "https";

const downloadFile = (filesLocation: string, fileName: string) => {
  const file = fs.createWriteStream(`./${fileName}`);

  https.get(
    `https://raw.githubusercontent.com/ayonious/js-bootstrapper/master/${filesLocation}/${fileName}`,
    (response) => {
      response.pipe(file);
    }
  );
};

export default downloadFile;
