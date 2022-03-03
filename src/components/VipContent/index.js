import { Component } from 'react';
import { OptimizelyContext, OptimizelyExperiment } from '@optimizely/react-sdk';

class VipContent extends Component {
static contextType = OptimizelyContext;

    render() {
        return (
            <div> ***** VIP Content ***** 
                <OptimizelyExperiment experiment='workramp_new_node_experiment'>
                {(variation) => (
                variation === 'testvariation01'
                    ? <div>Var 1</div>
                    : <div>Var 2</div>
                )}
                </OptimizelyExperiment>
            </div>
        );
    }
}

export default VipContent;
