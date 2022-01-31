import createStore from "./customStore";

const store = createStore()
store.state = 1;

console.log(store);
console.log(store.getState());