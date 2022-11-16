---
sidebar_label: Lab 8
---

# Tutorial 8: Model in Flutter and Communication with Web Services

Platform-Based Development (CSGE602022) - Organized by Faculty of Computer Science University of Indonesia, Odd Term 2022/2023

## Learning Objectives

After completing this tutorial, students are expected to:

- Understand the structure and model creation in Flutter.
- Understand how to retrieve, process, and display data from a _web service_.

## Model in Flutter

In this tutorial, we will make a web service call to display the data from it to the Flutter page we created. However, before making a web service call, we need to define the model that we use when making a web service call. The model in Flutter uses the _class_ principle as learned in the DDP2 OOP section.

```
The code below is an example, not required, but highly recommended to read as the concepts will be used in the following tutorial sections.
```

The example below is an example of a _class_ in Flutter.

```dart
class Vehicle {
	Vehicle({
    	this.id,
    	this.brand,
        this.model
	    this.color
	});

	int id;
	String brand;
	String model;
	String color;
}
```

Up to this point, we have successfully created a _class_ named `Vehicle`. Next, we will add some code until we successfully create a `Vehicle` model. This `Vehicle` is a model that represents the response from the _web service_ call.

Add the import from dart convert at the **very first line** of the file.

```dart
import 'dart:convert';
```

In the `Vehicle` _class_, add the following code.

```dart
factory Vehicle.fromJson(Map<String, dynamic> json) => Vehicle(
    id: json["id"],
    brand: json["brand"],
    model: json["model"],
    color: json["color"],
);

Map<String, dynamic> toJson() => {
    "id": id,
    "brand": brand,
    "model": model,
    "color": color,
};
```

Add the following code outside the `Vehicle` _class_.

```dart
Vehicle vehicleFromJson(String str) => Vehicle.fromJson(json.decode(str));
String vehicleToJson(Vehicle data) => json.encode(data.toJson());
```

The final code will be as follows to display one `Vehicle` object from the _web service_ response.

```dart
import 'dart:convert';

Vehicle vehicleFromJson(String str) => Vehicle.fromJson(json.decode(str));
String vehicleToJson(Vehicle data) => json.encode(data.toJson());

class Vehicle {
	Vehicle({
    	this.id,
    	this.brand,
    	this.model,
    	this.color,
	});

	int id;
	String brand;
	String model;
	String color;

	factory Vehicle.fromJson(Map<String, dynamic> json) => Vehicle(
    	 id: json["id"],
    	 brand: json["brand"],
    	 model: json["model"],
    	 color: json["color"],
	);

	Map<String, dynamic> toJson() => {
    	  "id": id,
    	  "brand": brand,
    	  "model": model,
    	  "color": color,
	};
}
```

The explanation of the code above is as follows.

There are some additional method such as `toJson` and `fromJson` in the `Vehicle` class. We have to create this method because when we request a web service with _method_ **GET**, we generally get the result of the call in the form of JSON response. Therefore, we need to convert the data with the `fromJson` _method_ so that Flutter recognizes the JSON as a `Vehicle` _class_ object. In addition, `toJson` method will be used when we send data to a _web service_ (such as **POST** or **PUT** method).

Here is an example of a response from a _web service_ with the **GET** _method_ that can be converted to the **Vehicle** model _class_.

```json
{
   "id": 1,
   "brand": "Honda",
   "model": "Civic",
   "color": "Yellow"
}
```

Then, what if the response from the _web service_ is a collection of JSON objects? Actually, it is the same as the code above, except that there is a change in the `vehicleFromJson` and `vehicleToJson` _method_.

The example can be seen below:

```dart
List<Mobil> vehicleFromJson(String str) => List<Vehicle>.from(json.decode(str).map((vehicle) => Vehicle.fromJson(vehicle)));

String vehicleToJson(List<Vehicle> data) => json.encode(List<dynamic>.from(data.map((vehicle) => vehicle.toJson())));
```

Here is an example of a response from a _web service_ with a **GET** _method_ that can be converted to the `Vehicle` model.

```json
[
  {
	"id": 1,
	"brand": "Honda",
	"model": "Civic",
	"color": "Yellow"
  },
  {
	"id": 2,
	"brand": "Toyota",
	"model": "Supra",
	"color": "Red"
  }
]
```

## Fetch Data from Web Service in Flutter

As a _developer_, of course we need the data to be displayed to the _client_. This requires you to know how to do _fetching data_ from _web service_ and then display it to the application that we have created before.

In general, there are several steps when you want to display data from the _web services_ to the Flutter application, namely:

1. Adding the `http` _dependency_ to the project, this _dependency_ is used to exchange data through _HTTP requests_, such as **GET**, **POST**, **PUT**, and others.
2. Define the model from the response of the data coming from the _web service_.
3. Make an _http request_ to the _web service_ using the `http` _dependency_.
4. Convert the objects obtained from the _web service_ to the model that we created in the second step.
5. Display data that has been converted to an application with `FutureBuilder`.

You can read the details in the following link: [https://docs.flutter.dev/cookbook/networking/fetch-data#5-display-the-data](https://docs.flutter.dev/cookbook/networking/fetch-data#5-display-the-data)

## Tutorial: File Refactor

Code refactoring (_refactor code_) is the process of restructuring existing program code without changing the _behavior_ of the program. This process is done to improve readability, reduce code complexity, and facilitate future _maintenance_.

1. Open the project that was previously created in the previous tutorial using your favorite IDE.
2. Inside the `lib` folder, create two new folders named `model` and `page`.
3. Move files other than `main.dart` into the `page` folder.

## Tutorial: Creating Custom Models

In creating a model that adapts to JSON data, we can utilize the website [Quicktype](https://app.quicktype.io/) with the following steps.

1. Open the link URL [https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10](https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10) to obtain the JSON data.
2. Copy the JSON data from the previous link URL, then open the link URL [Quicktype](https://app.quicktype.io/).
3. From the Quicktype website, change the _setup name_ to `Todo`, _source type_ to `JSON`, and _language_ to Dart.
4. Paste the copied JSON data into the _textbox_ provided in the Quicktype.

    Here is an example of the result.

    ![Quicktype Example](https://i.ibb.co/B6Vjj44/quicktype-example.png)

5. Click the `Copy Code` option in Quicktype.

After getting the `Todo` model code via Quicktype, reopen the Flutter project and perform the following steps.

1. Create a new file in the `lib/model` folder with the name `to_do.dart`.
2. Paste the previously copied code into the `to_do.dart` file.

## Tutorial: Adding HTTP Dependencies

To perform the _HTTP request_, we need an additional _package_ named [http](https://pub.dev/packages/http).

1. Run the command `flutter pub add http` on the Flutter project terminal to add the `http` _package_.

2. In the android manifest file in `android/app/src/main/AndroidManifest.xml`, add the following code to allow Internet access in the Flutter application that we created.

    ```xml
    ...
        <application>
        ...
        </application>
        <!-- Required to fetch data from the Internet. -->
        <uses-permission android:name="android.permission.INTERNET" />
    ...
    ```

## Tutorial: Retrieve and Process Data from Web Service

1. Create a new file in the `lib/page` folder with the name `to_do_page.dart`.

2. In the `to_do_page.dart` file, add the necessary imports. Change <APP_NAME> to the name of your Flutter project.

    ```dart
    import 'package:http/http.dart' as http;
    import 'dart:convert';
    import 'package:<APP_NAME>/model/to_do.dart';
    ...
    ```

3. Create a _stateful widget_ with the class name `ToDoPage`. An example of a stateful widget structure can be seen at the following [link](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html).

4. Retrieve data from the URL [https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10](https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10) using the `http.get` method.

    ```dart
    class ToDoPage extends StatefulWidget {
        const ToDoPage({Key? key}) : super(key: key);

        @override
        _ToDoPageState createState() => _ToDoPageState();
    }

    class _ToDoPageState extends State<ToDoPage> {
        Future<List<ToDo>> fetchToDo() async {
            var url = Uri.parse('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');
            var response = await http.get(
            url,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            );

            // decode the response into the json form
            var data = jsonDecode(utf8.decode(response.bodyBytes));

            // convert the json data into ToDo object
            List<ToDo> listToDo = [];
            for (var d in data) {
                if (d != null) {
                    listToDo.add(ToDo.fromJson(d));
                }
            }

            return listToDo;
        }
        ...
    }
    ```

## Tutorial: Display Data from Web Service

1. In the `main.dart` and `form.dart` files, add the following code to add the To Do menu to the drawer we have created (place it under the ListTile form menu).

    ```dart
    ListTile(
        title: const Text('To Do'),
        onTap: () {
            // Route the menu to the to do page
            Navigator.pushReplacement(
            context,
            MaterialPageRoute(builder: (context) => const ToDoPage()),
            );
        },
    ),
    ```

    So the code becomes like this:

    ```dart
    ...
    ListTile(
        title: const Text('Form'),
        onTap: () {
        // Route the menu to the form page
        Navigator.pushReplacement(
            context,
            MaterialPageRoute(builder: (context) => const MyFormPage()),
            );
        },
    ),
    ListTile(
            title: const Text('To Do'),
            onTap: () {
            // Route the menu to the to do page
            Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => const ToDoPage()),
                );
            },
        ),
    ...
    ```

2. In the `Widget(BuildContext context)` section, add the following code after `return`.

    ```dart
    Scaffold(
        appBar: AppBar(
            title: const Text('To Do'),
        ),
        drawer: Drawer(
            child: Column(
            children: [
                // Adding clickable menu
                ListTile(
                title: const Text('Counter'),
                onTap: () {
                    // Route the menu to the main page
                    Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => const MyApp()),
                    );
                },
                ),
                ListTile(
                title: const Text('Form'),
                onTap: () {
                    // Route the menu to the form page
                    Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => const MyFormPage()),
                    );
                },
                ),
                ListTile(
                title: const Text('ToDo'),
                onTap: () {
                    // Route the menu to the to do page
                    Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => const ToDoPage()),
                    );
                },
                ),
            ],
            ),
        ),
        body: FutureBuilder(
            future: fetchToDo(),
            builder: (context, AsyncSnapshot snapshot) {
                if (snapshot.data == null) {
                return const Center(child: CircularProgressIndicator());
                } else {
                if (!snapshot.hasData) {
                    return Column(
                    children: const [
                        Text(
                        "To do list is empty :(",
                        style: TextStyle(
                            color: Color(0xff59A5D8),
                            fontSize: 20),
                        ),
                        SizedBox(height: 8),
                    ],
                    );
                } else {
                    return ListView.builder(
                        itemCount: snapshot.data!.length,
                        itemBuilder: (_, index)=> Container(
                        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                        padding: const EdgeInsets.all(20.0),
                        decoration: BoxDecoration(
                            color:Colors.white,
                            borderRadius: BorderRadius.circular(15.0),
                            boxShadow: const [
                            BoxShadow(
                                color: Colors.black,
                                blurRadius: 2.0
                            )
                            ]
                        ),
                        child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                            Text(
                                "${snapshot.data![index].title}",
                                style: const TextStyle(
                                fontSize: 18.0,
                                fontWeight: FontWeight.bold,
                                ),
                            ),
                            const SizedBox(height: 10),
                            Text("${snapshot.data![index].completed}"),
                            ],
                        ),
                        )
                    );
                }
                }
            }
        )
    );
    ```

3. Restart the application by pressing the `r` key on the _command line_ or _terminal_ where you are running the Flutter application. The result will be as shown below.

    ![Example App](https://i.ibb.co/q1tqwqR/todo-page-example.png)

## Final Word

Congratulations, you've learned about models and web services in Flutter!

If you're up for a challenge, then try applying the following to this tutorial.

- _Refactor_ the `fetchToDo` _method_ to a separate file.

## Additional Reference

- [Fetch Data From the Internet](https://docs.flutter.dev/cookbook/networking/fetch-data)
- [How to create models in Flutter Dart](https://thegrowingdeveloper.org/coding-blog/how-to-create-models-in-flutter-dart)

## Contributor

- Zuhal 'Alimul Hadi
- Sabyna Maharani
- Brandon Ivander
- Muhammad Athallah
- Firlandi A. R. Ansyari (EN Translator)
