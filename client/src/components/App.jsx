import React from 'react';
import ListOfHoods from './ListOfHoods.jsx';
import ChoiceOfService from './ChoiceOfService';
import ChoiceOfVibes from './ChoiceOfVibes';
import HappyHourList from './HappyHourList';
import Header from './Header';
import BackButton from './BackButtonWithHoodSelection'
import NoBarFound from './NoBarFound';
import VibesMatchList from './VibesMatchList';
import Signup from './Signup';
import Login from './Login';
import WelcomeUser from './WelcomeUser'
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
      neighborhoods: [{name: 'SOMA', id: 2}, {name: 'Tenderloin', id: 1}, {name:'Hayes Valley', id: 3}, {name: 'Union Square/FiDi', id: 4}],
      happyHourOrAtts: '',
      choiceOfService: '',
      choiceOfVibe: '',
      vibeID: '',
      categories: [],
      neighborhoodBars: [],
      showSignup: false,
      showLogin: false,
      username: '',
      showWelcomeUser: false,
      showSignupButton: true,
      showLoginButton: true,
      userID: '',
      loggedIn: false,
      favoriteBars: [],
      loginErrors: null

    };




    $.get('/categories', function(data) {
      this.setState({categories: data});
      console.log(this.state.categories);
    }.bind(this))
    .fail(function() {
      alert('error retrieving data');
    });


    this.handleNeighborhoodChoice = this.handleNeighborhoodChoice.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleChoiceOfService = this.handleChoiceOfService.bind(this);
    this.handleChoiceOfVibes = this.handleChoiceOfVibes.bind(this);
    this.getNeighborhood = this.getNeighborhood.bind(this);
    this.signupUsers = this.signupUsers.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.addUserFave = this.addUserFave.bind(this);
    this.getUserFaves = this.getUserFaves.bind(this);
    this.handleXClick = this.handleXClick.bind(this);
  }

  handleNeighborhoodChoice (hood, hoodID) {
    this.setState({neighborhood: hood, showChooseHood: false, showChoiceOfService: true, neighborhoodID: hoodID});
  }
  handleBackButtonClick () {
    console.log('back button clicked');
    if(this.state.showChoiceOfService === true) {
      this.setState({showChoiceOfService: false, showChooseHood: true})
    }
    if(this.state.showVibesList === true || this.state.showHappyHourList === true) {
      this.setState({showVibesList: false, showHappyHourList: false, showChoiceOfService: true})
    }
    if(this.state.showVibesMatchList === true) {
      this.setState({showVibesMatchList: false, showVibesList: true})
    }
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

  handleSignup () {
    this.setState({showSignup: !this.state.showSignup});
  }

  handleLogin () {
    this.setState({showLogin: !this.state.showLogin});
  }


  signupUsers (userInfo){
    $.ajax({
      method: 'POST',
      url: '/signup',
      contentType: 'application/json',
      data: JSON.stringify(userInfo),
      success: (data) => {
        console.log('WE HAVE SUCCESSFULLY POSTED DATA');
        this.setState({showSignup: false})
        this.loginUser(userInfo);
      },
      error: (err) => {
        console.log("Couldn't post user info ", err);
      }
    })
  }

  loginUser (userInfo) {
    $.ajax({
      method: 'POST',
      url: '/login',
      contentType: 'application/json',
      data: JSON.stringify(userInfo),
      success: (data) => {
        console.log('this is the data inside loginUser: ', data);
        console.log(data.data[0].username)
        data.data.length === 1 ? this.setState({loggedIn: true, showLogin: false, userID: data.data[0].id, username: data.data[0].username, showWelcomeUser: true, showSignupButton: false, showLoginButton: false}) : alert('failed login');
        this.state.loggedIn ? this.getUserFaves() : null
      },
      error: (err) => {
        console.log('user cannot log in from the front end ', err);
        console.log('this is this.state.loginErrors inside the AJAX: ', this.state.loginErrors);
        this.setState({
          loginErrors: JSON.parse(err.responseText)
        })
      }
    })
  }

  handleXClick () {
    this.setState({showLogin: false, showSignup: false, loginErrors: null});
  }

  getNeighborhood (neighborhood) {
    $.get(`/${neighborhood}`, function(barsData) {
      var obj = {};
      barsData.forEach((bar)=>{
        if (!obj[bar.name]) {
          obj[bar.name] = true;
        }
      });
      var newArr = Object.keys(obj).map(function(item) {
        var returnObj = {name: item};
        returnObj.attributes = [];
        returnObj.location = '';
        returnObj.start = '';
        returnObj.end = '';
        barsData.forEach(function(item2) {
          if (returnObj.name === item2.name) {
            returnObj.attributes.push(item2.attribute);
            if (!returnObj.location && !returnObj.start && !returnObj.end && !returnObj.category) {
              returnObj.location = item2.location;
              returnObj.start = item2.hhstart;
              returnObj.end = item2.hhend;
              returnObj.category = item2.category;
              returnObj.id = item2.id;
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

  addUserFave(userAndBar) {
    $.ajax({
      method: 'POST',
      url: '/adduserfave',
      contentType: 'application/json',
      data: JSON.stringify(userAndBar),
      success: (data) => {
        console.log('success');
      },
      error: (err) => {
        console.log('could not add bar choice', err);
      }
    })
  };

  getUserFaves() {
    $.ajax({
      method: 'POST',
      url: '/getuserfaves',
      contentType: 'application/json',
      data: JSON.stringify({userID: this.state.userID}),
      success: (data) => {
        this.setState({favoriteBars: data.data})
        console.log('fav bars', this.state.favoriteBars);

      },
      error: (err) => {
        console.log("couldn't get user faves", err);
      }
    })
  }





  render () {
    return (
    <div>
      {
      this.state.showSignupButton ? <button className="SignupButton" onClick={ () => this.handleSignup() }> Sign up </button> : null
      }
      {this.state.showSignup ?
        <Signup signupUsers = {this.signupUsers} handleXClick={this.handleXClick}/> :
        null
      }

      {
        this.state.showLoginButton ? <button className="LoginButton" onClick={ () => this.handleLogin() }> Login </button> : null
      }

      {this.state.showLogin ?
        <Login loginUser = {this.loginUser} handleXClick={this.handleXClick} loginErrors={this.state.loginErrors}/> :
          null
      }


      {
        this.state.showWelcomeUser ? <WelcomeUser user={this.state.username} userBars={this.state.favoriteBars} /> : null
      }

      <div className="HeaderDiv">
        <h1 className="BuzzHeader" onClick={()=> window.location.reload()}>Buzz</h1>
      </div>
      {this.state.showChooseHood ?

        <div className="HoodSelectionDiv"><h2>Choose a neighborhood</h2></div> :
          //<div className="HoodSelectionDiv"><h2>{this.state.neighborhood}</h2></div>
          <BackButton hood={this.state.neighborhood} handleBackButtonClick={this.handleBackButtonClick}/>

      }

      { this.state.showChooseHood ? this.state.neighborhoods.map(hood =>
         <ListOfHoods neighborhood={hood.name} neighborhoodID={hood.id} getNeighborhood={this.getNeighborhood} handleChoice={this.handleNeighborhoodChoice}/>
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
            <HappyHourList bar={bar} userID={this.state.userID} addUserFave={this.addUserFave}/> : null

         ) : null

       }
       {
         this.state.showVibesMatchList ? this.state.neighborhoodBars.map(bar=>
           bar.category === this.state.vibeID ? <VibesMatchList bar={bar} userID={this.state.userID} addUserFave={this.addUserFave}/> : null
         ) : null
       }
    </div>
    );
  }

}

export default App;
