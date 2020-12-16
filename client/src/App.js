import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import LoginForm from './components/loginForm/LoginForm';
import './App.css';



const App = () => {;

  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/login' exact component={LoginForm}/>
    </Switch>
  )
}

export default App;
