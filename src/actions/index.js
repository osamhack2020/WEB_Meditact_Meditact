export const INITIAL_DOCTORINFO = 'INITIAL_DOCTORINFO';
export const SET_DOCTORCARD_INDEX = 'SET_DOCTORCARD_INDEX';
export const GET_DOCTORINFO = 'GET_DOCTORINFO';


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

