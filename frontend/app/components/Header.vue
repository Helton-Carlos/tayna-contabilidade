<script lang="ts" setup>
const paths = ['sobre', 'serviços', 'endereço', 'contato']
</script>

<template>
  <header class="bg-purple-700 w-full p-4">
    <div class="flex justify-between max-w-6xl mx-auto items-center">
      <nuxt-link
        to="/"
        class="text-xl text-white font-bold"
      >
        @Tayná <strong>Contabilidade</strong>
      </nuxt-link>

      <nav>
        <ul class="flex items-center gap-4 text-white font-medium">
          <li
            v-for="(item, index) in paths"
            :key="index"
          >
            <NuxtLink
              :to="`/${item}`"
              class="hover:text-gray-100 capitalize"
            >{{
              item
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="btn"
              to="/login"
            >
              Login
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
