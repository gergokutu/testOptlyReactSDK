import { Component } from 'react';
import { OptimizelyContext, OptimizelyExperiment, withOptimizely } from '@optimizely/react-sdk';

class VipContent extends Component {
static contextType = OptimizelyContext;

    render() {
        return (
            <OptimizelyExperiment experiment='workramp_new_node_experiment'>
            { (variation) => (
                variation
                ?
                <div>
                    <div>User is bucketed into "{ variation }" to play: { this.props.optimizely.getFeatureVariableString('workramp_new_node', 'game').toUpperCase() }</div>
                    <div>User Id: { this.context.optimizely.user.id }</div>
                    <div>VIP member: { this.context.optimizely.user.attributes.isVIP ? 'YES' : 'NO'}</div>
                </div> 
                :
                <div>
                    <div>You will need VIP membership to enter the experiment! But still able to play: { this.props.optimizely.getFeatureVariableString('workramp_new_node', 'game').toUpperCase() }</div>
                    <div>User Id: { this.context.optimizely.user.id }</div>
                    <div>VIP member: { this.context.optimizely.user.attributes.isVIP ? 'YES' : 'NO'}</div>
                </div> 
            )}
            </OptimizelyExperiment>
        );
    }
}

export default withOptimizely(VipContent);
