import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  teachers: [],


};

const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        STORE_TEACHERS(state, action) {
            console.log(action.payload);
            state.teachers = action.payload.teachers;
        },

       
    },
});

export const { STORE_TEACHERS } = teacherSlice.actions;

export const selectTeachers = (state) => state.teacher.teachers;



export default teacherSlice.reducer;