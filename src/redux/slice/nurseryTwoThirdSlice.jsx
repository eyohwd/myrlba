import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  nurseryTwoThirdResults: [],


};

const nurseryTwoThirdSlice = createSlice({
    name: "resultn2third",
    initialState,
    reducers: {
        STORE_NURSERYTWOTHIRDRESULT(state, action) {
            console.log(action.payload);
            state.nurseryTwoThirdResults = action.payload.nTwoResults;
        },

       
    },
});

export const { STORE_NURSERYTWOTHIRDRESULT } = nurseryTwoThirdSlice.actions;

export const selectNurseryTwoThirdResults = (state) => state.resultn2third.nurseryTwoThirdResults;



export default nurseryTwoThirdSlice.reducer;