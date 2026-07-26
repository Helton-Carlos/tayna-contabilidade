import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashedPassword = await bcrypt.hash('Admin@123', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@taynacontabilidade.com.br' },
    update: {},
    create: {
      name: 'Administrador',
      email: 'admin@taynacontabilidade.com.br',
      password: hashedPassword,
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
