<template>
  <aside class="sidebar">
    <ul>
      <li><router-link to="/">All Prompts</router-link></li>
      <li><router-link to="/category/technology">Technology</router-link></li>
      <li><router-link to="/category/science">Science</router-link></li>
      <li><router-link to="/category/creative">Creative</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
};
</script>

<style scoped>
.sidebar {
  background: #222;
  color: #fff;
  padding: 1rem;
  width: 200px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar a {
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
}
</style>
