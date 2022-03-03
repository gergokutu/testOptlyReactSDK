import { OptimizelyContext } from '@optimizely/react-sdk';
import { Component } from 'react';
import './App.css';
import VipContent from './components/VipContent';

class App extends Component{
  static contextType = OptimizelyContext;

  render() {
    return (
      <div className="App">
        <div>User Id: { this.context.optimizely.user.id }</div>
        <div>Vip member: { this.context.optimizely.user.attributes.isVip ? 'YES' : 'NO' }</div>
        { this.context.optimizely.user.attributes.isVip
          ? <VipContent>VIP content</VipContent>
          : <div>Ask membership</div> }
      </div>
    );
  }
}

export default App;