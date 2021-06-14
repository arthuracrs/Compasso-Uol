# Compasso-Uol

## Tecnologias Utilizadas:
<!--ts-->
   * Docker v20.10.7
   * Docker-Compose v1.29.2
   * Node v16.3.0
   * Express
<!--te-->

## Quick Start

Modo Production
Para modo de produção, é necessário utilizar o docker-compose. 
```bash
$ docker-compose up -d
```
Modo Development

```bash
$ npm run dev
```
Executar Testes de integração com o Mocha
```bash
$ npm run test
```
Executar verificação com do Eslint
```bash
$ npm run eslint
```

## operações expostas como endpoints REST:

Cadastrar cidade: POST /api/v1/cities
Cadastrar cliente: POST /api/v1/clients
Consultar cidade pelo nome: GET /api/v1/cities/?city=<NOME DA CIDADE>
Consultar cidade pelo estado: GET /api/v1/cities/?state=<ESTADO DA CIDADE>
Consultar cliente pelo nome: GET /api/v1/clients/?name=<NOME DO CLIENTE>
Consultar cliente pelo Id: GET /api/v1/clients/?id=<ID DO CLIENTE>
Remover cliente: DELETE /api/v1/clients/<ID DO CLIENTE>
Alterar o nome do cliente PUT /api/v1/clients/<ID DO CLIENTE>
