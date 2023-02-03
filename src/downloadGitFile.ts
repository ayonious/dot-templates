import * as fs from "fs";
import * as https from "https";

import { user, repo } from "./ui-options";

const downloadFile = (
  remoteFilesLocation: string,
  localFilesLocation: string,
  fileName: string
) => {
  console.log("localFilesLocation", localFilesLocation);
  console.log("remoteFilesLocation", remoteFilesLocation);
  const file = fs.createWriteStream(`./${localFilesLocation}_${fileName}`);

  const remoetFile = `https://raw.githubusercontent.com/${user}/${repo}/master/${remoteFilesLocation}/${fileName}`;
  console.log("remoetFile", remoetFile);

  https
    .get(remoetFile, (response) => {
      response.pipe(file);
    })
    .on("error", (e) => {
      console.error(e);
    });
};

export default downloadFile;
