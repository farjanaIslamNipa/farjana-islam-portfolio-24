<template>
  <div :class="{ 'dark': isDarkMode }" class="transition-colors duration-500">
    <component :is="layout">
      <router-view />
    </component>

    <div class="min-h-screen bg-white dark:bg-gray-800">
      <header class="p-4 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <button @click="toggleDarkMode">
          Toggle Dark Mode
        </button>
      </header>
      <main class="p-4">
        <h1 class="text-2xl text-gray-800 dark:text-white">Hello, Vue 3 with Tailwind CSS!</h1>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, provide } from 'vue';
import { useRoute } from 'vue-router';
import DashboardLayout from './layout/DashboardLayout.vue';
import DefaultClientLayout from './layout/DefaultClientLayout.vue';

const route = useRoute();

const layout = computed(() => {
  if (route.meta.layout === 'admin') return DashboardLayout;
  return DefaultClientLayout;
});

import { ref } from 'vue'

const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if(isDarkMode.value){
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }else{
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if(theme === 'dark'){
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})

provide('toggleDarkMode', toggleDarkMode)
</script>
