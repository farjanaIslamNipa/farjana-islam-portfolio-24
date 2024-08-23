<template>
 <BaseNavbar />
 <router-view></router-view>
 <BaseFooter />
</template>

<script setup>
import BaseFooter from '@/components/shared/BaseFooter.vue';
import BaseNavbar from '@/components/shared/BaseNavbar.vue';
import {RouterView} from 'vue-router';
</script>
