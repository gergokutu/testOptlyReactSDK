import { Component } from 'react';
import App from './App';
import { OptimizelyProvider, createInstance, setLogLevel  } from '@optimizely/react-sdk';

// Instantiate an Optimizely client
const optimizely = createInstance({
    sdkKey: 'LMULQewiddKG2mbq22ATt',
    datafileOptions: {
        autoUpdate: true,
        updateInterval: 600000, // 10 minutes in milliseconds
        urlTemplate: 'https://cdn.optimizely.com/datafiles/LMULQewiddKG2mbq22ATt.json'
      }
});

// Can be 'info', 'debug', 'warn', 'error'
setLogLevel('debug');

class AppWrapper extends Component {
    render() {
      return (
        <OptimizelyProvider optimizely={optimizely} user={{id: 'randomAlphanumericString'}}>
          <App />
        </OptimizelyProvider>
      );
    }
}

export default AppWrapper;