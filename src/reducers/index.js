import {
    GET_DOCTORINFO, 
    INITIAL_DOCTORINFO, 
    SET_DOCTORCARD_INDEX,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER,

} from '../actions';
import {combineReducers} from "redux";
//name, major, thumbnal, description
const doctorCardInitialState = {
    doctorsInfo:[],
    selectedDoctorIndex:null,
    selectedDoctor : {
        name:"",
        major:"",
        thumbnail:"",
        description:"",
    },

};
const userIntialState = {
    user:null,
    isLogin:false,
}

const doctor = (state = doctorCardInitialState, action) => {
    console.log(123)
    switch(action.type){
        case INITIAL_DOCTORINFO:
            console.log("reducers")
            return Object.assign({}, state, {
                doctorsInfo:action.doctorsInfo,
            })
        
        case SET_DOCTORCARD_INDEX:
            console.log(action.selectedDoctorIndex + "setsetset");
            return Object.assign({}, state, {
                selectedDoctorIndex:action.selectedDoctorIndex,
            })

        case GET_DOCTORINFO:
            console.log(state.doctorsInfo[state.selectedDoctorIndex-1] + "GETGETGETGET");
            return Object.assign({}, state, {
                selectedDoctor:state.doctorsInfo[state.selectedDoctorIndex],
            })
        default:
            return state;
        
    }
}
const user = (state = userIntialState, action) => {
    switch(action.type){
        case AUTH_REGISTER_SUCCESS:
            console.log("reducer")
            return Object.assign({}, state, {
                user:state.userInfo,
                isLogin:true,
            })
        default:
            return state;
    }
}
const MeditactReducers = combineReducers({
    doctor,
    user
});

export default MeditactReducers;