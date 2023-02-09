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
const github_1 = require("@actions/github");
const githubApi_1 = require("./githubApi");
function run(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const githubService = new githubApi_1.GithubApi({
            octokit: (0, github_1.getOctokit)(token),
        });
        const owner = "n-filatov";
        const repo = "lexical-trainer";
        const pullNumber = 3;
        const files = yield githubService.getPullRequestFilesChanged({
            owner,
            repo,
            pullNumber,
        });
        const topHatFiles = files.filter((file) => file.filename.toLowerCase().includes("tophat.md"));
        const filesContent = yield Promise.all(topHatFiles.map((file) => githubService
            .getContent(file.contentsUrl)
            .then((result) => ({ filename: file.filename, content: result }))));
        const title = "## Tophat instructions\n\n\n";
        const commentBody = filesContent
            .map(({ filename, content }) => {
            return `**${filename}**\n\n${content}`;
        })
            .join("\n\n\n");
        const body = title + commentBody;
        yield githubService.postCommentInPullRequest({
            owner,
            repo,
            pullNumber,
            body,
        });
    });
}
(() => {
    console.log(JSON.stringify(process.env, null, 2));
})();
//# sourceMappingURL=index.js.map