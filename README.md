# Omnistack11-beTheHero
Este projeto foi desenvolvido seguindo as aulas da semana OmniStack 11.0 da [RocketSeat](https://rocketseat.com.br/).

O repositório segue a idéia de [Monorepo](https://www.atlassian.com/git/tutorials/monorepos) integrando [backend](https://github.com/hitk1/omnistack11-beTheHero/tree/master/backend), [frontend](https://github.com/hitk1/omnistack11-beTheHero/tree/master/frontend) e [mobile](https://github.com/hitk1/omnistack11-beTheHero/tree/master/mobile) para facilitar a visualização dos projetos.

## Instalação

A instalação e configuração de cada projeto deverá ser feita individualmente (os projetos foram desenvolvido utilizando o [yarn](https://classic.yarnpkg.com/pt-BR/) certifique-se de ter instalado antes):

# Usabilidade

## Backend

Criando o banco de dados:

```bash
yarn knex migrate:latest
```
Caso queira deixar o projeto em execução no maquina e não se preocupar, pode usar o [PM2](https://www.npmjs.com/package/pm2) se não, há um script criado para testes locais

Usando node para testes locais:
```bash
yarn start
```

Usando nodemon:
```bash
yarn dev
```


## Frontend (Web)
Depois de ter instalado todas as dependências do projeto basta executar:

```bash
yarn start
```

## Mobile
Depois de ter instalado as dependências do projeto basta executar:

```bash
yarn start
```

Como o mobile foi desenvolvido utilizando o [Expo](https://expo.io/), certifique-se de tê-lo instalado no seu dispositivo para poder ter acesso ao aplicativo.
Caso esteja utilizando um emulador, esperar até que a pagina do Expo esteja aberto no navegador e utilizar as opções  no menu lateral esquerdo
