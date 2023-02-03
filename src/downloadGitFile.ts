import * as fs from "fs";
import * as https from "https";

import { user, repo } from "./ui-options";

const downloadFile = (filesLocation: string, fileName: string) => {
  const file = fs.createWriteStream(`./${fileName}`);

  https.get(
    `https://raw.githubusercontent.com/${user}/${repo}/master/${filesLocation}/${fileName}`,
    (response) => {
      response.pipe(file);
    }
  );
};

export default downloadFile;
