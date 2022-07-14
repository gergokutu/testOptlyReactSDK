import { Component } from 'react';
import {
    OptimizelyExperiment,
    OptimizelyVariation,
    OptimizelyContext
  } from '@optimizely/react-sdk'
  
class VariationComponents extends Component {
    static contextType = OptimizelyContext;

    render() {
        return (
            <OptimizelyExperiment experiment="workramp_new_node_experiment" timeout={3000}>
                <OptimizelyVariation variation="testvariation01">
                    <div>
                        <br/>
                         <div>***** Via OptimizelyVariation *****</div>
                         <div>Variation key: testvariation01</div>
                         <div>User Id: { this.context.optimizely.user.id }</div>
                    </div> 
                </OptimizelyVariation>
        
                <OptimizelyVariation variation="testvariation_02">
                    <div>
                        <br/>
                         <div>***** Via OptimizelyVariation *****</div>
                         <div>Variation key: testvariation_02</div>
                         <div>User Id: { this.context.optimizely.user.id }</div>
                    </div> 
                </OptimizelyVariation>
        
                <OptimizelyVariation default>
                    <div>
                        <br/>
                         <div>***** Via OptimizelyVariation *****</div>
                         <div>Experiment "workramp_new_node_experiment" is NOT active</div>
                    </div> 
                </OptimizelyVariation>
            </OptimizelyExperiment>
        )
    }
}

export default VariationComponents;