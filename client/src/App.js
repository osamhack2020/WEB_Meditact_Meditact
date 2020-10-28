import React,{Component} from 'react';
import { Route, Switch,  } from 'react-router-dom';
import { connect } from 'react-redux';


import 
{ 
  MainPage,
  LoginPage,
  ReservationPage,
  ChatBotPage,
  MypagePage,
  SignupPage,
  InformationPage,

} from './pages/index';




class App extends Component{

  render(){
    return (
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/reservation" component={ReservationPage}/>
        <Route exact path="/chatbot" component={ChatBotPage} />
        <Route exact path="/mypage" component={MypagePage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/information" component={InformationPage} />
      </div>
    )
  }
}
// user객체 가져와서 id로 url 구분하기
let mapStateToProps = (state) => {
  return {
      isLogin: state.user.isLogin
  };
}
App = connect(mapStateToProps)(App);


export default App;