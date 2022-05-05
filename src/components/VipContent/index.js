import { Component } from 'react';
import { OptimizelyContext, OptimizelyExperiment } from '@optimizely/react-sdk';

class VipContent extends Component {
static contextType = OptimizelyContext;

    render() {
        return (
            <OptimizelyExperiment experiment='workramp_new_node_experiment'>
            {(variation) => (
                variation
                ?
                <div>
                    <div>User is bucketed into "{variation}"</div>
                    <div>User Id: { this.context.optimizely.user.id }</div>
                    <div>VIP member: { this.context.optimizely.user.attributes.isVIP ? 'YES' : 'NO'}</div>
                </div> 
                :
                <div>
                    <div>You will need VIP membership to enter the experiment!</div>
                    <div>User Id: { this.context.optimizely.user.id }</div>
                    <div>VIP member: { this.context.optimizely.user.attributes.isVIP ? 'YES' : 'NO'}</div>
                </div> 
            )}
            </OptimizelyExperiment>
        );
    }
}

export default VipContent;
