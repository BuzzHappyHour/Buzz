import React from 'react';

class VibesMatchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }


  render() {
    return (
      <div className="BarListItem">
        {console.log('bar: ',this.props.bar)}
        <h3 className="BarNameHeader" onClick={(e)=> this.props.userID !== '' ? this.props.addUserFave({userID: this.props.userID, barID: this.props.bar.id}) : null}>{this.props.bar.name}</h3>
        <p>{this.props.bar.location}</p>
        {
          this.props.bar.attributes.map(attribute => <p className="AttributeLabel">{attribute}</p>)
        }
      </div>
    );
  }
}

export default VibesMatchList;
