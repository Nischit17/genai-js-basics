const quizResults = [
  { student: "Asha", subject: "DBMS", score: 18 },
  { student: "Ravi", subject: "OS",   score: 7  },
  { student: "Meera", subject: "DBMS", score: 15 },
  { student: "John", subject: "CN",   score: 12 },
];

// map -> transform EVERY item, returns a NEW array of the same length
const names = quizResults.map((r) => r.student);
console.log(names);         // [ 'Asha', 'Ravi', 'Meera', 'John' ]

// filter -> keep only items that pass a test
const passed = quizResults.filter((r) => r.score >= 10);
console.log(passed.length); // 3

// find -> FIRST item that matches (or undefined)
const ravi = quizResults.find((r) => r.student === "Ravi");
console.log(ravi);          // { student: 'Ravi', subject: 'OS', score: 7 }

// reduce -> squeeze the whole array into ONE value
const total = quizResults.reduce((sum, r) => sum + r.score, 0);
console.log(total / quizResults.length); // 13 (average)

// Chaining: names of students who passed DBMS
const dbmsToppers = quizResults
  .filter((r) => r.subject === "DBMS" && r.score >= 10)
  .map((r) => r.student);
console.log(dbmsToppers);   // [ 'Asha', 'Meera' ]
