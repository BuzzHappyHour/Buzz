import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="HoodSelectionDiv">
        <h2>{this.prop}</h2>
      </div>
    );
  }
}

export default Header;