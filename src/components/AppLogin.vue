<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import keycloak from '@/keycloak';

export default {
  name: 'AppLogin',
  setup() {
    const email = ref('');
    const password = ref('');

    const login = () => {
      keycloak.login({ email: email.value, password: password.value });
    };

    return { email, password, login };
  },
};
</script>
