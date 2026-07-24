<script lang="ts" setup>
import { ref } from 'vue'

const title = ref<string>('dashboard')

definePageMeta({
  layout: 'standard',
})
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>
