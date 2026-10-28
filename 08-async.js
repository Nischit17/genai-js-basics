// 1) Async code does NOT block. Guess the order before running!
console.log("1. Order placed");
setTimeout(() => console.log("3. Food is ready (after 2 seconds)"), 2000);
console.log("2. Meanwhile, chatting with friends");
