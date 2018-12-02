import React, { Component } from 'react';
import AutoCmplt from './components/AutoCmplt'
import './App.css';
import countries from './components/Countrylist';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="App-Component">
            <div className="App-Component">
              <AutoCmplt list={countries} />
            </div>
         </div>
      </div>
    );
  }
}

export default App;