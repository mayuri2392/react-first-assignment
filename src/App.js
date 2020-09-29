import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username : "Mayuri"
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username : event.target.value 
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput username = {this.state.username}/>
        <UserInput username = {this.state.username} change = {this.usernameChangeHandler}/>
      </div>
    );
  }
}

export default App;
