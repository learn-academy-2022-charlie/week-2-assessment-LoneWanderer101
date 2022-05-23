// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

          // var cohort = "Bravo 2022"
          // console.log(cohort.split(""))

// a) Your answer: This will split the string "Bravo Cohort" into a new array with each index split into it's own string. I expect 9 strings. 
// b) Verify and explain: The output was just as i expected except that it returned 10 strings due to the space counting as one.
            // [
            //   'B', 'r', 'a', 'v',
            //   'o', ' ', '2', '0',
            //   '2', '2'
            // ]


// --------------------2) What will this log?

      //     const greeter = (name) => {
      //     `Hello, ${name}!`
      //   }
      // console.log(greeter("LEARN Student"))

// a) Your answer: This will return a string that reads "Hello LEARN Student"
// b) Verify and explain: After running the code I received 'undefined'. After further research I realize that functions require a return value in order to receive an output. Without a 'return', a function will return 'undefined'. The code below was retyped to include return. The code returned "Hello, Jorge!"

  //   const greeter = (name) => {
  //   return (`Hello, ${name}!`)
  // }
  //   console.log(greeter("Jorge"))


// --------------------3) What will this log?

        // var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
        // console.log(multBy2)

// a) Your answer: this will return a new array with each number in the array multiplied by 2. --> [8, 10, 12, 14, 16]
// b) Verify and explain: The .map() function iterates through an array and returns a new array of the same length. In the example above: "Because we are using an arrow function we can reduce the code even further. If there is only one line of code to be executed, we can remove the return keyword as the return is implied.Otherwise the example below is a function that requires a 'return' in order to receive an output.

        // var myArray = [4, 5, 6, 7, 8]

        // const multBy2 = myArray.map(value => {
        //     return value * 2
        // })

        // console.log(multBy2)


      //   If using a ForLoop instead, the code will look like the one below.. However, .map refactors the code.

          // var myArray = [4, 5, 6, 7, 8];

          // let newArray = [];
          // for(let i=0; i<myArray.length; i++){
          //   let valueTimesTwo = myArray[i] * 2;
          //   newArray.push(valueTimesTwo);
          // }
          // console.log(newArray);



  // --------------------4) What will this log?

  // var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
  // console.log(onlyOdds)

  // a) Your answer: this will run a filter through the array and return a new array with only the odd numbers. The modulo is needed because any number with a remainder other than zero is an odd number. --> [11, 13, 15]
  // b) Verify and explain: Output --> [11, 13, 15] "The .filter() function loops through an array and returns a new array with only the values that are truthy or the values that satisfy your stated condition. Filter will return a subset of the given array.

// --------------------5) What will this log?

          // var myCodingSkills = {
          //   languages: ["JavaScript", "Ruby"],
          //   frameworks: ["React", "Ruby on Rails"],
          //   databases: "PostgreSQL",
          //   versionControl: "GitHub"
          // }
          // console.log(myCodingSkills.languages["0"])

// a) Your answer: this will return the string "JavaScript" since it is in the zero[0] index of 'languages' which is what the function calls for.
// b) Verify and explain: The function calls for the [0] index "value" within the languages "name"
    //   name:         value       value
    // languages: ["JavaScript", "Ruby"]


// --------------------STRETCH: What will this log?

        // class Learn {
        //   constructor(name){
        //     this.student = name,
        //     this.cohort = "Bravo",
        //     this.year = 2022
        //   }
        // }
        // var learnStudent = new Learn("George")
        // console.log(learnStudent)

        // a) Your answer: this will log [student:George, cohort:Bravo, year:2022]
        // b) Verify and explain: This is a class method which requires a constructor() method.
        // : constructor: a special method for creating and initializing objects
        // :this: a JavaScript keyword that refers to the object it belongs to
        // :new: used when creating a new instance of a class (an object)