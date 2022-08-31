---
sidebar_position: 1
sidebar_label: "PBD Tutorials & Assignments"
---

# PBD Tutorial And Assignment Repository 2022/2023

Platform Based Programming (CSGE602022) - Organized by Faculty of Computer Science University of Indonesia, Odd Term 2022/2023

## Table of Contents

1. Weekly Tutorial
2. [Preliminary](#preliminary)
3. [Rules and Grading Scheme](#rules-and-grading-scheme)
3. [Tutorial: How to do](#tutorial-how-to-do)
4. [Tutorial: Running a Django Application](#tutorial-running-a-django-application)
5. [Tutorial: Deploying Application](#tutorial-deploying-application)
6. [Reading Sources](#reading-sources)
7. [Credit](#credit)


## Preliminary

Welcome to the task repository and lab tutorial of PDB Course Odd 2022/2023. This repository and document are intended as a container for the tutorial, instruction, guide, and _source code_ that related to the Platform-Based Development/Programming Course.

There are some tasks that you need to complete during this course, which are Reflection Essay, Tutorial, and Lab Assignments.

Each week, you'll be given a tutorial to learn the concepts and practices from the Platform-Based Development/Programming course.

You'll also be asked to do the lab assignment task as a form of implementation of learning that you've learned from class and tutorial sessions.

Moreover, you need to write down a reflection essay of what you've learned and implemented in the lab assignment that you've done.

## Rules and Grading Scheme

Tutorial, Essay, and Lab assignment PBD Odd 2022/2023 contribute to the final grade of PDB **20%** in total. The grading scheme for **tutorial and programming assignment** can be seen below:
1. **A** if **all checklist** is done
2. **B** if **80% checklist** is done
3. **C** if at least **half of the checklist** is done
4. **D** if only **30% checklist** is done
5. **E** if not doing all of the checklists

While **essay assignment**, will be graded by the following scheme:
1. Originality of work and title attractiveness (10 points)
2. Writing format (10 points)
3. Good and right use of English (15 points)
4. Sharpness level of problem analysis (30 points)
5. The benefits and urgency from the issues raised (15 points)
6. Conclusion and Suggestion (15 points)
7. References (5 points)

Each task that has been done by the student must be demonstrated to the teaching assistant. The following details are the rules that students need to pay attention to:

1. Work demonstration of tutorial/task need to be done **no later than a week after submission deadline**. The Schedule and time allocated for the demonstration will be adjusted according to your teaching assistant.
2. If there's a blocker so that you can't demonstrate your work to your teaching assistant within the given time, you need to contact your teaching assistant and send an email to the lecturer to follow up on your work demonstration.

## Tutorial: How To Do

1. Suppose you want to do a tutorial on lab 2. Open README.md for tutorial 2 on the PBP website
2. Read and understand carefully the README file. This file contains the tasks and instructions that you need to complete.
3. Do the tutorial.
4. You can work on these tutorials on the repository you created previously or create a new repository.
5. Use git add <FILES/DIRECTORIES> or git rm <FILES/DIRECTORIES> to stage/unstage files that you will later save to Git.
6. If you want to save your progress locally, you can commit to Git. Use the command git commit -m "`MESSAGE`" with `MESSAGE` as the description of the job you want to save.
7. Repeat steps 4-6 until you have finished your assignment.
8. Once you're ready to submit your work or you want to save it to your GitHub repository, do a push. You can use the command git push origin <BRANCH_NAME> with <BRANCH_NAME> as the branch you want to store on GitHub.

## Tutorial: Running a Django Application

First you need to get a copy of the repository you want to run using the git clone <URL_REPOSITORY> command.

1. In the directory you copied to your machine, open the console in that directory and start by first creating a virtual environment with the command:

        python -m venv env
        
    Please make sure you run the command at the root of the repository on your machine.

2. After the command has finished executing, you can see that there is an env folder in your repository. This env folder or virtual environment serves to encapsulate all dependencies from the application so that they are not mixed or collided with versions that should not be.

3. Activate the virtual environment using the following command. Note that running the virtual environment activation command is different for Windows and UNIX-based operating systems:

        Windows:
        env\Scripts\activate.bat
        pip install -r requirements.txt

        Linux & Mac OS:
        source env/bin/activate
        pip install -r requirements.txt

4. When the virtual environment is successfully activated, you'll see (env) in your console. Run the python manage.py runserver command to run the Django application on your machine.

    Please ensure there is a manage.py file in the active directory of your console before running the command.

5. Open the local web server of the Django application using a browser at http://localhost:8000.

6. If a page appears, congratulations; you've successfully run the Django application on your machine.

7. When you're done with the tutorial or want to change to another Python project, don't forget to deactivate the previously activated virtual environment with the command:

        deactivate


7. Apabila Anda sudah selesai mengerjakan tutorial atau ingin mengubah ke proyek Python lain, jangan lupa untuk mematikan _virtual environment_ yang telah diaktifkan sebelumnya dengan perintah:

## Tutorial: Deploying Application

If you haven't had any active Heroku accounts or an active Heroku app,

1. Create a Heroku account. You can create a Heroku account on its login page at [this link](https://id.heroku.com/login).
2. Once you've logged in to the dashboard page, create a Heroku app.

Once you have the Heroku app,

1. Copy the API key from your account. You can find your API key on `Account Settings -> API Key`. Save your API Key along with information about your application in a notepad/another file in the following format:
```
HEROKU_API_KEY: <YOUR_API_KEY_VALUE>
HEROKU_APP_NAME: <YOUR_HEROKU_APP_NAME>
```
2.  Go to the Secret section at your GitHub repository configuration to do GitHub Actions (`Settings -> Secrets -> Actions`).
3.  Add a new `repository secret` variable to do the deployment. From the information you saved in notepad earlier, take the Name-Value pair of a variable you're going to create. For example:
```
(NAME)HEROKU_APP_NAME
(VALUE)MY-APP
```

4.  Save those variables.
5. In your local machine, create a new file named `Procfile` at the root of your repository. Heroku will use this file to read application activity logs to Heroku's internal monitoring system. The content of this file is:
```
web: gunicorn aplikasi_django.wsgi --log-file -
```
> Change 'django_application' as the application you're going to deploy.

6. Create a new file named `dpl.yml` in ._github/workflows_ on your repository. This file will be used to execute deployment by runner from GitHub Actions. Copy and paste the following script to the 'dpl.yml' file:
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

7.  **Add**,  **Commit**, and **Push** those files to your GitHub repository with `git push origin <NAMA_BRANCH>` command.
8. Run/rerun your application's deployment workflow on GitHub Actions. You can find that GitHub Actions on your repository (`GitHub Actions -> Workflows`).

> Attention! There are some possibilities for the workflow to fail for various reasons. If your workflow fails, a red cross symbol will appear on your GitHub repository.
> 
> If your workflow fails due to dependencies or configuration of the application, double-check the Django application configuration and the used dependencies version.
> 
> Rerun the workflow if your workflow fails due to GitHub Actions or runner issues. This issue sometimes arises when the GitHub Actions runner is busy or experiencing a GitHub server failure.
>
> If workflow status is pending, you just have to wait for your running workflow's turn to be executed by the GitHub runner.

9.  Your repository will have a green check mark if all workflow processes are successfully executed. Suppose you add README badges status to your repository. In that case, this badge's status will automatically be updated based on the recently executed workflow.
10.  You can access your deployed application on the URL of your Heroku app.
    

## Reading Sources

Here are some reading sources that might help during the learning process:

-   [Writing a Good Commit Message](https://cbea.ms/git-commit/)

## Credit

This document was based on [Exercise 0: Introduction to Git](https://gitlab.com/CSUI-AdvProg-2017/lab-exercises),  written by the 2017 Advanced Programming Teaching Team ([@addianto](https://gitlab.com/addianto),  [@muhammad.ardhan](https://gitlab.com/muhammad.ardhan),  [@fbenarto](https://gitlab.com/fbenarto), et al.) and [PBP Ganjil 2021](https://gitlab.com/PBP-2021/pbp-lab), written by 2021 Platform Based Programming Teaching Team ([@prakashdivyy](https://gitlab.com/prakashdivyy)). Every tutorial and instruction in this repository is designed in such a way that students can complete this tutorial during the lab session.