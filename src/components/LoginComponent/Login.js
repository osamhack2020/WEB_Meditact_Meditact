import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends Component{
  state = {
    inputEmail : "",
    inputPassword : "",
  }
  onTryLogin = () => {
    fetch("https://kshired.com/api/user",{
      method: "POST",
      body: JSON.stringify({
        "user":{
          "username":"test1",
          "email":this.state.inputEmail,
          "role":"admin",
          "password":this.state.inputPassword,
        }
      })
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }
  handleChange = (e, name)=>{
    name == "email" ? this.setState({inputEmail:e.target.value}) : this.setState({inputPassword:e.target.value})
  }
  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='E-mail address' 
                value={this.state.inputEmail} 
                onChange={(e) => this.handleChange(e, "email")}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.inputPassword}
                onChange = {(e) => this.handleChange(e, "password")}
              />

              <Button color='teal' fluid size='large' onClick={this.onTryLogin}>
                Login
            </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}



export default Login