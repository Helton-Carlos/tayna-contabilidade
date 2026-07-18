# Convenções do Projeto — Tayná Contabilidade

## Stack

- Nuxt 4 com estrutura na pasta `app/`
- Vue 3 com Composition API (`<script lang="ts" setup>`)
- TypeScript obrigatório
- Tailwind CSS v4 via `@tailwindcss/vite`
- daisyUI v5 para componentes de UI
- ESLint com `@nuxt/eslint-config`

## Estrutura de Pastas (frontend)

```
frontend/
├── app/
│   ├── assets/css/        → Estilos globais
│   ├── components/        → Componentes reutilizáveis (Header, Footer, Hero, etc.)
│   ├── layouts/           → Layouts do Nuxt (default.vue)
│   ├── pages/             → Rotas/Páginas
│   ├── stores/            → Pinia stores
│   ├── types/             → Interfaces e tipos TypeScript
│   └── utils/             → Dados estáticos, helpers e funções utilitárias
├── nuxt.config.ts
└── eslint.config.mjs
```

## Regras de Código

- Sempre usar TypeScript com tipagem explícita
- Componentes Vue seguem a ordem: `<script>` → `<template>` → `<style>`
- Não usar `any` — tipar corretamente ou criar interface em `types/`
- Dados estáticos e constantes ficam em `utils/`, nunca diretamente no componente
- Stores ficam em `stores/` usando Pinia com Composition API (`defineStore` + `setup`)
- Tipos/interfaces compartilhados ficam em `types/`
- Nomes de componentes em PascalCase (Header.vue, Footer.vue)
- Nomes de arquivos em páginas em kebab-case (minha-pagina.vue)
- Textos da interface em português (pt-BR)

## UI e Estilo

- Usar componentes do daisyUI sempre que disponível (btn, card, badge, input, etc.)
- Classes utilitárias do Tailwind para layout e espaçamento
- Tema controlado via `data-theme` no `app.vue`
- Cores customizadas definidas no CSS com variáveis do Tailwind v4 se necessário

## Lint

- Código deve passar no `npm run lint` antes de qualquer commit
- Usar `npm run lint:fix` para correção automática
- Seguir as regras configuradas no `eslint.config.mjs`
