import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import Main from './views/Main';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: Main,
    }
  ]
});

export default router;
