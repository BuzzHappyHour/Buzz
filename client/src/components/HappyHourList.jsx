import React from 'react';

class HappyHourList extends React.Component {
  constructor(props) {
    super(props);

    this.convertTime = this.convertTime.bind(this);
    this.happyHourIsNow = this.happyHourIsNow.bind(this);
    }


  convertTime (time) {
    if(time <= 0) {
      return time;
    }
    if(time >= 1300) {
      console.log('infunc', time - 1200)
      time = time - 1200;

    }
    time = time.toString();
    if(time.length === 3) {
      console.log(time[0] + ':' + time[1] + time[2])
      time = time[0] + ':' + time[1] + time[2];
    } else if (time.length === 4){
      time = time[0] + time[1] + ':' + time[2] + time[3];
    }
    return time;
  }

  happyHourIsNow(startTime, endTime) {
        var time = new Date();
        var hrs = time.getHours();
        var mins = time.getMinutes();
        var currentTime = hrs.toString() + mins.toString();
        currentTime = Number(currentTime);

        if(currentTime >= startTime && currentTime <= endTime) {
          return true;
        }
        return false;

  }

  render() {

    var startTime = this.convertTime(this.props.bar.start);
    var endTime  = this.convertTime(this.props.bar.end);
    if(startTime <= 0) {
      var happyHourTimes = 'None';
    } else {
      var happyHourTimes = startTime + ' - ' + endTime;
    }
    if(this.happyHourIsNow(this.props.bar.start, this.props.bar.end)) {
      var nowString = 'NOW';
    } else {
      var nowString = '';
    }
    return (

      <div className="BarListItem">

        <h3 className="BarNameHeader">{this.props.bar.name}</h3>
        <p>{this.props.bar.location}</p>
        <div className="cont">
        <p className="HappyHourHeader">Happy Hour: {happyHourTimes}</p>
        <p className="now">{nowString}</p>
        </div>
        {
          this.props.bar.attributes.map(attribute => <p className="AttributeLabel">{attribute}</p>)
        }
      </div>
    );
  }
}


export default HappyHourList;
