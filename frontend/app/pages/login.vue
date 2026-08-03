<script lang="ts" setup>
import { reactive, ref, toRaw } from 'vue'
import { useStorage } from '@vueuse/core'
import { useUser } from '~/stores/user'
import type { IForm } from '~/types/form'

const status = ref<boolean>(true)
const checkbox = ref<boolean | undefined>(undefined)
const LOCALSTORAGE = 'user_save'

const { login } = useUser()

const form = reactive<IForm>({
  name: '',
  email: '',
  password: '',
  check: undefined,
})

function submit() {
  if (status.value) {
    const { name, email, password } = toRaw(form)

    if (!email || !password) {
      alert('Preencha todos os campos!')
      return
    }

    const user = {
      id: '1',
      name: name || 'Usuário',
      email,
      password,
    }

    login(user)

    return
  }

  if (!status.value) {
    useStorage(LOCALSTORAGE, form)

    register()
  }
}

function register() {
  status.value = !status.value
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
      @submit.prevent="submit()"
    >
      <h2 class="text-2xl font-bold mb-6 text-center">
        {{ status ? "Login" : "Cadastra-se" }} na Plataforma
      </h2>

      <label
        v-if="!status"
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
        v-if="status"
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
          {{ status ? "Entrar" : "Salvar" }}
        </button>

        <p
          class="text-sm text-gray-00 hover:text-purple-700 hover:cursor-pointer hover:underline transition-colors duration-300"
          @click="register"
        >
          {{ status ? "Quero me cadastrar!" : "Voltar" }}
        </p>
      </div>
    </form>
  </div>
</template>
