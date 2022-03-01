import { Component } from 'react';
import App from './App';
import { OptimizelyProvider, createInstance, setLogLevel  } from '@optimizely/react-sdk';

// Instantiate an Optimizely client
const optimizelyClient = createInstance({
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
        const id = (Math.floor(Math.random() * (100000 - 10000) + 10000)).toString();
        return (
            <OptimizelyProvider optimizely={optimizelyClient} user={{ id }}>
                <App />
            </OptimizelyProvider>
        );
    }
}

export default AppWrapper;