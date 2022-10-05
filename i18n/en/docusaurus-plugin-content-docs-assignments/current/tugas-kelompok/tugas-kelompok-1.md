---
sidebar_label: Midterm Project
---

import Countdown from "@site/src/components/Countdown"

# Midterm Project

**Develop a Website using Django Web Framework**

---

## Description

You are required to form or join a group of 5 - 6 students and build a website that relevant to a theme given by the teaching team.
Start by brainstorming the product idea that you and your teammates want to build.
Once your team has agreed on a certain idea, prepare the codebase for website development.
The website must be developed using Django web framework and the source code is managed using Git version control system.

## Learning Objectives

By undertaking this group project assignment, you and your teammates are expected to be able to:

-  Design web pages
-  Build a website using Django web framework that follows MTV (Model-Template-View) architectural pattern
-  Use a CSS framework or toolkit to implement _Responsive Web Design_
-  Write unit tests
-  Set up a continuous integration (CI) and continuous deployment (CD) pipeline

## Notes

In addition to the [learning objectives](#learning-objectives) above,
you must also learn several scholarly aspects expected from potential bachelor graduates.
Among those that are relevant in this course are grit, independence, rigor, and metacognition.
In other words, you are expected to have the ability to set learning strategies that suit oneself including planning, monitoring, and evaluating their independent learning process.
This includes the ability to understand, communicate problems, discuss, and ask questions.

You also need to have a positive attitude when dealing with various circumstances that may affect you in positive or negative way.
Although it may be difficult to be always in positive attitude,
try to strive for it so any circumstances can be beneficial in regards to achieving the previously mentioned scholarly aspects.

A negative attitude will only make things worse and eliminate the benefits of this project as a learning experience that will be useful in the future.
The teaching team (lecturers and teaching assistants) will try their best to assist you in the learning process so you can keep pace with the course and learn as much as possible.

As an intermezzo, there is a video (attached below) that is quite popular and hopefully can entice you to keep working hard and practising for your success in the future:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/42-hh-iMJJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br /><br />

Good luck and have a great time working on the project!

## General Rules of the Project

1. Each group comprises of 5 - 6 person.
2. Each group should create a single Git repository on GitHub that all group members use to collaborate.
   Share the link to your group's Git repository through a submission space on SCELE.
3. Each group may propose their own ideas for the application they are building.
   The main theme of the group project is the issues that are/will be discussed in [upcoming G20 Summit](https://en.wikipedia.org/wiki/2022_G20_Bali_summit).
   Check the following references to know the issues discussed in G20:

      - https://www.g20.org/g20-presidency-of-indonesia/#priorities
      - https://www.oecd.org/g20/topics/
      - https://globalsmartcitiesalliance.org/
      - https://indonesia.go.id/kategori/kabar-terkini-g20/3789/indonesia-dorong-g20-mengembangkan-smart-city
4. The idea for developing the application should provide a solution to one or more issues discussed in G20. Some idea examples:

      - Smart city application
      - Infrastructure for supporting electrical vehicles
      - Environmental-based charity
      - Mitigating environmental or natural disasters
      - And many more
5. Have a group discussion to brainstorm and decide on a project idea
6. Each group member should work individually on a module.
   The modules will be decided by the group during project planning in the group and should be suitable for implementing the project idea.
   Furthermore, each module developed by every group member should be integrated into the application.
7. The application must be deployed as a single, unified web application hosted on a Platform-as-a-Service (PaaS) provider such as Heroku.

## Specific Rules for Each Group Member

Each group member must work on a single module, and each module must:

1. Implement _models_ by writing their own models, reusing models provided by Django, or using models developed by other group members in separate module.
2. Implement _views_ to handle incoming requests and produce HTML/JSON-based responses.
3. Implement _templates_ using CSS framework/toolkit that assist in implementing responsive design (such as: [Bootstrap][], [Tailwind][]).
4. Implement a page with a _form_ that accepts user input that shall be processed by a _view_. (examples: save a model object, look up for a collection of model objects)
5. Implement client-side scripting and asynchronous data loading (AJAX) using JavaScript.
6. Implement authentication and authorisation on a certain part of the functionality implemented in the module. For example, a menu is only visible when the user has logged in and authorised to view the hidden menu.

## International-class Specific Rules of the Project

In addition to the rules shared with the Regular (Indonesian) class,
there are rules that only applies to students enrolled in International class.

The teaching team can offer a project idea that can be chosen by students.
**First-come, first-serve**.
If your team happen to pick a project idea offered by the teaching team, you need to arrange a meeting with the teaching team to discuss about the requirements.

Currently at the time of writing (29 September 2022), there is one project idea offered by the teaching team:

-  A digital [proceeding](https://en.wikipedia.org/wiki/Conference_proceeding) app for [an academic conference](https://www.acb-afob2022.com/) organised by the Faculty of Engineering Universitas Indonesia.

   > You will develop the features for the conference organiser and the participants.
   > The conference organiser want to manage various data related to the conference such as presentation schedules, published papers, and room assignments.
   > The conference participant want to get informed about the conference, like knowing the schedules and searching for any interesting papers.
   > To know more about the expected features used by the participants, try exploring the mobile app version that has been published on [Google Play](https://play.google.com/store/apps/details?id=id.ac.ui.eng.qir.konfui.release).

## Project Timeline

<table>
    <tr>
        <th>Milestones and Deliverables</th>
        <th>Due Dates and Remarks</th>
    </tr>
    <tr>
        <td>
            <b>Milestone 1 (40%)</b>
            <ul>
                <li>A Git repository on GitHub for the group project, i.e. the source code and project management</li>
                <li>A deployed app on Heroku</li>
                <li>A README.md in the group project repository that describes:</li>
                    <ol>
                        <li>Group name and members</li>
                        <li>Link to the deployed app on Heroku</li>
                        <li>Brief description of the app</li>
                        <li>List of modules (or, features) that will be implemented</li>
                        <li>Instructions on how to build, run, and deploy the app</li>
                    </ol>
                <li>Defined the possible user roles in the app (for implementing role-based access control)</li>
            </ul>
        </td>
        <td>
            <b>Due Date:</b>
            <Countdown deadline={new Date("13 October 2022 23:55 GMT+7")} />
            <b>Submit the link to your group project's GitHub page and the deployed app on Heroku.</b>
            <br />
            <br />
            <p>
                <b>Submission Criteria:</b> The codebase for Django web app project is successfully built and run on Heroku (at minimum, it should display a landing page containing a "Hello, World"-like message)
            </p>
        </td>
    </tr>
    <tr>
        <td>
            <b>Milestone 2 (60%)</b>
            <p>
                <i>Implemented feature modules</i>
            </p>
            <ul>
                <li>Integrated modules from each group member</li>
                <li>Implemented URL routing</li>
                <li>Implemented data models</li>
                <li>Implemented the Django's views component (or the business logic of the app)</li>
                <li>Delivered the features according to the proposed ideas and design documents (e.g. wireframe, sketches, if any)</li>
            </ul>
        </td>
        <td>
            <b>Due Date:</b>
            <Countdown deadline={new Date("30 October 2022 23:55 GMT+7")} />
            <p><b>Submission Criteria:</b> All modules are integrated and can be used by user when using the deployed version</p>
        </td>
    </tr>
    <tr>
        <td>
            <b>Bonus (5%)</b>
            <ul>
                <li>Write unit tests that verify the implementation correctness, and ensure the overall code coverage of the project reached at least 80%</li>
                <li>Implement continuous integration (CI) and continuous deployment (CD) using GitHub Actions. For example: execute the test cases each time a Git commit was pushed, deploy the app automatically if there is a new commit pushed or merged to the main branch</li>
                <li>Display the status badges of the GitHub Actions in README.md. For example: status badge that reports whether the app is successfully deployed by GitHub Actions, status badge that reports code coverage</li>
            </ul>
        </td>
        <td></td>
    </tr>
</table>

[Bootstrap]: https://getbootstrap.com/
[Tailwind]: https://tailwindcss.com/
