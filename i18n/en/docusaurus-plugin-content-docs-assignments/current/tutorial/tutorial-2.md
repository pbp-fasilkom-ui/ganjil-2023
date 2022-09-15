---
sidebar_label: Lab 2
---

# Lab 2: Data Delivery

Platform-Based Programming (CSGE602022) - Organized by the Faculty of Computer Science Universitas Indonesia, Odd Semester 2022/2023

---

## Learning Objectives

After completing this tutorial, you will be able to:

-  Understand XML and JSON as data delivery format
-  Serialize (or, convert) a Python object into XML or JSON string
-  Retrieve one or more data objects from a persistent data source
-  Implement a function that returns an HTTP response containing XML or JSON
   string

## Introduction to Data Delivery

When developing on a platform, there's a time when we need to send the data from one stack to another. The delivered data can be sent in various forms. Some examples of commonly used data formats are HTML, XML, and JSON. You've learned the data delivery implementation in HTML form in the previous tutorial. In this tutorial, you'll learn about XML and JSON.

## XML (Extensible Markup Language)

XML stands for Extensible Markup Language. XML designed as _self-descriptive_, so by reading the XML file we can understand what's information we want to convey from the written data. XML is used a lot for web and mobile applications to save and send data. XML is just information wrapped in a tag. We need to write a program to send, receive, save, and display that information.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phone>
  <brand>Apple</brand>
  <type>iPhone 14 plus</type>
  <color>Red</color>
  <memory>256</memory>
</phone>
```

The XML text above is _self-descriptive_. It means that every attributes that
describe a phone are described in the data itself. You can infer that the XML
contains information about a red-colored iPhone 14 Plus made by Apple.

XML Document create a structure like _tree_ that started from _root_, then branch, and ends at the leaves. The XML document need to contain a _root_ element that's the parent for other elements. In the example above, `<phone>` is a _root_ element.

For the line `<?xml version="1.0" encoding="UTF-8"?>` it's commonly referred as **XML Prolog**. XML prolog is optional, but if it exists, it must be at the beginning of the document. In XML documents, all elements must have a closing tag. XML tag is _case sensitive_, so that `<phone>` tag is different from `<Phone>` tag.

## JSON (JavaScript Object Notation)

JSON stands for JavaScript Object Notation. JSON is designed to be self-describing, so JSON is very easy to understand. JSON is used in many web and mobile applications, namely to store and transmit data. JSON syntax is an instance of JavaScript Object. However, the JSON format is in the form of text, so the code to read and create JSON is found in many programming languages.

Example JSON format:

```json
{
    "brand": "Samsung",
    "type": "S22 Ultra",
    "color": "Black",
    "memory": "256",
}
```

Data in JSON is stored in the form of keys and values. In the example above, the keys are brand, type, color, and memory. Value can be a primitive data type (string, number, boolean) or an object.

## Tutorial on Returning Data in XML Form

Notes: **In this tutorial, you will use the project you created in the previous tutorial.**

1. Open views.py in the wishlist folder and create a function that accepts request parameters.

2. Add import HttpResponse and Serializer at the very top.

    ```python
    from django.http import HttpResponse
    from django.core import serializers
    ```

3. Create a variable inside the function that stores the query results of all the data in ItemWishlist.

    ```python
    data = ItemWishlist.objects.all()
    ```


4. Add a return function in the form of an HttpResponse that contains the query result data parameter that has been serialized into XML and the content_type="application/xml" parameter.

    ```python
    return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")
    ```


5. Open urls.py in the wishlist folder and import the function you created earlier.

    ```python
    from wishlist.views import show_xml #customize to the name of the function created
    ```


6. Add the url path to the urlpatterns to access the imported function.

    ```python
    ...
    path('xml/', show_xml, name='show_xml'), #customize the name of the function created
    ...
    ```

7. Run your Django project with the `python manage.py runserver` command and open http://localhost:8000/wishlist/xml/ (match the url path created) in your favorite browser to see the results.

## Tutorial on Returning Data in JSON Form

1. Open views.py in the wishlist folder and create a new function that accepts a request parameter.

2. Create a variable in the function that stores the query results of all the data in the ItemsWishlist.

    ```python
    data = ItemsWishlist.objects.all()
    ```

3. Add a return function in the form of HttpResponse which contains the query result data parameter that has been serialised into JSON and the content_type="application/json" parameter.

    ```python
    return HttpResponse(serializers.serialize("json", data), content_type="application/json")
    ```

4. Open urls.py in the wishlist folder and import the function you created earlier.

    ```python
    from wishlist.views import show_json # adjust the name of the function created
    ```


5. Add the url path to the urlpatterns to access the imported function.

    ```python
    ...
    path('json/', show_json, name='show_json'), #customise the name of the function created
    ...
    ```

6. Run your Django project with the `python manage.py runserver` command and open http://localhost:8000/wishlist/json/ (match the url path created) in your preferred browser to see the results.

## Tutorial on Returning Data in XML/JSON Form Based on ID

1. Open views.py in the wishlist folder and create a new function that accepts a request and an ID parameter.

2. Create a variable in the function that stores the query results of the data with specific ID in the ItemsWishlist.

    ```python
    data = ItemsWishlist.objects.filter(pk=id)
    ```

3. Add a return function in the form of HttpResponse which contains the query result data parameter that has been serialised into XML or JSON and `content_type` parameter with `"application/xml"` value (if the format is XML) or `"application/json"` value (if the format is JSON).

    ```python
    // JSON Format
    return HttpResponse(serializers.serialize("json", data), content_type="application/json")

    // XML Format
    return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")
    ```

4. Open urls.py in the wishlist folder and import the function you created earlier.

    ```python
    from wishlist.views import show_json_by_id #customise the name of the function created
    ```


5. Add the url path to the urlpatterns to access the imported function.

    ```python
    ...
    path('json/<int:id>', show_json_by_id, name=’show_json_by_id’), #customise the name of the function created
    ...
    ```

6. Run your Django project with the `python manage.py runserver` command and open http://localhost:8000/wishlist/json/`<id>` (match the url path created and the ID data wanted) in your preferred browser to see the results.
