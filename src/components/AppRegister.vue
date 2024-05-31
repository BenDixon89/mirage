<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AppRegister',
  setup() {
    const email = ref('');
    const password = ref('');

    const register = () => {
      // Implement registration logic here, or redirect to Keycloak's registration page
      console.log('Register user:', email.value, password.value);
      // Example: keycloak.register() can be used to redirect to the registration page
    };

    return { email, password, register };
  },
};
</script>
