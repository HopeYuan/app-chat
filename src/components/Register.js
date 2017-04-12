import React, { Component } from 'react'
import { auth } from '../helpers/auth'



export default class Register extends Component {
  
  render () {
    return (
     <div >
          <h1>Login</h1>
         <form >
         <div>
         <label>Email</label>
          <input className="form-control" type="Email"/>
         </div>


         <div>
         <label>Password</label>
          <input className="form-control" type="Password"/>
         </div>

  <button type="submit" className="btn btn-primary" >Login</button>
  </form>

      </div>
    )
  }
}
