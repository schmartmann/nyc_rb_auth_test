import React, { Component } from 'react';
import logo from './portrait2.png';
import './App.css';
import Auth from 'j-toker'

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      uid: null,
      email: "Enter your email here!",
      password: "",
    };

    Auth.configure({ apiUrl: "http://localhost:5000"})

    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  changeHandler(e) {
    if(e.target.name === "email_address"){
      this.setState({email: e.target.value});
    } else if (e.target.name === "password") {
      this.setState({password: e.target.value});
    }
  };
  handleSubmit(e) {
    e.preventDefault();
    Auth.emailSignIn({
      email: this.state.email, 
      password: this.state.password,
    }).then( user => {
      console.log(user)
      this.setState({ uid: user.uid })
    });
  };
  checkUserAuth(uid) {
    if (uid === null) {
      return(
        <form onSubmit={ this.handleSubmit }>
            Email Address: <br/>
            <input 
              type="text" 
              name="email_address" 
              value={ this.state.email } 
              onChange={ this.changeHandler }/><br/>
            Password: <br/>
            <input 
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.changeHandler}/><br/>
            <button 
              type="submit">
              Submit
            </button>
        </form>
      )
    } else {
      return (
        <div>
          <h3>I'm in.</h3>
          <iframe 
            width="853" 
            height="480" 
            src="https://www.youtube.com/embed/gXUVqLxNI6c?start=7&autoplay=1" 
            frameBorder="0" 
            title="Successfully Authorized"
            allowFullScreen>
          </iframe>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React + Rails Token Based Auth</h2>
        </div>
        <div>
          { this.checkUserAuth(this.state.uid) }
        </div>
      </div>
    );
  }
}

export default App;
