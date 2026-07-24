<script lang="ts" setup>
import { reactive, ref, toRaw } from 'vue'
import { useStorage } from '@vueuse/core'

interface IForm {
  name?: string
  email: string
  password: string
  check?: boolean | undefined
}

const login = ref<boolean>(true)
const checkbox = ref<boolean | undefined>(undefined)
const LOCALSTORAGE = 'user_save'

const form = reactive<IForm>({
  name: '',
  email: '',
  password: '',
  check: undefined,
})

function submit() {
  if (!login.value) {
    alert('Por favor, preencha todos os campos.')
    return
  }

  if (form.name || form.email || form.password) {
    useStorage(LOCALSTORAGE, form)
  }
}

function register() {
  login.value = !login.value
}

function clearLocalStorage() {
  localStorage.removeItem(LOCALSTORAGE)
}

function getLocalStorage() {
  const user = useStorage(LOCALSTORAGE, form)
  const { email, password, check } = toRaw(user.value)

  if (check) {
    form.email = email
    form.password = password
    checkbox.value = check
  }
  else {
    clearLocalStorage()
  }
}

watch(checkbox, (newQuestion) => {
  if (newQuestion) {
    useStorage(LOCALSTORAGE, { ...form, check: checkbox.value })
  }
  else {
    clearLocalStorage()
  }
})

onMounted(() => {
  getLocalStorage()
})
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
          v-model="form.name"
          type="text"
          placeholder="John Souza"
          class="w-full input input-md my-4"
        />
      </label>

      <label class="floating-label">
        <span>E-mail</span>
        <input
          v-model="form.email"
          type="email"
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
