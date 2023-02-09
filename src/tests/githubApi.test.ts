import { GithubApi } from "../githubApi";
import { listFilesMockResponse } from "./fixtures";

const getOctokitMock = jest.fn();
const listFilesMock = jest
  .fn()
  .mockResolvedValue({ data: listFilesMockResponse });
const createCommentMock = jest.fn();

getOctokitMock.mockReturnValue({
  rest: {
    issues: {
      createComment: createCommentMock,
    },
    pulls: {
      listFiles: listFilesMock,
    },
  },
});

const githubService = new GithubApi({ octokit: getOctokitMock() });
const { getPullRequestFilesChanged, postCommentInPullRequest } = githubService;

describe("githubApi", () => {
  describe("getPullRequestFilesChanged", () => {
    it("calls octokit with correct params", async () => {
      const owner = "owner";
      const repo = "repo";
      const pullNumber = 1;

      await getPullRequestFilesChanged({ owner, repo, pullNumber });

      expect(listFilesMock).toHaveBeenCalledWith({
        owner,
        repo,
        pull_number: pullNumber,
      });
    });

    it("should return list of files changed in pull request", async () => {
      const owner = "owner";
      const repo = "repo";
      const pullNumber = 1;

      listFilesMock.mockResolvedValue({
        data: listFilesMockResponse.slice(0, 3).map((fixture, index) => ({
          ...fixture,
          filename: "file" + index,
          contents_url: "contents_url" + index,
        })),
      });

      const result = await getPullRequestFilesChanged({
        owner,
        repo,
        pullNumber,
      });

      expect(result).toEqual([
        { filename: "file0", contentsUrl: "contents_url0" },
        { filename: "file1", contentsUrl: "contents_url1" },
        { filename: "file2", contentsUrl: "contents_url2" },
      ]);
    });
  });

  describe("postCommentInPullRequest", () => {
    it("calls octokit with correct params", async () => {
      const owner = "owner";
      const repo = "repo";
      const pullNumber = 1;
      const body = "body";

      await postCommentInPullRequest({ owner, repo, pullNumber, body });

      expect(createCommentMock).toHaveBeenCalledWith({
        owner,
        repo,
        issue_number: pullNumber,
        body,
      });
    });
  });
});
