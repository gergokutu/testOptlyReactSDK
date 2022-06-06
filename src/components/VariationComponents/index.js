import { Component } from 'react';
import {
    OptimizelyExperiment,
    OptimizelyVariation
  } from '@optimizely/react-sdk'
  
class VariationComponents extends Component {
    render() {
        return (
            <OptimizelyExperiment experiment="workramp_new_node_experiment" timeout={3000}>
                <OptimizelyVariation variation="testvariation01">
                    <div>
                        <br/>
                            <div>***** Via OptimizelyExperiment *****</div>
                            {/* <div>User is bucketed into "{ variation }" to play: { this.props.optimizely.getFeatureVariableString('workramp_new_node', 'game').toUpperCase() }</div>
                            <div>User Id: { this.context.optimizely.user.id }</div>
                            <div>VIP member: { this.context.optimizely.user.attributes.isVIP ? 'YES' : 'NO'}</div>
                            <div>Location: { this.context.optimizely.user.attributes.location }</div>
                            <div>Location: { this.context.optimizely.user.attributes.age }</div>
                            <div>isMab: { this.context.optimizely.user.attributes.mab ? 'True' : 'False' }</div> */}
                    </div> 
                </OptimizelyVariation>
        
                <OptimizelyVariation variation="testvariation_02">
                    Variation 2
                </OptimizelyVariation>
        
                <OptimizelyVariation default>
                    DEfault
                </OptimizelyVariation>
            </OptimizelyExperiment>
        )
    }
}

export default VariationComponents;