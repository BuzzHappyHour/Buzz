import React from 'react';

class HappyHourList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="BarListItem">
        {console.log('hh', this.props.bar)}
        <h3 className="BarNameHeader" onClick={(e)=> this.props.userID !== '' ? this.props.addUserFave({userID: this.props.userID, barID: this.props.bar.id}) : null}>{this.props.bar.name}</h3>
        <p>{this.props.bar.location}</p>
        <p className="HappyHourHeader">Happy Hour: {this.props.bar.start}-{this.props.bar.end}</p>
        {
          this.props.bar.attributes.map(attribute => <p className="AttributeLabel">{attribute}</p>)
        }
      </div>
    );
  }
}


export default HappyHourList;
