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
        {key: 1, name:"찬호김", major:"정형외과", thmbnail:"", description:"orem ipsum dolor sit amet, consectetur adipiscing elit", medicalField:"감염과",career:["땅끝마을 수석 졸업", "두더지잡기 1위"], paper:["abcd","efgh","asdas"],},
        {key: 2, name:"이승빈", major:"성형외과", thmbnail:"", description:"대한민국 최고 존잘남이 탄생시키는 너의 얼굴", medicalField:"감염과",career:["땅끝마을 수석 졸업", "두더지잡기 1위", ],paper:["abcd","efgh","asdas"],},
        {key: 3, name:"이석기", major:"한방과", thmbnail:"", description:"한 방에 보내버립니다.", medicalField:"한방과",career:["다단계 경시대회 최우수상", "이달의 옥장판 판매왕", "하버드대 방문판매학과 석사 수석졸업"],paper:["기술교범","침 뱉기 각도와 공기저항의 연관성"],},
        {key: 4, name:"발할라", major:"피부과", thmbnail:"", description:"orem ipsum dolor sit amet, consectetur adipiscing elit", medicalField:"감염과",career:["땅끝마을 수석 졸업", "두더지잡기 1위"],paper:["abcd","efgh","asdas"],},
    ],
    selectDoctorName:"",//상담게시판 용도 

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

        case SET_SELECTED_DOCTOR:
            return Object.assign({}, state, {
                selectDoctorName:action.selectedDoctor,
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