import React, { Component } from 'react'
import { Grid, Segment, List, Header, Table, Icon} from 'semantic-ui-react'
import HeaderTemplate from "../Template/Header"
import thumbnail from "../../images/thumbnail.jpeg"
class Mypage extends Component {

    state={
        banerInformation:{
            title:"마이페이지",
            subTitle:null,
            isMain:false,
            //banerImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQznb5ExwUrelpSWcGeXQtU2Z-sUOcSKzkrog&usqp=CAU",

        },
    }
    render(){
        return (
            <HeaderTemplate banerInformation={this.state.banerInformation}>
                <Segment>
                    <Grid container stackable style={{ paddingTop: "2em" }}>
                        <Grid.Row>
                            {/* <Grid.Column width={1}>
                                navigation
                            </Grid.Column> */}
                            <Grid.Column>
                                <Grid.Row>
                                    <Header
                                        style={{ paddingBottom: '1.5em'}}
                                        as='h2'
                                        content='내 정보'
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
                            <Grid.Row style={{display:"flex", marginLeft:"2.5em", marginTop:"1em"}}>
                                <Header as="h3" content="상담하기" onClick={()=>{console.log("ssss")}}/><Icon name="triangle down"></Icon>
                            </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={10} style={{ marginLeft: "2em" }}>
                                        <Table basic='very'>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell><Header as="h4" content="1" /></Table.Cell>
                                                    <Table.Cell>배가..배가...레이서!</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><Header as="h4" content="2" /></Table.Cell>
                                                    <Table.Cell>손바닥에 무좀이 생겼어요</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><Header as="h4" content="3" /></Table.Cell>
                                                    <Table.Cell>탈모인가봐요</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><Header as="h4" content="4" /></Table.Cell>
                                                    <Table.Cell>목도붓고 피나는 입몸병엔 이가탄</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </HeaderTemplate>
            
            
        )
    }
}


export default Mypage;