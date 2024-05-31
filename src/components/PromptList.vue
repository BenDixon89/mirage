<template>
  <div class="prompt-list">
    <PromptItem v-for="prompt in prompts" :key="prompt.id" :prompt="prompt" />
  </div>
</template>

<script>
import PromptItem from './PromptItem.vue';

export default {
  name: 'PromptList',
  components: {
    PromptItem,
  },
  data() {
    return {
      prompts: [
        { id: 1, title: 'Sample Prompt 1', votes: 10 },
        { id: 2, title: 'Sample Prompt 2', votes: 5 },
      ],
    };
  },
};
</script>

<style scoped>
.prompt-list {
  padding: 1rem;
}
</style>
