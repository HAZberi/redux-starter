import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

let lastId = 0;

const bugs = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list.splice(index, 1);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
    bugAssigned: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].assignedTo = action.payload.memberId;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved, bugAssigned, bugsReceived } = bugs.actions;

export default bugs.reducer;

//Create a seprate config file of urls in production code.
const url = "/bugs";

//Action to get all the bugs via API
export const loadBugs = () =>
  apiCallBegan({
    url,
    method: "get",
    onSuccess: bugsReceived.type,
  });

//Selector
//A memoized selector instatnt
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsAssignedTo = (memberId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.assignedTo === memberId)
  );
