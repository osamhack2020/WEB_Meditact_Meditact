import React, { Component } from 'react'
import HeaderTemplate from "../Template/Header"
import { Grid, Segment,  Header, Dropdown, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

import {initialDoctorInfo} from "../../actions";

import CardList from "./CardList";
import CurrentReservation from "./CurrentReservation"
import ReservationManage from "./ReservationManage"

class ReservationComponent extends Component{
    constructor(props){
        super(props);
        
        this.state={
            isLogin:false,
            banerInformation:{
                title:"예약확인하기",
                subTitle:null,
                isMain:false,
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
                {key: 1, name:"찬호김", major:"정형외과", thmbnail:"", description:"orem ipsum dolor sit amet, consectetur adipiscing elit", medicalField:"감염과",career:["땅끝마을 수석 졸업", "두더지잡기 1위"], paper:["abcd","efgh","asdas"],},
                {key: 2, name:"이승빈", major:"성형외과", thmbnail:"", description:"대한민국 최고 존잘남이 탄생시키는 너의 얼굴", medicalField:"감염과",career:["땅끝마을 수석 졸업", "두더지잡기 1위", ],paper:["abcd","efgh","asdas"],},
                {key: 3, name:"이석기", major:"한방과", thmbnail:"", description:"한 방에 보내버립니다.", medicalField:"한방과",career:["다단계 경시대회 최우수상", "이달의 옥장판 판매왕", "하버드대 방문판매학과 석사 수석졸업"],paper:["기술교범","침 뱉기 각도와 공기저항의 연관성"],},
                {key: 4, name:"발할라", major:"피부과", thmbnail:"", description:"orem ipsum dolor sit amet, consectetur adipiscing elit", medicalField:"감염과",career:["땅끝마을 수석 졸업", "두더지잡기 1위"],paper:["abcd","efgh","asdas"],},
            ],
            selectedDoctor:null
            
        };
        this.props.initialDoctorsInfo(this.state.doctorsInfo);
    }
    NoLogin(){
        alert("login!!");
        //this.props.history.push("/login");
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
        const roll = "Admin"
        return(
            <HeaderTemplate 
                banerInformation={this.state.banerInformation}
                isLogin={this.state.isLogin}
            >
                <Segment>
                    {/*this.props.userInfo.role*/roll === "User" ?
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
                                            </Segment> :
                                            <CurrentReservation selectedDoctor={this.state.selectedDoctor} />

                                    }
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        :
                        <ReservationManage></ReservationManage>
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