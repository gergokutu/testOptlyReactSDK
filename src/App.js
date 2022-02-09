import { OptimizelyContext } from '@optimizely/react-sdk';
import { Component } from 'react';
import './App.css';

class App extends Component{
  static contextType = OptimizelyContext;

  render() {
    console.log(this.context);
    return (
      <div className="App">
        <div>{this.context.optimizely.user.id}</div>
      </div>
    );
  }
}

export default App;