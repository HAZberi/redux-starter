import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const projects = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
    projectRemoved: (projects, action) => {
      const index = projects.findIndex((bug) => bug.id === action.payload.id);
      projects.splice(index, 1);
    },
  },
});

export const { projectAdded, projectRemoved } = projects.actions;

export default projects.reducer;
