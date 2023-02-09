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
exports.GithubApi = void 0;
class GithubApi {
    constructor({ octokit }) {
        this.getPullRequestFilesChanged = ({ owner, repo, pullNumber, }) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.octokit.rest.pulls.listFiles({
                owner,
                repo,
                pull_number: pullNumber,
            });
            const data = result.data;
            return data.map((file) => ({
                filename: file.filename,
                contentsUrl: file.contents_url,
            }));
        });
        this.postCommentInPullRequest = ({ owner, repo, pullNumber, body, }) => __awaiter(this, void 0, void 0, function* () {
            return yield this.octokit.rest.issues.createComment({
                owner,
                repo,
                issue_number: pullNumber,
                body,
            });
        });
        this.getContent = (contentsUrl) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.octokit.request(`GET ${contentsUrl}`);
            return Buffer.from(result.data.content, "base64").toString();
        });
        this.octokit = octokit;
    }
}
exports.GithubApi = GithubApi;
//# sourceMappingURL=githubApi.js.map