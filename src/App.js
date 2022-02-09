import { OptimizelyContext } from '@optimizely/react-sdk';
import { Component } from 'react';
import './App.css';

class App extends Component{
  static contextType = OptimizelyContext;

  render() {
    return (
      <div className="App">
        <div>User Id: {this.context.optimizely.user.id}</div>
      </div>
    );
  }
}

export default App;