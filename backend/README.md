# Backend — Tayná Contabilidade

API construída com [NestJS](https://nestjs.com/) + [Prisma](https://www.prisma.io/) + PostgreSQL.

## Pré-requisitos

- Node.js 18+
- PostgreSQL rodando localmente ou em nuvem

## Instalação

```bash
npm install
```

## Configuração do Banco de Dados

1. Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp .env.example .env
```

2. Edite o `.env` com a URL do seu PostgreSQL:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO"
```

## Prisma

### Gerar o client

Sempre que alterar o `prisma/schema.prisma`, rode:

```bash
npx prisma generate
```

### Criar/aplicar migrations

Para criar uma nova migration durante o desenvolvimento:

```bash
npx prisma migrate dev --name nome-da-migration
```

Para aplicar migrations em produção:

```bash
npx prisma migrate deploy
```

### Seed (dados iniciais)

Para popular o banco com dados iniciais (usuário admin):

```bash
npx prisma db seed
```

O seed cria um usuário administrador padrão. O comando pode ser rodado múltiplas vezes sem duplicar dados.

### Visualizar o banco

Para abrir o Prisma Studio (interface visual do banco):

```bash
npx prisma studio
```

## Rodando o projeto

```bash
# desenvolvimento (watch mode)
npm run start:dev

# produção
npm run build
npm run start:prod
```

## Scripts disponíveis

| Comando              | Descrição                                     |
| -------------------- | --------------------------------------------- |
| `npm run start:dev`  | Inicia em modo desenvolvimento com hot-reload |
| `npm run build`      | Compila o projeto                             |
| `npm run start:prod` | Inicia em modo produção                       |
| `npm run lint`       | Roda o ESLint com auto-fix                    |
| `npm run test`       | Roda os testes unitários                      |
| `npm run test:e2e`   | Roda os testes end-to-end                     |

## Estrutura do projeto

```
backend/
├── prisma/
│   ├── schema.prisma      → Modelos do banco de dados
│   ├── migrations/        → Histórico de alterações do banco
│   └── seed.ts            → Dados iniciais (admin)
├── src/
│   ├── prisma/            → Módulo global do Prisma
│   ├── user/              → Módulo de usuários (CRUD)
│   ├── app.module.ts      → Módulo raiz
│   └── main.ts            → Ponto de entrada
├── prisma.config.ts       → Configuração do Prisma v7
└── .env                   → Variáveis de ambiente (não commitado)
```
