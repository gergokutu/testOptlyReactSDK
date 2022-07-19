import { Component } from 'react';
import { OptimizelyContext, OptimizelyExperiment, withOptimizely } from '@optimizely/react-sdk';

class ExperimentComponent extends Component {
static contextType = OptimizelyContext;

    render() {
        return (
            <OptimizelyExperiment experiment='workramp_new_node_experiment'>
            { (variation) => (
                variation
                ?   (
                        <div>
                            <br/>
                            <div>***** Via OptimizelyExperiment *****</div>
                            <div>User is bucketed into "{ variation }" to play: { this.props.optimizely.getFeatureVariableString('workramp_new_node', 'game').toUpperCase() }</div>
                            <div>User Id: { this.context.optimizely.user.id }</div>
                            <div>VIP member: { this.context.optimizely.user.attributes.isVIP ? 'YES' : 'NO'}</div>
                            <div>Location: { this.context.optimizely.user.attributes.location }</div>
                            <div>Age: { this.context.optimizely.user.attributes.age }</div>
                            <div>isMab: { this.context.optimizely.user.attributes.mab ? 'True' : 'False' }</div>
                            { this.props.optimizely.track('testEvent_01') }
                        </div> 
                    )    
                :
                    (
                        <div>
                            <br/>
                            <div>***** Via OptimizelyExperiment *****</div>
                            <div>You will need VIP membership to enter Experiment 1! But still able to play: { this.props.optimizely.getFeatureVariableString('workramp_new_node', 'game').toUpperCase() }</div>
                            <div>User Id: { this.context.optimizely.user.id }</div>
                            <div>VIP member: { this.context.optimizely.user.attributes.isVIP ? 'YES' : 'NO'}</div>
                            <div>Location: { this.context.optimizely.user.attributes.location }</div>
                            <div>Age: { this.context.optimizely.user.attributes.age }</div>
                            <div>isMab: { this.context.optimizely.user.attributes.mab ? 'True' : 'False' }</div>
                        </div> 
                    )
            )}
            </OptimizelyExperiment>
        );
    }
}

export default withOptimizely(ExperimentComponent);
