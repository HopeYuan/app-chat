import React, { Component } from 'react'
import { auth } from '../helpers/auth'


function setError(error){
	return{
		registermessage:error
	}
}

export default class Register extends Component {
  
state={registermessage:null}

	submitregister=(e)=> {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e=>this.setState(setError(e)))
        }
  


  render () {
    return (
     <div >
          <h1>Register</h1>
         <form onSubmit={this.submitregister}>
         <div>
         <label>Email</label>
          <input className="form-control" type="Email" ref={(email) => this.email = email}  s/>
         </div>


         <div>
         <label>Password</label>
          <input className="form-control" type="Password" ref={(pw) => this.pw = pw}/>
         </div>

  <button type="submit" className="btn btn-primary" >Register</button>
  </form>

      </div>
    )
  }
}
