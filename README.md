# Teste de aptidão para a empresa IN8

### Link para aplicação:

#### [IN8 - API](https://in8.onrender.com/)
#### [IN8DEV - Landing Page](https://in8dev.vercel.app/)
___
>
>> - Peço paciencia ao inicializar a Landing page. 
>>
>> Uma vez que a API usa uma plataforma sem custo para sua hospedagem, a mesma acaba por levar um pouco mais de tempo para disponibilizar os dados
>> Favor aguardar em torno de alguns segundos para a API ser inicializada, ou acessar seu [link](https://in8.onrender.com/) no seu navegador para otimizar sua experiência


### Este repositório foi criado com o intuito de atestagem de aptidão FullStack para a empresa [IN8 - Produtos Digitais](https://in8.com.br)

## Tecnologias aplicadas

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

### Conteúdo do repositório:

Neste repositório estão incluídos

- Landing page para cadastro de usuários apresentando fundamentos em React.
- API que administra dados de cadastro da landing page IN8DEV apresentando fundamentos em NestJS e Prisma.

## Pré-requisitos

- **Node** com versão superior ou igual que 16.15.0 - [Node Download](https://nodejs.org/pt-br/download/)
- **NPM** com versão superior ou igual que 8.5.5 - [Npm Download](https://www.npmjs.com/package/download)
- **Nest.js** com versão superior ou igual que 8.5.5 - [Nest Download](https://docs.nestjs.com/)
- **PostgreSQL** com versão superior ou igual que 8.2.6 - [PostgreSQL Download](https://www.postgresql.org/download/)

### Instruções de uso.
```
$ git clone https://github.com/Malkavianson/in8.git
```
---

> #### As aplicações podem ser utilizadas de forma conjunta ou separada
>
> #### para instruções de uso individual favor seguir as instruções dos respectivos arquivos ReadMe

---

### Utilização direta à partir da pasta raiz deste repositório

Na pasta raiz do projeto podem ser executados os seguintes comandos:

## Instalando as dependências e construindo as aplicações

```
$ npm run buildApi
$ npm run buildFront
```

## Iniciando o estágio de produção

```
$ npm run startApi
$ npm run startFront
```

> ## Front-end
>
> - Ao executar a landing page acesse [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador de forma local.
> - Para esta aplicação foi desenvolvida uma SPA que cadastra dados e transmite seus dados para uma [API](https://in8.onrender.com/) e recebe os seus respectivos dados para exibí-los como componente.

> ## Back-end
>
> - Para conseguir trabalhar com o banco de dados você deverá criar um arquivo .env e adicionar uma url de conexão com seu Postgres local com a chave DATABASE_URL.
>   Exemplo:
>
> ```
> DATABASE_URL="postgresql://yourUser:0000000@localhost:PORT/database"
> ```
>
> - Acesse [http://localhost:3333](http://localhost:3333) para visualizá-lo em seu navegador de forma local
>
> Você pode acessar a lista de endpoints e funcionalidades da aplicação em [Swagger](https://in8.onrender.com/docs#/), lá é possível testar todas as rotas.

> ## Autor
>
> - [Alexandre dos Santos Pereira Neto](https://github.com/Malkavianson)

---
