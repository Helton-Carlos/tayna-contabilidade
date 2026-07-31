<script setup lang="ts">
import HeaderDashboard from '~/components/HeaderDashboard.vue'
import SideBar from '~/components/SideBar.vue'

const menu = ref<boolean>(true)

function toggleMenu() {
  menu.value = !menu.value
}
</script>

<template>
  <div>
    <HeaderDashboard
      @open-menu="toggleMenu"
    />
    <div class="flex">
      <SideBar v-if="menu" />
      <div class="flex flex-col min-h-screen">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
