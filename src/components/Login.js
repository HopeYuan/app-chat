import React, { Component } from 'react'

import { login } from '../helpers/auth'
import firebase from 'firebase'
function setError(error){
	return{
		loginmessage:error
	}
}

export default class Login extends Component {

	state={loginmessage:null}

	submitlogin=(e)=> {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setError('Invalid username or password.'))
        })
  }
 
  render () {
    return (
      <div >
          <h1>Login</h1>
         <form >
         <div>
         <label>Email</label>
          <input className="form-control" placeholder="Email" ref={(email)=>this.email=email}/>
         </div>


         <div>
         <label>Password</label>
          <input className="form-control" type="Password" ref={(pw)=>this.pw=pw}/>
         </div>

  <button type="submit" className="btn btn-primary" >Login</button>
  </form>

      </div>
      
    )
  }
}
