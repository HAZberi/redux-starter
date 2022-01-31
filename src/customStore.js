const createStore = () => {
  //Using closures and composition to create a private property in functional programming.  
  let state;

  const getState = () => {
    return state;
  };

  return {
    getState,
  };
};

export default createStore;
