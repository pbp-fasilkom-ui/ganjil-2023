---
sidebar_label: Git Cheatsheet
---

# Git Cheatsheet

## Basic Operations
### View current branch status
#### Use `git status`
```bash
git status
```
To check the status of your current git project, you can use the `git status` command. This command will give you an overview of any unpushed commits and the details of any untracked/staged files that you might have in your current project. 

**Do not forget to check this command before you start developing on a new feature**. You definitely do not want to work for 30-60 minutes on a functionality only to find out that you did it in the wrong branch. It is the programmer's equivalent of *"drawing art on the wrong layer"*.

### Staging (Adding) Files
#### Adding a single file
```bash
git add <file_name>
```

#### Adding multiple files
```bash
git add <file-1> <file-2> <file-3> ... <file-n>
```

#### Adding all unstaged files
```bash
git add .
```

### Commit
#### Commit using default text editor (vi in most cases)
```bash
# If using vi: Write commit message by pressing 'i' to enter insert mode, type your commit message, press 'ESCAPE' to exit insert mode, then type :wq to save.
git commit
```

Note that `vi` has a **very steep** learning curve. If you accidentally find yourself in this editor, exit it by doing the following:
1. Press `:` (`SHIFT + ;`)
2. Type `q!` and press `ENTER`
3. Continue creating a commit by using `git commit -m "<MESSAGE>"`

#### Commit using command line flag (`git commit -m`)
```bash
git commit -m "COMMIT MESSAGE HERE"
```

### Branch
In general when switching branches you can use either `git checkout` or `git switch`. Online tutorials will usually teach you how to change branches using `git checkout`, but it is up to you which one to use.

#### Switching Branches
##### Option 1: using `git checkout`
```bash
git checkout <branch_name>
```

##### Option 2: using `git switch`
```bash
git switch <branch_name>
```

#### Creating A New Branch (based on current branch)
##### Option 1: using `git checkout`
```bash
git checkout -b <branch_name>
```

##### Option 2: using `git switch`
```bash
git switch -c <branch_name>
```

Branches are used to manage multiple versions of your code. This is useful when working in a team and/or to have a separate space for implementing features of your website so it can be more easily managed.

**You should always take advantage of branches in complex projects**, especially when doing group work as it minimizes the risk of having conflicts between you and your co-workers.

