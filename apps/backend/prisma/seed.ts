import { PrismaClient } from '@prisma/client';
import { eventos } from 'core';

async function seed() {
  const prisma = new PrismaClient();
  const transactions = eventos.map(async (evento) => {
    await prisma.evento.create({
      data: {
        id: evento.id,
        name: evento.name,
        descricao: evento.descricao,
        imagem: evento.imagem,
        senha: evento.senha,
        alias: evento.alias,
        data: evento.data,
        local: evento.local,
        imagemBackground: evento.imagemBackground,
        publicoEsperado: evento.publicoEsperado,
        convidados: {
          create: evento.convidados.map((convidado) => ({
            id: convidado.id,
            name: convidado.name,
            email: convidado.email,
            qtdeAcompanhantes: convidado.qtdeAcompanhantes,
            confirmado: convidado.confirmado,
            possuiAcompanhante: convidado.possuiAcompanhante,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();
