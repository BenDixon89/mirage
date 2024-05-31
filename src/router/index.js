import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AppLogin from '@/components/AppLogin.vue';
import AppRegister from '@/components/AppRegister.vue';
import keycloak from '@/keycloak';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: AppLogin,
  },
  {
    path: '/register',
    name: 'Register',
    component: AppRegister,
  },
  // Additional routes can be added here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!keycloak.authenticated) {
      keycloak.login();
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
