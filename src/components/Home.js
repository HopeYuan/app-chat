import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import firebase from 'firebase'
import  firebasecf from '../config/firebasecf'





 

class Home extends Component {




constructor(props,context){

  super(props,context)
  this.update=this.update.bind(this)
  this.submit=this.submit.bind(this)
  this.state={
  message: ' ',
    messages:[
   
    ]
  }
}

  componentDidMount(){
  console.log('componentDidMount')
     firebase.database().ref('messages/').on('value', (snapshot)=>{
    const messages  = snapshot.val()
   if (messages != null) {
         this.setState({
   
        messages:messages
         })
      }
   })
}



update(event){
  console.log('update :'+event.target.value)
  this.setState({

  message:event.target.value

  })
}

submit(event){
  console.log('Submit message :  '+this.state.message)
  const postMessage={
    id:this.state.messages.length,
    text:this.state.message
  }


    firebase.database().ref('messages/'+postMessage.id).set(postMessage)
// var list=Object.assign([],this.state.messages)
 
// list.push(postMessage)
// this.setState({
//  messages:list
// })

}

render() {
    const messages = Object.keys(this.state.messages).map((key) => {
        return (
            <li key={key}>{this.state.messages[key].text}</li>
        )
    })



    return (
    
      <div className="panel panel-default post" >
       <pre>        You can chat in this page</pre>
      <ul >
      {messages}
      
      </ul>
          
          <input className="post-input" onChange={this.update} type="text" placeholder="Message"/>
          <br />
          <button className="post-button" onClick={this.submit}>Post</button>
           </ div >
       
      
    );
  }
}

export default Home;
