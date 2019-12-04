import React from 'react';
import Navbar from './Navbar';

export default class Join extends React.Component {
  constructor(props) {
    super(props);
    let loggedIn =false
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
    this.state = {
        userName: '',
        password: '',
        loggedIn
    };

  }

  handleUserChange(e){
    this.setState({userName: e.target.value});
  }
  handlePasswordChange(e){
      this.setState({password: e.target.value});
  }

  handleLogin(e) {
    e.preventDefault();

    const user = {
        userName: this.state.userName,
        password:this.state.password
    }
    console.log(user)
  }

  render() {
    return (
      <div>
          <Navbar />
          <div className="sign-up">
          <div className="explan">
              <h4 className="explan1">Welcome!</h4>
              <p className="explan1">Log in and have a look through our countless certified sitters.</p>
          </div>
          <form className="wrapper">
              <p>Username:</p>
              <input type="text" name="userName" value={this.state.userName} onChange={this.handleUserChange} />
              <p>Password:</p>
              <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
              <button onClick={e => this.handleLogin(e)} type="button">Log in</button>
          </form>
          </div>
      </div>
    );
  }
}