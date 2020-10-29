import React, { Component } from 'react'
import { Grid, Segment, List, Header, Table, Icon, Button} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {setSelectedDoctor} from "../../actions";

class DoctorList extends Component{
    // const doctorCardList = this.props.doctorsInfo.map(
    //     (doctor) => 
    //         <DoctorCard doctorInfo = {doctor}></DoctorCard>
    // )
    state ={
        doctorListSrc:null,
    }
    SelectDoctor = (name)=>{
        this.props.setDoctor(name);
    }
    componentDidMount(){
        const doctorList = this.props.doctorsInfo.map(
            (doctor) => 
                <Button content='Red' style={{ backgroundColor:"#F13962", color:"#FCF0F0", marginLeft:"0.2em"}} onClick={()=>this.SelectDoctor(doctor.name)}>{doctor.name}</Button>
        )
        this.setState({doctorListSrc:doctorList});
    }
    render(){
        return(
            <Button.Group>
                {this.state.doctorListSrc}
            </Button.Group>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        doctorsInfo: state.doctor.doctorsInfo
    };
}
const mapDispatchToProps = (dispatch) =>{
    return{
        setDoctor:(doctorName) => dispatch(setSelectedDoctor(doctorName))
    }
}
DoctorList = connect(mapStateToProps, mapDispatchToProps)(DoctorList);
  
  


export default DoctorList

