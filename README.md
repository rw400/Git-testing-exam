# Git-testing-exam

Create a GitHub repository of your choice. Use this repo to explain and demonstrate the following: 

 

Question 1: What are the effects of git push -f? 

1. git push -f,  -forcefully pushes to remote. Overrides and rewrite any previous changes to orphane, in for example an remote branch. Cons: can be very dangerous, can be replaced using reset or revert commands 

Question 2: What is the difference between git merge and git rebase? 

2. Merge - Combine collective code and/or branches    - add commit into feature branch  You would want your  branch to stay up to date with master until you want to merge with master . Cons: pollutes git history, creates a new commit because it needs to keep up to date with master changes. Can cause Merge Conflicts, out of date commits (Devs should keep track or list of tasks people are assigned to/responsible for.

Solution to not polluting your git history is by using git rebase
Rebase - integrates changes from one branch to another, instead of merging everything/ staying up to date with master. Rebase allows you to branch off of this new commit and make new changes in branch as well as rewriting project history. You are able to rebase off of sub branch.


Question 3: Assuming you have pushed commits onto origin, delete the third to last commit. 

git reset --hard HEAD~3
