import React, { Component } from 'react'
import { Grid, Segment, List, Header, Table, Icon, Button, TextArea, Form, Modal} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

import HeaderTemplate from "../Template/Header"
import UploadCounseling from "./UploadCounseling"
import DoctorList from "./DoctorList";
import thumbnail from "../../images/thumbnail.jpeg"
import mainBaner from "../../images/BanerTest/6.png"
class Mypage extends Component {

    state={
        banerInformation:{
            title:"나의 건강 관리",
            subTitle:null,
            isMain:false,
            banerImage:mainBaner,

        },
        isWriting:false,
        successUpload:false,
        isOpen:false,
        isClicked : false,
    }    
    NoLogin(){
        alert("login!!");
        this.props.history.push("/login");
    }
    componentDidMount(){
        this.props.isLogin ? this.setState({isLogin:true}) : this.NoLogin();
        console.log(this.props.isLogin)
    }
    render(){
        return (
            <HeaderTemplate banerInformation={this.state.banerInformation} isLogin={this.state.isLogin}>
                <Segment>
                    <Grid container stackable style={{ paddingTop: "2em" }}>
                        <Grid.Row>
                            {/* <Grid.Column width={1}>
                                navigation
                            </Grid.Column> */}
                            <Grid.Column>
                                <Grid.Row onClick={()=>this.setState({isClicked:true, successUpload:true})}>
                                    <Header
                                        style={{ paddingBottom: '1.5em'}}
                                        as='h2'
                                        content='나의 건강 정보'
                                    />
                                    <Grid style={{border:"solid 1px rgba(34,36,38,.15)", borderRadius:".28571429rem"}}>
                                        <Grid.Row style={{display:"flex", flexDirection:"column", alignItems:"center", borderWidth:"0px", boxShadow:"none"}}>
                                            <Segment circular style={{width:"20em", height:"20em", backgroundImage:`url(${thumbnail})`, backgroundSize:"contain"}}>
                                            </Segment>
                                            <Header as="h2" content="김찬호"></Header>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={10} style={{marginLeft:"2em"}}>
                                                <Table basic='very'>
                                                    <Table.Body>
                                                        <Table.Row>
                                                            <Table.Cell><Header as="h4" content="이메일"/></Table.Cell>
                                                            <Table.Cell>hphphp@hphp.com</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as="h4" content="회원분류"/></Table.Cell>
                                                            <Table.Cell>육군</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as="h4" content="계급 / 등급"/></Table.Cell>
                                                            <Table.Cell>일병</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as="h4" content="휴대전화"/></Table.Cell>
                                                            <Table.Cell>010-7777-7777</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as="h4" content="군 일반전화"/></Table.Cell>
                                                            <Table.Cell>010-7777-7777</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as="h4" content="소속부대"/></Table.Cell>
                                                            <Table.Cell>특전사령부 공중부양연대 MUSAT대대 삐삐중대</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as="h4" content="키"/></Table.Cell>
                                                            <Table.Cell>179cm</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as="h4" content="몸무계"/></Table.Cell>
                                                            <Table.Cell>82kg</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as="h4" content="BMI 지수"/></Table.Cell>
                                                            <Table.Cell>25.59 비만 1단계</Table.Cell>
                                                        </Table.Row>
                                                    </Table.Body>
                                                </Table>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Row>

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Header
                                style={{ paddingTop: '1.5em' }}
                                as='h2'
                                content='상담게시판' />
                            
                        </Grid.Row>
                        <Grid.Row style={{border:"solid 1px rgba(34,36,38,.15)", borderRadius:".28571429rem"}}>
                            <Grid>
                            <Grid.Row style={{marginLeft:"2.5em", marginTop:"1em"}}>
                                <Header as="h3" content="상담하기" onClick={()=>{this.setState({isWriting:!this.state.isWriting})}}/>
                                    {this.state.isWriting === false ? <Icon name="triangle down" /> : <Icon name="triangle up" />}
                            </Grid.Row>
                            <Grid.Row style={{marginLeft:"2.5em"}} rows={10}>
                                    {this.state.isWriting === true ? <></> :
                                        <Grid style={{ marginLeft: "1em" }}>
                                            <Segment style={{  }}>
                                                <Header as="h4" content={"담당 군의관 : " + this.props.selectDoctorName} color="grey" />

                                                <DoctorList></DoctorList>
                                            </Segment>
                                            <Grid.Row>
                                                <Form size={"small"} style={{ width: "70em" }}>
                                                    <TextArea placeholder='제목' rows={1} />
                                                    <TextArea placeholder='상담글을 작성하세요.' />
                                                    <input type="file" name="file" onChange={null} />
                                                    <Button content='Red' style={{ backgroundColor:"#F13962", color:"#FCF0F0"}} onClick={()=>{this.setState({successUpload:true})}}>상담하기  <Icon name="talk" style={{ marginLeft: "4px" }} /></Button>
                                                </Form>
                                            </Grid.Row>
                                        </Grid>
                                
                                }
                            </Grid.Row>
                            
                                <Grid.Row>
                                    <Grid.Column width={13} style={{ marginLeft: "2em" }}>
                                        <Table basic='very'>
                                            <Table.Body>
                                                {this.state.successUpload ?
                                                    <Table.Row onClick={() => {this.setState({isOpen:true})}}>
                                                        <Table.Cell><Header as="h4" content="1" /></Table.Cell>
                                                        <Table.Cell>피부 발진</Table.Cell>
                                                        <Table.Cell>{this.state.isClicked ? "처리완료" : "처리중"}</Table.Cell>
                                                    </Table.Row>
                                                    :
                                                    <></>
                                                }
                                                
                                            </Table.Body>
                                        </Table>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Row>
                    </Grid>
                    <Modal
                        closeIcon
                        open={this.state.isOpen}
                        key={"Reservation.number"}
                        onClose={() => this.setState({ isOpen: false })}
                        onOpen={() => this.setState({ isOpen: true })}
                    >
                        <Header icon='archive' content='답변' />
                        <Modal.Content>
                            <p>
                                접촉성 피부염이 의심됩니다. 스테로이드 연고 처방이 필요합니다. 가까운 시일 내로 국군수도병원 피부과를 방문해주세요. <br />
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='red' onClick={() => this.setState({ isOpen: false })}>
                                <Icon name='remove' /> 확인
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Segment>
            </HeaderTemplate>
            
            
        )
    }
}

let mapStateToProps = (state) => {
    return {
        selectDoctorName: state.doctor.selectDoctorName,
        isLogin:state.user.isLogin
    };
}
Mypage = connect(mapStateToProps)(Mypage);

export default withRouter(Mypage);