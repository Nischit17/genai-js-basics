// fetch is built into Node 18+. It calls a REAL server on the internet.
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("Status:", response.status);   // 200
  const data = await response.json();         // JSON text -> JS object
  console.log(data);
}

getTodo();
