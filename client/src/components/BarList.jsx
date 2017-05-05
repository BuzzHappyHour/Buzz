import React from 'react';

class BarList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div><h4>Name: </h4>{this.props.bar.name} <h4>Happy Hours: </h4> {this.props.bar.happyHours}</div>
    );
  }
}

export default BarList;