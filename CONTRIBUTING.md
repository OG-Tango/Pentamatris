# Git Workflow
1. Fork the OGTango repo into your org, then from your org, fork into your local repo
2. Add your org's repo as an upstream remote
```
git remote add upstream https://github.com/<yourOrgName>/Pentamatris.git
```
3. Cut your feature branch from main
4. Make commits to your feature branch
5. Pull down upstream changes before making a PR
```
git pull upstream main
```
6. Make your pull request and have it reviewed by another maintainer
7. Fix any changes suggested by your code reviewer and push your fixes in a single new commit
8. After the PR is reviewed, it should be merged into upstream main by another team member. Do not merge your own commits.

# Make a Pull Request
Make a PR from your local fork and branch to the upstream main branch
Detail what changes you made and what feature your PR adds, the clearer the better
One other person should review your code. If there are no issues, they will merge your changes into upstream. Else, they may request changes, in which case you should fix the changes and, recommit, and make a new PR

# Checklist:
This is just to help you organize your process
* Did I cut my work branch off of main (don’t cut new branches from existing feature brances)?
* Is my branch focused on a single main change?
* Do all of my changes directly relate to this change?
* Did I pull the upstream main branch after I finished my feature?
* Did I write a clear pull request message detailing what changes I made?
* Did I get a code review?
* Did I make any requested changes from that code review?