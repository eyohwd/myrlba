import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  nurseryTwoFirstResults: [],


};

const nurseryTwoFirstSlice = createSlice({
    name: "resultn2first",
    initialState,
    reducers: {
        STORE_NURSERYTWOFIRSTRESULT(state, action) {
            console.log(action.payload);
            state.nurseryTwoFirstResults = action.payload.nTwoResults;
        },

       
    },
});

export const { STORE_NURSERYTWOFIRSTRESULT } = nurseryTwoFirstSlice.actions;

export const selectNurseryTwoFirstResults = (state) => state.resultn2first.nurseryTwoFirstResults;



export default nurseryTwoFirstSlice.reducer;