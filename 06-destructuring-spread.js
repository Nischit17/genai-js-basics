const note = { id: 1, title: "Normalization", subject: "DBMS" };

// Object destructuring: pull properties out into variables
const { title, subject } = note;
console.log(title, subject);          // Normalization DBMS

// Array destructuring
const [first, second] = ["DBMS", "OS", "CN"];
console.log(first, second);           // DBMS OS

// Spread (...) : copy an object and change/add some fields
const updatedNote = { ...note, title: "Normalization (1NF to 3NF)" };
console.log(note.title);              // original is unchanged
console.log(updatedNote);

// Spread with arrays: join two arrays
const sem5 = ["DBMS", "OS"];
const allSubjects = [...sem5, "CN", "AI"];
console.log(allSubjects);             // [ 'DBMS', 'OS', 'CN', 'AI' ]
