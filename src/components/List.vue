<template>
  <div class="result">
    <div>
      <ul>
        <li v-for="result in results" :key="result.id">
          <Card v-bind="result"/>
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

import initialData from './../../etc/data.json';

export default {
  components: {
    Icon,
    Card
  },
  name: 'GeoSearch',
  data() {
    return {
      results: initialData.results,
    };
  },
  methods: {
    addResult(res) {
      this.results.push(res);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
