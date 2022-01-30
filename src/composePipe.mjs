import pkg from "lodash/fp.js";

const { compose, pipe } = pkg;

let text = "    JavaScript     ";

/* Task
    - Make sure text should not have any trailing and leading spaces.
    - Make sure text is in all lowercase.
    - Create HTML Block that contains the text.
*/

const wrapperDiv = (str) => `<div>${str}</div>`;
const lowercase = (str) => str.toLowerCase();
const trim = (str) => str.trim();

const taskPiping = pipe(trim, lowercase, wrapperDiv);
const taskComposing = compose(wrapperDiv, lowercase, trim);


console.log(taskPiping(text));
console.log(taskComposing(text));

//Hint: Run this file with node js.