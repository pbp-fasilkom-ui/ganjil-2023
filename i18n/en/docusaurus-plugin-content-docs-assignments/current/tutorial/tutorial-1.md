---
sidebar_label: Lab 1
---

# Lab 1: Introduction to Django and Model-View-Template (MVT) Applications in Django

Platform-Based Programming (CSGE602022) - Organized by the Faculty of Computer Science Universitas Indonesia, Odd Semester 2022/2023

---

## Learning Objectives

After completing this tutorial, students are expected to:

-  Understand the concept of MVT in Django applications
-  Understand the flow of Django displaying an HTML page
-  Understand the routing configuration in `urls.py`
-  Understand the relationship between _models_, _views_ and _template_ in Django
-  Understand the basic syntax for _mapping_ data to HTML templates

## Introduction to Django Web Application Development Framework

[Django][] is a web application development framework written in [Python][].
It is very useful in web development because it provides reusable components
needed to get a website up and running without having to start from scratch.
Developers can focus more on implementing features by using the provided
components and following the convention suggested by the framework.

Before starting web development using Django, it is important to understand what
a _virtual environment_ (`virtualenv`) is. In the previous [tutorial](./tutorial-0.md),
you created a _virtual environment_ to run a Django application on your local machine.
In short, a _virtual environment_ serves to separate project-specific application
settings and _software packages_ (or also known as _dependencies_) installed in
each Django project so that any changes made to a project will not affect the
others. In other words, each Django project should have its own `virtualenv`.

## The Concept of Models, Views, and Templates (MVT)

![Visualization of a running Django application](https://krify.co/wp-content/uploads/2019/06/Django-Work-flow.jpg)

Django is a _framework_ that follows the MVT (Model-View-Template) structure. MVT is a derivative of the MVC (Model-View-Controller) structure, but the  _model_ is more focused on the object that defines the entities in the _database_ and their configuration, the _views_ serve as the main logic of the application that will process incoming requests, and the _template_ serves as the views that will be returned to the user.

The flow of a request being processed in Django is as follows. First, incoming requests to the Django server will be processed through `urls` to be forwarded to the `views` defined by the developer to process the request. If there is a process that requires the involvement of a _database_, then the `views` will call a _query_ to `models` and the _database_ will return the result of the _query_ to the `views`. After the request has been processed, the result of the process will be mapped into the HTML that has been defined before finally the HTML is returned to the user as a response.

## Tutorial: Startup

1. Log in to https://github.com/pbp-fasilkom-ui/django-pbp-template and choose
   **Use this template action** button. You will be redirected to a page to
   create a new repository that will contain the starter code from the template
   repository.
2. Enter a repository name to your liking. Make sure your repository is **public**
   so it can later be checked out by the teaching assistants. The Include all branches section does not need to be checked.
3. Clone the new repository to your local development machine with the command
   `git clone <URL_REPOSITORY>`. The `<URL_REPOSITORY>` is the Git clone URL
   that is available in the GitHub page of your new repository.
4. Go into the new directory containing the repository that you have cloned on your computer and create a virtual environment with the following command.

   ```shell
   python -m venv env
   ```
5. Launch the virtual environment with the command that corresponds to the type of operating system you are using.

   ```shell
   # Windows:
   .\env\Scripts\activate.bat
   # Unix-based OS (Linux, MacOS):
   source ./env/bin/activate
   ```
6. Install the dependencies required to run the Django project with the `pip install -r requirements.txt` command.
7. Run the Django project you've created with the `python manage.py runserver` command and open `http://localhost:8000` in your favorite browser to test if it runs properly.

Now that you have configured your repository and Django project. In the next
section, you will learn how to create a new Django app within a Django project.

## Tutorial: Creating a Django App along with Model Configuration

1. Create a new Django app named `wishlist`:

   ```shell
   python manage.py startapp wishlist
   ```
2. Open `settings.py` in the `project_django` folder and add `wishlist` app into
   the `INSTALLED_APPS` list to register the new Django app you have created
   into the Django project. For example:

   ```python
   INSTALLED_APPS = [
       ...,
       'wishlist',
   ]
   ```
3. Open `models.py` file in the `wishlist` app folder and add the following
   code snippet:

   ```python
   from django.db import models

   class ItemWishlist(models.Model):
       item_name = models.CharField(max_length=50)
       item_price = models.IntegerField()
       description = models.TextField()
   ```
4. Run the `python manage.py makemigrations` command to prepare to migrate the model schema into the local Django database.
5. Run the `python manage.py migrate` command to deploy the created model schema into the local Django database.
6. Create a folder called `fixtures` in the `wishlist` app folder and create a
   file called `initial_wishlist_data.json` with the content as follows:

   ```json
   [
       {
           "model": "wishlist.itemwishlist",
           "pk": 1,
           "fields": {
               "item_name": "iPhone 14 Pro Maag",
               "item_price":"14000000",
               "description": "It gives you ulcers because it's expensive."
           }
        },
        {
           "model": "wishlist.itemwishlist",
           "pk": 2,
           "fields": {
               "item_name": "Round Hat",
               "item_price":"99000",
               "description": "Round is my hat, if it's not round it's not my hat."
           }
       },
       {
           "model": "wishlist.itemwishlist",
           "pk": 3,
           "fields": {
               "item_name": "Folding Mattress",
               "item_price":"500000",
               "description": "How many layers? Hundreds!"
           }
       }
   ]
   ```
7. Run the command `python manage.py loaddata initial_wishlist_data.json` to load the data into the local Django database.

## Tutorial: Implement Basic Views

1. Open `views.py` that is located in `wishlist` app folder and create a function
   that accepts a parameter named `request` and returns a response object. The
   `render` function, which has been imported, is a function that returns a
   response object that can contain a web page. For example:

   ```python
   def show_wishlist(request):
       return render(request, "wishlist.html")
   ```
2. Create a folder named `templates` in `wishlist` app folder and create a file
   named `wishlist.html` there. Fill the content of `wishlist.html` with the
   following _template_ string:

   ```html
   {% extends 'base.html' %}

   {% block content %}
   <h5>Name: </h5>
   <p>Fill me!</p>

   <table>
       <tr>
           <th>Item Name</th>
           <th>Item Price</th>
           <th>Description</th>
       </tr>
       {% comment %} Add the data below this line {% endcomment %}
   </table>

   {% endblock content %}
   ```
3. Create a file in `wishlist` app folder named `urls.py`. It will be used for
   _routing_ incoming requests to one or more functions in `views.py`. The
   contents of `urls.py` is as follows:

   ```python
   from django.urls import path
   from wishlist.views import show_wishlist

   app_name = 'wishlist'

   urlpatterns = [
       path('', show_wishlist, name='show_wishlist'),
   ]
   ```
4. Also register the `wishlist` application in `urls.py` that is located in `project_django` folder by adding the following code snippet below to `urlpatterns` variable.

   ```python
   path('wishlist/', include('wishlist.urls')),
   ```
5. Run your Django project with the command `python manage.py runserver` and open [http://localhost:8000/wishlist/](http://localhost:8000/wishlist/) in your favorite browser to see the page that you've created.

If a page appears containing _wishlist_ table, congratulations! You've successfully done _routing_ a `views` function that can _rendering_ an HTML page. However, as you can see, there's no data on that `wishlist` table. You also can see it's not clear who the `wishlist` belongs to, so you want to display your name on the `wishlist` page. Now, you will learn how to display data to HTML from the Django local _database_ as well as the data or variables that you've defined in your `views.py` file.

## Tutorial: Connecting Models with Views and Templates

1. Add an import statement that imports `ItemWishlist` class at the top section
   of `views.py` in `wishlist` app folder:

   ```python
   from wishlist.models import ItemWishlist
   ```

   `ItemWishlist` not only represents a data model, but also provides
   functionalities related to data persistence (e.g. lookup, create, delete
   data) between Python code and a data storage such as relational database.
2. Add the code snippet below to the function you created earlier. The code
   snippet calls a query function to the database and store the query results
   into a variable. Adjust the content of `name` variable with your name.

   ```python
   data_wishlist_item = ItemWishlist.objects.all()
   context = {
       'list_item': data_wishlist_item,
       'name': 'Cinoy'
   }
   ```
3. Pass `context` as the third parameter into `render` call in the function you
   created earlier. The data contained in `context` variable will also be
   rendered by Django so that later you can display the data on the HTML page.

   ```python
   return render(request, "wishlist.html", context)
   ```

Now, you will learn to map data that has been rendered in the views function to be able to display it on an HTML page. To do this mapping, you can use the special template syntax found in Django, namely `{{data}}`. If you're interested in knowing more about the syntax of Django's templates, you can read and learn more about Django's template tags documentation.

1. Open the HTML file that you created earlier in the `templates` folder in
   the `wishlist` app directory.
2. Change `Fill me!`, which is the text value in the HTML &lt;p&gt; tag, to
   `{{ name }}` to display your name on the HTML page. For example:

   ```html
   ...
   <h5>Name: </h5>
   <b>{{ name }}</b>
   ...
   ```
3. To display a list of items into a table, you need to iterate over the `list_item` variable that you have rendered into the HTML. Note that you can't call the item list directly as you did in step 2 because the `list_item` variable is a container containing objects. You also need to call the specific variable/attribute name of the object in the container to call the data from that object. Examples are as follows.

   ```html
   ...
   {% comment %} Add data below {% endcomment %}
   {% for item in list_item %}
       <tr>
           <th>{{ item.item_name }}</th>
           <th>{{ item.item_price }}</th>
           <th>{{ item.description }}</th>
       </tr>
   {% endfor %}
   ...
   ```

Now, try to refresh the page and see if the data you entered into the views also appears on the web page. If it appears, then congratulations! You've successfully connected models with views and templates while learning the basics of Django's template syntax.

Next, please add, commit, and push the changes you've made to save them to the GitHub repository.

## The Final Word

Finally finished! Congratulations, you've made it this far following the tutorial and learning the ins and outs of Django!

After you have completed all of the tutorials above, hopefully now you will understand better and in the future, you will be able to explore more with the Django framework in creating a web application.

A few tips and tricks to survive as a developer in the future; Familiarize yourself with google, youtube and stack overflow. This website is the "light" that will help you deal with the errors you encounter while coding! In fact, a Software Engineer who works at Google always "learns" from the three websites mentioned when they are faced with problems. Therefore, do not hesitate to tell them!

### HAPPY CODING!

## Further Reading Resources

- [Django Documentation](https://docs.djangoproject.com/en/4.1/)
- [Created Initial Data in Django Project](https://docs.djangoproject.com/en/4.1/howto/initial-data/)
- [Django Framework](https://www.tutorialspoint.com/python_web_development_libraries/python_web_development_libraries_django_framework.htm)
- [Why Django is the Best Web Framework for Your Project](https://steelkiwi.com/blog/why-django-best-web-framework-your-project/)

## Contributors

- Mohamad Rifqy Zulkarnaen
- Muhammad Athallah
- Muhammad Azis Husein (EN translator)
- Firlandi A. R. Ansyari (EN translator)
- Winaldo Amadea (EN translator)
- Zuhal 'Alimul Hadi (EN translator)

## Credits

This tutorial is developed based on [PBP Odd 2021](https://gitlab.com/PBP-2021/pbp-lab) written by the 2021 Platform Based Development/Programming Teaching Team ([@prakashdivyy](https://gitlab.com/prakashdivyy )). All the tutorials and instructions listed in this repository are designed in such a way that students taking a Platform-Based Programming course can complete the tutorials during a lab session.

[Django]: https://www.djangoproject.com/
[Python]: https://www.python.org/
