import configureStore from "./store/configureStore";
import { loadBugs, addBug, resolveBug, assignBug } from "./store/bugs";

const store = configureStore();

////-----------Subscribe Changes to State/Log State Changes--------------///
// const unsubscribe = store.subscribe(() => {
  //   console.log("Store Changed!", store.getState());
  // });
  
////-----------To Stop Subscribe Changes to State/To Stop Log State Changes--------------///
//unsubscribe();
  
////-----------Load Data(Bugs) to State--------------///
store.dispatch(loadBugs());

////-----------Add New Data(new bug) to State--------------///
//store.dispatch(addBug({ description: "Redux Bug" }));

////-----------Update Data(Resolve Bug) to State--------------///
setTimeout(() => {
    store.dispatch(resolveBug(2));
  }, 5000);
  
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
