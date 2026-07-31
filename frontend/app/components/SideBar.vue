<script setup lang="ts">
const menu = [
  {
    path: '/dashboard',
    name: 'Dashboard',
  },
  {
    path: '/servico',
    name: 'Serviço',
  },
  {
    path: '/pagamento',
    name: 'Pagamento',
  },
  {
    path: '/pendentes',
    name: 'Pedentes',
  },
]
</script>

<template>
  <aside class="bg-base-200 flex flex-col max-w-88 h-screen shadow-2xs">
    <NuxtLink
      to="/dashboard"
      class="my-8 mx-auto"
    >
      @Tayna contabilidade
    </NuxtLink>

    <nav>
      <ul
        v-for="list in menu"
        :key="list.name"
        class="menu bg-base-200 rounded-box w-56 text-center"
      >
        <NuxtLink
          :to="list.path"
          class="font-bold hover:underline"
        >
          {{ list.name }}
        </NuxtLink>
      </ul>
    </nav>

    <div class="mx-auto mt-8">
      <button>
        Sair
      </button>
    </div>
  </aside>
</template>
