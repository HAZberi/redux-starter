import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";
import logger from "./middleware/logger";

const composeEnhancers = composeWithDevTools({ trace: true });

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

export default store;