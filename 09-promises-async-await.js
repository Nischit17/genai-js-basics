// A fake "server call" that takes 1 second, like a real database / AI call
function fetchQuiz(subject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (subject === "DBMS") {
        resolve({ subject, questions: 10 });          // success
      } else {
        reject(new Error(`No quiz found for ${subject}`)); // failure
      }
    }, 1000);
  });
}

// async/await = write async code that READS like normal top-to-bottom code
async function main() {
  console.log("Loading quiz...");
  try {
    const quiz = await fetchQuiz("DBMS");   // waits here, without freezing Node
    console.log("Got quiz:", quiz);

    const quiz2 = await fetchQuiz("Chemistry");
    console.log("Got quiz:", quiz2);        // never runs - previous line throws
  } catch (error) {
    console.log("Failed:", error.message);
  }
  console.log("Done!");
}

main();
