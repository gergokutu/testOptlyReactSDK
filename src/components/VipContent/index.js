import { Component } from 'react';
import { OptimizelyContext, OptimizelyExperiment } from '@optimizely/react-sdk';

class VipContent extends Component {
static contextType = OptimizelyContext;

    render() {
        return (
            <OptimizelyExperiment experiment='workrampnode'>
            {(variation) => (
            variation === 'variation_1'
                ? <div>Var 1</div>
                : variation === 'variation_2'
                    ? <div>Var 2</div>
                    : <div>Var 3</div>
            )}
            </OptimizelyExperiment>
        );
    }
}

export default VipContent;
