import React from 'react';

class ChoiceOfService extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <button value="Happy Hours" type="submt" onClick={(e)=> this.props.handleChoiceOfService(e.target.value)}>Happy Hour</button>
      <button value="Vibes" type="submt" onClick={(e)=> this.props.handleChoiceOfService(e.target.value)}>Vibes</button>
      </div>
    );
  }
}

export default ChoiceOfService;