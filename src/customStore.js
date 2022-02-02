import reducer from "./reducers";

const createStore = (reducer) => {
  //Using closures and composition to create a private property in functional programming.
  let state;

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return {
    getState,
    dispatch,
  };
};

export default createStore(reducer);
