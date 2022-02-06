import configureStore from "./store/configureStore";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

//Chanllenge Task
store.dispatch({
  type: "error",
  payload: { message: "An error has occured!" },
});