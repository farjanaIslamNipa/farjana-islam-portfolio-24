<template>
  <div :class="{ 'dark': isDarkMode }" class="transition-colors duration-500">
    <div class="bg-white dark:bg-dark-blue text-app-black dark:text-app-white pt-28">
      <component :is="layout">
        <router-view />
      </component>
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

const isDarkMode = ref(true)

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

provide('theme', {isDarkMode, toggleDarkMode})
</script>
