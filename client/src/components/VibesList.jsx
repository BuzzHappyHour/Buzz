import React from 'react';

class VibesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      
        <button className="VibesChoiceButton" value="Basic" type="submit"
          onClick={(e)=> { this.props.handleChoiceOfVibes(this.props.category, this.props.categoryID); console.log('her:', this.props); } }>{this.props.category}</button>
    );
  }
}

export default VibesList;