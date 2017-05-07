import React from 'react';

class BarList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="BarListItem">
        <h3>Name: {this.props.bar.name}</h3> <h3>Happy Hours: {this.props.bar.happyHours}</h3> 
      </div>
    );
  }
}

export default BarList;
