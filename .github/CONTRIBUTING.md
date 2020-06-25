# Contributing

[fork]: https://github.com/github/learning-lab-components/fork
[pr]: https://github.com/github/learning-lab-components/compare
[style]: https://standardjs.com/
[code-of-conduct]: ./CODE_OF_CONDUCT.md

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](../LICENSE.md).

Please note that this project is released with a [Contributor Code of Conduct][code-of-conduct]. By participating in this project you agree to abide by its terms.

## Submitting a pull request

1. [Fork][fork] and clone the repository.
2. Configure and install the dependencies: `npm install`
3. Make sure the tests pass on your machine: `npm test`
4. Create a new branch: `git checkout -b my-branch-name`
5. Make your change, add tests, and make sure the tests still pass.
6. Push to your fork and [submit a pull request][pr].
7. Pat your self on the back and wait for your pull request to be reviewed and merged.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Follow the [StandardJS style guide][style], which are also linted when you run `npm test`.
- Write tests.
- Keep your change as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

### Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)

## Releasing a new version

Project administrators have permissions to publish new releases to the GitHub Package Registry by following these steps from an up-to-date `main` branch:

1. Bump the package version and create a commit by using one of the appropriate NPM commands:
    - `npm version major`
    - `npm version minor`
    - `npm version patch`
2. Push that commit to the remote repository with `git push`
3. The [Release Management workflow](https://github.com/github/learning-lab-components/actions?query=workflow%3A%22Release+Management%22) will handle creating a new git tag, publishing the existing GitHub Release draft notes, and publishing the latest version of the module to the GitHub Package Registry for NPM.

### Consuming a new version

Once a new version of this module has been released as a package in the GitHub Package Registry, it also needs to be consumed by GitHub Learning Lab for the changes to take effect.

In the GitHub Learning Lab codebase, a member of the GitHub Learning Lab team should:

1. Create a new branch from the default branch
2. Install the latest version by executing `npm install @github/learning-lab-components@latest`
3. Verify that all tests still pass by executing `npm test`
4. Test the specific changes made to the components since the previous version was consumed
5. Assuming all is well, commit all changes and push them to the remote repository
6. Create a new Pull Request for team approval
