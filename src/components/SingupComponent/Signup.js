import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
class Signup extends Component{
  state = {
    inputEmail : "",
    inputPassword : "",
    inputName:"",
    inputAge:"",
    inputHeight:"",
    inputWeight:"",
  }
  onTryLogin = () => {
    fetch("https://kshired.com/api/user",{
      method: "POST",
      body: JSON.stringify({
        "user":{
          "username":this.state.inputName,
          "email":this.state.inputEmail,
          "role":"User",
          "password":this.state.inputPassword,
        }
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .then((res)=>{
        console.log(res);
        document.location.href = "/"
      })

  }
  handleChange = (e, input)=>{
    const inputVal = "input"+input;
    this.setState({
        [inputVal]:e.target.value,
    })
  }
  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> 계정을 생성하세요!
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='E-mail address' 
                value={this.state.inputEmail} 
                onChange={(e) => this.handleChange(e, "Email")}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.inputPassword}
                onChange = {(e) => this.handleChange(e, "Password")}
              />
                <Form.Input
                fluid
                placeholder='Your name'
                value={this.state.inputName}
                onChange = {(e) => this.handleChange(e, "Name")}
              />
                <Form.Input
                fluid
                placeholder='Your age'
                value={this.state.inputAge}
                onChange = {(e) => this.handleChange(e, "Age")}
              />
              <Form.Input
                fluid
                placeholder='Your height'
                value={this.state.inputHeight}
                onChange = {(e) => this.handleChange(e, "Height")}
              />
              <Form.Input
                fluid
                placeholder='Your weight'
                value={this.state.inputWeight}
                onChange = {(e) => this.handleChange(e, "Weight")}
              />
              <Button color='teal' fluid size='large' onClick={this.onTryLogin}>
                SignUp
            </Button>
            </Segment>
          </Form>
          <Message>
            이미 가입되어 있나요? <a href='#'>Sign In</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}



export default Signup