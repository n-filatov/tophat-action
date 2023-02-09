import { getOctokit } from "@actions/github";

type File = {
  filename: string;
  contentsUrl: string;
};

export class GithubApi {
  octokit: ReturnType<typeof getOctokit>;

  constructor({ octokit }: { octokit: ReturnType<typeof getOctokit> }) {
    this.octokit = octokit;
  }

  public getPullRequestFilesChanged = async ({
    owner,
    repo,
    pullNumber,
  }: {
    owner: string;
    repo: string;
    pullNumber: number;
  }): Promise<File[]> => {
    const result = await this.octokit.rest.pulls.listFiles({
      owner,
      repo,
      pull_number: pullNumber,
    });
    const data = result.data;

    return data.map((file) => ({
      filename: file.filename,
      contentsUrl: file.contents_url,
    }));
  };

  public postCommentInPullRequest = async ({
    owner,
    repo,
    pullNumber,
    body,
  }: {
    owner: string;
    repo: string;
    pullNumber: number;
    body: string;
  }) => {
    return await this.octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: pullNumber,
      body,
    });
  };

  public getContent = async (contentsUrl: string) => {
    const result = await this.octokit.request(`GET ${contentsUrl}`);
    return Buffer.from(result.data.content, "base64").toString();
  };
}
