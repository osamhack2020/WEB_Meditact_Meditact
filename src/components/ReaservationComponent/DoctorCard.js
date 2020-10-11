import PropTypes from 'prop-types'
import React, { Component } from 'react'
import HeaderTemplate from "../Template/Header"
import { Grid, Segment, List, Header, Card, Image, Button } from 'semantic-ui-react'

class DoctorCard extends Component{
    
    render(){
        const {name, major, thumbnal, description} = this.props.doctorInfo;

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
                        <Button basic color='green'>
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
export default DoctorCard;