// import { OptimizelyContext } from '@optimizely/react-sdk';
import { Component } from 'react';
import './App.css';
import VipContent from './components/VipContent';
import FeatureComponent from './components/FeatureComponent';
import VariationComponents from './components/VariationComponents';

class App extends Component{
  // static contextType = OptimizelyContext;

  render() {
    return (
      <div className="App">
        <FeatureComponent />
        <VipContent />
        <VariationComponents />
      </div>
    );
  }
}

export default App;