import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      clickedLogin: false
    }
  }


  render() {
    return (
      <div id="signup-container">
        <div id="signup-box">
          <div>
            <input type="text" name="username" placeholder="Enter Username" onChange={(e) => this.setState({ username: e.target.value})}/>
            <input type="password" name="password" placeholder="Enter Password" onChange={(e) => this.setState({ password: e.target.value})}/>
            <input type="submit" value="Submit" onClick={() => this.props.signupUsers(this.state)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
