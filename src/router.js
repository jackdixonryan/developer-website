import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import Main from './views/Main';
import UnderContruction from './views/UnderConstruction';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: UnderContruction,
    }
  ]
});

export default router;
