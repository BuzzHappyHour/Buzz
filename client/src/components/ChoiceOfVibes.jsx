import React from 'react';

class ChoiceOfVibes extends React.Component {
  constructor(props){
    super(props)

    this.state = {};
  }

  render() {
    return (
      <div className="VibesButtonsContainer">
        <button className="VibesChoiceButton" value="Basic" type="submit">Basic</button>
        <button className="VibesChoiceButton" value="Bougie" type="submit">Bougie</button>
        <button className="VibesChoiceButton" value="Clubby" type="submit">Clubby</button>
        <button className="VibesChoiceButton" value="Divey" type="submit">Divey</button>
        <button className="VibesChoiceButton" value="Hip" type="submit">Hip</button>
        <button className="VibesChoiceButton" value="Sporty" type="submit">Sporty</button>
      </div>
    )
  }
}

export default ChoiceOfVibes;
