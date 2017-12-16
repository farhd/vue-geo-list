<template>
  <div class="geo-search">
    <b-input-group class="mb-3">
      <b-input-group-addon>Location</b-input-group-addon>

      <b-form-input size="sm" placeholder="Your city" id="location" v-model="geo.lat"/>

      <b-input-group-button>
        <b-button variant="outline-primary" @click="getGeoPos()">
          <icon name="location-arrow" v-if="!geo.loading"></icon>
          <icon name="spinner" spin v-if="geo.loading"></icon>
        </b-button>
        <b-button variant="outline-success" size="sm">Go</b-button>
      </b-input-group-button>
    </b-input-group>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/location-arrow';
import 'vue-awesome/icons/spinner';

export default {
  components: {
    Icon
  },
  name: 'GeoSearch',
  data() {
    return {
      geo: {
        lat: 0,
        long: 0,
        loading: false,
      },
    };
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
