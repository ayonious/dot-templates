import * as axios from "axios";

type TreeObjectType = "blob" | "tree";

interface TreeObject {
  path: string;
  sha: string;
  type: TreeObjectType;
}

interface GitResponse {
  sha: string;
  tree: TreeObject[];
}

const findTreeDetailsOfSha = async (
  user: string,
  repo: string,
  sha: string
): Promise<GitResponse> => {
  const treeDetailsUrl = () =>
    `https://api.github.com/repos/${user}/${repo}/git/trees/${sha}`;

  const ret = await axios.default.get(treeDetailsUrl());
  return ret.data;
};

// findTreeDetailsOfSha("12dbac41aac8826af81320ef0698f8b515f9a952");

const fetchGitFiles = async (
  user: string,
  repo: string,
  filesLocation: string
) => {
  const masterSha = (await findTreeDetailsOfSha(user, repo, "master")).sha;
  const folders = filesLocation.split("/");

  let curSha = masterSha;
  for (let folder of folders) {
    const currentFolderDetails = await findTreeDetailsOfSha(user, repo, curSha);
    curSha = currentFolderDetails.tree.filter(
      (treeEntry) => treeEntry.path === folder
    )[0].sha;
  }

  const currentFolderDetails = await findTreeDetailsOfSha(user, repo, curSha);
  console.log("currentFolderDetails.tree", currentFolderDetails.tree);
  return currentFolderDetails.tree;
};

export default fetchGitFiles;

fetchGitFiles("ayonious", "dot-templates", "templates");
