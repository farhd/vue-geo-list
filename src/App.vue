<template>
  <div id="app">
    <h1>Find the nearest location</h1>
    <hr>
    <GeoSearch/>
    <hr>
    <List/>
  </div>
</template>

<script>
import GeoSearch from './components/GeoSearch';
import List from './components/List';

export default {
  name: 'app',
  components: {
    GeoSearch,
    List
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 800px;
  margin: 0 auto;
  padding-top: 20px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
