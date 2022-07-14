// import { OptimizelyContext } from '@optimizely/react-sdk';
import { Component } from 'react';
import './App.css';
import ExperimentComponent from './components/ExperimentComponent';
import FeatureComponent from './components/FeatureComponent';
import VariationComponent from './components/VariationComponent';

class App extends Component{
  // static contextType = OptimizelyContext;

  render() {
    return (
      <div className="App">
        <FeatureComponent />
        <ExperimentComponent />
        <VariationComponent />
      </div>
    );
  }
}

export default App;