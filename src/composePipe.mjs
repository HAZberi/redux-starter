import pkg from "lodash/fp.js";

const { compose, pipe } = pkg;

let text = "    JavaScript     ";

/* Task
    - Make sure text should not have any trailing and leading spaces.
    - Make sure text is in all lowercase.
    - Create HTML Element to wrap the text. 
    - User should be able to specify HTML element of their choosing. 
*/

//implemented currying to separate out arguments and promote cleaner and working code.
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const lowercase = (str) => str.toLowerCase();
const trim = (str) => str.trim();

const taskPiping = pipe(trim, lowercase, wrap("p"));
const taskComposing = compose(wrap("span"), lowercase, trim);


console.log(taskPiping(text));
console.log(taskComposing(text));

//Hint: Run this file with node js.