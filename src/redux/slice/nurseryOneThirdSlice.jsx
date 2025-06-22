import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  nurseryOneThirdResults: [],


};

const nurseryOneThirdSlice = createSlice({
    name: "resultthird",
    initialState,
    reducers: {
        STORE_NURSERYONETHIRDRESULT(state, action) {
            console.log(action.payload);
            state.nurseryOneThirdResults = action.payload.nOneResults;
        },

       
    },
});

export const { STORE_NURSERYONETHIRDRESULT } = nurseryOneThirdSlice.actions;

export const selectNurseryOneThirdResults = (state) => state.resultthird.nurseryOneThirdResults;



export default nurseryOneThirdSlice.reducer;