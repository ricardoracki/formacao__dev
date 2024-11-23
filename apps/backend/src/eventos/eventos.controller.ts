import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import {
  complementarConvidado,
  complementarEvento,
  Convidado,
  Data,
  Evento,
  Id,
} from 'core';
import { EventoPrisma } from './evento.prisma';

@Controller('eventos')
export class EventosController {
  constructor(readonly repo: EventoPrisma) {}

  @Get()
  async buscarEventos() {
    return await this.repo.buscarTodos();
  }

  @Get(':idOuAlias')
  async buscarEvento(@Param('idOuAlias') idOuAlias: string) {
    const evento = Id.valido(idOuAlias)
      ? await this.repo.buscarPorId(idOuAlias)
      : await this.repo.buscarPorAlias(idOuAlias);

    if (!evento) return null;
    return this.serializar(evento);
  }

  @Get('validar/:alias/:id')
  async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const evento = await this.repo.buscarPorAlias(alias);
    return {
      valido: !evento || evento.id === id,
    };
  }

  @Post()
  async salvarEvento(@Body() evento: Evento) {
    const eventoCadastrado = await this.repo.buscarPorAlias(evento.alias);

    if (eventoCadastrado && eventoCadastrado.id !== evento.id) {
      throw new Error('Evento já existe');
    }

    const eventoCompleto = complementarEvento(this.deserializar(evento));

    await this.repo.salvar(eventoCompleto);
  }

  @Post(':alias/convidado')
  async salvarConvidado(
    @Param('alias') alias: string,
    @Body() convidado: Convidado,
  ) {
    const evento = await this.repo.buscarPorAlias(alias);
    if (!evento) throw new HttpException('Evento não encontrado', 400);

    const convidadoCompleto = complementarConvidado(convidado);

    await this.repo.salvarConvidado(evento, convidadoCompleto);
    return this.deserializar(evento);
  }

  @Post('acessar')
  async acessarEvento(@Body() dados: { id: string; senha: string }) {
    const { id, senha } = dados;
    const evento = await this.repo.buscarPorId(id);

    if (!evento) throw new HttpException('Evento nao encontrado', 400);
    if (evento.senha !== senha) throw new HttpException('Senha inválida', 400);

    return this.deserializar(evento);
  }

  private serializar(evento: Evento) {
    return {
      ...evento,
      data: Data.formatar(evento.data),
    };
  }

  private deserializar(evento: Evento) {
    return {
      ...evento,
      data: Data.parser(`${evento.data}`),
    };
  }
}
