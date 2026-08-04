import { defineStore } from 'pinia'
import type { User } from '~/types/user'
import { useStorage } from '@vueuse/core'

export const useUser = defineStore('user', () => {
  const user = ref<User | null>(null)
  const LOCALSTORAGE = 'user_memory'

  function login(value: User) {
    const { id, name, email } = value
    user.value = { id, name, email }
    useStorage(LOCALSTORAGE, user.value)

    navigateTo('/dashboard')
  }

  function logout() {
    localStorage.removeItem(LOCALSTORAGE)

    navigateTo('/login')
  }

  return { user, login, logout }
})
