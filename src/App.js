import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 
{ 
  MainPage,
  LoginPage,
  ReservationPage

} from './pages/index';


const App = ()=>(
  <div>
    <Route exact path="/" component={MainPage}/>
    <Route exact path="/login" component={LoginPage}/>
    <Route exact path="/reservation" component={ReservationPage}/>
  </div>
)


export default App;