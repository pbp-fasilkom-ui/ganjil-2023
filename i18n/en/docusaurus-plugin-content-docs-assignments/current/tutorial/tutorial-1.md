---
sidebar_label: Lab 1
---

# Lab 1: Introduction to Django and Model-View-Template (MVT) Applications in Django

Platform-Based Programming (CSGE602022) - Organized by Faculty of Computer Science, University of Indonesia, Odd Semester 2022/2023

---

## Learning Objectives

After completing this tutorial, students are expected to:
- Understand the concept of MVT in Django applications
- Understand the flow of Django displaying an HTML page
- Understand the routing configuration in `urls.py`
- Understand the relationship between _models_, _views_ and _template_ in Django
- Understand the basic syntax for _mapping_ data to HTML templates

## Introduction to Django Applications
Django is a _web framework_ that uses the Python programming language. This _web framework_ is very useful in web development because it provides the components needed to get a website up and running without having to start from scratch. Before starting web development using Django, it's important to understand what a `virtual environment` (virtualenv) is. In the previous tutorial-0, you created a `virtual environment` to run a simple Django application on your local machine. In short, a _virtual environment_ serves to separate the settings and _package_ installed in each Django project so that changes made to one project don't affect the others. In other words, each Django project should have its own `virtualenv`.

## The Concept of Models, Views, and Templates (MVT)

![Visualization of a running Django application](https://krify.co/wp-content/uploads/2019/06/Django-Work-flow.jpg)

Django is a _framework_ that follows the MVT (Model-View-Template) structure. MVT is a derivative of the MVC (Model-View-Controller) structure, but the  _model_ is more focused on the object that defines the entities in the _database_ and their configuration, the _views_ serve as the main logic of the application that will process incoming requests, and the _template_ serves as the views that will be returned to the user. 

The flow of a request being processed in Django is as follows. First, incoming requests to the Django server will be processed through `urls` to be forwarded to the `views` defined by the developer to process the request. If there is a process that requires the involvement of a _database_, then the `views` will call a _query_ to `models` and the _database_ will return the result of the _query_ to the `views`. After the request has been processed, the result of the process will be mapped into the HTML that has been defined before finally the HTML is returned to the user as a response.

## Tutorial: Startup

1. Log in to https://github.com/pbp-fasilkom-ui/django-pbp-template and select the Use this template action. You'll be redirected to a page to create a new repository with the same template as Django's template repository.

2. Enter a repository name to your liking. Make sure your repository is public so it can later be checked out by teaching assistants. The Include all branches section does not need to be checked.

3. Clone the new repository to your computer with the command git clone <URL_REPOSITORI> with the description <URL_REPOSITORI> adjusted to the repository link you just created.

4. Enter the repository that you have cloned on your computer and create a virtual environment with the following command.

        python -m venv env

5. Launch the virtual environment with the command that corresponds to the type of operating system you are using.

        Windows:
        env\Scripts\activate.bat

        Unix (Linux & Mac OS):
        source env/bin/activate

6. Install the dependencies required to run the Django project with the pip install -r requirements.txt command.

7. Run the Django project you've created with the python manage.py runserver command and open http://localhost:8000 in your favorite browser to test if it runs properly.

Now that you've configured your repository and Django project, you'll learn how to create a django-app.

## Tutorial: Creating a Django App along with Model Configuration

1. Create a django-app named wishlist with the python command manage.py startapp wishlist.

2. Open settings.py in the project_django folder and add the wishlist app to the INSTALLED_APPS variable to register the django-app you've created into your Django project. An example is as follows.

        INSTALLED_APPS = [
            ...,
            'wishlist',
        ]
3. Open the models.py file in the wishlist folder and add the following code snippet.

        from django.db import models
        
        class ItemWishlist(models.Model):
            item_name = models.CharField(max_length=50)
            item_price = models.IntegerField()
            description = models.TextField()

4. Run the python manage.py makemigrations command to prepare to migrate the model schema into the local Django database.

5. Run the python manage.py migrate command to deploy the created model schema into the local Django database.

6. Create a folder called fixtures inside the wishlist application folder and create a file called initial_wishlist_data.json containing the following code.

        [
            {
                "model": "wishlist.itemwishlist",
                "pk":1,
                "fields":{
                    "item_name": "iPhone 14 Pro Maag",
                    "item_price":"14000000",
                    "description: "It gives you ulcers because it's expensive."
                }
        },
        {
                "model": "wishlist.itemwishlist",
                "pk":2,
                "fields":{
                    "item_name": "Round Hat",
                    "item_price":"99000",
                    "description": "Round is my hat, if it's not round it's not my hat."
                }
            },
            {
                "model": "wishlist.itemwishlist",
                "pk":3,
                "fields":{
                    "item_name": "Folding Mattress",
                    "item_price":"500000",
                    "description": "How many layers? Hundreds!"
                }
            }
        ]

7. Run the python manage.py command loaddata initial_wishlist_data.json to load the data into the local Django database.

## Tutorial: Implement Basic Views

1. Open `views.py` that is located in the `wishlist` folder and create a function that accepts the parameter `request` and returns the `render(request, "wishlist.html")`. The example can be seen below.
    ```
    def show_wishlist(request):
        return render(request, "wishlist.html")
    ```

2. Create a folder named `templates` inside the `wishlist` application folder and create a file named `wishlist.html` inside the `templates` folder that you've just created. Fill the content of the `wishlist.html` with the following _template_.
    
    ```
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

3. Create a file inside the `wishlist` application folder named `urls.py` for _routing_ to the `views` function that you've created so that your HTML page can be displayed within your browser. The contents of `urls.py` can be seen below.
    
    ```
    from django.urls import path
    from wishlist.views import show_wishlist

    app_name = 'wishlist'

    urlpatterns = [
        path('', show_wishlist, name='show_wishlist'),
    ]
    ```

4. Also register the `wishlist` application in `urls.py` that is located in `project_django` folder by adding the following code snippet below to `urlpatterns` variable.
    
    ```
    path('wishlist/', include('wishlist.urls')),
    ```

5. Run your Django project with the command `python manage.py runserver` and open [http://localhost:8000/wishlist/](http://localhost:8000/wishlist/) in your favorite browser to see the page that you've created.

If a page appears containing _wishlist_ table, congratulations! You've successfully done _routing_ a `views` function that can _rendering_ an HTML page. However, as you can see, there's no data on that `wishlist` table. You also can see it's not clear who the `wishlist` belongs to, so you want to display your name on the `wishlist` page. Now, you will learn how to display data to HTML from the Django local _database_ as well as the data or variables that you've defined in your `views.py` file.

## Tutorial: Connecting Models with Views and Templates

1. In the views function you have created, import the models you created earlier into the views.py file. You will use this class to retrieve data from the database. Examples are as follows.
    ```
    from django.shortcuts import render
    from wishlist.models import WishlistItem
    ...
    ```
2. Add the code snippet below to the function you created earlier. This code snippet serves to call the query function to the database model and store the query results into a variable. Adjust the contents of the variable name with your name, yes.
    ```
    data_wishlist_item = WishlistItem.objects.all()
    context = {
        'list_item': data_wishlist_item,
        'name': 'Cinoy'
    }
    ```
3. Add context as the third parameter to the render function return in the function you created earlier. The data contained in the context variable will also be rendered by Django so that later you can display the data on the HTML page.
    ```
    return render(request, "wishlist.html", context)
    ```
Now, you will learn to map data that has been rendered in the views function to be able to display it on an HTML page. To do this mapping, you can use the special template syntax found in Django, namely {{data}}. If you're interested in knowing more about the syntax of Django's templates, you can read and learn more about Django's template tags documentation.

1. Open the HTML file that you created earlier in the templates folder in the wishlist directory.
2. Change Fill me! which is in the HTML &lt;p&gt; tag to {{name}} to display your name on the HTML page. Examples are as follows.
    ```
    ...
    <h5>Name: </h5>
    <b>{{name}}</b>
    ...
    ```

3. To display a list of items into a table, you need to iterate over the list_item variable that you have rendered into the HTML. Note that you can't call the item list directly as you did in step 2 because the list_item variable is a container containing objects. You also need to call the specific variable/attribute name of the object in the container to call the data from that object. Examples are as follows.
    ```
    ...
    {% comment %} Add data below {% endcomment %}
    {% for item in list_item %}
        <tr>
            <th>{{item.item_name}}</th>
            <th>{{item.item_price}}</th>
            <th>{{item.description}}</th>
        </tr>
    {% endfor %}
    ...
    ```
Now, try to refresh the page and see if the data you entered into the views also appears on the web page. If it appears, then congratulations! You've successfully connected models with views and templates while learning the basics of Django's template syntax.

Next, please add, commit, and push the changes you've made to save them to the GitHub repository.

## The Final Word

Finally finished! Congratulations, you've made it this far following the tutorial and learning the ins and outs of Django!

After you have completed all of the tutorials above, hopefully now you will understand better and in the future, you will be able to explore more with the Django framework in creating a web application.

A few tips and tricks to survive as a developer (and Fasilkom UI student) in the future; Familiarize yourself with google, youtube and stack overflow. This website is the "light" that will help you deal with the errors you encounter while coding! In fact, a Software Engineer who works at Google always "learns" from the three knights when they are faced with problems. Therefore, do not hesitate to tell them!

![Petuah Hidup sebagai Anak Fasilkom](https://pbs.twimg.com/media/EWDAn-XWkAs3Y5T.jpg)

### HAPPY CODING!


## Further Reading Resources
- [Django Documentation](https://docs.djangoproject.com/en/4.1/)
- [Created Initial Data in Django Project](https://docs.djangoproject.com/en/4.1/howto/initial-data/)
- [Knowing Django Framework](https://www.contohapps.com/2020/12/mengenal-django-framework.html)
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

