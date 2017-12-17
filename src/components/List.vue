<template>
  <div class="list">
    <div>
      <ul>
        <li v-for="result in results" :key="result.id">
          <Card
            v-bind="result"
            v-bind:success="result.id === nearestLocationId"/>
        </li>
      </ul>
    </div>
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
    Card
  },
  name: 'List',
  data() {
    return {
      results: store.state.initialData.results,
      nearestLocationId: store.state.nearestLocationId,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
