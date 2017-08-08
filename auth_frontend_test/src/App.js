import React, { Component } from 'react';
import logo from './portrait2.png';
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      uid: null
    };

  };
  checkUserAuth(userStatus) {
    if (userStatus.uid === null) {
      return(
        <form>
            Email Address: <br/>
            <input type="text" name="email_address"/><br/>
            Password: <br/>
            <input type="password" name="password"/><br/>
            <input type="submit"/>
        </form>
      )
    } else {
      
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          { this.checkUserAuth(this.state) }
        </div>
      </div>
    );
  }
}

export default App;
