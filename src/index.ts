import { getOctokit } from "@actions/github";
import invariant from "invariant";
import { GITHUB_TOKEN } from "./constants";
import { GithubApi } from "./githubApi";

async function run(token: string) {
  const githubService = new GithubApi({
    octokit: getOctokit(token),
  });

  const owner = "n-filatov";
  const repo = "lexical-trainer";
  const pullNumber = 3;

  const files = await githubService.getPullRequestFilesChanged({
    owner,
    repo,
    pullNumber,
  });

  const topHatFiles = files.filter((file) =>
    file.filename.toLowerCase().includes("tophat.md")
  );

  const filesContent = await Promise.all(
    topHatFiles.map((file) =>
      githubService
        .getContent(file.contentsUrl)
        .then((result) => ({ filename: file.filename, content: result }))
    )
  );

  const title = "## Tophat instructions\n\n\n";

  const commentBody = filesContent
    .map(({ filename, content }) => {
      return `**${filename}**\n\n${content}`;
    })
    .join("\n\n\n");

  const body = title + commentBody;
  await githubService.postCommentInPullRequest({
    owner,
    repo,
    pullNumber,
    body,
  });
}

(() => {
  console.log(JSON.stringify(process.env, null, 2));
})();
