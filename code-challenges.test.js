// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

        // EXAMPLE FROM coding-concepts.js
        // var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
        // console.log(multBy2)

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// a) Create a test with expect statements for each of the variables provided.

// const num1 = 15
// Expected output: "15 is divisible by three"

// const num2 = 0
// Expected output: "0 is divisible by three"

// const num3 = -7
// Expected output: "-7 is not divisible by three"

        // Use 'describe ()', 'it ()' and 'expect ()' to test the syntax with jest.
        
//         describe("divby3", () => {
//         const num1 = 15
//         // Expected output: "15 is divisible by three"
//         const num2 = 0
//         // Expected output: "0 is divisible by three"
//         const num3 = -7
//         // Expected output: "-7 is not divisible by three"
        
//         it("takes a number as an argument and decides if the number is divisble by three", () => {
//         expect(divby3(num1)).toEqual("15 is divisible by three")
//         expect(divby3(num2)).toEqual("0 is divisible by three")
//         expect(divby3(num3)).toEqual("-7 is not divisible by three")
//        })
//      })          

        // after running yarn jest received
        // --> ReferenceError: divby3 is not defined

// b) Create the function that makes the test pass.
     
        // Create a function that returns a statement declaring whether or not each numbers within the array is divisible by three. If the number is divisible by three return number is divisible by 3. Else if number is not divisible by three return number is not divisible by 3.

        // const divby3 = (num) => {
        // if(num % 3 == 0) {
        // return`${num} is divisible by three`
        // } else {
        // return`${num} is not divisible by three`       
        // }
        // }

        // PASS  ./code-challenges.test.js
        // divby3
        //   ✓ takes a number as an argument and decides if the number is divisble by three (2 ms)               


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized. I spend HOURS trying to figure out how to take two arrays into one. I coldn't figure it out so i created two separate functions.

// a) Create a test with expect statements for each of the variables provided. After many hours i could not figure out how to return one array with all words capitalized.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

                // Use 'describe ()', 'it ()' and 'expect ()' to test the syntax with jest.

// describe ("capitalize", () => {
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// it("takes in an array of words and returns an array with all the first letter capitalized", () => {
// expect(capitalize1(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
// expect(capitalize1(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
// })
// })

        // after running yarn jest received
        // --> ReferenceError: capitalize1 is not defined

// b) Create the function that makes the test pass.

        // const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

        // create a function that returns each word capitalized in an array. Functions require a return. This function will work through the String, capitalizing the characther at the [0] index and returning the whole String. 

        // function capitalize1 (array) {
        // return array.map(string => {
        // return string.charAt(0).toUpperCase() + string.substring(1)
        // })
        // }
    
        // PASS  ./code-challenges.test.js
        // capitalize
        // ✓ takes in an array of words and returns an array with all the first letter capitalized (4 ms)


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

        // Use 'describe ()', 'it ()' and 'expect ()' to test the syntax with jest.

        // describe ("vowelIndex", () => {
        // const vowelTester1 = "learn"
        // // Expected output: 1
        // const vowelTester2 = "academy"
        // // Expected output: 0
        // const vowelTester3 = "challenges"
        // // Expected output: 2

        // it("takes in a string and logs the index of the first vowel", () => {
        // expect(vowelIndex(vowelTester1)).toEqual(1)
        // expect(vowelIndex(vowelTester2)).toEqual(0)
        // expect(vowelIndex(vowelTester3)).toEqual(2)
        // })
        // })

        // test ran: ReferenceError: vowelIndex is not defined

// b) Create the function that makes the test pass.

        //  Create a function that takes in a string and logs the index of the first vowel. To do this we will run a for loop. The function will run through the string and return the index of the first vowel in each string.

//         const vowelIndex = (string) => {
//         for(let i=0; i<string.length; i++){
//             if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
//                return i        
//                } 
//           }
       
//        }

// PASS  ./code-challenges.test.js
// vowelIndex
//   ✓ takes in a string and logs the index of the first vowel (9 ms)