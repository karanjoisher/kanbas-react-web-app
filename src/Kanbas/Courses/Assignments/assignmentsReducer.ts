import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
  assignment: { 
    title: "New Assignment 123", 
    description: "New Assignment Description", 
    course: "Course ID", 
    points: 0,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "" },
};


const assignmentsSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      console.log("woowowow");
      console.log(action);
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;