import React from 'react';

class ListOfHoods extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="HoodNameDiv">
      <li className="HoodLI" onClick={(e)=> { this.props.handleChoice(this.props.neighborhood, this.props.neighborhoodID); this.props.getBasedOnNeighborhood(this.props.neighborhood); } }>{this.props.neighborhood}</li>
      </div>
    );
  }
}

export default ListOfHoods;
