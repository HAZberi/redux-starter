import configureStore from "./store/configureStore";
import { loadBugs, addBug } from "./store/bugs";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

// store.dispatch(loadBugs());

store.dispatch(addBug({ description: "Redux Bug" }));

// setTimeout(() => {
//   store.dispatch(loadBugs());
// }, 20000);

// //Chanllenge Task
// store.dispatch({
//   type: "error",
//   payload: { message: "An error has occured!" },
// });
