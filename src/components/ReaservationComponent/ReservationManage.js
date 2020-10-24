import React, { Component } from 'react'
import { 
    Grid, 
    Segment,  
    Header, 
    Dropdown, 
    Icon, 
    List,
    Button,
    
 } from 'semantic-ui-react'
import { connect } from 'react-redux';


class ReservationManage extends Component{
    state = {
        Reservations:[
            {number:1, title:"김찬호", uploadTime:"20/10/05",viewCount:10},
            {number:2, title:"김땡떙",uploadTime:"20/10/05", viewCount:20},
            {number:2, title:"박땡땡",uploadTime:"20/10/05", viewCount:20},
            {number:2, title:"이땡땡",uploadTime:"20/10/05", viewCount:20},
            {number:2, title:"정땡땡",uploadTime:"20/10/05", viewCount:20},
        ],
        listSrc:null,
        isOpen:false,
    }
    onClickReservation(){

    }
    componentDidMount(){
        const currentReservations = this.state.Reservations.map(
            (Reservation) => 
                <Modal
                    closeIcon
                    open={this.state.isOpen}
                    trigger={
                        <List.Item style={{ display: "flex" }} onClick={() => this.onClickReservation()}>
                            <Header as="h4" content={Reservation.number} />
                            <List.Content style={{ display: "flex", paddingLeft: "1em" }}>
                                <List.Header>{Reservation.uploadTime}</List.Header>
                                <List.Header style={{ paddingLeft: "1.5em" }}>{Reservation.title}</List.Header>
                            </List.Content>
                        </List.Item>
                    }
                    onClose={() => this.setState({ isOpen: false })}
                    onOpen={() => this.setState({ isOpen: true })}
                >
                    <Modal.Actions>
                        <Button color='red' onClick={() => this.setState({ isOpen: false })}>
                            <Icon name='remove' /> No
                                            </Button>
                        <Button color='green' onClick={() => this.clickReservationBtn(this)}>
                            <Icon name='checkmark' /> Yes
                        </Button>
                    </Modal.Actions>
                </Modal>

                
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
            </Segment>
        )
    }

}
export default ReservationManage;