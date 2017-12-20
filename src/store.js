import * as R from 'ramda';

import initialData from '../etc/data.json';

export default {
  debug: true,
  state: {
    initialData,
    types: [],
    nearestLocationId: null,
  },
  setNearestLocation(id) {
    if (this.debug) {
      console.log('setNearestLocation triggered with', id);
    }
    this.state.nearestLocationId = id;
  },
  getData() {
    const types = this.state.types;
    const result = types.length === 0
      ? initialData.results
      : types.map(filter => (
        initialData.results.filter(item => item.type === filter)
      ));
    return R.flatten(result);
  },
};
