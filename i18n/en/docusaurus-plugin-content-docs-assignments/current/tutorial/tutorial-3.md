---
sidebar_label: Lab 3
---

# Lab 3: Form, Authentication, Session and Cookie

Platform-Based Programming (CSGE602022) - Organized by Faculty of Computer Science, University of Indonesia, Odd Semester 2022/2023

---

## Learning Objectives

After completing this tutorial, you are expected to be able to:

- Understand how to submit user-provided input using `<form>` element
- Understand how authentication works
- Understand the purpose of cookie and session in the context of web development
- Understand how cookie and session work
- Use cookie and session in the context of web development

## Introduction to HTTP

HTTP stands for **HyperText Transfer Protocol**. HTTP is a protocol used to communicate between client and server. HTTP is stateless; meaning that every transaction/activity performed is considered a completely new transaction/activity, thus no previous data is stored for the current transaction/activity.

Some basic concepts about HTTP:

1. **Client/Server**: Interaction is done between _client/server_. The client makes a _request_ and the server provides a _response_.

2. **Stateless**: Each activity (_request/response_) is independent.

3. **OSI Model/Layer**: The Open Systems Interconnection (OSI) model describes seven layers that computer systems use to communicate over a network. The OSI 7-layer model consists of Application Layer, Presentation Layer, Session Layer, Transport Layer, Network Layer, Data Link Layer, and Physical Layer.

4. **Application Layer**: The website runs on the application layer. The _request/response_ process occurs at the transport layer which generally uses the TCP protocol which determines how the data will be sent. The application layer doesn't care what the transport layer does (how the data is sent, processed, etc.) because the application layer only focuses on the _request_ and _response_.

    > The rest of the layers will be taught on Computer Networks course. You can search it by yourself if you want. 😉

5. **_Client Actions Method_**: This is the method used by the client when making a request. Example: GET, POST, PUT, DELETE, etc. A more detailed explanation can be read [here](https://www.restapitutorial.com/lessons/httpmethods.html)).

6. **_Server Status Code_**: Is the status code given by the server when requesting a web page Example: 200 (OK), 404 (_Page Not Found_), 500 (_Internal Server Error_), etc. A more detailed explanation can be read [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

7. **_Headers_**: These are small pieces of information sent along with the _request_ and _response_. They are useful as additional data used to process the _request/response_. Example: In the _headers_, there is `content-type:json`. This means that the type of content requested/sent is `json`. _Headers_ also stores _cookies_ data.

## Introduction to Cookies & Session

All communication between client and server is done through HTTP protocol, where HTTP is a stateless protocol. This means that one state is not related to another (independent). This requires the client computer running the browser to establish a TCP connection to the server every time it makes a _request_. Without a persistent connection between the client and the server, the software on each side (_endpoint_) cannot rely solely on the TCP connection to perform _holding state_ or _holding session state_. What does _holding state_ mean?

For example, you want to access page A on a website that requires the visitor to be logged in to the website. Then you _login_ to the web and successfully open page A. When you want to move to page B on the same web, without a _holding state_ process, you will be asked to _login_ again. That will happen every time you access a different page while still on the same web. This process of telling "who" is currently _login_ and storing data is known as a form of client-server dialog. It is also the basis of _session_ - _a semi-permanent exchange of information_. It is difficult to make HTTP do state-holding (because HTTP is a stateless protocol). Therefore, techniques are needed to overcome this problem, namely _Cookie_ and _Session_.

One of the most widely used ways to perform state-holding is to use a session ID that is stored as a cookie on the client computer. The _Session ID_ can be thought of as a _token_ (line of characters) to recognize a unique _session_ in a particular web application. Instead of storing all kinds of information as _cookies_ on the client such as _username_, name, and password, only the _Session ID_ is stored. This _Session ID_ can then be mapped to a data structure on the web server side. In that data structure, you can store all the information you need. This approach is much safer for storing information about users, rather than storing it in a _cookie_. This way, the information cannot be misused by suspicious clients or connections. In addition, this approach is more "appropriate" if there is a lot of data to be stored. That's because cookies can only store a maximum of 4 KB of data. Imagine that you have logged in to a web/app and got a session ID (_session identifier_). In order to be able to do _holding state_ on HTTP which is _stateless_, browsers usually send a _session ID_ to the server on every _request_. That way, every time a _request_ comes, the server will react (more or less) "Oh, this is the right person!". Then the server will look up the _state_ information in the server memory or in the _database_ based on the _session ID_ obtained, and then return the requested data.

An important difference to keep in mind is that _cookie_ data is stored on the client side, while _session_ data is usually stored on the server side. For a more detailed discussion of stateless, stateful, _cookie_, and _session_, please read [here](https://sethuramanmurali.wordpress.com/2013/07/07/stateful-stateless-cookie-and-session/).

|                        | **_Cookies_**  | **_Local Storage_** | **_Sessions_**       |
|------------------------|----------------|---------------------|----------------------|
| **Capacity**           | 4 KB           | 5 MB                | 5 MB                 |
| **Browser technology** | HTML4/HTML5    | HTML5               | HTML5                |
| **Accessibility**      | All _window_   | All _window_        | _Tab_ specific       |
| **Expiration time**    | Manually set   | No expiration time  | when _tab_ is closed |

Here are some links that can expand your knowledge related to this material:

- [Session & Cookies](https://www.youtube.com/watch?v=64veb6tKTm0&t=10s)
- [Cookies History](https://www.youtube.com/watch?v=I01XMRo2ESg)
- [Cookies vs. Local Storage vs. Session](https://www.youtube.com/watch?v=AwicscsvGLg)

## Lab: Creating a Registration Form

Notes: In this lab, you will use the project that you have created in the previous tutorial.

We will make the previously created wishlist page access to be restricted, with the aim that users who want to access the wishlist page must have an account and log in to the website in order to gain access.

1. Run the virtual environment first.

2. Open `views.py` in the `wishlist` folder and create a function named `register` that accepts a `request` parameter.

3. Import `redirect`, `UserCreationForm`, and `messages` at the very top.


    ```python
    from django.shortcuts import redirect
    from django.contrib.auth.forms import UserCreationForm
    from django.contrib import messages
    ```

4. Add the code snippet below to the `register` function you created earlier. This snippet of code serves to automatically generate a registration form and generate a user account when data is _submitted_ from the form.

    ```python
    def register(request):
        form = UserCreationForm()

        if request.method == "POST":
            form = UserCreationForm(request.POST)
            if form.is_valid():
                form.save()
                messages.success(request, 'Account successfully created!')
                return redirect('wishlist:login')
        
        context = {'form':form}
        return render(request, 'register.html', context)
    ```

5. Create a new HTML file with the name `register.html` in the `wishlist/templates` folder. The content of `register.html` can be filled with the following _template_.

    ```html
    {% extends 'base.html' %}

    {% block meta %}
    <title>Account Registration</title>
    {% endblock meta %}
    
    {% block content %}  
    
    <div class = "login">
        
        <h1>Registration Form</h1>  
    
            <form method="POST" >  
                {% csrf_token %}  
                <table>  
                    {{ form.as_table }}  
                    <tr>  
                        <td></td>
                        <td><input type="submit" name="submit" value="Register"/></td>  
                    </tr>  
                </table>  
            </form>

        {% if messages %}  
            <ul>   
                {% for message in messages %}  
                    <li>{{ message }}</li>  
                    {% endfor %}  
            </ul>   
        {% endif %}

    </div>  
    
    {% endblock content %}
    ```

6. Open `urls.py` in the `wishlist` folder and import the function you created earlier.

    ```python
    from wishlist.views import register #customize with the name of the function created
    ```

7. Add _path url_ to `urlpatterns` to access the imported function.

    ```python
    ...
    path('register/', register, name='register'), #customize with the name of the function created
    ...
    ```

We have added an account registration form and created the `register` mechanism. Next, we will create a _login_ form for users to authenticate their accounts.
## Lab: Creating a Login Form

1. Open `views.py` in the `wishlist` folder and create a function named `login_user` that accepts a `request` parameter.

2. Add _import_ `authenticate` and `login` at the very top.

    ```python
    from django.contrib.auth import authenticate, login
    ```

3. Add the code snippet below to the `login` function you created earlier. This piece of code serves to authenticate users who want to _login_.

    ```python
    def login_user(request):
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('wishlist:show_wishlist')
            else:
                messages.info(request, 'Wrong Username or Password!')
        context = {}
        return render(request, 'login.html', context)
    ```

4. Create a new HTML file with the name `login.html` in the `wishlist/templates` folder. The content of `login.html` can be filled with the following _template_.

    ```html
    {% extends 'base.html' %}

    {% block meta %}
    <title>Login</title>
    {% endblock meta %}
    
    {% block content %}

    <div class = "login">

        <h1>Login</h1>

        <form method="POST" action="">
            {% csrf_token %}
            <table>
                <tr>
                    <td>Username: </td>
                    <td><input type="text" name="username" placeholder="Username" class="form-control"></td>
                </tr>
                        
                <tr>
                    <td>Password: </td>
                    <td><input type="password" name="password" placeholder="Password" class="form-control"></td>
                </tr>

                <tr>
                    <td></td>
                    <td><input class="btn login_btn" type="submit" value="Login"></td>
                </tr>
            </table>
        </form>

        {% if messages %}
            <ul>
                {% for message in messages %}
                    <li>{{ message }}</li>
                {% endfor %}
            </ul>
        {% endif %}		
            
        Don't have an account? <a href="{% url 'wishlist:register' %}">Create Account</a>

    </div>

    {% endblock content %}
    ```

5. Open `urls.py` in the `wishlist` folder and import the function you created earlier.

    ```python
    from wishlist.views import login_user #customize with the name of the function created
    ```

6. Add _path url_ to `urlpatterns` to access the imported function.

    ```python
    ...
    path('login/', login_user, name='login'), #customize with the name of the function created
    ...
    ```

We have added the account's _login_ form and created the `login` mechanism. Next, we will create a _logout_ mechanism and add a _logout_ button to the _wishlist_ page.

## Tutorial: Creating a Logout Function

1. Open `views.py` in the `wishlist` folder and create a function named `logout_user` that accepts the request parameter.

2. Add import `logout` at the very top.

    ```python
    from django.contrib.auth import logout
    ```

3. Add the code snippet below into the `logout` function you created earlier. This code snippet serves to perform the _logout_ mechanism.

    ```python
        def logout_user(request):
            logout(request)
            return redirect('wishlist:login')
    ```


4. Open the `wishlist.html` file in the `wishlist/templates` folder.

5. Add the code snippet below after the _end tag table_ (`</table>`) in the `wishlist.html` file. This code snippet serves to add a logout button.

    ```html
    ...
    <button><a href="{% url 'wishlist:logout' %}">Logout</a></button>
    ...
    ```


6. Open `urls.py` in the `wishlist` folder and import the function you created earlier.
    ```python
    from wishlist.views import logout_user #customize with the name of the function created
    ```

7. Add the _url path_ into the `urlpatterns` to access the imported function.

    ```python
    ...
    path('logout/', logout_user, name='logout'), #customize with the name of the function created
    ...
    ```

We have created a `logout` mechanism and completed the authentication system on the `wishlist` project. Next, we will restrict _wishlist_ page access so that unauthenticated users cannot access the wishlist page.

## Tutorial: Restricting Wishlist Page Access

1. Open `views.py` in the `wishlist` folder and add _import_ `login_required` at the very top.

    ```python
    from django.contrib.auth.decorators import login_required
    ```


2.  Add the code `@login_required(login_url='/wishlist/login/')` above the `show_wishlist` function so that the _wishlist_ page can only be accessed by logged in (authenticated) users.

    ```python
    ...
    @login_required(login_url='/wishlist/login/')
    def show_wishlist(request):
    ...
    ```


After restricting wishlist page access, run your Django project with `python manage.py runserver` command and open http://localhost:8000/wishlist in your favorite browser to see the results.


## Tutorial: Add _Cookies_

Now, we'll see the use of _cookies_ with _last login_ data and display it to _wishlist_ page.

1. Please _logout_ first if you're running your Django application and already logged in.

2. Open `views.py` that located in `wishlist` folder and add _import_ `HttpResponseRedirect`, `reverse`, and `datetime` at the top of your file.

    ```python
    import datetime
    from django.http import HttpResponseRedirect
    from django.urls import reverse
    ```

3. In `login_user` function. we'll add the function to add _cookie_ named `last_login` to see when the was the last time a user logged in. Change the code in `if user is not None` block to the following piece of code:

    ```python
    ...
    if user is not None:
        login(request, user) # login first
        response = HttpResponseRedirect(reverse("wishlist:show_wishlist")) # create response
        response.set_cookie('last_login', str(datetime.datetime.now())) # create last_login cookie and add it to response
        return response
    ...
    ```

4. In the `show_wishlist` function, add the snippet code below `show_wishlist`,  `'last_login': request.COOKIES['last_login']` t the `context` variable. The following example is the code that already changed:

    ```python
    context = {
        'list_item': data_wishlist_item,
        'name': 'Cinoy',
        'last_login': request.COOKIES['last_login'],
    }
    ```

5. Change `logout_user` function to the following code snippet below. The following code will add `last_login` _cookie_ removal mechanism when the user is logged out.

    ```python
    def logout_user(request):
        logout(request)
        response = HttpResponseRedirect(reverse('wishlist:login'))
        response.delete_cookie('last_login')
        return response
    ```

6. Open the `wishlist.html` file and add the following code snippet below between the table and the _logout_ button to display the _last login_ information.

    ```html
    ...
    <h5>Last Login: {{ last_login }}</h5>
    ...
    ```

7. Please _refresh_ your _login_ page (or run your Django project with the command `python manage.py runserver` if you haven't run your project yet) and try to _login_. The  _last login_ information will display in the `wishlist` page.

8. To see the data of `last_login` cookie, you can access the feature of _inspect element_ and open the _Application/Storage_ tab. Click _Cookies_ and you'll see the available _cookies_ data. Besides `last_login`, you can also view `sessionid` and `csrftoken` data. Here is an example of how it looks.

    ![Picture of Wishlist Page and the cookies data](https://cdn.discordapp.com/attachments/793469428809465886/1021921104601829476/unknown.png)

9. If you _logout_ from your application and open the _cookie_ history, you'll see that the _cookie_ that you created before was removed and will be remade when you _login_ again.

## The Final Word

Congratulations! You have successfully completed Tutorial 3. 😄

After you finished the whole tutorial above, I hope you now understand more about using _form_, authentication, _session_, and _cookie_ in Django's _framework_.

As always, don't forget to `add`, `commit`, and `push` the changes you made to save them to the GitHub repository before you close your job. 😉

## Contributors

- Muhammad Athallah
- Muhammad Azis Husein
- Zuhal 'Alimul Hadi 
- Winaldo Amadea (EN Translator)
- Firlandi A. R. Ansyari (EN Translator)