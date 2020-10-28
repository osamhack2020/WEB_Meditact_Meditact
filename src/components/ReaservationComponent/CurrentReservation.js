import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Grid, Segment, Image, Header, List, Button,Icon, Modal, TextArea, Form} from 'semantic-ui-react'

class CurrentReservation extends Component{
    state ={
        careerListSrc:null,
        paperListSrc:null,
        timeListSrc:null,
        isOpen:false,
        reservationTime:["09:00 ~ 10:00", "10:00 ~ 11:00", "11:00 ~ 12:00", "13:00 ~ 14:00", "14:00 ~ 15:00", "15:00 ~ 16:00"],
        reservationInfo:{},
        description:"",
    }
    makeList = ()=>{
        const careers = this.props.selectedDoctor.career.map(
            (career) => 
                <List.Item>{career}</List.Item>
        )
        const papers = this.props.selectedDoctor.paper.map(
            (paper)=>
                <List.Item>{paper}</List.Item>
        )
        const reservationTimeButton = this.state.reservationTime.map(
            (time) => 
                <Button style={{paddingLeft:"2em"}}>
                    {time}
                </Button>
        )
        this.setState({
            careerListSrc:careers,
            paperListSrc:papers,
            timeListSrc:reservationTimeButton,
        })
    }

    clickReservationBtn = (time)=>{
        
        this.setState({
            reservationInfo:{
                name:"user.name",
                doctorName:this.props.selectedDoctor.name,
                time:time,
                description:""
            },
            isOpen:true,
        })
    }
    componentDidMount(){
        this.makeList()
    }
    handleChange(e){
        this.setState({description:e.target.value})
    }
    render(){
        return(
            <Segment>
                <Grid container stackable style={{paddingTop:"2em", minHeight: "52.3em"}}>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Image src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg" fluid></Image>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header 
                                style={{paddingBottom:'1.5em'}}
                                as='h2'
                                content={this.props.selectedDoctor.name}
                            />
                            <div style={{display:"flex"}}>
                                <div>
                                    <Header 
                                        as='h4' 
                                        color='black'
                                        content="진료과"
                                    />
                                </div>
                                <div>
                                    <Header 
                                        style={{paddingLeft:"0.6em"}}
                                        as='h4' 
                                        color='grey'
                                        content={this.props.selectedDoctor.medicalField}
                                    />
                                </div>
                            </div>
                            <div style={{paddingTop:"1em"}}>
                                <div>
                                    <Header 
                                        as='h4' 
                                        color='black'
                                        content="경력 / 학력"
                                    />
                                </div>
                                <div>
                                    {this.state.careerListSrc}
                                </div>
                            </div>
                            <div style={{paddingTop:"1em"}}>
                                <div>
                                    <Header 
                                        as='h4' 
                                        color='black'
                                        content="주요논문 / 저서"
                                    />
                                </div>
                                <div>
                                    {this.state.paperListSrc}
                                </div>
                            </div>

                                
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Form size={"small"} style={{width:"70em"}}>
                            <TextArea 
                                placeholder='증상을 작성하세요.' 
                                value={this.state.description} 
                                onChange={(e) => this.handleChange(e, "Email")} />
                            <Header
                                style={{ paddingLeft: "0.6em" }}
                                as='h4'
                                color='black'
                                content="증상을 입력한 뒤 원하는 시간이 적힌 버튼을 클릭하세요"
                            />
                        </Form>
                    </Grid.Row>

                    <Grid.Row verticalAlign={"middle"}>
                        <Grid columns={2} padded width={2}>

                            {this.state.reservationTime.map((time) => (
                                <Grid.Column key={time}>
                                    <div style={{ display: "flex" }}>
                                        <Button content={time} onClick={()=>this.clickReservationBtn(time)}>{time}</Button>
                                        <Header style={{ paddingLeft: "0.6em" }} as='h4' color='grey' content={"0/4"} />
                                    </div>
                                </Grid.Column>
                            ))}
                        </Grid>
                    </Grid.Row>
                </Grid>
                <Modal
                    closeIcon
                    open={this.state.isOpen}
                    onClose={() => this.setState({ isOpen: false })}
                    onOpen={() => this.setState({ isOpen: true })}
                >
                    <Header icon='archive' content='마지막으로 확인해주세요!' />
                    <Modal.Content>
                        <p>
                            예약시간 : {this.state.reservationInfo.time} / 담당 군의관 : {this.state.reservationInfo.doctorName}<br />
                            증상 : {this.state.description}<br />
                            맞으면 Yes 틀리면 No를 클릭해주세요.
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => this.setState({ isOpen: false })}>
                            <Icon name='remove' /> No
                        </Button>
                        <Button color='green' onClick={() => {this.setState({ isOpen: false });alert("에약을 등록했습니다.")
}}>
                            <Icon name='checkmark' /> Yes
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
        )
    }
}
export default CurrentReservation;