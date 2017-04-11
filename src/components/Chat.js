import React, { Component } from 'react';


class Chat extends Component {

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
     firebase.database().ref("messages/").on('value',(snapshot)=>{
    const currentMessage = snapshot.val() 
   if (currentMessage!=null) {
         this.setState({
         	// console.log('works fine')
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
		id:this.state.message.length,
		text:this.state.message
	}
var list=Object.assign([],this.state.messages)

list.push(postMessage)
this.setState({
	messages:list
})

}

render(){
	const currentMessage=this.state.messages.map((message,i)=>{
		return (
<li key={message.id}>{message.text}</li>
			)
	})



    return (
      <div >
      <ol>
      {currentMessage}
      
      </ol>
          <h2>this is chat components</h2>
          <input onChange={this.update} type="text" placeholder="Message"/>
          <br />
          <button onClick={this.submit}>Submit Message</button>
           </ div >
       
      
    );
  }
}

export default Chat;
