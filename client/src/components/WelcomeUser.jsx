import React from 'react';

class WelcomeUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFaves: false
    };
  }

  render() {
    return (
      
        <div>
            <div>Welcome {this.props.user}</div>
            <div onClick={(e)=> this.setState({showFaves: !this.state.showFaves})}>Show Favorite Bars</div>
            {this.state.showFaves ? this.props.userBars.map(bar=> <p>{bar.name}</p>) : null}
        
        </div>
    );
  }
}

export default WelcomeUser;