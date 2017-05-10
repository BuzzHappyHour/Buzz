import React from 'react';
import ListOfHoods from './ListOfHoods.jsx';
import ChoiceOfService from './ChoiceOfService';
import ChoiceOfVibes from './ChoiceOfVibes';
import HappyHourList from './HappyHourList';
import Header from './Header';
import NoBarFound from './NoBarFound';
import VibesMatchList from './VibesMatchList';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhood: '',
      neighborhoodID: '',
      showChooseHood: true,
      showHappyHourList: false,
      showVibesList: false,
      showChoiceOfService: false,
      showVibesMatchList: false,
      neighborhoods: [{name: 'SOMA', id: 2}, {name: 'Tenderloin', id: 1}],
      happyHourOrAtts: '',
      choiceOfService: '',
      choiceOfVibe: '',
      vibeID: '',
      categories: [],
      neighborhoodBars: []

    };



    $.get('/categories', function(data) {
      this.setState({categories: data});
      console.log(this.state.categories);
    }.bind(this))
    .fail(function() {
      alert('error retrieving data');
    });


    this.handleNeighborhoodChoice = this.handleNeighborhoodChoice.bind(this);
    this.handleChoiceOfService = this.handleChoiceOfService.bind(this);
    this.handleChoiceOfVibes = this.handleChoiceOfVibes.bind(this);
    this.tester = this.tester.bind(this);

  }

  handleNeighborhoodChoice (hood, hoodID) {
    this.setState({neighborhood: hood, showChooseHood: false, showChoiceOfService: true, neighborhoodID: hoodID});
  }

  handleChoiceOfService (choice) {
    if(choice === 'Vibes') {
      this.setState({choiceOfService: choice, showVibesList: true, showChoiceOfService: false});
    } else {
      this.setState({choiceOfService: choice, showHappyHourList: true, showChoiceOfService: false});
    }
    console.log('choice is: ' , choice)
    console.log(this.state.neighborhood);
  }

  handleChoiceOfVibes (vibe, vibeid) {
    this.setState({choiceOfVibe: vibe, showVibesList: false, showVibesMatchList: true, vibeID: vibeid});
    console.log('neighborhood bars list:', this.state.neighborhoodBars);
  }


  tester (neighborhood) {
    $.get(`/${neighborhood}`, function(data) {
      var obj = {};
      var arr = [];
      data.forEach((item)=>{
        if (!obj[item.name]) {
          obj[item.name] = true;
        }
      });
      var newArr = Object.keys(obj).map(function(item) {
        var returnObj = {name: item};
        returnObj.attributes = [];
        returnObj.location = '';
        returnObj.start = '';
        returnObj.end = '';
        data.forEach(function(item2) {
          if (returnObj.name === item2.name) {
            returnObj.attributes.push(item2.attribute);
            if (!returnObj.location && !returnObj.start && !returnObj.end && !returnObj.category) {
              returnObj.location = item2.location;
              returnObj.start = item2.hhstart;
              returnObj.end = item2.hhend;
              returnObj.category = item2.category;
            }
          }
        });
        return returnObj;
      });
      this.setState({neighborhoodBars: newArr});

    }.bind(this))
    .fail(function() {
      alert('error retrieving data');
    });
  }





  render () {
    return (
    <div>
      <div className="HeaderDiv">
        <h1 className="BuzzHeader" onClick={()=> window.location.reload()}>Buzz</h1>
      </div>
      {this.state.showChooseHood ?

        <div className="HoodSelectionDiv"><h2>Choose a neighborhood</h2></div> :
          <div className="HoodSelectionDiv"><h2>{this.state.neighborhood}</h2></div>


      }

      { this.state.showChooseHood ? this.state.neighborhoods.map(hood =>
         <ListOfHoods neighborhood={hood.name} neighborhoodID={hood.id} tester={this.tester} handleChoice={this.handleNeighborhoodChoice}/>
       )
       : null }

       {
         this.state.showChoiceOfService ? <ChoiceOfService handleChoiceOfService={this.handleChoiceOfService}/> : null
       }

       {
         this.state.showVibesList ? <ChoiceOfVibes handleChoiceOfVibes={this.handleChoiceOfVibes} categories={this.state.categories}/> : null
       }

       {
         this.state.showHappyHourList ? this.state.neighborhoodBars.map(bar=>
            <HappyHourList bar={bar}/> : null

         ) : null

       }
       {
         this.state.showVibesMatchList ? this.state.neighborhoodBars.map(bar=>
           bar.category === this.state.vibeID ? <VibesMatchList bar={bar} /> : null
         ) : null
       }



    </div>
    );
  }


}

export default App;
