
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    arrowValues: {
      up: null,
      right: null,
      down: null,
      left: null
    },
    pagesVisited: []
  }
});

export default store;
