import { Evento } from '../evento'

const id1 = 'd1d697c0-09ac-45f7-b72f-8f065a1967e9'
const id2 = 'd1d697c0-09ac-45f7-b72f-8f065a1967e9'
const id3 = '1489c4d5-25c4-40b8-9174-06ba072a711a'
const id4 = '09a65821-e951-41f1-bf1b-7a3dd2c9a3f8'
const id5 = 'a4198088-1f84-4a33-a68c-4a5b1ba6b28a'
const id6 = 'd24b1b90-a88e-4e13-9356-dc48a3bb77aa'
const id7 = '1f3222d4-c353-47fa-b0e1-2728cc6574a9'
const id8 = 'c72878eb-caa7-466e-983a-39c58203f1d5'
const id9 = '645cdbcd-0634-4eda-9ab3-b03c9c5d58a0'
const id10 = '1d5d1f4c-4b9b-4cdd-b98f-7b5c8f1c6f98'
const id11 = 'e1fe3e1b-f107-46e9-a790-4255bab72c07'
const id12 = '0cd70785-a4dc-45e5-b213-b03afc1990a1'
const id13 = 'ae3d25a7-72dd-47d6-9152-3075214111a3'
const id14 = '41c57747-d106-480b-a3c6-3aef0e813e6c'
const id15 = '522a1198-b335-4790-a8ec-38a10d3dd654'
const id16 = '04fc4a1f-37d5-44cc-9d9c-a695c465c47f'
const id17 = 'b54239b0-48e7-434e-842e-52d6db59f917'
const id18 = '10b08e1e-7c63-45c2-be03-3a81d2881d35'
const id19 = 'a790cf27-c544-4807-b1e0-3a21c40eba4c'
const id20 = '7081c1fc-7f28-4e24-8b86-3653d1264c2b'
const id21 = '755229fa-c463-483e-bde7-4b8ce86816a7'
const id22 = 'f5dfd30d-9037-4081-b5db-2d656e93f2bb'
//cSpell:disable

const eventos: Evento[] = [
  {
    id: id1,
    alias: 'festa-empresa',
    data: new Date('2024-12-15T19:00:00'),
    senha: 'abc123',
    name: 'Festa de Fim de Ano - Empresa X',
    local: 'Salão de Festas da Empresa X',
    descricao:
      'Confraternização de fim de ano da Empresa X, com música ao vivo e coquetel.',
    imagem:
      'https://buffetgiardini.com.br/wp-content/uploads/2021/10/eventos-corporativos-retomada-e-programacao-dos-mais-diferentes-formatos.jpg',
    imagemBackground: 'https://example.com/imagemBackground1.jpg',
    publicoEsperado: 50,
    convidados: [
      {
        id: id2,
        name: 'Carlos Souza',
        email: 'carlos.souza@example.com',
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: id3,
        name: 'Fernanda Oliveira',
        email: 'fernanda.oliveira@example.com',
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: id4,
        name: 'João Silva',
        email: 'joao.silva@example.com',
        confirmado: false,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: id5,
        name: 'Maria Santos',
        email: 'maria.santos@example.com',
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1,
      },
    ],
  },
  {
    id: id6,
    alias: 'casamento-pedro-livia',
    data: new Date('2024-11-20T15:00:00'),
    senha: 'xpto789',
    name: 'Casamento de Pedro e Lívia',
    local: 'Igreja São José',
    descricao:
      'Cerimônia religiosa seguida de recepção na casa de eventos Jardim das Flores.',
    imagem:
      'https://cdn.prod.website-files.com/636d4036709c50b9ac704e98/65b157c74e6fb6c92b778c37_eventos-inovacao-tecnologia_2024_numerik.jpg',
    imagemBackground: 'https://example.com/imagemBackground2.jpg',
    publicoEsperado: 200,
    convidados: [
      {
        id: id7,
        name: 'Ana Costa',
        email: 'ana.costa@example.com',
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: id8,
        name: 'Ricardo Lima',
        email: 'ricardo.lima@example.com',
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: id9,
        name: 'Patricia Menezes',
        email: 'patricia.menezes@example.com',
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: id10,
    alias: 'show-rock',
    data: new Date('2024-10-25T21:00:00'),
    senha: 'rockstar987',
    name: 'Show de Rock - Banda X',
    local: 'Arena de Shows Central',
    descricao: 'Grande show de rock com a banda X, com abertura da banda Y.',
    imagem:
      'https://diariodocomercio.com.br/wp-content/uploads/2021/01/pag09f1-11.jpg',
    imagemBackground: 'https://example.com/imagemBackground3.jpg',
    publicoEsperado: 5000,
    convidados: [
      {
        id: id11,
        name: 'Roberto Almeida',
        email: 'roberto.almeida@example.com',
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 2,
      },
      {
        id: id12,
        name: 'Lucas Costa',
        email: 'lucas.costa@example.com',
        confirmado: false,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: id13,
        name: 'Cláudia Pereira',
        email: 'claudia.pereira@example.com',
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: id14,
    alias: 'aniversario-maria',
    data: new Date('2024-12-05T18:00:00'),
    senha: 'party2024',
    name: 'Aniversário de Maria',
    local: 'Casa da Maria',
    descricao:
      'Festa de aniversário de Maria com amigos e familiares. Com comida e bebida à vontade.',
    imagem:
      'https://www.nuvent.com.br/wp-content/uploads/2020/01/espacoparaeventoscorporativos.jpeg',
    imagemBackground: 'https://example.com/imagemBackground4.jpg',
    publicoEsperado: 30,
    convidados: [
      {
        id: id15,
        name: 'Juliana Fernandes',
        email: 'juliana.fernandes@example.com',
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: id16,
        name: 'Tiago Rodrigues',
        email: 'tiago.rodrigues@example.com',
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: id17,
        name: 'Mariana Gomes',
        email: 'mariana.gomes@example.com',
        confirmado: false,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1,
      },
    ],
  },
  {
    id: id18,
    alias: 'conferencia-tecnologia',
    data: new Date('2024-11-10T09:00:00'),
    senha: 'tech2024',
    name: 'Conferência de Tecnologia 2024',
    local: 'Centro de Convenções TechWorld',
    descricao:
      'Conferência sobre inovação tecnológica com palestrantes renomados.',
    imagem:
      'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia13536/quero-trabalhar-com-eventos-cursos-cpt.jpg',
    imagemBackground: 'https://example.com/imagemBackground5.jpg',
    publicoEsperado: 1000,
    convidados: [
      {
        id: id19,
        name: 'Marcos Silva',
        email: 'marcos.silva@example.com',
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: id20,
        name: 'Roberta Alves',
        email: 'roberta.alves@example.com',
        confirmado: false,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: id21,
        name: 'Eduardo Martins',
        email: 'eduardo.martins@example.com',
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: id22,
        name: 'Tatiane Silva',
        email: 'tatiane.silva@example.com',
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1,
      },
    ],
  },
]

export default eventos

/******  a39c1efc-b0e5-4c3e-b619-9e04354e43b1  *******/
