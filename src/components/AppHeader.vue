<template>
  <header class="header">
    <div class="container">
      <h1>Mirage</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li v-if="keycloak.authenticated">Hello, {{ keycloak.tokenParsed.preferred_username }}</li>
          <li v-if="!keycloak.authenticated" @click="login">Login</li>
          <li v-if="keycloak.authenticated" @click="logout">Logout</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import keycloak from '@/keycloak';

export default {
  name: 'AppHeader',
  data() {
    return {
      keycloak
    };
  },
  methods: {
    login() {
      keycloak.login();
    },
    logout() {
      keycloak.logout();
    }
  }
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  padding: 1rem;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
nav a {
  color: #fff;
  text-decoration: none;
}
</style>
