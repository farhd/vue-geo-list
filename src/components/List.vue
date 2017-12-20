<template>
  <div class="list">
    <b-container>
      <b-row>
        <b-col md="6" lg="4" v-for="result in store.getData()" :key="result.id">
          <Card
            v-bind="result"
            v-bind:success="result.id === sharedState.nearestLocationId"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/location-arrow';
import 'vue-awesome/icons/spinner';

import Card from './Card';

import store from '../store';

export default {
  components: {
    Icon,
    Card,
  },
  name: 'List',
  data() {
    return {
      sharedState: store.state,
      store,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
