<script lang="ts" setup>
const paths = ['sobre', 'serviços', 'endereço', 'contato'];
</script>

<template>
  <header class="bg-purple-700 w-full p-8">
    <div class="flex justify-between">
      <h1 class="text-xl text-white font-bold">
        @Tayná <strong>Contabilidade</strong>
      </h1>

      <nav>
        <ul class="flex gap-4 text-white font-medium">
          <li v-for="(item, index) in paths" :key="index">
            <NuxtLink :to="`/${item}`" class="hover:text-gray-700 capitalize">{{
              item
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
