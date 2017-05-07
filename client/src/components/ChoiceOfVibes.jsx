import React from 'react';

class ChoiceOfVibes extends React.Component {
  constructor(props){
    super(props)

    this.state = {};
  }

  render() {
    return (
      <div className="VibesButtonsContainer">
        <button className="VibesChoiceButton" value="Basic" type="submit"
          onClick={(e)=> this.props.handleChoiceOfVibes(e.target.value)}>Basic</button>
        <button className="VibesChoiceButton" value="Bougie" type="submit"
          onClick={(e)=> this.props.handleChoiceOfVibes(e.target.value)}>Bougie</button>
        <button className="VibesChoiceButton" value="Clubby" type="submit"
          onClick={(e)=> this.props.handleChoiceOfVibes(e.target.value)}>Clubby</button>
        <button className="VibesChoiceButton" value="Divey" type="submit"
          onClick={(e)=> this.props.handleChoiceOfVibes(e.target.value)}>Divey</button>
        <button className="VibesChoiceButton" value="Hip" type="submit"
          onClick={(e)=> this.props.handleChoiceOfVibes(e.target.value)}>Hip</button>
        <button className="VibesChoiceButton" value="Sporty" type="submit"
          onClick={(e)=> this.props.handleChoiceOfVibes(e.target.value)}>Sporty</button>
      </div>
    )
  }
}

export default ChoiceOfVibes;
