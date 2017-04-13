import React, { Component } from 'react'
import { auth } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div >
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
         <label>Email</label>
          <input className="form-control" placeholder="Email" ref={(email)=>this.email=email}/>
         </div>


         <div>
         <label>Password</label>
          <input className="form-control" type="Password" ref={(pw)=>this.pw=pw}/>
         </div>

  <button type="submit" className="post-button" >Register</button>
  </form>

      </div>
    )
  }
}
