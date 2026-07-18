<script lang="ts" setup>
import { servicos, diferenciais } from '~/utils/home'
</script>

<template>
  <div>
    <Hero />

    <section class="py-20 px-6 bg-base-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-4">
          Nossos Serviços
        </h2>
        <p class="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Soluções contábeis completas para sua empresa crescer com segurança e
          tranquilidade.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(servico, index) in servicos"
            :key="index"
            class="card bg-base-200 shadow-md hover:shadow-xl transition-shadow"
          >
            <div class="card-body">
              <span class="text-4xl mb-2">{{ servico.icone }}</span>
              <h3 class="card-title">
                {{ servico.titulo }}
              </h3>
              <p class="text-base-content/70">
                {{ servico.descricao }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6 bg-primary text-primary-content">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">
          Por que escolher a Tayná Contabilidade?
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div
            v-for="(item, index) in diferenciais"
            :key="index"
          >
            <p class="text-4xl font-bold">
              {{ item.numero }}
            </p>
            <p class="text-sm mt-2 opacity-80">
              {{ item.texto }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 bg-base-100">
      <div
        class="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center"
      >
        <div class="flex-1">
          <h2 class="text-3xl font-bold mb-4">
            Sobre a Tayná
          </h2>
          <p class="text-base-content/70 mb-4">
            Com mais de 10 anos de atuação no mercado contábil, Tayná é uma
            contadora experiente que une conhecimento técnico à praticidade do
            atendimento digital.
          </p>
          <p class="text-base-content/70 mb-6">
            Seu compromisso é simplificar a contabilidade para que você foque no
            que importa: fazer seu negócio crescer.
          </p>
          <div class="flex gap-3">
            <span class="badge badge-primary badge-lg">CRC Ativo</span>
            <span class="badge badge-secondary badge-lg">Especialista em Tributação</span>
          </div>
        </div>
        <div class="flex-1 flex justify-center">
          <div
            class="w-64 h-64 rounded-full bg-base-200 flex items-center justify-center"
          >
            <span class="text-6xl">👩‍💼</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6 bg-base-200">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">
          Pronto para organizar sua contabilidade?
        </h2>
        <p class="text-base-content/70 mb-8">
          Entre em contato e receba uma proposta personalizada para sua empresa.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/55SEUNUMERO"
            class="btn btn-primary btn-lg"
          >
            📱 Falar no WhatsApp
          </a>
          <NuxtLink
            to="/contato"
            class="btn btn-outline btn-lg"
          >
            ✉️ Enviar Mensagem
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
