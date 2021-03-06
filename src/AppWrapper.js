import { Component } from 'react';
import App from './App';
import { 
    OptimizelyProvider, 
    createInstance, 
    setLogLevel, 
    enums
} from '@optimizely/react-sdk';

// Instantiate an Optimizely client
const optimizelyClient = createInstance({
    sdkKey: 'LMULQewiddKG2mbq22ATt', // Prod.:LMULQewiddKG2mbq22ATt Dev.: B6Y3da7iXb4RtYAg4ZgCr
    datafileOptions: {
        autoUpdate: true,
        updateInterval: 600000, // 10 minutes in milliseconds
        urlTemplate: 'https://cdn.optimizely.com/datafiles/LMULQewiddKG2mbq22ATt.json'
    },
    eventBatchSize: 10,
    eventFlushInterval: 1000,
});

// Can be 'info', 'debug', 'warn', 'error'
setLogLevel('debug');

// Read the OptimizelyConfig object
setTimeout(() => {
    const config = optimizelyClient.getOptimizelyConfig();

    console.log('***** OptimizelyConfig START *****');

    console.log(`[OptimizelyConfig] -- revision = ${config.revision}`);
    console.log(`[OptimizelyConfig] -- sdkKey = ${config.sdkKey}`);
    console.log(`[OptimizelyConfig] -- environmentKey = ${config.environmentKey}`);

    console.log(`[OptimizelyConfig] attributes:`);
    config.attributes.forEach((attribute) => {
        console.log(`[OptimizelyAttribute] -- (id, key) = (${attribute.id}, ${attribute.key})`);
    });

    console.log(`[OptimizelyConfig] audiences:`);
    config.audiences.forEach((audience) => {
        console.log(
            `[OptimizelyAudience] -- (id, name, conditions) = (${audience.id}, ${audience.name}, ${audience.conditions})`
        );
    });

    console.log(`[OptimizelyConfig] events:`);
        config.events.forEach((event) => {
        console.log(
            `[OptimizelyEvent] -- (id, key, experimentIds) = (${event.id}, ${event.key}, ${event.experimentsIds})`
        );
    });

    // all flags
    const flags = [];
    const flagKeys = [];
    for (var key in config.featuresMap) {
        flags.push(config.featuresMap[key]);
        flagKeys.push(key);
    }

    flagKeys.forEach((flagKey) => {
        const flag = config.featuresMap[flagKey];

        const experimentRules = flag.experimentRules;
        const deliveryRules = flag.deliveryRules;

        // use experiment rules and delivery rules and other flag data here...
        experimentRules.forEach((experiment) => {
            console.log(`[OptimizelyExperiment] -- experiment rule-key = ${experiment.key}`);
            console.log(`[OptimizelyExperiment] -- experiment audiences = ${experiment.audiences}`);

            const variationsMap = experiment.variationsMap;
            const variationKeys = [];

            for (var key in variationsMap) {
                variationKeys.push(key);
            }

            variationKeys.forEach((varKey) => {
                const variation = variationsMap[varKey];
                console.log(
                    `[OptimizelyVariation] -- variation = { key: ${varKey}, id: ${variation.id}, featureEnabled: ${variation.featureEnabled} })`
                );

                const variablesMap = variationsMap[varKey].variablesMap;
                const variableKeys = [];

                for (var key in variablesMap) {
                    variableKeys.push(key);
                }

                variableKeys.forEach((variableKey) => {
                    const variable = variablesMap[variableKey];
                    console.log(`[OptimizelyVariable] -- variable: ${variableKey}, ${variable.value}`);
                });
            });
        });

        deliveryRules.forEach((delivery) => {
            console.log(`[OptimizelyExperiment] -- delivery rule-key = ${delivery.key}`);
            console.log(`[OptimizelyExperiment] -- delivery audiences = ${delivery.audiences}`);

            // use delivery rule data here...
        });
    });

    // listen to OPTIMIZELY_CONFIG_UPDATE to get updated data
    optimizelyClient.notificationCenter.addNotificationListener(
        enums.NOTIFICATION_TYPES.OPTIMIZELY_CONFIG_UPDATE,
        function () {
            const newConfig = optimizelyClient.getOptimizelyConfig();
            console.log(`[OptimizelyConfig] -- revision = ${newConfig.revision}`);
        }
    );
    // End OptimizelyConfig
    console.log('***** OptimizelyConfig END *****');
}, 1000)

class AppWrapper extends Component {
    render() {
        const user = {
            id: (Math.floor(Math.random() * (100000 - 10000) + 10000)).toString(),
            attributes: {
                isVIP: Math.random() < 0.5 ? true : false,
                location: 'Amsterdam',
                age: 18,
                mab: Math.random() < 1.5 ? true : false
            },
        };
        
        return (
            <OptimizelyProvider optimizely={optimizelyClient} user={ user }>
                <App />
            </OptimizelyProvider>
        );
    }
}

export default AppWrapper;