<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DashboardLayout from './layout/DashboardLayout.vue';
import DefaultClientLayout from './layout/DefaultClientLayout.vue';

const route = useRoute();

const layout = computed(() => {
  if (route.meta.layout === 'admin') return DashboardLayout;
  return DefaultClientLayout;
});
</script>
