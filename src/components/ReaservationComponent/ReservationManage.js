import React, { Component } from 'react'
import { 
    Grid, 
    Segment,  
    Header, 
    Dropdown, 
    Icon, 
    List,
    Button,
    Modal
 } from 'semantic-ui-react'
import { connect } from 'react-redux';


class ReservationManage extends Component{
    state = {
        Reservations:[
            {number:1, name:"김찬호",doctor:"이석기", description:"배가 너무 아픕니다.", title:"배가 아파요." , time:"20.10.03"},
        ],
        listSrc:null,
        isOpen:false,
        dimmer:"",
        authorizedReservationInfo:{

        },
        reservationInfo:{},
        isSuccess:false,
    }
    onClickReservation(reservationInfo){
        this.setState({
            isOpen:true,
            reservationInfo:reservationInfo
        })
        
    }
    onClickSuccess(){
        alert("승인 완료");
        this.setState({ 
            isOpen: false, 
            isSuccess:true,
        });

    }
    
    componentDidMount(){
        if(this.state.Reservations.length >= 1){
            const currentReservations = this.state.Reservations.map(
                (Reservation) =>
                    <List.Item style={{ display: "flex" }} onClick={() => this.onClickReservation(Reservation)}>
                        <Header as="h4" content={Reservation.number} />
                        <List.Content style={{ display: "flex", paddingLeft: "1em" }}>
                            <List.Header>군의관 : {Reservation.doctor}</List.Header>
                            <List.Header style={{ paddingLeft: "1.5em" }}>환자 : {Reservation.name}</List.Header>
                        </List.Content>
                    </List.Item>
            )
            this.setState({
                listSrc:currentReservations,
            })
        }
        
    }
    render(){

        return(
            <Segment style={{ padding: '8em 0em' }} vertical>

                <Grid container stackable verticalAlign='middle' style={{paddingTop:"2em"}}>
                    <Grid.Row>
                        <Grid.Column width={20}>
                            <Header 
                                style={{paddingBottom:'1.5em'}}
                                as='h2'
                                content='예약관리'
                            />
                            <Segment>
                                <List divided relaxed animated>
                                    {this.state.isSuccess ? <></> : this.state.listSrc}
                                </List>
                            </Segment>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Modal
                    closeIcon
                    open={this.state.isOpen}
                    key={"Reservation.number"}
                    onClose={() => this.setState({ isOpen: false })}
                    onOpen={() => this.setState({ isOpen: true })}
                >
                    <Header icon='archive' content='마지막으로 확인해주세요!' />
                    <Modal.Content>
                        <p>
                            담당 군의관 : {this.state.reservationInfo.doctor}<br />
                            환자 : {this.state.reservationInfo.name}<br />
                            예약시간 : {this.state.reservationInfo.time}<br />
                            증상 : {this.state.reservationInfo.description}<br />
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => this.setState({ isOpen: false })}>
                            <Icon name='remove' /> 거부
                        </Button>
                        <Button color='green' onClick={() => {this.onClickSuccess()}}>
                            <Icon name='checkmark' /> 승인
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
        )
    }

}
export default ReservationManage;