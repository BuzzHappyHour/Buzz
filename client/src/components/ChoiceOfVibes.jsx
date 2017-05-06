import React from 'react';

class ChoiceOfVibes extends React.Component {
  constructor(props){
    super(props)

    this.state = {};
  }

  render() {
    return (
      <div className="VibesButtonsContainer">
        <button>Basic</button>
        <button>Bougie</button>
        <button>Clubby</button>
        <button>Divey</button>
        <button>Hip</button>
        <button>Sporty</button>
      </div>
    )
  }
}

export default ChoiceOfVibes;
