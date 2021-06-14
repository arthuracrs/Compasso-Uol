# Compasso-Uol

operações expostas como endpoints REST:

Cadastrar cidade: POST /api/v1/cities
Cadastrar cliente: POST /api/v1/clients
Consultar cidade pelo nome: GET /api/v1/cities/?city=<NOME DA CIDADE>
Consultar cidade pelo estado: GET /api/v1/cities/?state=<ESTADO DA CIDADE>
Consultar cliente pelo nome: GET /api/v1/clients/?name=<NOME DO CLIENTE>
Consultar cliente pelo Id: GET /api/v1/clients/?id=<ID DO CLIENTE>
Remover cliente: DELETE /api/v1/clients/<ID DO CLIENTE>
Alterar o nome do cliente PUT /api/v1/clients/<ID DO CLIENTE>
