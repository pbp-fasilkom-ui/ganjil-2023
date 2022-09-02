## Learning objectives:

After completing this tutorial, students are expected to be able to:
-   Understand the basic git commands needed to work on application projects.
-   Use the basic git commands required to work on application projects.
-   Create both local and online git repositories (Github).
-   Connect the local git repository and its corresponding repository in Github with remote.
-   Understand git branching and able to create merge requests/pull requests.
-   Deploy Django applications on Heroku.

## Git introduction:

In your journey as a Computer Science or Information System student, you may have used a version control system before. One of that you might have used is the undo feature in a text editor. When you make a mistake, you can revert that mistake using the undo feature. Another example is when you work on a document collaboratively on Google Drive, you can see every change made in that document and revert it to the previous changes.

In this tutorial, you will learn a version control system named git. Git is a version control system commonly used to track changes in software artifacts such as source code, HTML pages, or stylesheets. Git will record the changes in your work as a series of commits consisting of the oldest to the newest commit. That changes are like a graph where the node represents a commit and the directed edge(s) represents the relation between a commit and the previous commit.

> Don't worry if you're still unfamiliar with those terminologies such as node, edge, and graph. You will learn about it more in Data Structure & Algorithm and Discrete Mathematics course.

Before doing this tutorial and the following tutorials, make sure you have installed the following tools:

-   [git](https://git-scm.com/downloads)
-   [Python (latest version) ](python.org/downloads/)
-   [EditorConfig](https://editorconfig.org/)
-   A text editor or a good IDE such as [Vim](https://www.vim.org/download.php), [Visual Studio Code](https://code.visualstudio.com/), [Sublime](https://www.sublimetext.com/), or [PyCharm](https://www.jetbrains.com/pycharm/).

> Whatever your choice of text editor is, try to learn to use vim. Vim is a standard text editor used in git. At least learn how to navigate using `hjkl` buttons and operating editor in NORMAL mode (e.g.: `:w`, `:q`, `:wq`, `ESC` button to switch to NORMAL mode, and `i` to change to INSERT mode).

The instruction on How to install and configure each tool can be seen via the link above to keep this document short.
Translate Materi

Lab 0: Basic git (on GitHub) and Deployment Django Application

Platform Based Programming (CSGE602022) - Organized by Faculty of Computer Science University of Indonesia, Odd Term 2022/2023

Learning Goals

After completed this tutorial, student expected to:
- Understand basic git commands that you need to know to work on application project.
- Uses basic git commands you need to know to work on app projects.
- Create a local and online git repository (GitHub).
- Added a remote between the local git repository and its counterpart on GitHub.
- Understand branching in git and able to do merge requests/pull requests.
- Deploy Django applications on Heroku.

Git Indroductions

In your life as a Computer Science or Information Systems student, you may have used a version control system. One that you might use is the undo feature in the text editor. When you make a mistake, you can revert to a time before you made a mistake with the undo feature. Another example is when you work on a document collaboratively on Google Drive, you can see every change made in the document and you can revert to the previous changes.

In this tutorial, you will learn about a version control system called git. git is a version control system commonly used to track changes to software artifacts such as source code, HTML pages, or stylesheets. Git will record the changes that occur to your work as a series of commits from the oldest commits to the newest commits. The change is like a graph where nodes represent a commit and directed edge(s) represent the relationship between a commit and the previous commit.

Don't worry if you are still unfamiliar with terminology such as: node, edge, and graph. You will learn more about it in the Data Structures & Algorithms and Discrete Mathematics courses.

Before doing this tutorial and the following tutorials, make sure you have installed the following tools:
- Git
- Python (latest version)
- EditorConfig
- A good text editor or IDE, such as Vim, Visual Studio Code, Sublime, or PyCharm.

Whatever your choice of text editor, try to learn to use vim. Vim is the standard text editor used in git. At least learn how to navigate using the hjkl key and operate the editor in NORMAL mode (example: :w, :q, :wq, ESC key to switch NORMAL mode, and i to switch to INSERT mode).

To shorten this tutorial document, how to install and configure each equipment can be seen via the link above.

Tutorial: Basic git and GitHub

1. Open a command prompt or your favorite shell. If you are using Windows, use git Bash or cmd (only applicable if you have added the path to the git executable folder to PATH in the environment variable). If you are using a Unix-based OS (Linux or Mac OS), you can use a shell that is available on your OS, such as bash.

While you can use GUI applications such as the built-in GUI git, gitKraken, or SourceTree, we recommend using shell commands. The shell is one of the most commonly used tools in web development, especially when you have to deploy your web application to a remote server. It will be very useful if you know the shell and git commands when the GUI is not accessible. Executing commands through the shell is also faster than using the GUI.

2. Change the directory to the folder you will use to save your work. Use the cd command to navigate to the directory you want.
3. Create a new folder to store files related to this tutorial. Try to create a folder called git-exercise and change directory (cd) to that folder.
4. In that directory, type git init to create an empty git repository.
5. Try executing the git status command to see the status of your repository when the command is executed.

Now, you have successfully created your first local git repository. Before continuing with the tutorial, there are a few configurations you should do to your local git repository:

1. Set the username and email that will be associated with your work to this git repository.

git config user.name "<NAME>"
git config user.email "<EMAIL>"

example:

git config user.name "Adrian Holovaty"
git config user.email "adrian.holovaty@ui.ac.id"

2. If you are in a proxy (example: using a PC in Fasilkom lab), you must set HTTP proxy in git configuration.

git config http.proxy <PROXYHOST>:<PORT>

example (if you use a PC in Fasilkom Lab):

git config http.proxy 152.118.24.10:8080

3. If you want to set the configuration globally (for each local repository), add the --global flag to the git config call.
4. If you want to know the configuration set to your local repository, you can use the following command.

git config --list --local

After setting up the git repository, please proceed to the tutorial instructions.

1. Create a new file called README.md in the directory you initiated with the git repository and write your name, NPM, and class on the first, third, and fifth lines of the README.md file.

example:

Name    : Adrian Holovaty

NPM     : 1006123456

Class   : Z

2. Execute the git status command in bash. Note that there is an untracked file named README.md. This indicates that there are files that have not been tracked by git.
3. Tell git to track changes to README.md.

git add README.md

4. Execute the git status command again. The status message will change from the previous execution. Now the file is entered in the Changes to be committed section. This indicates the file will be tracked by git on the next commit.

Even if you executed the git add command, the README.md file is not fully tracked by git. git add simply tells git to put changes from that file into the staging area.

5. To permanently save changes to git, execute the command git commit. A text editor will appear to type a message describing the commits you have made and which will be stored in the git history.

A commit can mean changes you made to the local repository. The changes can be in the form of additions, changes in files, or deletion of one or more files.

6. Once you have finished writing the commit message, save it and exit the text editor you used to write the message. All changes will be saved as commits and will be saved in git history.

You just created a local git repository and started monitoring changes to a file in the repository. If you want to share your work with a tutor or with your team, you will need to set up the repository to be accessible via the Internet. To do this, you'll need to put a copy of your local repository into an online git repository like GitHub.

1. Open GitHub using your favorite web browser.
2. Create a new account or an account that you have if you have registered before following this tutorial.
3. Create a new repository called My First Repo and go to the repository page. Make sure you set project visibility to public.
4. Find and click the clone button on the repository page. Note that there are two types of ways to clone a repository: HTTPS and SSH. Copy the URL that uses HTTPS.
5. Update your local git repository so that all commits can be stored in your GitHub repository. Use the command git remote add origin <URL_REPOSITORY> and use the URL you copied earlier as an argument to the command.

git remote add origin <URL_REPOSITORY>

example:

git remote add origin https://github.com/adrianholovaty/my-first-repo.git

git remote add origin will tell the local repository to add a path named origin pointing to the given URL. That way, you can save all your commits to an online repository using the git push command.

6. To save all commits to the online repository on GitHub, execute the git push command. You'll also need to add the name of the remote and branch to be uploaded (or pushed).

git push -u <REMOTE_NAME> <DEFAULT_BRANCH>

example:

git push -u origin main

git push will instruct git to upload all commits on the local main branch to the repository pointed to by remote origin. The -u flag ensures that the git push call when the main branch is active will be sent to the main branch at origin.

7. Take a look at your GitHub repository page. You will see your file is successfully saved and accessible on GitHub.

You can also download (clone) other git repositories to your computer. Try to make a copy of yout repository on GitHub in a different directory on your computer.

1. Go to your repository page on GitHub.
2. Copy the clone URL with HTTPS.
3. Open a command prompt or shell and navigate to a different directory outside of the local repository directory you created earlier.
4. Execute the command git clone <URL> where <URL> is the URL of the repository to be cloned.
5. Note that the name of the new directory that has been created is the same as the name of your repository.

At this stage, you actually have 3 repositories: (1) the original, local repository, (2) the online repository on GitHub that is connected to the first repository, and (3) another repository that you cloned from the repository (2). Now try to add a new commit in the repository (1), push to the repository (2), and download (git term: pull) to the repository (3).

1. Open the local repository directory that you initiated earlier for the first time.
2. Modify the README.md file by adding a string that describes your hobby on the seventh line.

Example:

Name    : Adrian Holovaty

NPM     : 1006123456

Class  : Z

Hobby    : Ngoding

3. Save the file and add it to the local git repository.
4. Commit the file and push it to GitHub.
5. Check your GitHub repository page. Make sure README.md is up to date. You can compare it to the previous version by checking the diff between the last commit and the previous commit.
6. Open the local repository directory cloned repository from GitHub.
7. Update the repository by executing the command git pull origin main.
8. Check the repository that you cloned. You can see that the README.md file has also been updated.

Congratulations! You should at least know the basic git commands you can use to manage your work on git and GitHub. You might ask why do we need to go to the trouble of doing this add-commit-push-pull skill? Why don't we just use Dropbox or Google Drive?

It's true that Dropbox, Google Drive, or other cloud storage services are easier to use. However, these tools are used for more general things. These tools are not specifically designed to deal with changes to software artifacts, especially when changes are made simultaneously and involve multiple parties. Git, as a version control system, can ensure the integrity of all changes when there are multiple parties working simultaneously on a single repository. You will learn more about how to use version control systems in teamwork later in this course and later courses (IK: Advanced Programming, SI: Enterprise-Scale Programming).## Tutorial: Branch and Merge

After learning some of the fundamentals of git, you will begin to learn some more advanced concepts of git. In application development, we as developers will work more with others as a team. Fortunately, git has features to facilitate collaboration between developers. Some of these features are branch and merge.

In general, branch is a git feature that allows a source code stored in git to have another version or usually a branch that contains changes according to the needs and developers who develop it. Generally, after we do a git push, the changes we save will go to the branch we are referring to. The usefulness of this branch is to avoid collisions, conflicts and race conditions in terms of making changes while under development.

As for merge, it is a git feature used to merge a change that has been stored in one branch into the target branch. When doing git merge, merge conflict events can occur. Merge conflict is a conflict that occurs when there are changes to the same file in two different branches or when a file has been deleted in the first branch, but the file exists and has changed in the second branch. To resolve merge conflicts, developers can usually use the GUI that has been prepared by git on GitHub. However, if the platform cannot accommodate the merge conflict process, usually developers will be asked to resolve it in their local repository.

Now we will try to apply the concept of branch and merge.

1. In the local git directory that we have worked with in the previous tutorial, create a new branch in the repository.

    git checkout -b <BRANCH_NAME>

Example:

    git checkout -b second

Now, a new branch has been created. You can see what branches are present in your local repository with the git branch command. To switch to another branch, you can do it directly with the git checkout <NAME_BRANCH> command.

2. Make a change to the README.md file by changing your hobby in line seven to another hobby.

Example:

    Name: Adrian Holovaty
    
    NPM : 1006123456
    
    Grade : Z
    
    Hobbies : Sleep

3. Save the file and add it to the local git repository.

4. Commit the file and push it to GitHub.

5. Check your GitHub repository page. Under the branches option in your repository, you can now see that there is a new branch that you just created.

6. Now merge the new branch into the main branch of the repository. You can do this by selecting the pull request tab on your repository page on GitHub and selecting the new pull request option.

7. Choose the main branch as the base and your new branch as the compare. After selecting these branches, you can see the differences between the two branches that will be merged. Choose create pull request to merge the two branches.

8. After that, you will enter a form page to fill in information about the pull request that you will do. You can fill in a description of the pull request and change the title of the pull request. For now just let it stay and choose create pull request.

9. GitHub will automatically check and compare between the two branches that you want to merge. If there is no conflict, you can immediately select merge pull request.

10. The two branches are now merged. You can see the changes you made in the new branch have been saved or incorporated into the main branch.## Tutorial: Initialize a Django Project

1. Create a new directory with the name `django_exercise` and change the current directory into ‘django_exercise.

2. Open a _command prompt_ or _shell_ and create a _virtual environment_. The _virtual environment_ is used to isolate the _package_ and _dependencies_ from the application so the application doesn't conflict with the other version of packages or dependencies that already installed in your computer. You can create a _virtual environment_ with command:
    ```bash
    python -m venv env
    ```

3. Activate the virtual environment that has been made with the command below. Make sure that right now you’re in the directory `django_exercise` that has been made in the first step. Please note that Windows and Unix have different commands. If the environment has successfully activated, you can see a text `(env)` in the left position of the input row of your shell/command prompt.
    ```
    Windows:
    env\Scripts\activate.bat
    pip install -r requirements.txt
    ```
    ```
    Unix (Linux & Mac OS):
    source env/bin/activate
    pip install -r requirements.txt
    ```

4. Install the required dependencies to run the application in your local computer with command `pip install <DEPENDENCIES_NAME>`. The _dependencies_ name that you need to install can be seen below.
  - django 
  - gunicorn
  - whitenoise
  - psycopg2-binary
  - requests
  - urllib3

5. Save the _dependencies_ list that you’ve installed to a `txt` format file. You can use command prompt/shell with command: `pip freeze > requirements.txt`. 

6. Create a Django project with command `django-admin startproject <PROJECT_NAME>.` on your command line/shell. Please note that `<PROJECT_NAME>` is a name of the project that you want and `.` in the end of the line of command was to tell the `django-admin` to initiate a Django project with current directory as a `root` of the project.

7. With command prompt/shell, execute command `python manage.py runserver` (Windows) or `./manage.py runserver` (OS with unix based) to run the Django application. Make sure that ‘manage.py’ file exists within the active directory on your current command prompt/shell.

8. Open your favorite browser and navigate to `http://localhost:8000` to see the Django application that you've made. Now, you can see a rocket is flying in the browser page. Congratulations! You’ve successfully made a Django application from scratch.

9. To terminate a running Django server, you can use `CTRL+C` with your keyboard (Windows/Linux) or `Command+C` (Mac OS).

10. To terminate a virtual environment, you can execute the command `deactivate` in a shell that you used for the previous steps. `(env)` text will soon disappear and it shows that a virtual environment has been successfully terminated.

## Tutorial: Deploy a Django Application with Heroku

After you learn about git, GitHub, and how to make a Django application, you’ll learn how to utilize GitHub to automate the deployment of your Django application. In this course, you’ll learn how to use Heroku as a host for your application that you want to deploy.

1. Create a new repository with your GitHub account that you’ll use as a repository for your Django application.

2. Execute command `git init` with a command line/shell in `django_exercise` directory that you’ve used before in the previous tutorial and set the origin of your git local repository to the GitHub repository that you’ve made in the previous step.

3. Create a file with the name `Procfile` that contains a script below. This file will be used by Heroku to read the log activity of your application to Heroku internal monitoring system. The contents of the script can be seen below.
    ```
    web: gunicorn django_project.wsgi --log-file -
    ```
> Change `django_project` according to your Django project name that you want to deploy.

4. Create a new file with name `dpl.yml` in _.github/workflows_ folder from your current repository. This file is used to execute  _deployment_ by _runner_ from GitHub Actions. Copy and paste script below to file `dpl.yml`:
    ```
    name: Deploy

    on:
      push:
        branches-ignore:
          - template
      pull_request:
        branches-ignore:
          - template

    jobs:
      Deployment:
        runs-on: ubuntu-latest
        env:
          HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}
          HEROKU_APP_NAME: ${{ secrets.HEROKU_APP_NAME }}
        steps:
        - uses: actions/checkout@v2
        - name: Set up Ruby 2.7
          uses: actions/setup-ruby@v1
          with:
            ruby-version: 2.7
        - name: Install dpl
          run: gem install dpl
        - name: Install Heroku CLI
          run: wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh
        - name: Deploy to Heroku
          run: dpl --provider=heroku --app=$HEROKU_APP_NAME --api-key=$HEROKU_API_KEY
        - name: Run migrations on Heroku
          run: heroku run --app $HEROKU_APP_NAME migrate
        - uses: chrnorm/deployment-action@releases/v1
          name: Create GitHub deployment
          with:
            initial_status: success
            token: ${{ github.token }}
            target_url: https://${{ secrets.HEROKU_APP_NAME }}.herokuapp.com
            environment: production
    ```

5. Create a file with the name `.gitignore`. This file is used to tell git which files or directories that shouldn't be pushed to your online repository. You can load the file by copying the contents of `.gitignore` from [website](https://djangowaves.com/tips-tricks/gitignore-for-a-django-project/) below.

6. Add a few configurations below to the `settings.py` file in your Django project:
    ```
    import os
    PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
    STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')
    ```

7. Add `*` to `ALLOWED_HOSTS` variable in `settings.py` file to grant access to all _host_.
Example::
    ```
    ALLOWED_HOSTS = ["*"]
    ```

8. Add new  _middleware_ below to  `MIDDLEWARE` variable in `settings.py` file:
    ```
    MIDDLEWARE = [
        ...,
        'whitenoise.middleware.WhiteNoiseMiddleware',
    ]
    ```

9. `Add`, `commit`, and `push` the changes that you have made to your GitHub repository.  

After you perform all the procedures above, your new Django application is ready to deploy in Heroku. If you open the GitHub Actions tab in your repository, it seems that a _workflow_ is already running but the status is failed because there's an error that says there are some parameters in _deployment_ process that were not found. This thing happened because you’re not yet configure the parameters needed by the _workflow_. 
Now, you’ll configure those parameters.
>Make sure that you’ve a Heroku account and have made the Heroku application.<br />
> Please read README in _root_ of PBP repository to learn how to create an account and application on Heroku.

1.  Copy API Key from your account. API Key can be found in `Account Settings -> API Key`. Keep your API Key and the information about your Heroku application in a text file with given format:
    ```
    HEROKU_API_KEY: <YOUR_API_KEY_VALUE>
    HEROKU_APP_NAME: <YOUR_HEROKU_APPLICATION_NAME>
    ```

2. Open your GitHub repository configuration and open the Secrets section for GitHub Actions (`Settings -> Secrets -> Actions`).

3. Add a new `repository secret` variable to do the _deployment_. Key-Value pair from the variable that you’ll make can be obtained from the information that you noted in the previous text file. Example can be seen below:
    ```
    (NAME)HEROKU_APP_NAME
    (VALUE)MY-APPLICATION
    ```

4. Keep those variables.

5. Open GitHub Actions and  re-run the failed _workflow_.

After you re-run _workflow_ and _deployment_ status become success (can be seen from the green checklist symbol on your repository), you can access the application in `https://<heroku-application-name>.herokuapp.com`. Congratulations! Now, you’re Django application can be accessed from the internet.


