import { defineStore } from 'pinia'
import type { User } from '~/types/user'

export const useUser = defineStore('user', () => {
  const user = ref<User | null>(null)

  function login(value: User) {
    user.value = value

    navigateTo('/dashboard')
  }

  function logout(value: User) {
    return user.value = value
  }

  return { user, login, logout }
})
