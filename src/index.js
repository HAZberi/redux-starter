import store from "./customStore";
import * as actions from "./actions";

console.log(store);

store.dispatch(actions.bugAdded("Bug 1"));

console.log(store.getState());