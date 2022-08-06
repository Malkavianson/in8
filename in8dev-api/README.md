# [NEST API IN8DEV]('https://in8.onrender.com')

### Link para aplicação [https://in8.onrender.com](https://in8.onrender.com)

#### API em NEST para atestagem de aptidão

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)

Para esta aplicação foi desenvolvida uma API que administra dados de cadastro da landing page IN8DEV
Este apresenta fundamentos em NestJS e Prisma.

## Pré-requisitos

- **Node** com versão superior ou igual que 16.15.0 - [Node Download](https://nodejs.org/pt-br/download/)
- **NPM** com versão superior ou igual que 8.5.5 - [Npm Download](https://www.npmjs.com/package/download)
- **Nest.js** com versão superior ou igual que 8.5.5 - [Nest Download](https://docs.nestjs.com/)
- **PostgreSQL** com versão superior ou igual que 8.2.6 - [PostgreSQL Download](https://www.postgresql.org/download/)

## Scripts disponíveis

Na pasta raíz do projeto podem ser executados os seguintes comandos:

## Instalando as dependências:

```
$ npm install
```

## Executando o projeto

### Montagem

```
npm run Build
```

### Produção

```
npm run start
```

### Desenvolvimento

```
npm run dev
```

Para conseguir trabalhar com o banco de dados você deverá criar um arquivo .env e adicionar uma url de conexão com seu Postgres local com a chave DATABASE_URL.
Exemplo:

```
DATABASE_URL="postgresql://yourUser:0000000@localhost:PORT/database"
```

Acesse [http://localhost:3333](http://localhost:3333) para visualizá-lo em seu navegador de forma local

---

> ## Autor
>
> - [Alexandre dos Santos Pereira Neto](https://github.com/Malkavianson)

---

## Licença

- MIT License (MIT)

## Execução

## Funcionalidades

Para acessar a lista de endpoints e funcionalidades da aplicação, acesse a documentação do [Swagger](https://in8.onrender.com/docs#/), lá você poderá testar todas as rotas.

> ## comandos úteis:
>
> > - npx prisma generate - Atualiza o módulo prisma
> > - npx prisma db push - Atualiza a tabela do banco de dados
>
> ---

---
