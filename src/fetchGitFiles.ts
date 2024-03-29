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

const fetchGitFiles = async (
  user: string,
  repo: string,
  filesLocation: string
) => {
  const masterSha = (await findTreeDetailsOfSha(user, repo, "master")).sha;
  const folders = filesLocation.split("/");

  let curSha = masterSha;

  for (let folder of folders) {
    console.log("folder", folder);
    const currentFolderDetails = await findTreeDetailsOfSha(user, repo, curSha);
    curSha = currentFolderDetails.tree.filter(
      (treeEntry) => treeEntry.path === folder
    )[0].sha;
  }

  const currentFolderDetails = await findTreeDetailsOfSha(user, repo, curSha);

  return currentFolderDetails.tree;
};

export default fetchGitFiles;

fetchGitFiles("ayonious", "dot-templates", "templates");
