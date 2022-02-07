import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

let lastId = 0;

const bugs = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
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

export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssigned,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = bugs.actions;

export default bugs.reducer;

//Create a seprate config file of urls in production code.
const url = "/bugs";

//Action to get all the bugs via API
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  if (lastFetch) {
    const timeSinceLastApiCall = moment(Date.now()).diff(lastFetch, "seconds");

    //Set the api call limit in a global config module
    if (timeSinceLastApiCall > 10) return;
  }

  dispatch(
    apiCallBegan({
      url,
      method: "get",
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    })
  );
};

export const addBug = (bug) =>
  apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
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
