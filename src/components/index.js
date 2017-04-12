import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'

import { logout } from '../helpers/auth'
import { firebaseAuth } from '../helpers/auth'



function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/Home' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    
  }
   componentDidMount(){
   this.removelistener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          
        })
      } else {
        this.setState({
          authed: false,
         
        })
      }
    })
}

componentWillUnmout(){
    this.removelistener()
  }
  
  render() {
    return  (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">Chat App</Link>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <Link to="/" className="navbar-brand">Home</Link>
                </li>
                
                <li>
                 <Link to="/login" className="navbar-brand">Login</Link>
                </li>
                <li>
                   <Link to="/register" className="navbar-brand">Register</Link>
                </li>
                
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                 <Route render={() => <h3>Please input valid route!</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
