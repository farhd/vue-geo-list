<template>
  <div>
    <b-card :header="title"
            border-variant="secondary"
            header-border-variant="secondary"
            :header-bg-variant="success ? 'success' : ''"
            style="max-width: 20rem;"
            class="mb-2"
            @click="toggleShow">
      <b-badge pill variant="info">{{type}}</b-badge>
      <p class="card-text" v-if="show">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
    </b-card>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/location-arrow';
import 'vue-awesome/icons/spinner';

export default {
  components: {
    Icon,
  },
  props: ['title', 'type', 'success'],
  name: 'Card',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    margin: 0 auto;
  }
</style>
