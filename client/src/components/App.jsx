import React from 'react';
import ListOfHoods from './ListOfHoods.jsx';
import ChoiceOfService from './ChoiceOfService';
import BarList from './BarList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhood: '',
      showChooseHood: true,
      showBarList: false,
      showChoiceOfService: false,
      neighborhoods: ['SOMA', 'Tenderloin', 'Nob Hill', 'Pacific Heights'],
      happyHourOrAtts: '',
      choiceOfService: '',
      bars: [{name: 'stephs', neighborhood: 'SOMA', happyHours: '6-8 m-f'},
      {name: 'tenders', neighborhood: 'Tenderloin', happyHours: '4-10 m-th'},
      {name: 'super tenders', neighborhood: 'Tenderloin', happyHours: '4-10 m-th'},
      {name: 'Equator', neighborhood: 'SOMA', happyHours: '4-10 m-th'}
      ]

    };


    this.handleNeighborhoodChoice = this.handleNeighborhoodChoice.bind(this);
    this.handleChoiceOfService = this.handleChoiceOfService.bind(this);

  }

  handleNeighborhoodChoice (hood) {
    this.setState({neighborhood: hood, showChooseHood: false, showChoiceOfService: true});
  }

  handleChoiceOfService (choice) {
    this.setState({choiceOfService: choice, showBarList: true, showChoiceOfService: false});
    console.log(this.state.neighborhood);
  }




  render () {
    return (
    <div>
      <div className="HeaderDiv">
        <h1 onClick={()=> window.location.reload()}>Buzz</h1>
      </div>
      {this.state.showChooseHood ?

        <div className="HoodSelectionDiv"><h2>Choose a neighborhood</h2></div> : null
      }

      { this.state.showChooseHood ? this.state.neighborhoods.map(hood =>
         <ListOfHoods neighborhood={hood} handleChoice={this.handleNeighborhoodChoice}/>
       )
       : null }

       {
         this.state.showChoiceOfService ? <ChoiceOfService handleChoiceOfService={this.handleChoiceOfService}/> : null
       }

       {
         this.state.showBarList ? this.state.bars.map(bar=>
           bar.neighborhood === this.state.neighborhood ? <BarList bar={bar}/> : null

         ) : null

       }


    </div>
    );
  }


}

export default App;
