//Code in Develop branch to merged with Master
import React, { Component } from 'react';
import Histogram from './Histogram';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Histogram width='200px' />
        <br />
        <Histogram width='300px' />
        <br />
        <Histogram width='1000px'/>
        <br />
        <Histogram/>
      </div>
    );
  }
}

export default App;
