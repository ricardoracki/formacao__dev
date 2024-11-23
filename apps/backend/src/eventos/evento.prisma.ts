import { Injectable } from '@nestjs/common';
import { Convidado, Evento } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  salvar(evento: Evento) {
    return this.prisma.evento.create({
      data: {
        ...(evento as any),
        convidados: { create: evento.convidados },
      },
    });
  }

  salvarConvidado(evento: Evento, convidado: Convidado) {
    return this.prisma.convidado.create({
      data: {
        ...convidado,
        qtdeAcompanhantes: +(convidado.qtdeAcompanhantes ?? 0),
        Evento: { connect: { id: evento.id } },
      },
    });
  }

  buscarTodos(): Promise<Evento[]> {
    return this.prisma.evento.findMany() as any;
  }

  async buscarPorId(
    id: string,
    completo: boolean = false,
  ): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      where: { id },
      include: { convidados: completo },
    }) as any;
  }

  async buscarPorAlias(
    alias: string,
    completo: boolean = false,
  ): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      where: { alias },
      select: {
        id: true,
        name: true,
        alias: true,
        descricao: true,
        imagem: true,
        imagemBackground: true,
        data: true,
        local: true,
        senha: completo,
        convidados: completo,
        publicoEsperado: completo,
      },
    }) as any;
  }
}
