import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  nurseryTwoSecondResults: [],


};

const nurseryTwoSecondSlice = createSlice({
    name: "resultn2second",
    initialState,
    reducers: {
        STORE_NURSERYTWOSECONDRESULT(state, action) {
            console.log(action.payload);
            state.nurseryTwoSecondResults = action.payload.nTwoResults;
        },

       
    },
});

export const { STORE_NURSERYTWOSECONDRESULT } = nurseryTwoSecondSlice.actions;

export const selectNurseryTwoSecondResults = (state) => state.resultn2second.nurseryTwoSecondResults;



export default nurseryTwoSecondSlice.reducer;