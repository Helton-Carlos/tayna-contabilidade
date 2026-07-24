<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const validateLogin = computed(() => {
  return route.name === 'login'
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div :class="['flex-1', { 'flex items-center justify-center': validateLogin }]">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
