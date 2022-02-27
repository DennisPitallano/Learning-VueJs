<script setup lang="ts">
import { ref } from "vue";
const msg = ref("Hello Dennis!");
</script>
<template>
  <div class="about">
    <h1>{{ msg.toLocaleUpperCase() }}</h1>
    <input v-model="msg" />
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
