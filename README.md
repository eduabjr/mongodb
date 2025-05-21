
![Logo](https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb.png)


# MongoDB

[![Licença](https://img.shields.io/badge/Licença-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![Testes](https://img.shields.io/badge/Testes-Passando-brightgreen.svg)](https://github.com/seu-usuario/seu-repo/actions) 

[![Membros do Grupo](https://img.shields.io/badge/Membros%20do%20Grupo-5-blue.svg)](https://github.com/orgs/sua-organizacao/teams/seu-time) 


## Súmario

    Sobre
        Construído com
    Começando
        Pré-requisitos
        Uso
            Modelo de cortador de biscoitos
            Configuração manual
            Referência de variáveis
    Roteiro
    Contribuindo
    Apoiar
    Licença
    Agradecimentos




## Sobre
## Começando

O método recomendado para instalar
## Instrução de Instalação

Instale my-project com npm

```bash
  npm install my-project
  cd my-project
```

### Pré - Requisitos


## Instrução de Uso    
## Referência

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Roadmap

- Melhorar o suporte de navegadores

- Adicionar mais integrações


```bash

```

## Rodando os testes

Este documento descreve o roteiro de testes realizados na API de gerenciamento de tarefas construída com Node.js, Express e MongoDB. Os testes foram realizados utilizando ferramentas como Thunder Client.

A base da API está rodando localmente no seguinte endereço:
http://localhost:3000/tarefas

## 1. POST /tarefas – Criar nova tarefa (Sucesso)

Método: POST

Endpoint: /tarefas


Body JSON:
```bash
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente"
}
```

Esperado:
```bash
Retorno do Json com a Tarefa criada
```

Retornado:
```bash
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente",
  "_id": "681bc2af621c39beab5b6878",
  "dataCriacao": "2025-05-07T20:29:35.991Z",
  "__v": 0
}
```

Teste após atualização do arquivo de rotas:

Body JSON:
```bash
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente"
}
```

Esperado:
```bash
Retorno do Json com a Tarefa criada
```

Retornado:
![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/1.png)

sem alterações no método POST, continuando com o seu funcionamento correto



2. POST /tarefas – Criar nova tarefa (Erro: campo obrigatório faltando)
Método: POST
Endpoint: /tarefas
Body JSON:
{
  "descricao": "Sem título"
}
Esperado:
Erro 400 ou 500. Validação indicando campo obrigatório faltando.
Retornado:


Verificado em Teste(Por Lucas): O bloqueio para campo obrigatório está funcionando corretamente.
Teste após atualização do arquivo de rotas:
Body JSON:
{
  "descricao": "Sem título"
}
Esperado:
Erro 400 ou 500. Validação indicando campo obrigatório faltando.
Retornado:

após a atualização dos arquivos, o bloqueio do método POST para campos obrigatórios continua funcionando corretamente


3. GET /tarefas – Listar tarefas (Sucesso)
Método: GET
Endpoint: /tarefas
Esperado:
Status 200. Retorna array com todas as tarefas.
Retornado:

Verificado em teste(Por Lucas): A requisição GET apresenta erro, conforme imagem acima
Teste após atualização do arquivo de rotas:
Esperado:
Status 200. Retorna array com todas as tarefas.
Retornado:

Após a atualização do arquivo de rotas, com a inclusão da rota para o método GET feita corretamente, o método segue respondendo como esperado
4. PUT /tarefas/:id – Atualizar tarefa (Sucesso)
Método: PUT
Endpoint: /tarefas/{id}
Body JSON:
{
  "titulo": "Estudar Node.js (atualizado)",
  "status": "em andamento"
}
Esperado:
Status 200. Retorna JSON da tarefa atualizada.
Retornado:

Verificado em Teste(Por Lucas): A requisição PUT apresenta erro, conforme imagem acima
Teste após atualização do arquivo de rotas:
Body JSON:
{
  "titulo": "Estudar Node.js (atualizado)",
  "status": "em andamento"
}
Esperado:
Status 200. Retorna JSON da tarefa atualizada.
Retornado:

Após a atualização do arquivo de rotas, com a inclusão da rota para o método PUT feita corretamente, o método segue respondendo como esperado

5. PUT /tarefas/:id – Atualizar tarefa (Erro: ID inválido)
Método: PUT
Endpoint: /tarefas/123
Esperado:
Erro 404 ou 500. ID inválido ou tarefa não encontrada.
NÃO TESTADO, será testado quando a requisição primária estiver funcionando
Teste após atualização do arquivo de rotas:
Body JSON:
{
  "titulo": "testando ID inexistente",
  "status": "em andamento"
}
Esperado:
Erro 404 ou 500. ID inválido ou tarefa não encontrada.
Retornado:

após atualização do arquivo de rotas, com a inserção correta do método PUT no arquivo, o bloqueio para entrada de IDs inválidos está funcionando corretamente.
6. DELETE /tarefas/:id – Deletar tarefa (Sucesso)
Método: DELETE
Endpoint: /tarefas/{id}
Esperado:
Status 200. Mensagem de sucesso ao deletar tarefa.
Retornado:

Verificado em Teste(Por Lucas): A requisição DELETE apresenta erro, conforme imagem acima
Teste após atualização do arquivo de rotas:
Esperado:
Status 200. Mensagem de sucesso ao deletar tarefa.
Retornado:

Após a atualização do arquivo de rotas, com a inclusão da rota para o método DELETE feita corretamente, o método segue respondendo como esperado

7. DELETE /tarefas/:id – Deletar tarefa (Erro: ID não encontrado)
Método: DELETE
Endpoint: /tarefas/645a9ce9999f45c111111111
Esperado:
Erro 404. Mensagem de tarefa não encontrada.
	NÃO TESTADO, será testado quando a requisição primária estiver funcionando
Teste após atualização do arquivo de rotas:
Endpoint: /tarefas/645a9ce9999f45c111111111
Esperado:
Erro 404. Mensagem de tarefa não encontrada.
Retornado:

Após a atualização do arquivo de rotas, com a inclusão da rota para o método DELETE feita corretamente, o bloqueio para entrada de IDs inválidos está funcionando corretamente

8. Testes Extras de Validação
Teste
Esperado
Enviar status com valor inválido
Erro 400 ou 500 - Validação do status
Enviar campo extra no POST/PUT
Ignorado ou salvo (dependendo da modelagem)
Requisição sem Content-Type: application/json
Erro 400 - Parsing inválido


Estes testes garantem que a API esteja funcionando corretamente em seus endpoints principais.
Teste após atualização do arquivo de rotas:
8.1 Enviar status com valor inválido
Método: POST
Endpoint: /tarefas
Body JSON:
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "Teste_de_status_invalido"
}


Esperado:
Erro 400 ou 500 - Validação do status
Retornado:

O bloqueio para valor inválido no atributo está funcionando corretamente
8.2 Enviar campo extra no POST/PUT
8.2.1
Método: POST
Endpoint: /tarefas
Body JSON:
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente",
  "campo_extra":"Teste"
}
Esperado:
Ignorado ou salvo (dependendo da modelagem)
Retornado:

A aplicação ignora campos extras inseridos no Json e insere no banco de dados apenas campos reconhecidos .

8.2.2
Método: PUT
Endpoint: /tarefas/{id}
Body JSON:
{
  "titulo": "Estudar Node.js(teste 8.2.2)",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente",
  "campo_extra":"Teste"
}

Esperado:
Ignorado ou salvo (dependendo da modelagem)
Retornado:

A aplicação ignora campos extras inseridos no Json e insere no banco de dados apenas campos reconhecidos .

8.3 Requisição sem Content-Type: application/json
Método: POST
Endpoint: /tarefas
Esperado:
Erro 400 - Parsing inválido
Retornado:

Ao enviar uma requisição POST sem conteúdo Json o retorno da aplicação é um erro 500 indicando a falta de um campo obrigatório. Esse erro não era o comportamento esperado, mas impede requisições POST sem conteúdo Json

Roteiro de Testes da API de Tarefas (Testes em cloud)
Roteiro de testes realizados na API de gerenciamento de tarefas construída com Node.js, Express e MongoDB. Os testes foram realizados utilizando ferramentas como Thunder Client

A base da API está rodando localmente no seguinte endereço:
???
1. POST /tarefas – Criar nova tarefa
Método: POST
Endpoint: /tarefas
Body JSON:
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente"
}
Esperado:
Retorno do Json com a Tarefa criada
Retornado:

2. POST /tarefas – Criar nova tarefa (Erro: campo obrigatório faltando)
Método: POST
Endpoint: /tarefas
Body JSON:
{
  "descricao": "Sem título"
}
Esperado:
Erro 400 ou 500. Validação indicando campo obrigatório faltando.
Retornado:

3. GET /tarefas – Listar tarefas (Sucesso)
Método: GET
Endpoint: /tarefas
Esperado:
Status 200. Retorna array com todas as tarefas.
Retornado:

4. PUT /tarefas/:id – Atualizar tarefa (Sucesso)
Método: PUT
Endpoint: /tarefas/{id}
Body JSON:
{
  "titulo": "Estudar Node.js (atualizado)",
  "status": "em andamento"
}
Esperado:
Status 200. Retorna JSON da tarefa atualizada.
Retornado:

5. PUT /tarefas/:id – Atualizar tarefa (Erro: ID inválido)
Método: PUT
Endpoint: /tarefas/123
Body JSON:
{
  "titulo": "testando ID inexistente",
  "status": "em andamento"
}
Esperado:
Erro 404 ou 500. ID inválido ou tarefa não encontrada.
Retornado:

6. DELETE /tarefas/:id – Deletar tarefa (Sucesso)
Método: DELETE
Endpoint: /tarefas/{id}
Esperado:
Status 200. Mensagem de sucesso ao deletar tarefa.
Retornado:

7. DELETE /tarefas/:id – Deletar tarefa (Erro: ID não encontrado)
Método: DELETE
Endpoint: /tarefas/645a9ce9999f45c111111111
Esperado:
Erro 404. Mensagem de tarefa não encontrada.
Retornado:

8. Testes Extras de Validação
Teste
Esperado
Enviar status com valor inválido
Erro 400 ou 500 - Validação do status
Enviar campo extra no POST/PUT
Ignorado ou salvo (dependendo da modelagem)
Requisição sem Content-Type: application/json
Erro 400 - Parsing inválido


8.1 Enviar status com valor inválido
Método: POST
Endpoint: /tarefas
Body JSON:
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "Teste_de_status_invalido"
}


Esperado:
Erro 400 ou 500 - Validação do status
Retornado:

8.2 Enviar campo extra no POST/PUT
8.2.1
Método: POST
Endpoint: /tarefas
Body JSON:
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente",
  "campo_extra":"Teste"
}
Esperado:
Ignorado ou salvo (dependendo da modelagem)
Retornado:

8.2.2
Método: PUT
Endpoint: /tarefas/{id}
Body JSON:
{
  "titulo": "Estudar Node.js(teste 8.2.2)",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente",
  "campo_extra":"Teste"
}

Esperado:
Ignorado ou salvo (dependendo da modelagem)
Retornado:

8.3 Requisição sem Content-Type: application/json
Método: POST
Endpoint: /tarefas
Esperado:
Erro 400 - Parsing inválido
Retornado:



## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Membros do Grupo


[![Eduardo](https://github.com/eduabjr.png?size=80)](https://github.com/eduabjr)

[![Enzo](https://github.com/enzomartinsg.png?size=90)](https://github.com/enzomartinsg)

[![Diogo](https://github.com/DiogoBastos-C.png?size=60)](https://github.com/DiogoBastos-C)

[![Lucas](https://github.com/LucasCG-uscs.png?size=80)](https://github.com/LucasCG-uscs)

[![Lucas](https://github.com/tiago-silva1500.png?size=80)](https://github.com/tiago-silva1500)


## Suporte

Para suporte, mande um email para fake@fake.com ou entre em nosso canal do Slack.


## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Agradeciomento
Obrigado por esses recursos incríveis que foram usados ​​durante o desenvolvimento do incrível modelo do GitHub :

links
