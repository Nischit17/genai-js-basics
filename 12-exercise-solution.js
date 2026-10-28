const notes = [
  { title: "Deadlock", subject: "OS", words: 120 },
  { title: "Joins", subject: "DBMS", words: 300 },
  { title: "TCP Handshake", subject: "CN", words: 80 },
  { title: "Indexing", subject: "DBMS", words: 200 },
];

// Task 1: all titles in UPPERCASE
const upper = notes.map((n) => n.title.toUpperCase());
console.log(upper);

// Task 2: only long notes (more than 100 words)
const longNotes = notes.filter((n) => n.words > 100);
console.log(longNotes.length);

// Task 3: total words in all notes
const totalWords = notes.reduce((sum, n) => sum + n.words, 0);
console.log(totalWords);

// Task 4: function that returns titles of one subject
const getTitlesBySubject = (subject) =>
  notes.filter((n) => n.subject === subject).map((n) => n.title);
console.log(getTitlesBySubject("DBMS"));
