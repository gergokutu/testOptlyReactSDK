import { Component } from 'react';
import { OptimizelyFeature } from '@optimizely/react-sdk';

class FeatureComponent extends Component {
  render() {
    return (
      <OptimizelyFeature feature="workramp_new_node">
        {(isEnabled, variables) => (
          isEnabled
          ? (
              <div>
                <div>***** Via OptimizelyFeature *****</div>
                <p> Feature enabled! Variable values: { JSON.stringify(variables) } </p>
              </div>
            )
          : (
              <div>
                <div>***** Via OptimizelyFeature *****</div>
                <p> Feature NOT enabled! Variable values: { JSON.stringify(variables) } </p>
              </div>
            )
        )}
      </OptimizelyFeature>
    )
  }
}

export default FeatureComponent;