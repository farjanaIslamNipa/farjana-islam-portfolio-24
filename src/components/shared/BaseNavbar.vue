<template>
  <div class="w-full fixed top-0">
    <div class="app-container">
      <div class="bg-dark-blue/10 dark:bg-white/10 backdrop-blur-sm backdrop-filter rounded-2xl mt-6 py-4 sm:py-6 text-gray-200">
        <div class="flex justify-center items-center  sm:gap-x-5 md:gap-x-8">
          <RouterLink to="/projects" class="nav-item">Projects</RouterLink>
          <RouterLink to="/projects" class="nav-item">About</RouterLink>
          <RouterLink to="/projects" class="nav-item">Contact</RouterLink>
          <button class="px-3 sm:px-4 py-1 rounded-lg  text-orange-600 font-medium hover:bg-apple-green">Resume</button>
        </div>
      </div>
    </div>
<button @click="toggleDarkMode" class="bg-slate-400 px-3 py-1 rounded-md">
  Toggle Dark Mode
</button>
  </div>
</template>

<script setup>
import {inject} from 'vue';
import {RouterLink} from 'vue-router';

const toggleDarkMode = inject('toggleDarkMode')
</script>
