import { getOctokit } from "@actions/github";
import invariant from "invariant";
import { GithubApi } from "./githubApi";
import fs from "fs";
import { getInput } from "@actions/core";

async function run({
  token,
  owner,
  repo,
  pullNumber,
}: {
  token: string;
  owner: string;
  repo: string;
  pullNumber: number;
}) {
  const githubService = new GithubApi({
    octokit: getOctokit(token),
  });

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
  const repository = process.env.GITHUB_REPOSITORY;
  invariant(repository, "GITHUB_REPOSITORY_OWNER is not defined");
  const githubEventPath = process.env.GITHUB_EVENT_PATH;

  invariant(githubEventPath, "GITHUB_EVENT_PATH is not defined");

  const event = JSON.parse(fs.readFileSync(githubEventPath, "utf8"));

  const pullRequestNumber = event.pull_request.number;

  invariant(
    typeof pullRequestNumber === "number",
    "pull_request.number is not defined"
  );

  const token = getInput("github-token", { required: true });

  const [owner, repo] = repository.split("/");

  console.log({
    owner,
    repo,
    pullNumber: pullRequestNumber,
  });
})();
