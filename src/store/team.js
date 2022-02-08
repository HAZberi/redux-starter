import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const team = createSlice({
  name: "team",
  initialState: [],
  reducers: {
    memberAdded: (team, action) => {
      team.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
    memberRemoved: (team, action) => {
      const index = team.findIndex((member) => member.id === action.payload.id);
      team.splice(index, 1);
    },
  },
});

export const { memberAdded, memberRemoved } = team.actions;

export default team.reducer;