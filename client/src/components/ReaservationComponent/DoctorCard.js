import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, Image, Button } from 'semantic-ui-react'
import {setDoctorcardIndex} from "../../actions";

class DoctorCard extends Component{
    
    render(){
        const {key, name, major, thumbnal, description} = this.props.doctorInfo;

        return(
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>{major}</Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' onClick={()=>this.props.setDoctorcard(key)}>
                            예약하기
                        </Button>
                        <Button basic color='red'>
                            에약취소
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        setDoctorcard:(selectedIndex) => dispatch(setDoctorcardIndex(selectedIndex))
    }
}

DoctorCard = connect(undefined, mapDispatchToProps)(DoctorCard);

export default DoctorCard;