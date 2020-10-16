import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card} from 'semantic-ui-react'
import DoctorCard from "./DoctorCard"
class CardList extends Component{
    state={
        doctorsInfo:[],
        listSrc:null,
    }

    componentDidMount(){
        const doctorCardList = this.props.doctorsInfo.map(
            (doctor) => 
                <DoctorCard doctorInfo = {doctor}></DoctorCard>
        )
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

let mapStateToProps = (state) => {
    return {
        doctorsInfo: state.doctor.doctorsInfo
    };
}

CardList = connect(mapStateToProps)(CardList);

export default CardList;