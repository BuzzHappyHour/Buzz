import React from 'react';

class BarList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="BarListItem">
        {console.log(this.props.bar.attributes)}
        <h3 className="BarNameHeader">{this.props.bar.name}</h3> <h3 className="HappyHourHeader">Happy Hours: {this.props.bar.happyHours}</h3>
        {
          this.props.bar.attributes.map(attribute => <p className="AttributeLabel">{attribute}</p>)
        }
      </div>
    );
  }
}


export default BarList;
