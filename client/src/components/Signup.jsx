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
            <div className="Label">Signup <div className="xButton" onClick={()=> this.props.handleXClick()}>X</div></div> 
            <input type="text" name="username" className="Username" placeholder="Enter Username" onChange={(e) => this.setState({ username: e.target.value})}/>
            <input type="password" name="password" className="Password" placeholder="Enter Password" onChange={(e) => this.setState({ password: e.target.value})}/>
            <input type="submit" className="Submit" value="Submit" onClick={() => this.props.signupUsers(this.state)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
