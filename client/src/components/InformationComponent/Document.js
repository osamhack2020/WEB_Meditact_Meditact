import React, {Component} from 'react'
import HeaderTemplate from "../Template/Header"
import { Grid, Segment,  Header, Dropdown, Icon, GridRow, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import cheerio from "cheerio";
import axios from "axios";

class Document extends Component{
    state={
        isLogin:false,
        banerInformation:{
            title:"병원정보안내",
            subTitle:null,
            isMain:false,
          },
        }
    constructor(props){
        super(props);
        let $href = [];
        // axios.get(`https://afmd.mnd.go.kr/mbshome/mbs/afmd/subview.jsp?id=afmd_030500000000`)
        //     .then(html => {
        //         const $ = cheerio.load(html.data);
        //         const $bodyList = $("wrap-contents");
        //         console.log($bodyList);
        //     });
        
    }
    loadPage(){

        
    }
    render(){
        return (
            <HeaderTemplate
                banerInformation={this.state.banerInformation}
                isLogin={this.state.isLogin}
            >
                <Segment>
                    <Grid container stackable style={{ paddingTop: "2em" ,minHeight:"100px"}}>
                        <Grid.Row>
                            <Grid.Column width={20}>
                                <Header
                                    style={{ paddingBottom: '1.5em' }}
                                    as='h2'
                                    content='예약하기'
                                />

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{minHeight:"50em"}}>
                            <Button.Group widths='5' width={20} style={{marginBottom:"30px"}}>
                                <Button fluid color='violet' onClick={()=>{window.open('https://afmd.mnd.go.kr/mbshome/mbs/afmd/subview.jsp?id=afmd_030500000000')}}>
                                    <Header as="h2" style={{color:"#ffffff"}}>서류발급 안내</Header>
                                </Button>
                                <Button fluid  style={{marginLeft:"1em"}} color='pink' onClick={()=>{window.open('https://afmd.mnd.go.kr/mbshome/mbs/afmd/subview.jsp?id=afmd_030601000000')}}>
                                <Header as="h2" style={{color:"#ffffff"}}>시설 안내</Header>
                                </Button>
                            </Button.Group>
                            <Button.Group widths='5'n width={20}>
                                <Button fluid color='teal' onClick={()=>{window.open('https://afmd.mnd.go.kr/mbshome/mbs/afmd/subview.jsp?id=afmd_030300000000')}}>
                                <Header as="h2" style={{color:"#ffffff"}}>건강검진 안내</Header>
                                </Button>
                                <Button fluid style={{marginLeft:"1em"}} color='red' onClick={()=>{window.open('https://afmd.mnd.go.kr/mbshome/mbs/afmd/subview.jsp?id=afmd_030700000000')}}>
                                <Header as="h2" style={{color:"#ffffff"}}>오시는 길</Header>
                                </Button>
                            </Button.Group>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </HeaderTemplate>
        )
    }
}
export default Document;