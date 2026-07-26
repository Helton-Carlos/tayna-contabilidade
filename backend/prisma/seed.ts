import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@taynacontabilidade.com.br' },
    update: {},
    create: {
      name: 'Administrador',
      email: 'admin@taynacontabilidade.com.br',
      role: 'ADMIN',
    },
  });

  console.log('Seed executado com sucesso:');
  console.log({ admin });
}

main()
  .catch((e) => {
    console.error('Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
