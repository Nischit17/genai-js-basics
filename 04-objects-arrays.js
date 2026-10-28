// OBJECT = one "thing" with named properties (key: value)
const note = {
  id: 1,
  title: "What is an Operating System?",
  subject: "OS",
  content: "An OS manages hardware and software resources.",
};

console.log(note.title);           // dot notation
console.log(note["subject"]);      // bracket notation
note.isImportant = true;           // add a new property
console.log(note);

// ARRAY = ordered list of values (index starts at 0)
const subjects = ["DBMS", "OS", "CN"];
console.log(subjects[0]);          // DBMS
console.log(subjects.length);      // 3
subjects.push("AI");               // add at the end
console.log(subjects);

// Loop through an array
for (const subject of subjects) {
  console.log(`Studying ${subject}`);
}
