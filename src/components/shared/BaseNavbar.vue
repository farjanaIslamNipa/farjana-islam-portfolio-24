<template>
  <div class="w-full fixed top-0 z-30">
    <div class="app-container">
      <div class="bg-dark-blue/10 dark:bg-white/10 backdrop-blur-sm backdrop-filter rounded-2xl mt-6 py-4 sm:py-6 text-gray-200 relative">
        <div class="flex sm:justify-center items-center  sm:gap-x-5 md:gap-x-8">
          <RouterLink to="/projects" class="nav-item">Projects</RouterLink>
          <RouterLink to="/projects" class="nav-item">About</RouterLink>
          <RouterLink to="/projects" class="nav-item">Contact</RouterLink>
          <button class="hidden xs:inline-block px-3 sm:px-4 py-1 rounded-lg text-app-orange font-medium hover:bg-apple-green">Resume</button>
        </div>
        <div class="absolute right-[12px] sm:right-[25px] top-[19px] sm:top-[28px]">
          <input @change="toggleDarkMode" :checked="isDarkMode" type="checkbox" className="checkbox absolute opacity-0 top-0" id="checkbox" />
          <label htmlFor="checkbox" className="cursor-pointer flex justify-between items-center gap-1 bg-gray-400 dark:bg-gray-700 pl-[3px] pr-[5px] py-[2px] relative rounded-full label">
            <img src='/images/sun.svg' alt="Light mode" className="h-6 w-6" />
            <img src='/images/moon.svg' alt="dark mode" className="h-5 w-5" />
            <div className='ball w-[22px] h-[22px] bg-mint-green shadow-sm absolute top-[3px] left-[4px] rounded-full transition-transform delay-75 duration-200 ease-out'></div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {inject} from 'vue';
import {RouterLink} from 'vue-router';

const {isDarkMode, toggleDarkMode} = inject('theme')
</script>
