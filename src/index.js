import store from "./customStore";
import * as actions from "./actions";

console.log(store);

store.subscribe(() => console.log("Store Changed"));

store.dispatch(actions.bugAdded("Bug 1"));

console.log(store.getState());