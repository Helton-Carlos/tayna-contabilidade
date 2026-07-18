<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Área do Cliente</h1>
        <p class="py-6">
          Seja bem-vindo à plataforma digital da Tayná Contabilidade. Acesse sua
          conta para gerenciar guias, documentos e acompanhar a evolução fiscal
          da sua empresa de forma rápida e segura.
        </p>
      </div>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div class="card-body">
          <fieldset class="fieldset">
            <label class="label">E-mail de acesso</label>
            <input
              type="email"
              class="input"
              placeholder="exemplo@empresa.com"
            />

            <label class="label">Senha</label>
            <input type="password" class="input" placeholder="••••••••" />

            <div><a class="link link-hover text-sm">Esqueceu a senha?</a></div>
            <button class="btn btn-primary mt-4">Entrar na Plataforma</button>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>
