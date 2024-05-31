import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import keycloak from './keycloak';
import './assets/styles.css'; // Include the stylesheet

keycloak.init({ onLoad: 'login-required' }).then(() => {
  createApp(App)
    .use(router)
    .mount('#app');
}).catch(() => {
  console.error('Failed to initialize Keycloak');
});
