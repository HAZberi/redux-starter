import configureStore from "./store/configureStore";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    method: "get",
    onSuccess: "bugsReceived",
    onError: "apiCallFailed",
  },
});

//Chanllenge Task
store.dispatch({
  type: "error",
  payload: { message: "An error has occured!" },
});
