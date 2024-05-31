<template>
  <div class="home-page">
    <AppHeader />
    <div class="main-content">
      <AppSidebar />
      <div class="prompts">
        <h1>Prompts</h1>
        <!-- Add your prompts content here -->
        <PromptList />
      </div>
      <AdPlaceholder />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import PromptList from '@/components/PromptList.vue';
import AdPlaceholder from '@/components/AdPlaceholder.vue';

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    AppSidebar,
    PromptList,
    AdPlaceholder,
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0.1rem;
}

.prompts {
  flex: 1;
  padding: 1rem;
  background-color: #555;
  color: white;
  margin-right: 0.1rem;
}
</style>
