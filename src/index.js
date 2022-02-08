import configureStore from "./store/configureStore";
import {
  loadBugs,
  addBug,
  resolveBug,
  assignBug,
  deleteBug,
} from "./store/bugs";

const store = configureStore();

////-----------Subscribe Changes to State/Log State Changes--------------///
// const unsubscribe = store.subscribe(() => {
//   console.log("Store Changed!", store.getState());
// });

////-----------To Stop Subscribe Changes to State/To Stop Log State Changes--------------///
//unsubscribe();

////-----------Load Data(Bugs) to State--------------///
store.dispatch(loadBugs());

////-----------Delete a bug and subscribe to State--------------///
// setTimeout(() => {
//   store.dispatch(deleteBug(4));
// }, 4000);

////-----------Add New Data(new bug) to State--------------///
// setTimeout(() => {
//   store.dispatch(addBug({ description: "Redux Test Bug" }));
// }, 2000);

////-----------Update Data(Resolve Bug) to State--------------///
// setTimeout(() => {
//     store.dispatch(resolveBug(2));
//   }, 5000);

////-----------Update Data(Assign Bug to Team member) to State--------------///
// setTimeout(() => {
//   store.dispatch(assignBug(4, 2));
// }, 5000);

////-----------Caching API Call / API Call Limits--------------///
// setTimeout(() => {
//   store.dispatch(loadBugs());
// }, 20000);

////-----------Chanllenge Task Toast Notifications--------------///
// store.dispatch({
//   type: "error",
//   payload: { message: "An error has occured!" },
// });
