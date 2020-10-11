import React, { Component } from 'react'
import { Grid, Segment, List, Header } from 'semantic-ui-react'

class Notice extends Component {
    state = {
        NoticesInformation:[
            {number:1, title:"이것은 테스트입니다라라라라라리리리용", uploadTime:"20/10/05",viewCount:10},
            {number:2, title:"test2",uploadTime:"20/10/05", viewCount:20},
            {number:2, title:"test3",uploadTime:"20/10/05", viewCount:20},
            {number:2, title:"test4",uploadTime:"20/10/05", viewCount:20},
            {number:2, title:"test5",uploadTime:"20/10/05", viewCount:20},
        ],
        listSrc:null,
        SetNoti:()=>{},
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const Notices = this.state.NoticesInformation.map(
            (NoticeInformation) => 
                <List.Item style={{display:"flex"}}>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content style={{display:"flex", paddingLeft:"1em"}}>
                        <List.Header>{NoticeInformation.uploadTime}</List.Header>
                        <List.Header style={{paddingLeft:"1.5em"}}>{NoticeInformation.title}</List.Header>
                    </List.Content>
                </List.Item>
        )
        this.setState({
            listSrc:Notices,
        })
        
    }
    render(){
        
        
        return (
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle' style={{paddingTop:"2em"}}>
                    <Grid.Row>
                        <Grid.Column width={20}>
                            <Header 
                                style={{paddingBottom:'1.5em'}}
                                as='h2'
                                content='공지사항'
                            />
                            <List divided relaxed>
                                {this.state.listSrc}
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
    
        );
    }
    
}


export default Notice;