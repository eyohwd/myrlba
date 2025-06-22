import { configureStore, combineReducers} from "@reduxjs/toolkit"
import authReducer from "./slice/authSlice"
import studentReducer from "./slice/studentSlice"
import teacherReducer from "./slice/teacherSlice"
import nurseryonefirstresultReducer from "./slice/nurseryOneFirstSlice"
import nurseryonesecondresultReducer from "./slice/nurseryOneSecondSlice"
import nurseryonethirdresultReducer from "./slice/nurseryOneThirdSlice"
import nurserytwofirstresultReducer from "./slice/nurseryTwoFirstSlice"
import nurserytwosecondresultReducer from "./slice/nurseryTwoSecondSlice"
import nurserytwothirdresultReducer from "./slice/nurseryTwoThirdSlice"
import primaryonefirstresultReducer from "./slice/primaryOneFirstSlice"
import primaryonesecondresultReducer from "./slice/primaryOneSecondSlice"
import primaryonethirdresultReducer from "./slice/primaryOneThirdSlice"
import primarytwofirstresultReducer from "./slice/primaryTwoFirstSlice"
import primarytwosecondresultReducer from "./slice/primaryTwoSecondSlice"
import primarytwothirdresultReducer from "./slice/primaryTwoThirdSlice"




const rootReducer = combineReducers({
    auth: authReducer,
    student: studentReducer,
    teacher: teacherReducer,
    result: nurseryonefirstresultReducer,
    resultsecond: nurseryonesecondresultReducer,
    resultthird: nurseryonethirdresultReducer,
    resultn2first: nurserytwofirstresultReducer,
    resultn2second: nurserytwosecondresultReducer,
    resultn2third: nurserytwothirdresultReducer,
    resultp1first: primaryonefirstresultReducer,
    resultp1second: primaryonesecondresultReducer,
    resultp1third: primaryonethirdresultReducer,
    resultp2first: primarytwofirstresultReducer,
    resultp2second: primarytwosecondresultReducer,
    resultp2third: primarytwothirdresultReducer,
    

});

const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      
      serializableCheck: false,
    }),
})



export default store;