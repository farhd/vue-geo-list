import Vue from 'vue';
import GeoSearch from '@/components/GeoSearch';

describe('GeoSearch', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(GeoSearch);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
    .toEqual('Welcome to Your Vue.js App');
  });
});
