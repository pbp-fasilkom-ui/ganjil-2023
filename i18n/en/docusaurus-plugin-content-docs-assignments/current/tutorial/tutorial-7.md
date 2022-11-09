---
sidebar_label: Tutorial 7
---

# Tutorial 7: Flutter Navigation, Input, dan Form

Platform-Based Development (CSGE602022) - Organized by Faculty of Computer Science, University of Indonesia, Odd Semester 2022/2023

## Learning Objectives

After completing this tutorial, students are expected to:

- Understand the input and form element in Flutter.
- Understand the navigation and basic routing in Flutter.
- Understand the flow of creating forms and data in Flutter.

## Page Navigation in Flutter

When learning the web development, you must have learned that in a website we can move between pages according to the accessed URL. Likewise, in an application, we can move from one page to another. The difference is, in an application, what we use to move between pages is not by accessing the URL.

Flutter provides a fairly complete system for navigating between pages. One of the ways we can use to move between pages is by using the `Navigator` widget. The `Navigator` widget displays the screen as if it were a stack. To navigate a new page, we can access the `Navigator` via `BuildContext` and call the `push()` or `pop()` function. Here is an example of using `Navigator`.

```dart
...
onPressed: () {
    Navigator.of(context).push(
        MaterialPageRoute(
          builder: (context) => const MyNewScreen(myProp: prop),
        ),
    );
},
child: Text(myProp.someValue),
...
```

To learn more about the `Navigator`, please read the following link: [https://api.flutter.dev/flutter/widgets/Navigator-class.html](https://api.flutter.dev/flutter/widgets/Navigator-class.html)

## Input and Form in Flutter

Similar to the web, an application can also interact with users through inputs and forms. Flutter has a `Form` widget that we can utilize to be a container for several input field widgets that we create. Similar to input fields on the web, Flutter also has many types of input fields, one of the types is the `TextField` widget.

To try it out, run the following command:

```bash
flutter create --sample=widgets.Form.1 formSample
```

To learn more about the `Form` _widget, please read the following link: [https://api.flutter.dev/flutter/widgets/Form-class.html](https://api.flutter.dev/flutter/widgets/Form-class.html)

## Tutorial: Adding the Drawer Menu and Navigation

1. Open the project that previously created in tutorial 6 using your favorite IDE.

2. Change the code in `lib/main.dart` to read as follows.

    ```dart
    class MyApp extends StatelessWidget {
        const MyApp({super.key});

        @override
        Widget build(BuildContext context) {
            return MaterialApp(
            title: 'Flutter Demo',
            theme: ThemeData(
                primarySwatch: Colors.blue,
            ),
            home: const MyHomePage(),
            );
        }
    }
    
    class MyHomePage extends StatefulWidget {
        const MyHomePage({super.key});

        final String title = 'Flutter Demo Home Page';

        @override
        State<MyHomePage> createState() => _MyHomePageState();
    }
    ...
    ```

3. Add the following code in file `lib/main.dart`.

    ```dart
      ...
      appBar: AppBar(
        title: Text(widget.title),
      ),
      // Adding drawer menu
      drawer: Drawer(
          child: Column(
            children: [
              // Adding clickable menu
              ListTile(
                title: const Text('Counter'),
                onTap: () {
                  // Routing the menu to the main page
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => const MyHomePage()),
                  );
                },
              ),
              ListTile(
                title: const Text('Form'),
                onTap: () {
                  // Routing the menu to the form page
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => const MyFormPage()),
                  );
                },
              ),
            ],
          ),
        ),
      body: Center(
      ...
    ```

4. Do not run the application first, because an error will appear due to the `MyFormPage` page not being found. Do the tutorial below first to create the page.

## Tutorial: Creating a New Page

1. Create a new file in `lib` folder named `form.dart`.

2. Add the following _boilerplate_ to the file.

    ```dart
    class MyFormPage extends StatefulWidget {
        const MyFormPage({super.key});

        @override
        State<MyFormPage> createState() => _MyFormPageState();
    }

    class _MyFormPageState extends State<MyFormPage> {
        @override
        Widget build(BuildContext context) {
            return Scaffold(
                appBar: AppBar(
                    title: Text('Form'),
                ),
                body: Center(
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                            Text('Hello World!'),
                        ],
                    ),
                ),
            );
        }
    }
    ```

3. Re-add the drawer code that previously added to the main page to the page you just created.

4. Check if each widget between files has been imported. If not, import them into another file. Here is an example.

    `/lib/main.dart`

    ```dart
    import 'package:flutter_app/form.dart';
    import 'package:flutter/material.dart';
    ...
    ```

    `/lib/form.dart`

    ```dart
    import 'package:flutter_app/main.dart';
    import 'package:flutter/material.dart';
    ...
    ```

5. Try to running the application to see the changes you just made. There should be a drawer or hamburger menu in the top left corner and a form page containing the text "Hello World!".

## Tutorial: Adding Forms and Input Elements

We will try to add five input form types in Flutter, namely `TextFormField`, `CheckboxListTile`, `SwitchListTile`, `DropdownButton`, and `Slider`.

1. Change the Center widget to Form.

    ```dart
      ...
      body: Form(),
      ...
    ```

2. Add form key as the handle of form state, form validation, and form saving.

    ```dart
    ...
    class _MyFormPageState extends State<MyFormPage> {
    final _formKey = GlobalKey<FormState>();

    @override
    ...
        body: Form(
            key: _formKey,
        ),
        ...
    ```

3. Create the SingleChildScrollView widget as the child of the Form widget.

    ```dart
      ...
      body: Form(
        key: _formKey,
        child: SingleChildScrollView(),
      ),
      ...
    ```

4. Create a Container widget as the child of the SingleChildScrollView widget.

    ```dart
        ...
        child: SingleChildScrollView(
          child: Container(),
        ),
        ...
    ```

5. Add padding to the Container widget to make it look neater. For example, we will use padding of 20 pixels.

    ```dart
          ...
          child: Container(
            padding: const EdgeInsets.all(20.0),
          ),
          ...
    ```

6. Make the Column widget the child of the Container widget.

    ```dart
          ...
          child: Container(
            padding: const EdgeInsets.all(20.0),
            child: Column(),
          ),
          ...
    ```

7. Create a TextFormField widget wrapped by Padding as one of the children of the Column widget. Also, add a new variable as a placeholder for the value typed in the TextFormField later. Make the TextFormField a placeholder for the full name variable. Here is an example.

    ```dart
    ...
    class _MyFormPageState extends State<MyFormPage> {
    final _formKey = GlobalKey<FormState>();
    String _fullName = "";

    @override
    ...
                child: Column(
                children: [
                    Padding(
                        // Using padding of 8 pixels
                        padding: const EdgeInsets.all(8.0),
                        child: TextFormField(
                            decoration: InputDecoration(
                                hintText: "Example: Pak Dengklek",
                                labelText: "Full Name",
                                // Add icons to make it more intuitive
                                icon: const Icon(Icons.people),
                                // Added a circular border to make it neater
                                border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(5.0),
                                ),
                            ),
                            // Added behavior when name is typed 
                            onChanged: (String? value) {
                                setState(() {
                                    _fullName = value!;
                                });
                            },
                            // Added behavior when data is saved
                            onSaved: (String? value) {
                                setState(() {
                                    _fullName = value!;
                                });
                            },
                            // Validator as form validation
                            validator: (String? value) {
                                if (value == null || value.isEmpty) {
                                    return 'Full Name cannot be empty!';
                                }
                                return null;
                            },
                        ),
                    ),
                ],
                ...
    ```

8. Create several CheckboxListTile widgets as children of the Column widget. In addition, add some new variables as placeholders for the value of each CheckboxListTile. The CheckboxListTile will be the placeholder for the Bachelor, Diploma, Master, or Doctoral level options. Here is an example.

    ```dart
    ...
    bool undergraduateDegree = false;
    bool diplomaDegree = false;
    bool masterDegree = false;
    bool doctorDegree = false;

    @override
    ...
                Container(
                margin: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey),
                    borderRadius: BorderRadius.circular(5),
                ),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                    const ListTile(
                        leading:  Icon(Icons.school),
                        title: Text("Degree"),
                    ),
                    CheckboxListTile(
                        title: const Text('Undergraduate'),
                        value: undergraduateDegree,
                        onChanged: (bool? value) {
                        setState(() {
                            undergraduateDegree = value!;
                            if (value){
                                masterDegree = diplomaDegree = doctorDegree = false;
                            }
                        });
                        },
                    ),
                    CheckboxListTile(
                        title: const Text('Diploma'),
                        value: diplomaDegree,
                        onChanged: (bool? value) {
                        setState(() {
                            diplomaDegree = value!;
                            if (value){
                                masterDegree = undergraduateDegree = doctorDegree = false;
                            }
                        });
                        },
                    ),
                    CheckboxListTile(
                        title: const Text('Master'),
                        value: masterDegree,
                        onChanged: (bool? value) {
                        setState(() {
                            masterDegree = value!;
                            if (value){
                                diplomaDegree = undergraduateDegree = doctorDegree = false;
                            }
                        });
                        },
                    ),
                    CheckboxListTile(
                        title: const Text('Doctor'),
                        value: doctorDegree,
                        onChanged: (bool? value) {
                        setState(() {
                            doctorDegree = value!;
                            if (value){
                                masterDegree = undergraduateDegree = diplomaDegree = false;
                            }
                        });
                        },
                    ),
                ],
                ),
            ),
            ...
    ```

9. Make the Slider widget one of the children of the Column widget. Also, add a new variable as a placeholder for the Slider's value. The slider will be the placeholder for the age option. Here is an example.

    ```dart
    ...
    double age = 0;

    @override
    ...
                ListTile(
                leading: const Icon(Icons.co_present),
                title: Row(
                    children: [
                    Text('Age: ${age.round()}'),
                    ],
                ),
                subtitle: Slider(
                    value: age,
                    max: 100,
                    divisions: 100,
                    label: age.round().toString(),
                    onChanged: (double value) {
                    setState(() {
                        age = value;
                    });
                    },
                ),
                ),
                ...
    ```

10. Make the DropdownButton widget one of the children of the Column widget. Add a new variable as a placeholder for the Slider's value. Also, add a List of String that holds the options that will be displayed in the dropdown. The slider will be the placeholder for the PBP class options. Here is an example.

    ```dart
    ...
    String pdbClass = 'A';
    List<String> listPBDClass = ['A', 'B', 'C', 'D', 'E', 'F', 'KI'];

    @override
    ...
                ListTile(
                leading: const Icon(Icons.class_),
                title: const Text(
                    'PBD Class',
                ),
                trailing: DropdownButton(
                    value: pdbClass,
                    icon: const Icon(Icons.keyboard_arrow_down),
                    items: listPBDClass.map((String items) {
                    return DropdownMenuItem(
                        value: items,
                        child: Text(items),
                    );
                    }).toList(),
                    onChanged: (String? newValue) {
                    setState(() {
                        pdbClass = newValue!;
                    });
                    },
                ),
                ),
                ...
    ```

11. Create a SwitchListTile widget wrapped by Padding as one of the children of the Column widget. Also, add a new variable as a placeholder for the value of the SwitchListTile later. Make the SwitchListTile a placeholder for the status variable whether it is in `Practice Mode` or not. Here is an example.

    ```dart
    ...
    bool _switchValue = false;

    @override
    ...
                    SwitchListTile(
                    title: const Text('Practice Mode'),
                    value: _switchValue,
                    onChanged: (bool value) {
                        setState(() {
                        _switchValue = value;
                        });
                    },
                    secondary: const Icon(Icons.run_circle_outlined),
                    ),
                    ...
    ```

12. Create a button that will save the data in each input element. This time we will not save the data into the database, but we will show it in the popup that will appear after the button is pressed.

    ```dart
                ...
                TextButton(
                  child: const Text(
                    "Save",
                    style: TextStyle(color: Colors.white),
                  ),
                  style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all(Colors.blue),
                  ),
                  onPressed: () {
                    if (_formKey.currentState!.validate()) {}
                  },
                ),
                ...
    ```

After all the inputs and form logic are created, we will create a popup that will display the data in the form input when the `Save` button is pressed.

## Tutorial: Show the Data

1. Add the `showDialog()` function to the `onPressed()` section and show the Dialog widget in the function. Here is an example of the code snippet.

    ```dart
              ...
              onPressed: () {
                if (_formKey.currentState!.validate()) {
                  showDialog(
                    context: context,
                    builder: (context) {
                      return Dialog(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                        elevation: 15,
                        child: Container(
                          child: ListView(
                            padding: const EdgeInsets.only(top: 20, bottom: 20),
                            shrinkWrap: true,
                            children: <Widget>[
                              Center(child: const Text('Informasi Data')),
                              SizedBox(height: 20),
                              // TODO: Display the information obtained from the form
                              TextButton(
                                onPressed: () {
                                  Navigator.pop(context);
                                },
                                child: Text('Kembali'),
                              ), 
                            ],
                          ),
                        ),
                      );
                    },
                  );
                }
              },
              ...
    ```

2. Add the information obtained from the form. You can use the `Text` widget and perform string concatenation so that the data description and data content can be presented in one widget. An example is `Text('Title: ' + _fullName)`.

3. Run your program, try the form you have created, and see the results.

## Final Word

Congratulations, you've learned basic navigation and form creation in Flutter!

Once you've completed the entire tutorial, you can try out other input widgets in Flutter. You can also try creating new pages with different navigation options, such as `Navigator.push()` and `Navigator.pop()`.

If you want to take the challenge, then try to implement the following in this tutorial.

- Modify the navigation in the Drawer to do `Navigator.pop()` when the page to open is the current page, instead of using `Navigator.pushReplacement()` for all navigation.
- Customize your widgets by styling them, such as color, icon, etc.

## Additional References

- [Build a form with validation](https://docs.flutter.dev/cookbook/forms/validation)
- [Input widgets](https://docs.flutter.dev/development/ui/widgets/input)
- [Navigation and routing](https://docs.flutter.dev/development/ui/navigation)

## Contributors

- Muhammad Athallah
- Brandon Ivander
- Sabyna Maharani
- Muhammad Azis Husein
- Zuhal 'Alimul Hadi (EN translator)
