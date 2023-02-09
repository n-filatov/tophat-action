"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const githubApi_1 = require("../githubApi");
const fixtures_1 = require("./fixtures");
const getOctokitMock = jest.fn();
const listFilesMock = jest
    .fn()
    .mockResolvedValue({ data: fixtures_1.listFilesMockResponse });
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
const githubService = new githubApi_1.GithubApi({ octokit: getOctokitMock() });
const { getPullRequestFilesChanged, postCommentInPullRequest } = githubService;
describe("githubApi", () => {
    describe("getPullRequestFilesChanged", () => {
        it("calls octokit with correct params", () => __awaiter(void 0, void 0, void 0, function* () {
            const owner = "owner";
            const repo = "repo";
            const pullNumber = 1;
            yield getPullRequestFilesChanged({ owner, repo, pullNumber });
            expect(listFilesMock).toHaveBeenCalledWith({
                owner,
                repo,
                pull_number: pullNumber,
            });
        }));
        it("should return list of files changed in pull request", () => __awaiter(void 0, void 0, void 0, function* () {
            const owner = "owner";
            const repo = "repo";
            const pullNumber = 1;
            listFilesMock.mockResolvedValue({
                data: fixtures_1.listFilesMockResponse.slice(0, 3).map((fixture, index) => (Object.assign(Object.assign({}, fixture), { filename: "file" + index, contents_url: "contents_url" + index }))),
            });
            const result = yield getPullRequestFilesChanged({
                owner,
                repo,
                pullNumber,
            });
            expect(result).toEqual([
                { filename: "file0", contentsUrl: "contents_url0" },
                { filename: "file1", contentsUrl: "contents_url1" },
                { filename: "file2", contentsUrl: "contents_url2" },
            ]);
        }));
    });
    describe("postCommentInPullRequest", () => {
        it("calls octokit with correct params", () => __awaiter(void 0, void 0, void 0, function* () {
            const owner = "owner";
            const repo = "repo";
            const pullNumber = 1;
            const body = "body";
            yield postCommentInPullRequest({ owner, repo, pullNumber, body });
            expect(createCommentMock).toHaveBeenCalledWith({
                owner,
                repo,
                issue_number: pullNumber,
                body,
            });
        }));
    });
});
//# sourceMappingURL=githubApi.test.js.map