<template>
  <form class="geo-search" @submit.prevent="submit">
    <b-container>
      <b-input-group class="mb-3">
        <b-input-group-addon>Location</b-input-group-addon>

        <b-form-input
          size="sm"
          placeholder="Latitude..."
          id="latitude"
          v-model="lat"
          v-bind:class="{error: $v.lat.$error, valid: $v.lat.$dirty && !$v.lat.$invalid}"
          @input="$v.lat.$touch"
          />
        <b-form-input
          size="sm"
          placeholder="Longitude..."
          id="longitude"
          v-model="long"
          v-bind:class="{error: $v.long.$error, valid: $v.long.$dirty && !$v.long.$invalid}"
          @input="$v.long.$touch"
          />
        <b-input-group-button>
          <b-button variant="outline-primary" @click="getGeoPos()">
            <icon name="location-arrow" v-if="!loading"></icon>
            <icon name="spinner" spin v-if="loading"></icon>
          </b-button>
          <b-button variant="outline-success" size="sm" @click="submit">Go</b-button>
        </b-input-group-button>
      </b-input-group>
      <div class="form-group__message" v-if="($v.lat.$dirty && !$v.lat.required) || ($v.long.$dirty && !$v.long.required)">Field is required</div>
      <div class="form-group__message" v-if="($v.lat.$dirty && !$v.lat.geoValidator) || ($v.long.$dirty && !$v.long.geoValidator)">
        Should be in signed degrees format (DDD.dddd)<br>
        s. <a href="http://www.geomidpoint.com/latlon.html" target="_empty">Latitude and longitude formats</a>
      </div>
    </b-container>
  </form>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/location-arrow';
import 'vue-awesome/icons/spinner';

import { required } from 'vuelidate/lib/validators';
import geoValidator from '../utils/geoValidator';

import store from '../store';

import calcDistance from '../utils/distance';

export default {
  components: {
    Icon,
  },
  name: 'GeoSearch',
  data() {
    return {
      lat: null,
      long: null,
      loading: false,
      sharedState: store.state,
    };
  },
  validations: {
    lat: {
      required,
      geoValidator,
    },
    long: {
      required,
      geoValidator,
    },
  },
  methods: {
    getGeoPos() {
      this.loading = true;
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        this.lat = latitude;
        this.long = longitude;
        this.loading = false;
      });
    },
    calculateDistance() {
      const userPos = { lat: this.lat, long: this.long };
      const pointsOfInterest = this.sharedState.initialData.results;
      const nearestLocationId = calcDistance(userPos, pointsOfInterest);
      this.setNearestLocation(nearestLocationId);
    },
    submit() {
      if (this.$v.lat.$dirty && !this.$v.lat.$invalid
          && this.$v.long.$dirty && !this.$v.long.$invalid) {
        this.calculateDistance();
      }
      // first submit-attempt with empty (invalid) values touches the inputs
      // so the errors get visible
      if (this.$v.lat.$invalid || this.$v.long.$invalid) {
        this.$v.lat.$touch();
        this.$v.long.$touch();
      }
    },
    setNearestLocation(id) {
      store.setNearestLocation(id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
