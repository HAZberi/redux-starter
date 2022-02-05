import configureStore from "./store/configureStore";

import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch(bugAdded({ description: "Bug 01" }));
store.dispatch(bugAdded({ description: "Bug 02" }));
store.dispatch(bugAdded({ description: "Bug 03" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugResolved({ id: 2 }));

// unsubscribe();

store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());
