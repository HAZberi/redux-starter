const logger = store => next => action => {
    console.log("Store", store);
    console.log("Next", next);
    console.log("Action Dispatched", action);

    //Next allows to go to the next task in the pipeline
    //next method works as a dispatch function, so its important to pass the action as a parameter.
    //if nothing is passed to next() - state will not get updated. 
    next(action);
}

export default logger;