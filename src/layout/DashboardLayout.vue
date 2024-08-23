<template>
  <div class="py-5 px-10 bg-slate-400">
dashboard layout navbar
<router-link to="/">home</router-link>
  </div>
  <RouterView />
  <div class="py-5 px-10 bg-slate-400">
dashboard layout footer
  </div>
</template>

<script setup>
import {RouterView} from 'vue-router';


</script>