import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {registerSuccess} from "../../actions";

class Login extends Component{
  state = {
    inputEmail : "",
    inputPassword : "",
    history:null,
  }
  componentDidMount(){
    const { history } = this.props;
    this.setState({history:history});
  }
  onTryLogin = () => {
    fetch("https://kshired.com/api/users/login",{
      method: "POST",
      body: JSON.stringify({
        "user":{
          "email":this.state.inputEmail,
          "password":this.state.inputPassword,
          
        }
      }),
      headers: {
        "Content-Type": "application/json",
      },
      
    })
      .then(res => res.json())
      .then((res)=>{
        console.log(res.user)
        this.props.SuccessLogin({
          "email":this.state.inputEmail,
          "password":this.state.inputPassword,
          "role": res.user.role,
          "token":res.user.token,
        })
        this.props.history.push("/")
      })

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
            New to us? <a href='/signup'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
      SuccessLogin:(userInfo) => dispatch(registerSuccess(userInfo))
  }
}

Login = connect(null, mapDispatchToProps)(Login);



export default withRouter(Login);