import configureStore from "./store/configureStore";
import { apiCallBegan } from "./store/api";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch(
  apiCallBegan({
    url: "/bugs",
    method: "get",
    onSuccess: "bugsReceived",
  })
);

//Chanllenge Task
store.dispatch({
  type: "error",
  payload: { message: "An error has occured!" },
});
