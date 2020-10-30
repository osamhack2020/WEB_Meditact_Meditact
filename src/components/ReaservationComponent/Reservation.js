import React, { Component } from 'react'
import HeaderTemplate from "../Template/Header"
import { Grid, Segment,  Header, Dropdown, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

import {initialDoctorInfo} from "../../actions";

import CardList from "./CardList";
import CurrentReservation from "./CurrentReservation"
import ReservationManage from "./ReservationManage"
import DoctorPage from "./DoctorPage"
import mainBaner from "../../images/BanerTest/9.png"

class ReservationComponent extends Component{
    constructor(props){
        super(props);
        
        this.state={
            isLogin:false,
            banerInformation:{
                title:"예약안내",
                subTitle:null,
                isMain:false,
                banerImage:mainBaner,
              },
              majorList:[
                    { key: 1, text: '정형외과', value: 1 },
                    { key: 2, text: '신경외과', value: 2 },
                    { key: 3, text: '정신과', value: 3 },
                    { key: 4, text: '피부과', value: 4 },
                    { key: 5, text: '내과', value: 5 },
                    { key: 6, text: '한방의학과', value: 6 },
                    { key: 7, text: '치과', value: 7 },
                    { key: 8, text: '비뇨기과', value: 8},
            ],
            doctorsInfo:[
                {key: 1, name:"찬호김", major:"정형외과", thmbnail:"", description:"허리 진료 전문의 입니다. ", medicalField:"허리전문",career:["서울대학교 의예과 석사 졸업", "서울대학교 의예과 박사 졸업"], paper:["abcd","efgh","asdas"],},
                {key: 2, name:"이승빈", major:"신경외과", thmbnail:"", description:"가족처럼 대하겠습니다.", medicalField:"무릎전문",career:["아주대학교 병원 병원장", "두더지잡기 1위", ],paper:["abcd","efgh","asdas"],},
                {key: 3, name:"이석기", major:"내과", thmbnail:"", description:"정성을 다해 진료하겠습니다. 감사합니다.", medicalField:"내과",career:["아주대학교 병원 5년 근무", "국군 양주병원 3년 근무", "현 : 국군수도병원 한방과 전문의"],paper:["기술교범","what is front-end"],},
                {key: 4, name:"김의사", major:"피부과", thmbnail:"", description:"열심히 하겠습니다.", medicalField:"피부전문",career:["땅끝마을 수석 졸업", "두더지잡기 1위"],paper:["abcd","efgh","asdas"],},
            ],
            selectedDoctor:null
            
        };
        this.props.initialDoctorsInfo(this.state.doctorsInfo);
    }
    NoLogin(){
        alert("login!!");
        this.props.history.push("/login");
    }
    componentDidMount(){
        this.props.isLogin ? this.setState({isLogin:true}) : this.NoLogin();
        console.log(this.props.isLogin)
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            selectedDoctor:this.state.doctorsInfo[nextProps.selectedDoctorIndex-1],
        })
    }
    render(){
        const role = this.props.userInfo.role || "";
        return(
            <HeaderTemplate 
                banerInformation={this.state.banerInformation}
                isLogin={this.state.isLogin}
            >
                <Segment>
                    {/*this.props.userInfo.role*/role === "User" ?
                        <Grid container stackable style={{ paddingTop: "2em" }}>
                            <Grid.Row>
                                <Grid.Column width={20}>
                                    <Header
                                        style={{ paddingBottom: '1.5em' }}
                                        as='h2'
                                        content='예약하기'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{ paddingLeft: "1.5em" }}>
                                <Dropdown clearable options={this.state.majorList} selection></Dropdown>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <CardList />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    {
                                        this.state.selectedDoctor === null ?
                                            <Segment width={10} style={{ paddingTop: "25em", paddingLeft: "17em", minHeight: "52.3em" }}>
                                                <div style={{ display: "flex" }}>
                                                    <Icon name="plus circle" color="grey" size="big" style={{ paddingTop: "1em" }} />
                                                    <Header
                                                        as="h1"
                                                        color="grey"
                                                    >
                                                        CLICK CARD
                                                    </Header>
                                                </div>
                                            </Segment> 
                                            :
                                            
                                            <CurrentReservation selectedDoctor={this.state.selectedDoctor} />

                                    }
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        :
                        role === "Admin" ?
                        <ReservationManage></ReservationManage>
                        :
                        <DoctorPage></DoctorPage>
                    }
                    
                </Segment>
            </HeaderTemplate>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        initialDoctorsInfo:(doctorsInfo) => dispatch(initialDoctorInfo(doctorsInfo))
    }
}
const mapStateToProps = (state) => {
    return {
        selectedDoctorIndex: state.doctor.selectedDoctorIndex,
        isLogin: state.user.isLogin,
        userInfo:state.user.user,
    };
}

ReservationComponent = connect(mapStateToProps, mapDispatchToProps)(ReservationComponent);

export default withRouter(ReservationComponent)