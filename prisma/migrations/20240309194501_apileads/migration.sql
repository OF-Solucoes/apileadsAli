-- CreateTable
CREATE TABLE "Usuario" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "empresa" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "ativa" BOOLEAN NOT NULL,
    "dtCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campanha" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Descricao" VARCHAR(100) NOT NULL,
    "ativa" BOOLEAN NOT NULL,
    "Obs" VARCHAR(300) NOT NULL,
    "clienteid" UUID NOT NULL,

    CONSTRAINT "Campanha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "contato" VARCHAR(20) NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "envCliente" BOOLEAN NOT NULL,
    "Obs" VARCHAR(300) NOT NULL,
    "campanhaid" UUID NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Lead_contato_key" ON "Lead"("contato");

-- AddForeignKey
ALTER TABLE "Campanha" ADD CONSTRAINT "Campanha_clienteid_fkey" FOREIGN KEY ("clienteid") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_campanhaid_fkey" FOREIGN KEY ("campanhaid") REFERENCES "Campanha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
