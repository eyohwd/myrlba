import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  students: [],


};

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        STORE_STUDENTS(state, action) {
            console.log(action.payload);
            state.students = action.payload.students;
        },

       
    },
});

export const { STORE_STUDENTS } = studentSlice.actions;

export const selectStudents = (state) => state.student.students;



export default studentSlice.reducer;