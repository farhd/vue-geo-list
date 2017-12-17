<template>
  <div>
    <b-card :header="title"
            border-variant="secondary"
            header-border-variant="secondary"
            style="max-width: 20rem;"
            class="mb-2">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <b-badge pill variant="info">{{type}}</b-badge>
    </b-card>
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
  props: ['title', 'type'],
  name: 'Card',
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
