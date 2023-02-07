import {
  getPullRequestFilesChanged,
  postCommentInPullRequest,
} from "../githubApi";
import { listFilesMockResponse } from "./fixtures";

jest.mock("@actions/github", () => ({
  ...jest.requireActual("@actions/github"),
  getOctokit: jest.fn(),
}));

const getOctokitMock = jest.requireMock("@actions/github").getOctokit;

describe("githubApi", () => {
  const listFilesMock = jest
    .fn()
    .mockResolvedValue({ data: listFilesMockResponse });
  const createCommentMock = jest.fn();

  beforeEach(() => {
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
  });

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
        })),
      });

      const result = await getPullRequestFilesChanged({
        owner,
        repo,
        pullNumber,
      });

      expect(result).toEqual(["file0", "file1", "file2"]);
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
