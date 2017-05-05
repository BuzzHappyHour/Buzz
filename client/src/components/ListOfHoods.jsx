import React from 'react';

class ListOfHoods extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li onClick={(e)=> this.props.handleChoice(this.props.neighborhood)}>{this.props.neighborhood}</li>
    );
  }
}

export default ListOfHoods;