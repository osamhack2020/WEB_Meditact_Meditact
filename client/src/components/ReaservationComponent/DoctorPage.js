import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, Image, Button, Grid, Segment, Header, Table, TextArea, Modal, Icon} from 'semantic-ui-react'
import {setDoctorcardIndex} from "../../actions";
import HeaderTemplate from "../Template/Header"

class DoctorPage extends Component{
    state={
        isLogin:false,
        banerInformation:{
            title:"스케쥴 관리",
            subTitle:null,
            isMain:false,
          },
          isOpen:false,
          isSuccess:"처리중",
    }
    render(){
        return (
            <Grid>
                <Grid.Column width={8}>
                    <Segment>
                        <Header
                            style={{ paddingBottom: '1.5em' }}
                            as='h2'
                            content='예약 확인하기'
                        />
                        <Grid verticalAlign="center">
                            <Grid.Column width={3}>
                                <Header
                                    as='h4'
                                    content='09:00 ~ 10:00'
                                />
                                <Header
                                    as='h4'
                                    content='김찬호'
                                />
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header
                                    style={{ paddingBottom: '1.5em' }}
                                    as='h4'
                                    content='10:00 ~ 11:00'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header
                                    style={{ paddingBottom: '1.5em' }}
                                    as='h4'
                                    content='11:00 ~ 12:00'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header
                                    style={{ paddingBottom: '1.5em' }}
                                    as='h4'
                                    content='13:00 ~ 14:00'/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header
                                    style={{ paddingBottom: '1.5em' }}
                                    as='h4'
                                    content='15:00 ~ 16:00'/>
                            </Grid.Column>
                            {/* <Grid.Column width={3}>
                                <Header
                                    style={{ paddingBottom: '1.5em' }}
                                    as='h4'
                                    content='09:00 ~ 10:00'/>
                            </Grid.Column> */}
                        </Grid>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Segment>
                        <Header
                            style={{ paddingBottom: '1.5em' }}
                            as='h2'
                            content='상담 확인하기'
                        />
                        <Table>
                            <Table.Body>
                                <Table.Row onClick={() => {this.setState({isOpen:true})}}>
                                    <Table.Cell><Header as="h4" content="1" /></Table.Cell>
                                    <Table.Cell>배가 아파요.</Table.Cell>
                                    <Table.Cell>{this.state.isSuccess}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>
                    <Modal
                        closeIcon
                        open={this.state.isOpen}
                        key={"Reservation.number"}
                        onClose={() => this.setState({ isOpen: false })}
                        onOpen={() => this.setState({ isOpen: true })}
                    >
                        <Header icon='archive' content='소중한 의견을 남겨주세요 !' />
                        <Modal.Content>
                            <TextArea placeholder="상담 답변 작성" style={{width:"100%"}} />
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='red' onClick={() => this.setState({ isOpen: false })}>
                                <Icon name='remove' /> 취소
                        </Button>
                            <Button color='green' onClick={() => {this.setState({ isOpen: false , isSuccess:"처리완료"}); alert("처리완료")}}>
                                <Icon name='checkmark' /> 등록
                        </Button>
                        </Modal.Actions>
                    </Modal>
                </Grid.Column>
            </Grid>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        setDoctorcard:(selectedIndex) => dispatch(setDoctorcardIndex(selectedIndex))
    }
}

DoctorPage = connect(undefined, mapDispatchToProps)(DoctorPage);

export default DoctorPage;