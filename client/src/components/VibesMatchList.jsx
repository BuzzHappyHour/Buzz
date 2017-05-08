import React from 'react';

class VibesMatchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }


  render() {
    return (
      <div className="VibeMatchList">
        <h3>Name: {this.props.bar.name}</h3>
      </div>
    );
  }
}

export default VibesMatchList;