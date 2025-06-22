import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  nurseryOneSecondResults: [],


};

const nurseryOneSecondSlice = createSlice({
    name: "resultsecond",
    initialState,
    reducers: {
        STORE_NURSERYONESECONDRESULT(state, action) {
            console.log(action.payload);
            state.nurseryOneSecondResults = action.payload.nOneResults;
        },

       
    },
});

export const { STORE_NURSERYONESECONDRESULT } = nurseryOneSecondSlice.actions;

export const selectNurseryOneSecondResults = (state) => state.resultsecond.nurseryOneSecondResults;



export default nurseryOneSecondSlice.reducer;