import React from 'react';
import { Route, Switch } from 'react-router-dom';
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




const App = ()=>(
  <div>
    <Route exact path="/" component={MainPage}/>
    <Route exact path="/login" component={LoginPage}/>
    <Route exact path="/reservation" component={ReservationPage}/>
    <Route exact path="/chatbot" component={ChatBotPage}/>
    <Route exact path="/mypage" component={MypagePage}/>
    <Route exact path="/signup" component={SignupPage}/>
    <Route exact path="/information" component={InformationPage}/>

  </div>
)


export default App;