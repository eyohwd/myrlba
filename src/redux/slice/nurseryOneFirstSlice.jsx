import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  nurseryOneFirstResults: [],


};

const nurseryOneFirstSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        STORE_NURSERYONEFIRSTRESULT(state, action) {
            console.log(action.payload);
            state.nurseryOneFirstResults = action.payload.nOneResults;
        },

       
    },
});

export const { STORE_NURSERYONEFIRSTRESULT } = nurseryOneFirstSlice.actions;

export const selectNurseryOneFirstResults = (state) => state.result.nurseryOneFirstResults;



export default nurseryOneFirstSlice.reducer;