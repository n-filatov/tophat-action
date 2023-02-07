import { getOctokit } from "@actions/github";
import invariant from "invariant";
import { GITHUB_TOKEN } from "./constants";

const getOctokitInstance = () => {
  invariant(typeof GITHUB_TOKEN === "string", "GITHUB_TOKEN is required");
  return getOctokit(GITHUB_TOKEN);
};

export async function getPullRequestFilesChanged({
  owner,
  repo,
  pullNumber,
}: {
  owner: string;
  repo: string;
  pullNumber: number;
}) {
  const octokit = getOctokitInstance();
  const result = await octokit.rest.pulls.listFiles({
    owner,
    repo,
    pull_number: pullNumber,
  });
  const data = result.data;

  return data.map((file) => file.filename);
}

export async function postCommentInPullRequest({
  owner,
  repo,
  pullNumber,
  body,
}: {
  owner: string;
  repo: string;
  pullNumber: number;
  body: string;
}) {
  const octokit = getOctokitInstance();
  return await octokit.rest.issues.createComment({
    owner,
    repo,
    issue_number: pullNumber,
    body,
  });
}
