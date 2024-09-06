<template>
  <div class="bg-blue-700 dark:bg-gray-500 text-white">
navbar
<router-link to="/dashboard">Dashboard</router-link>
<button @click="toggleDarkMode" class="bg-slate-400 px-3 py-1 rounded-md">
  Toggle Dark Mode
</button>
  </div>
</template>

<script setup>
import {inject} from 'vue';

const toggleDarkMode = inject('toggleDarkMode')
</script>
