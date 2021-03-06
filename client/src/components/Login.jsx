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
            <div className="Label">Login <div className="xButton" onClick={()=> this.props.handleXClick()}>X</div></div>
            <input type="text" name="username" className="Username" placeholder="Enter Username" onChange={(e) => this.setState({ username: e.target.value})}/>
            <input type="password" name="password" className="Password" placeholder="Enter Password"　onChange={(e) => this.setState({ password: e.target.value})}/>
            <input type="submit" className="Submit" value="Login" onClick={() => this.props.loginUser(this.state)}/>
          </div>
          {
            this.props.loginErrors ?
              <p className="loginErrors">
                {this.props.loginErrors}
              </p> :
              null
          }
        </div>
      </div>
    );
  }
}

export default Login;
