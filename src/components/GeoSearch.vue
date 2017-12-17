<template>
  <div class="geo-search">
    <b-input-group class="mb-3">
      <b-input-group-addon>Location</b-input-group-addon>

      <b-form-input size="sm" placeholder="Latitude, longitude..." id="location" v-model="searchValue"/>

      <b-input-group-button>
        <b-button variant="outline-primary" @click="getGeoPos()">
          <icon name="location-arrow" v-if="!geo.loading"></icon>
          <icon name="spinner" spin v-if="geo.loading"></icon>
        </b-button>
        <b-button variant="outline-success" size="sm" @click="calculateDistance()">Go</b-button>
      </b-input-group-button>
    </b-input-group>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/location-arrow';
import 'vue-awesome/icons/spinner';

import store from '../store';

import calcDistance from '../utils/distance';

export default {
  components: {
    Icon
  },
  name: 'GeoSearch',
  data() {
    return {
      geo: {
        lat: null,
        long: null,
        loading: false,
      },
      sharedState: store.state,
    };
  },
  computed: {
    searchValue: {
      get() {
        const lat = this.geo.lat;
        const long = this.geo.long;

        return lat && long ? [lat, long].join(', ') : '';
      },
      set(newValue) {
        const pos = newValue.split(',')
          .map(item => item.trim())
          .filter(item => item.length > 0);
        const lat = Number(pos[0]);
        const long = Number(pos[1]);
        if (pos.length == 2 && lat === lat && long === long) {
          this.geo.lat = lat;
          this.geo.long = long;
        } else {
          this.geo.lat = null;
          this.geo.long = null;
        }
      },
    }
  },
  methods: {
    getGeoPos() {
      this.geo.loading = true;
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        this.geo.lat = latitude;
        this.geo.long = longitude;
        this.geo.loading = false;
      });
    },
    calculateDistance() {
      const userPos = this.geo;
      const pointsOfInterest = this.sharedState.initialData.results;
      const nearestLocationId = calcDistance(userPos, pointsOfInterest);
      this.setNearestLocation(nearestLocationId);
    },
    setNearestLocation(id) {
      store.setNearestLocation(id);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
