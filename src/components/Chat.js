import React, { Component } from 'react';
import * as firebase from "firebase";



var config = {
    apiKey: "AIzaSyBDU3xAqFKKvXEK214v2jHWQqiUmtyDvsw",
    authDomain: "chat-app-6dd10.firebaseapp.com",
    databaseURL: "https://chat-app-6dd10.firebaseio.com",
    projectId: "chat-app-6dd10",
    storageBucket: "chat-app-6dd10.appspot.com",
    messagingSenderId: "340553487629"
  };
  firebase.initializeApp(config);

class Chat extends Component {




constructor(props,context){

	super(props,context)
	this.update=this.update.bind(this)
	this.submit=this.submit.bind(this)
	this.state={
  message: ' ',
		messages:[
    {id:0,text:'first message'}
		]
	}
}

  componentDidMount(){
	console.log('componentDidMount')
     firebase.database().ref('messages/').on('value', (snapshot)=>{
    const currentMessage  = snapshot.val()
   if (currentMessage != null) {
         this.setState({
   
	      messages:currentMessage
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
// 	messages:list
// })

}

render(){
	const currentMessage=this.state.messages.map((message,i)=>{
		return (
<li key={message.id}>{message.text}</li>
			)
	})



    return (
      <div >
      <ul>
      {currentMessage}
      
      </ul>
          
          <input onChange={this.update} type="text" placeholder="Message"/>
          <br />
          <button onClick={this.submit}>Post</button>
           </ div >
       
      
    );
  }
}

export default Chat;
