import configureStore from "./store/configureStore";
import { loadBugs } from "./store/bugs";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch(loadBugs());

//Chanllenge Task
store.dispatch({
  type: "error",
  payload: { message: "An error has occured!" },
});
