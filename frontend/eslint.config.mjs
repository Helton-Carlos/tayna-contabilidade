import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: true,
  },
}).append({
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': ['error', {
      html: { void: 'always', normal: 'never', component: 'always' },
    }],
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits'],
    }],
    'vue/no-unused-vars': 'error',
    'vue/no-v-html': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'off',
  },
})
