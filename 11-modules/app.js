// "import" pulls them in. Note the ./ and the .js at the end!
import { getGrade, PASS_MARK } from "./grades.js";

console.log(`Pass mark is ${PASS_MARK}`);
console.log(getGrade(95));   // A
console.log(getGrade(30));   // F
