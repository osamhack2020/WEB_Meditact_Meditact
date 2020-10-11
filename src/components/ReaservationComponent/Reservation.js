import PropTypes from 'prop-types'
import React, { Component } from 'react'
import HeaderTemplate from "../Template/Header"
import { Grid, Segment,  Header, Dropdown, Icon } from 'semantic-ui-react'
import CardList from "./CardList";
import CurrentReservation from "./CurrentReservation"

class ReservationComponent extends Component{
    constructor(props){
        super(props)
        this.state={
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
                ]
        }
    }
    render(){
        return(
            <HeaderTemplate 
                banerInformation={this.state.banerInformation}
            >
                <Segment>
                    <Grid container stackable style={{paddingTop:"2em"}}>
                        <Grid.Row>
                            <Grid.Column width={20}>
                                <Header 
                                    style={{paddingBottom:'1.5em'}}
                                    as='h2'
                                    content='예약하기'
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{paddingLeft:"1.5em"}}>
                            <Dropdown clearable options={this.state.majorList} selection></Dropdown>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <CardList/>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment width={10} style={{paddingTop:"25em", paddingLeft:"17em",minHeight:"52.3em"}}>
                                    <div style={{display:"flex"}}>
                                        <Icon name="plus circle" color="grey" size="big" style={{paddingTop:"1em"}}/>
                                        <Header
                                            as="h1"
                                            color="grey"
                                        >
                                            CLICK CARD
                                        </Header>
                                    </div>

                                </Segment>
                                
                                {/* <CurrentReservation/> */}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </HeaderTemplate>
        )
    }
}

export default ReservationComponent