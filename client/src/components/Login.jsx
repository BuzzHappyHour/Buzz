import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      clickedSignup: false
    }
  }


  render() {
    return (
      <div id="login-container">
        <div id="login-box">
          <div>
            <input type="text" name="username" placeholder="Enter Username" onChange={(e) => this.setState({ username: e.target.value})}/>
            <input type="password" name="password" placeholder="Enter Password"　onChange={(e) => this.setState({ password: e.target.value})}/>
            <input type="submit" value="Login" onClick={() => this.props.loginUser(this.state)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
