
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    arrowValues: {
      up: 'main-blurb',
      right: 'main-contact',
      down: 'main-projects',
      left: 'main-writings',
    },
    pagesVisited: []
  }
});

export default store;
