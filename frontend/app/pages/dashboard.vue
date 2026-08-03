<script lang="ts" setup>
import { ref } from 'vue'
import { servicos } from '~/utils/dashboard'
import { useUser } from '~/stores/user'

const title = ref<string>('dashboard')

const store = useUser()

const { user } = storeToRefs(store)

definePageMeta({
  layout: 'standard',
})
</script>

<template>
  <div class="m-8">
    <div>
      <h2 class="text-2xl capitalize font-bold">
        {{ title }}
      </h2>
      <p>
        Olá {{ user?.name }}, bem-vindo(a) ao nosso sistema de cotabilidade
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 my-6 gap-6">
      <div
        v-for="(servico, index) in servicos"
        :key="index"
      >
        <Card
          :title="servico.title"
          :description="servico.description"
          :image="servico.image"
        />
      </div>
    </div>
  </div>
</template>
