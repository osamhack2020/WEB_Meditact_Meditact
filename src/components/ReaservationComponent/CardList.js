import PropTypes from 'prop-types'
import React, { Component } from 'react'
import HeaderTemplate from "../Template/Header"
import { Grid, Segment, List, Header, Card, Image, Button } from 'semantic-ui-react'
import DoctorCard from "./DoctorCard"
class CardList extends Component{
    state={
        doctorsInfo:[
            {name:"찬호김", major:"정형외과", thmbnail:"", description:"orem ipsum dolor sit amet, consectetur adipiscing elit"},
            {name:"이승빈", major:"성형외과", thmbnail:"", description:"대한민국 최고 존잘남이 탄생시키는 너의 얼굴"},
            {name:"울랄라", major:"정형외과", thmbnail:"", description:"orem ipsum dolor sit amet, consectetur adipiscing elit"},
            {name:"발할라", major:"피부과", thmbnail:"", description:"orem ipsum dolor sit amet, consectetur adipiscing elit"},
        ],
        listSrc:null,
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const doctorCardList = this.state.doctorsInfo.map(
            (doctor) => 
                <DoctorCard doctorInfo = {doctor}></DoctorCard>
        )
        console.log(this.state.doctorsInfo)
        this.setState({
            listSrc:doctorCardList,
        })
    }
    
    render(){

        return(
            <Card.Group itemsPerRow={1}>
                {this.state.listSrc}
            </Card.Group>
        )
    }
}
export default CardList;