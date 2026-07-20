<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <div class="card bg-base-100 size-96 shadow-sm">
    <figure>
      <img
        :src="image"
        :alt="title"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
      </h2>
      <p>
        {{ description }}
      </p>
      <div class="card-actions justify-end">
        <button>
          Ver Detalhes
        </button>
      </div>
    </div>
  </div>
</template>
