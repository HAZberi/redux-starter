import { combineReducers } from "redux";

import bugsReducer from "./bugs";
import projectsReducer from "./projects";
import teamReducer from "./team";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  team: teamReducer,
});
