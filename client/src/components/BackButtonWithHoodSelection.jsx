import React from 'react';

class BackButton extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
        <div className="HoodSelectionDiv">
          {console.log(this.state)}
          <h1 className="BackButton" onClick={(e)=> {this.props.handleBackButtonClick()}}>◄</h1>
          <h1 className="HoodLabel">   {this.props.hood}</h1>
        </div>

    )
  }
}

export default BackButton;
