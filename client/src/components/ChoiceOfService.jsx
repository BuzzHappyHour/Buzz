import React from 'react';

class ChoiceOfService extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="ButtonsDiv">
      <button className="HappyHourButton" value="Happy Hours" type="submit" onClick={(e)=> this.props.handleChoiceOfService(e.target.value)}>Happy Hour</button>
      <button className="VibesButton" value="Vibes" type="submit" onClick={(e)=> this.props.handleChoiceOfService(e.target.value)}>Vibes</button>
      </div>
    );
  }
}

export default ChoiceOfService;
