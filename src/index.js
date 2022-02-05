import configureStore from "./store/configureStore";

import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
} from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";

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

store.dispatch(projectAdded({ name: "Project 01" }));
store.dispatch(projectAdded({ name: "Project 02" }));
store.dispatch(projectAdded({ name: "Project 03" }));

// unsubscribe();

store.dispatch(projectRemoved({ id: 1 }));

console.log(store.getState());

//Get Unresolved Bugs
console.log(getUnresolvedBugs(store.getState()));
