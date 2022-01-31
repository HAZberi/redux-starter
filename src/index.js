import store from "./store";

import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch(bugAdded("Bug 01"));
store.dispatch(bugAdded("Bug 02"));
store.dispatch(bugResolved(1));

// unsubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());
