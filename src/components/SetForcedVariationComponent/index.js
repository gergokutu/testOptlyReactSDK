import { Component } from 'react';
import { OptimizelyContext, OptimizelyExperiment, OptimizelyVariation, withOptimizely } from '@optimizely/react-sdk';

class SetForcedVariationComponent extends Component {
    static contextType = OptimizelyContext;
    
    render() {
        return (
            <OptimizelyExperiment experiment="workramp_new_node_experiment__second" timeout={3000}>        
                <OptimizelyVariation variation="second_var1">
                    <div>
                        <br/>
                         <div>***** Via SetForcedVariation *****</div>
                         <div>Variation key: second_var1</div>
                         <div>User Id: { this.props.optimizely.user.id }</div>
                    </div> 
                </OptimizelyVariation>
            </OptimizelyExperiment>
        );
    }
}

export default withOptimizely(SetForcedVariationComponent);
