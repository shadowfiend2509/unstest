import React, { useEffect } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import Signin from '../Signin/Signin';
import DashBoard from '../DashBoard/DashBoard';

export default () => {
  const history = useHistory();


  useEffect( () => {
    if(localStorage.getItem('email') && localStorage.getItem('email') === 'test@unsircle.com') history.push('/home');
    else { localStorage.removeItem('email'); history.push('/')}
  }, [])
  
  return(
    <Switch>
      <Route path='/' exact component={ Signin } />
      <Route path='/home' component={ DashBoard } />
    </Switch>
  )
}