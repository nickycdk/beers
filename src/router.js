import Vue from 'vue';
import firebase from 'firebase';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard/index';

Vue.use(Router);

// NOTE: route level code-splitting with import(/* webpackChunkName: "login" */ './path/to/file.vue')
// this generates a separate chunk (login.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/beer/:beerId',
      name: 'beer',
      component: () => import(/* webpackChunkName: "beer" */ './views/Public/Beer.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login/index.vue')
    },
    {
      path: '/dashboard',
      meta: {
        requireAuth: true
      },
      component: Dashboard,
      children: [
        /**
         * Group all related to dashboard/admin in same bundle/chunk
         */
        {
          path: '/',
          meta: {
            requireAuth: true
          },
          component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard/dashboard.vue')
        },
        {
          path: 'add-beer',
          name: 'add-beer',
          meta: {
            requireAuth: true
          },
          component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard/Beers/index.vue')
        }
      ]
    }
  ]
});

/**
 * Add auth and to check before each route is changes if a route has meta.requireAuth
 */

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requireAuth);

  if (requiresAuth && !currentUser) {
    next('login');
  } else {
    next();
  }
});

export default router;
