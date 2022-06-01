import { Component } from 'react';
import { OptimizelyFeature } from '@optimizely/react-sdk';

class FeatureComponent extends Component {
  render() {
    return (
      <OptimizelyFeature feature="workramp_new_node">
        {(isEnabled, variables) => (
          isEnabled
          ? (<p> Feature enabled! Variable values: { JSON.stringify(variables) } </p>)
          : (<p> Feature not enabled. Variable values: { JSON.stringify(variables) } </p>)
        )}
      </OptimizelyFeature>
    )
  }
}

export default FeatureComponent;