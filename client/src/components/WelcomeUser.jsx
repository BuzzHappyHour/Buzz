import React from 'react';

class WelcomeUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      
        <div>Welcome {this.props.user}</div>
    );
  }
}

export default WelcomeUser;