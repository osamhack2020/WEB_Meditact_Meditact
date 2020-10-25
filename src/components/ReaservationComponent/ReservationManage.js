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
            {number:1, title:"김찬호",doctor:"김찬호", description:"배가아파용", time:"20.10.03"},
            {number:2, title:"김땡떙",doctor:"김찬호", description:"머리가아파용", time:"20.10.03"},
            {number:3, title:"박땡땡",doctor:"김찬호", description:"다리가아파용", time:"20.10.03"},
            {number:4, title:"이땡땡",doctor:"김찬호", description:"손가락이아파용", time:"20.10.03"},
            {number:5, title:"정땡땡",doctor:"김찬호", description:"삐슝빠슝!", time:"20.10.03"},
        ],
        listSrc:null,
        isOpen:false,
        dimmer:"",
        authorizedReservationInfo:{

        },
        reservationInfo:{}
    }
    onClickReservation(reservationInfo){
        this.setState({
            isOpen:true,
            reservationInfo:reservationInfo
        })
        
    }
    componentDidMount(){
        const currentReservations = this.state.Reservations.map(
            (Reservation) =>
                <List.Item style={{ display: "flex" }} onClick={() => this.onClickReservation(Reservation)}>
                    <Header as="h4" content={Reservation.number} />
                    <List.Content style={{ display: "flex", paddingLeft: "1em" }}>
                        <List.Header>군의관 : {Reservation.doctor}</List.Header>
                        <List.Header style={{ paddingLeft: "1.5em" }}>환자 : {Reservation.title}</List.Header>
                    </List.Content>
                </List.Item>
        )
        this.setState({
            listSrc:currentReservations,
        })
        
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
                            <List divided relaxed animated>
                                {this.state.listSrc}
                            </List>
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
                            담당 환자 : {this.state.reservationInfo.title}<br />
                            예약시간 : {this.state.reservationInfo.time}<br />
                            증상 : {this.state.reservationInfo.description}<br />
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => this.setState({ isOpen: false })}>
                            <Icon name='remove' /> 거부
                        </Button>
                        <Button color='green' onClick={() => this.setState({ isOpen: false })}>
                            <Icon name='checkmark' /> 승인
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
        )
    }

}
export default ReservationManage;