<template>
  <div class="prompt-item">
    <h2>{{ prompt.title }}</h2>
    <p>Votes: {{ prompt.votes }}</p>
  </div>
</template>

<script>
export default {
  name: 'PromptItem',
  props: {
    prompt: Object,
  },
};
</script>

<style scoped>
.prompt-item {
  background: #444;
  color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}
</style>
