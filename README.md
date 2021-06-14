# Compasso-Uol

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), 
[Node.js](https://nodejs.org/en/), 
[MongoDB](https://www.mongodb.com/)
[Docker](https://www.docker.com/),
[Docker-Compose](https://docs.docker.com/compose/),
[NPM](https://www.npmjs.com/)
## Tecnologias Utilizadas:
<!--ts-->
   * Docker v20.10.7
   * Docker-Compose v1.29.2
   * Node v16.3.0
   * MongoDB
<!--te-->
## Instalação 
```bash
git clone https://github.com/arthuracrs/Compasso-Uol
cd Compasso-Uol
docker-compose up -d
```
## Quick Start

- **Modo Production**.
Para o modo de produção, é necessário utilizar o docker-compose. Aqui o Banco de Dados será executado num container.
```bash
$ docker-compose up -d
```
- **Modo Development**.
 Aqui o Banco de Dados é executado no serviço MongoDB Atlas.

```bash
$ npm run dev
```
- **Executar Testes de integração com o Mocha**.
Aqui o Banco de Dados é executado no serviço MongoDB Atlas.
```bash
$ npm run test
```
- **Executar a verificação do Eslint**
```bash
$ npm run eslint
```

## operações expostas como endpoints REST:
<!--ts-->
* Cadastrar cidade: POST /api/v1/cities
   * ```bash
Payload:
{
  city: 'Petrolina',
  state: 'Pernambuco'
}
```
* Cadastrar cliente: POST /api/v1/clients
* Consultar cidade pelo nome: GET /api/v1/cities/?city= **NOME DA CIDADE**
* Consultar cidade pelo estado: GET /api/v1/cities/?state= **ESTADO DA CIDADE**
* Consultar cliente pelo nome: GET /api/v1/clients/?name= **NOME DO CLIENTE**
* Consultar cliente pelo Id: GET /api/v1/clients/?id= **ID DO CLIENTE**
* Remover cliente: DELETE /api/v1/clients/ **ID DO CLIENTE**
* Alterar o nome do cliente PUT /api/v1/clients/ **ID DO CLIENTE**
<!--te-->
