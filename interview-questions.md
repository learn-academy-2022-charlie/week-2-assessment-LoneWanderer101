# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: Parameters are the variable listed in the parentheses of a function.
  Arguments are the values which are passed to the function through parameters. Arguments must match the parameters.

  Researched answer: a parameter is a variable that is defined inside the parentheses in the beginning of the function. Once defined, a parameter can be used in teh function 
   "A parameter is a placeholder variable that is defined inside the parentheses of the function expression. Once it is defined in the parentheses, it can be leveraged anywhere in the function logic." Parameters are then assigned values called arguments. The number of arguments must match the number of parameters. An argument is the actual content passed to the function inside the parentheses when the function is invoked.
  The argument is used 
  


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: the .map() method iterates through an array and returns a new array of the same length as the one given. .map() can be used instead of a 'for loop' in order to make a refracted function.

  Researched answer: the .map() predefined parameters are value (required), index(optional) and array(optional) --> .map(value, index, array).
  


3. What is the difference between map and filter?

  Your answer: The .map() method interates through the given aray and returns a new array of the same length. .filter() does not return an array of the same length because it filter through the array only returning the requested values.

  Researched answer: .map() will run a specified task on each item in an array and return an array of the same length.
  .filter() will make a decision about each item in an array and return a subset based on the criteria given. .filter() returns a subset of the original array based on custom criteria. .filter() may required a boolean value which will determine whether or not n item will be included in teh new array.



4. What is the difference between a function and a method?

  Your answer: Functions are like recipes in which you provide the instructions and are returned a result. Functions contain parameters and arguments and can be reused. Method's are built into javascript to be used on functions.

  Researched answer: Objects are a Javascript data type that has a collection of key:value pairs. Objects can also contain functions. When a function belongs to an object it is called a method. Javascript has many built-in methods that accomplish a common task. Some built-in methods require additional information to perform the action intended. This additional information is passed into the parentheses that follow the built-in method which is called an argument. In arrays, built-in methods consist of mutators or acessors. Mutators modify the original array while accessors do not. Array methods consist of .push() and .reverse().



5. What is object destructuring?

  Your answer: Object destructuring is when you take the given object's properties and break them down into individual items. 

  Researched answer: Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Can you please provide and example? I don't recall at this time.

  Researched answer: In JavaScript, hoisting allows you to use functions and variables before they are declared. Hoisting  is a behavior where a function or a variable can be used before declaration. For example, using console.log(test) before test is even assigned as a variable var = test. Also, when used inside a function, variables are hoisted to the top of the function. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:Class inheritance is a way for a class to extend another class. The syntax to extend another class is class/child/extends/parent. You can have a parent class of animal and have animal types like rabbits and sharks extend from it. 

2. React: React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012. React is efficient because it provides developers with an opportunity to create large web applications that can change data, without reloading the page.

3. React state: Everything in React is a component. Components can be broken down into two basic categories: components that hold state and components that do not hold state. State is an object that stores a component's data that determines how the component renders and behaves.

4. React lifecycle methods: React has four built-in methods that gets called, in this order, when mounting a component:
constructor()
getDerivedStateFromProps()
render()
componentDidMount()
The render() method is required and will always be called, the others are optional and will be called if you define them.

5. DOM: The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
