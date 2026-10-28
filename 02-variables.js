// const = value never re-assigned, let = value can change
const appName = "Study Buddy";   // string
let score = 0;                     // number
const isLoggedIn = true;           // boolean
let lastQuiz = null;               // "intentionally empty"
let nextQuiz;                      // undefined = "not set yet"

score = score + 10;                // allowed, because score is let
// appName = "Other";              // ERROR: Assignment to constant variable

console.log(appName, score, isLoggedIn, lastQuiz, nextQuiz);
console.log(typeof appName, typeof score, typeof isLoggedIn);

// Template literals: backticks + ${ } to put values inside text
const student = "Asha";
console.log(`${student} scored ${score} marks in ${appName}`);
