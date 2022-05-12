import { OptimizelyContext } from '@optimizely/react-sdk';
import { Component } from 'react';
import './App.css';
import VipContent from './components/VipContent';

class App extends Component{
  // static contextType = OptimizelyContext;

  render() {
    return (
      <div className="App">
        <VipContent />
      </div>
    );
  }
}

export default App;