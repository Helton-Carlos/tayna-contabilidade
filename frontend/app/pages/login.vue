<script lang="ts" setup>
import { reactive, ref } from 'vue'

interface IForm {
  nome?: string
  email: string
  password: string
}

const login = ref<boolean>(true)
const checkbox = ref<boolean>(false)
const form = reactive<IForm>({
  nome: '',
  email: '',
  password: '',
})

async function submit() {
  if (form.nome || form.email || form.password) {
    alert('Por favor, preencha todos os campos.')
  }

  if (!login.value) {
    alert('Por favor, preencha todos os campos.')
  }
}

function register() {
  login.value = !login.value
}
</script>

<template>
  <div>
    <form
      class="bg-gray-50 w-95 mx-auto p-4 rounded-lg shadow-md"
      @submit.prevent="submit"
    >
      <h2 class="text-2xl font-bold mb-6 text-center">
        {{ login ? "Login" : "Cadastra-se" }} na Plataforma
      </h2>

      <label
        v-if="!login"
        class="floating-label"
      >
        <span>Nome Completo</span>
        <input
          v-model="form.email"
          type="text"
          placeholder="mail@site.com"
          class="w-full input input-md my-4"
        />
      </label>

      <label class="floating-label">
        <span>E-mail</span>
        <input
          v-model="form.email"
          type="text"
          placeholder="mail@site.com"
          class="w-full input input-md my-4"
        />
      </label>

      <label class="floating-label">
        <span>Senha</span>
        <input
          v-model="form.password"
          type="password"
          placeholder="••••••••"
          class="w-full input input-md my-4"
        />
      </label>

      <label
        v-if="login"
        class="flex items-center gap-2"
      >
        <input
          v-model="checkbox"
          type="checkbox"
        />
        <span>Lembrar-me</span>
      </label>

      <div class="flex gap-4 items-center my-4">
        <button type="submit">
          {{ login ? "Entrar" : "Salvar" }}
        </button>

        <p
          class="text-sm text-gray-00 hover:text-purple-700 hover:cursor-pointer hover:underline transition-colors duration-300"
          @click="register"
        >
          {{ login ? "Quero me cadastrar!" : "Voltar" }}
        </p>
      </div>
    </form>
  </div>
</template>
