-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "empresa" VARCHAR(100) NOT NULL,
    "cnpj" VARCHAR(20) NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "dtCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campanha" (
    "id" SERIAL NOT NULL,
    "criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descricao" VARCHAR(100) NOT NULL,
    "ativa" BOOLEAN NOT NULL,
    "observ" VARCHAR(300) NOT NULL,
    "clienteid" INTEGER NOT NULL,

    CONSTRAINT "Campanha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "tel" VARCHAR(20) NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "envCliente" BOOLEAN NOT NULL,
    "observ" VARCHAR(300) NOT NULL,
    "campanhaid" INTEGER NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cnpj_key" ON "Cliente"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Campanha_descricao_key" ON "Campanha"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "Lead_tel_key" ON "Lead"("tel");

-- AddForeignKey
ALTER TABLE "Campanha" ADD CONSTRAINT "Campanha_clienteid_fkey" FOREIGN KEY ("clienteid") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_campanhaid_fkey" FOREIGN KEY ("campanhaid") REFERENCES "Campanha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
