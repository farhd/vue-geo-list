import initialData from '../etc/data.json';

export default {
  debug: true,
  state: {
    initialData,
    nearestLocationId: null,
  },
  setNearestLocation(id) {
    if (this.debug) {
      console.log('setNearestLocation triggered with', id);
    }
    this.state.nearestLocationId = id;
  },
};
