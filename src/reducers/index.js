import {
    GET_DOCTORINFO, 
    INITIAL_DOCTORINFO, 
    SET_DOCTORCARD_INDEX,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER, 
    SET_SELECTED_DOCTOR

} from '../actions';
import {combineReducers} from "redux";
//name, major, thumbnal, description
const doctorCardInitialState = {
    doctorsInfo:[],
    selectedDoctorIndex:null,
    selectedDoctor : {//진료예약 페이지 용도 
        name:"",
        major:"",
        thumbnail:"",
        description:"",
    },
    doctorsInfo:[
        {key: 1, name:"찬호김", major:"정형외과", thmbnail:"", description:"허리 진료 전문의 입니다. ", medicalField:"허리전문",career:["서울대학교 의예과 석사 졸업", "서울대학교 의예과 박사 졸업"], paper:["abcd","efgh","asdas"],},
        {key: 2, name:"이승빈", major:"신경외과", thmbnail:"", description:"가족처럼 대하겠습니다.", medicalField:"무릎전문",career:["아주대학교 병원 병원장", "두더지잡기 1위", ],paper:["abcd","efgh","asdas"],},
        {key: 3, name:"이석기", major:"내과", thmbnail:"", description:"정성을 다해 진료하겠습니다. 감사합니다.", medicalField:"내과",career:["", "이달의 옥장판 판매왕", "하버드대 방문판매학과 석사 수석졸업"],paper:["기술교범","침 뱉기 각도와 공기저항의 연관성"],},
        {key: 4, name:"김의사", major:"피부과", thmbnail:"", description:"열심히 하겠습니다.", medicalField:"피부전문",career:["땅끝마을 수석 졸업", "두더지잡기 1위"],paper:["abcd","efgh","asdas"],},
    ],
    selectDoctorName:"",//상담게시판 용도 

};
const userIntialState = {
    user:{name:"", age:"", role:"",},
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

        case SET_SELECTED_DOCTOR:
            return Object.assign({}, state, {
                selectDoctorName:action.selectedDoctor,
            })

        default:
            return state;
        
    }
}
const user = (state = userIntialState, action) => {
    console.log(action, state);
    switch(action.type){
        case AUTH_REGISTER_SUCCESS:
            console.log("reducer")
            return Object.assign({}, state, {
                user:action.userInfo,
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