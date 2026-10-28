// 1) Function declaration
function calculatePercentage(score, total) {
  return (score / total) * 100;
}

// 2) Arrow function (short form, used everywhere in Express)
const getGrade = (percentage) => {
  if (percentage >= 90) return "A";
  if (percentage >= 75) return "B";
  if (percentage >= 40) return "C";
  return "F";
};

// 3) One-line arrow function + default parameter
const greet = (name = "Student") => `Welcome, ${name}!`;

const percent = calculatePercentage(18, 20);
console.log(percent);              // 90
console.log(getGrade(percent));    // A
console.log(greet("Ravi"));        // Welcome, Ravi!
console.log(greet());              // Welcome, Student!
