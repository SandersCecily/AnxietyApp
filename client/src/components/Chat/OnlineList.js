import React, { Component } from 'react'

class WhosOnlineList extends Component {
render(){
  if (this.props.users){
    return (
      <ul>
        {this.props.users.map((user, index)=> {
          return <li>{user.name} ({user.prescence.state})</li>
        })}
      </ul>
    )
  }
  else {
    return (
      <p>Loading</p>
    )
  }
}
}

export default WhosOnlineList;