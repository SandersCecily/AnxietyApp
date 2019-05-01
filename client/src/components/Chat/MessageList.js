import React, { Component } from 'react'

 class MessagesList extends Component {
   render() {
     return (
       <div>
         <ul >
           {this.props.messages.map((message, index) => (
             <li key={index}>
               <div>
                 <span>{message.senderId}</span>{' '}
               </div>
               <p>{message.text}</p>
             </li>
           ))}
         </ul>
       </div>
     )
   }
 }

 export default MessagesList;
