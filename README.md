# Projects - API

## Rodando a aplicação

### Setup inicial

- `git clone https://github.com/LeonardoCavachini/ProjectApi.git`

- entre na pasta `server`

- adicione um arquivo `.env` com as seguintes vaiaveis de ambiente.

DB_PASS=`senha para o banco`

DB_USER=`nome user`

DB_NAME=`nome do banco`

PORT=`ex:3001`

SECRET_KEY=`secret`

HOST=`sera usado como nome do container`

DATABASE_URL=`postgresql://${DB_USER}:${DB_PASS}@localhost:5432/${DB_NAME}?shemas=public`

Este projeto precisa do docker para subr o banco de dados, no seu terminal digite `docker compose up `.
Prontinho agora você ja pode brincar com a aplicação.
caso não tenha o **Docker** instalado, acesse [Docker](https://www.docker.com/) para mais detalhes.

- rode npm install

- rode npm prisma

- rode npm dev

#### entre na pasta `web`

- rode npm install

- rode npm dev

## Endpoints

- Registar usuario.
  url `http://localhost:PORT/register`.
  method: POST
  body = `{name: Jair Bolsonaro, username:jair.bolsonaro}`

- Logar usuario.
  url `http://localhost:PORT/login`.
  method: POST
  body = `{name: Jair Bolsonaro, username:jair.bolsonaro}`

- Criar projeto.
  url `http://localhost:PORT/project/create`.
  method: POST
  headers: {
  Authorization: Token
  username
  }
  body = `{cost:500, deadline: "2022-12-09T18:50:47.000Z", title: "nome projeto", zip_code: 29010070}`

- Ver todos os projetos.
  url `http://localhost:PORT/project/showAll`.
  method: GET
  headers: {
  Authorization: Token
  username
  }

- Ver um projeto específico.
  url `http://localhost:PORT/project/:id`.
  method: GET
  headers: {
  Authorization: Token
  username
  }

- Atualizar projeto
  url `http://localhost:PORT/project/:id`.
  method: PUT
  headers: {
  Authorization: Token
  username
  }

- Concluir projeto
  url `http://localhost:PORT/project/:id/done`.
  method: PATCH
  headers: {
  Authorization: Token
  username
  }

- Deletar projeto
  url `http://localhost:PORT/project/:id`.
  method: DELETE
  headers: {
  Authorization: Token
  username
  }
