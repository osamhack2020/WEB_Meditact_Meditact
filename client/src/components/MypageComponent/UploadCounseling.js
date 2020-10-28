import React, {Component} from 'react'
import { Button, Form, TextArea, Grid , Icon} from 'semantic-ui-react'

class UploadCounseling extends Component{
    state = {
        inputEmail : "",
        inputPassword : "",
    }
    onCounselingBtn(){

    }
    render(){
        return(
            <Grid style={{marginLeft:"1em"}}>
                <Grid.Row>
                    <Form size={"small"} style={{width:"70em"}}>
                        <TextArea placeholder='상담글을 작성하세요.' />
                        <input type="file" name="file" onChange={null}/>
                        <Button positive>상담하기  <Icon name="talk" style={{marginLeft:"4px"}}/></Button>
                    </Form>
                </Grid.Row>
            </Grid>

        )
    }
}

export default UploadCounseling;