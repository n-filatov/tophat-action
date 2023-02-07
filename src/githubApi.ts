import { getOctokit } from "@actions/github";
import invariant from "invariant";
import { GITHUB_TOKEN } from "./constants";

export async function getPullRequestFilesChanged({
  owner,
  repo,
  pullNumber,
}: {
  owner: string;
  repo: string;
  pullNumber: number;
}) {
  invariant(typeof GITHUB_TOKEN === "string", "GITHUB_TOKEN is required");

  const octokit = getOctokit(GITHUB_TOKEN);

  const result = await octokit.rest.pulls.listFiles({
    owner,
    repo,
    pull_number: pullNumber,
  });
  const data = result.data;

  return data.map((file) => file.filename);
}
