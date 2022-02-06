import configureStore from "./store/configureStore";

import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssigned,
  getUnresolvedBugs,
  getBugsAssignedTo,
} from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";
import { memberAdded, memberRemoved } from "./store/team";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

//store.dispatch(memberAdded({ name: "Mosh" }));

//Dispatching Functions instead of actions
store.dispatch((dispatch, getState) => {
  //A function is needed to be passed in place of action to get the data from API
  //Once the data is received or there is error (fulfilled/rejected) from the api, action can be dispatched
  dispatch({ type: "bugsReceived", payload: [1, 2, 3] });
});

// store.dispatch(memberAdded({ name: "Hassaan" }));
// store.dispatch(memberAdded({ name: "Jonas" }));

// store.dispatch(bugAdded({ description: "Bug 01" }));
// store.dispatch(bugAdded({ description: "Bug 02" }));
// store.dispatch(bugAdded({ description: "Bug 03" }));
// store.dispatch(bugAssigned({ id: 1, memberId: 1 }));
// store.dispatch(bugAssigned({ id: 2, memberId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugResolved({ id: 2 }));

// // unsubscribe();

// store.dispatch(bugRemoved({ id: 3 }));
// store.dispatch(memberRemoved({ id: 3 }));

// store.dispatch(projectAdded({ name: "Project 01" }));
// store.dispatch(projectAdded({ name: "Project 02" }));
// store.dispatch(projectAdded({ name: "Project 03" }));

// // unsubscribe();

// store.dispatch(projectRemoved({ id: 1 }));

console.log(store.getState());

//Get Unresolved Bugs
// console.log(getUnresolvedBugs(store.getState()));

// console.log(getBugsAssignedTo(1)(store.getState()));
