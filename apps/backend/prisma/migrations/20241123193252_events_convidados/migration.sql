-- CreateTable
CREATE TABLE "eventos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alias" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "senha" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "imagemBackground" TEXT NOT NULL,
    "publicoEsperado" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "convidados" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmado" BOOLEAN NOT NULL,
    "possuiAcompanhante" BOOLEAN NOT NULL,
    "qtdeAcompanhantes" INTEGER NOT NULL,
    "eventoId" TEXT,
    CONSTRAINT "convidados_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "eventos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "eventos_alias_key" ON "eventos"("alias");
