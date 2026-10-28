const note = { id: 1, title: "Deadlock", tags: ["OS", "unit-3"] };

// JS object  ->  JSON text (to SEND over the internet)
const jsonText = JSON.stringify(note);
console.log(jsonText);               // {"id":1,"title":"Deadlock","tags":["OS","unit-3"]}
console.log(typeof jsonText);        // string

// JSON text  ->  JS object (when we RECEIVE data)
const received = '{"id":2,"title":"Paging","tags":["OS"]}';
const parsed = JSON.parse(received);
console.log(parsed.title);           // Paging
console.log(typeof parsed);          // object

// Pretty print (2 spaces) - handy for debugging
console.log(JSON.stringify(note, null, 2));
