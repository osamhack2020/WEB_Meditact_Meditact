export const INITIAL_DOCTORINFO = 'INITIAL_DOCTORINFO';
export const SET_DOCTORCARD_INDEX = 'SET_DOCTORCARD_INDEX';
export const GET_DOCTORINFO = 'GET_DOCTORINFO';
//상담게시판 액션
export const SET_SELECTED_DOCTOR = "GET_SELECTED_DOCTOR";

//---------------------------------login--------------------------------
export const AUTH_REGISTER = "AUTH_REGISTER";
export const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS";
export const AUTH_REGISTER_FAILURE = "AUTH_REGISTER_FAILURE";



export function initialDoctorInfo(doctorsInfo){
    return{
        type:INITIAL_DOCTORINFO,
        doctorsInfo:doctorsInfo,
    }
}
export function setDoctorcardIndex(selectedIndex){
    return{
        type:SET_DOCTORCARD_INDEX,
        selectedDoctorIndex:selectedIndex,
    }
}

export function getDoctorInfo(){
    return{
        type:GET_DOCTORINFO,
    }
}

//---------------------상담게시판 군의관 액션크리에이터---------------------
export function setSelectedDoctor(selectedDoctorName){
    return{
        type:SET_SELECTED_DOCTOR,
        selectedDoctor:selectedDoctorName
    }
}



export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess(userInfo) {
    console.log("action")
    return {
        type: AUTH_REGISTER_SUCCESS,
        userInfo:userInfo
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };
}