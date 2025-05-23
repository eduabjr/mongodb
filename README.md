
![Logo](https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb.png)


# Projeto MongoDB API RESTful

[![Licença](https://img.shields.io/badge/Licença-MIT-green.svg)](https://github.com/eduabjr/mongodb/blob/main/LICENSE) [![Teste Local Host](https://img.shields.io/badge/Testes-Localhost-brightgreen.svg)](https://github.com/eduabjr/mongodb/blob/main/README.md#roteiro-de-testes-da-api-de-tarefas-em-localhost) [![Teste cloud](https://img.shields.io/badge/Testes-cloud-brightred.svg)](https://github.com/eduabjr/mongodb/blob/main/README.md#roteiro-de-testes-da-api-de-tarefas-em-cloud) [![Membros do Grupo](https://img.shields.io/badge/Membros%20do%20Grupo-5-blue.svg)](https://github.com/eduabjr/mongodb?tab=readme-ov-file#membros-do-grupo) 


## Súmario

* [Sobre](#sobre)
* [Membros do Grupo](#membros-do-grupo)
* [Começando](#começando)
* [Modelagem do Hackolade](#modelagem-do-hackolade)
* [Roteiro de Testes da API de Tarefas em localhost](#roteiro-de-testes-da-api-de-tarefas-em-localhost)
* [Roteiro de Testes da API de Tarefas em cloud](#roteiro-de-testes-da-api-de-tarefas-em-cloud)
* [Referência](#referência)
* [Licença](#licença)
* [Agradeciomento](#agradeciomento)
## Sobre

Neste projeto, o grupo desenvolveu uma API RESTful que permita realizar operações básicas de CRUD (Create, Read, Update, Delete) em um banco de dados MongoDB. A instancia do mongodb utilizada no projeto pode estar na máquina local ou no serviço em nuvem MondoDB Atlas.

### Conhendo as Tecnologias empregadas

#### MongoDB

O MongoDB é um banco de dados NoSQL (Not only SQL) orientado a documentos, o que significa que ele não armazena dados em tabelas com linhas e colunas fixas como os bancos de dados relacionais (SQL). Em vez disso, ele armazena dados em documentos flexíveis no formato BSON (Binary JSON), que é uma representação binária do JSON.

##### Principais Características:
1. Flexibilidade do Esquema: Você não precisa definir um esquema rígido antes de começar a armazenar dados. Isso é excelente para o desenvolvimento ágil e para lidar com dados semiestruturados ou em constante evolução.

2. Escalabilidade: Projetado para escalar horizontalmente, o que o torna ideal para aplicações com grandes volumes de dados e altos requisitos de tráfego.
Desempenho: Frequentemente oferece alto desempenho para operações de leitura e gravação, especialmente com o uso de índices.

3. Orientado a Documentos: A modelagem de dados com documentos geralmente se alinha melhor com a forma como os objetos são representados em linguagens de programação, simplificando o desenvolvimento de aplicações.

4. Suporte a Agregação: Possui um poderoso framework de agregação que permite processar dados dentro do banco de dados, realizando operações como agrupamento, filtragem e transformação.

#### MongoDB Atlas

O Que é e como funciona o MongoDB Atlas?

O MongoDB Atlas é um serviço de banco de dados em nuvem totalmente gerenciado, oferecido pela MongoDB Inc. Ele permite que desenvolvedores e empresas implantem, operem e escalem bancos de dados MongoDB sem precisar gerenciar servidores físicos ou configurações complexas.

##### Principais Características:
1. Banco de Dados como Serviço (DBaaS)
Sem infraestrutura local: Não é necessário instalar o MongoDB manualmente em servidores próprios.

Gerenciamento automatizado: Atlas cuida de backups, atualizações, segurança e escalabilidade.

2. Multiplataforma e Escalável
Nuvem pública: Disponível na AWS, Google Cloud e Microsoft Azure.

3. Escalabilidade horizontal: Aumente a capacidade do banco de dados sob demanda.

4. Alta Disponibilidade e Tolerância a Falhas
Replicação automática: Dados são copiados em múltiplos nós (replica sets) para evitar perdas.

5. Failover automático: Se um servidor falhar, outro assume instantaneamente.

6. Segurança Avançada
Criptografia em repouso e em trânsito.

7. Controle de acesso: Autenticação por usuário/senha, integração com LDAP e IAM da AWS.

8. Firewall e VPC Peering: Restringe acesso apenas a IPs autorizados.


## Objetivos do projeto:

#### 1. Desenvolver uma API que implemente pelo menos quatro operações básicas em uma das collection que serão propostas pelo grupo: inclusão (Create), alteração (Update), consulta (Read) e exclusão (Delete) de dados.

#### 2. Definir e utilizar collections específicas para armazenar os dados no MongoDB.

#### 3. Escolher a linguagem de programação e framework de preferência da dupla para o desenvolvimento da API.

#### 4. Criar um repositório no GitHub para hospedar o código da API, incluindo um arquivo README.md detalhado.

#### a. O repositório poderá ser público e o link do repositório deve ser informado na entrega do projeto por meio do google classroom;

#### b. Para repositório privado o grupo deverá incluir o meu perfil do Github como colaborador e informar o link do repositório na entrega do projeto por meio do google classroom.

#### 5. Elaborar um README.md com as instruções necessárias para a execução da aplicação, incluindo a configuração do ambiente e a execução dos testes.

#### 6. Testar a API utilizando softwares como Postman, Insomnia ou extensões do VS Code como o Thunder Client.


## Escolha do projeto:
Nosso Grupo escolheu um Sistema de Gerenciamento de Tarefas para Equipes.

### Funcionalidades:

Cadastro de usuários e projetos.

Criação e atribuição de tarefas.

Registro do histórico de status das tarefas.

### Atividades que devem ser feitas com alta eficiência:

Listagem das tarefas de um projeto com os dados do responsável na época da criação da tarefa.

Consulta rápida do histórico de mudanças de status de uma tarefa.

### Frameworks e Linguagens de Programação:
Node.js com Express:

Express é um framework web para Node.js que simplifica o desenvolvimento de aplicações
web e APIs, proporcionando uma estrutura robusta para lidar com rotas, middlewares e
muito mais.

Linguagem: JavaScript (ou TypeScript)
Documentação: https://expressjs.com/
## Membros do Grupo


[![Eduardo](https://github.com/eduabjr.png?size=80)](https://github.com/eduabjr) [![Enzo](https://github.com/enzomartinsg.png?size=80)](https://github.com/enzomartinsg) [![Diogo](https://github.com/DiogoBastos-C.png?size=80)](https://github.com/DiogoBastos-C) [![Lucas](https://github.com/LucasCG-uscs.png?size=80)](https://github.com/LucasCG-uscs) [![Tiago](https://github.com/tiagosilva-025.png?size=80)](https://github.com/tiagosilva-025) [![Carlos](https://github.com/Edu1910-sl.png?size=80)](https://github.com/Edu1910-sl)
# Começando
Ao início do desenvolvimento do projeto do mongoDB, foram dividas algumas tarefas para que fossem mais facilmete administradas pelos membos do grupo:

### 1º Modelagem do Hackolade e Estrutura do Banco (MongoDB)

- Definir collections e campos conforme o tema escolhido.
- Criar estrutura dos documentos MongoDB.

- Relacionamentos entre documentos (se houver necessidade de embedded documents ou referências).

- Criar scripts ou documentação para popular o banco com dados de teste.

### 2º Back-end e Lógica da API (CRUD)

- Desenvolver as rotas da API (Create, Read, Update, Delete).

- Implementar middleware e tratamento de erros.

- Garantir integração com o banco MongoDB.

- Definir estrutura do projeto de acordo com o framework escolhido.


### 3º Testes com Postman/Insomnia/Thunder Client

- Criar collection de testes no Postman ou outra ferramenta.

- Documentar exemplos de requisições com diferentes cenários.

- Validar as rotas e as respostas da API.

- Contribuir com testes de falhas e casos de borda.

### 4º Documentação (README.md e Manual de Uso)

Neste passo é documentado tudo o que aconteceu nos passsos anteriores e informações como: 

- Descrição do projeto.

- Passos de instalação/configuração.

- Exemplos de requisições.

- Ferramentas utilizadas.

### 5º DevOps e Deploy Local/Nuvem (opcional)

- Configurar MongoDB local ou Atlas (nuvem).

- Criar .env com variáveis sensíveis.

- Automatizar execução (ex: scripts npm, docker, etc.).

- Verificar deploy ou execução local eficiente para todos do grupo.


# Modelagem do Hackolade

![](https://raw.githubusercontent.com/eduabjr/mongodb/main/Modelagem/Captura%20de%20tela%202025-04-16%20001404.png)

Na imagem acima é possível analisar todo como o modelo foi planejado, assim como o relacionamento entre as collections e os campos required / obrigatórios (identificados por um * ao lado dos dados).

Cada collection possui um identificador principal (_id), um campo de nome (ou titulo para tarefas) e uma descrição (apenas com exceção dos usuários), e outros campos diversos que variam de acordo com a collection.

Nas collections usuários, equipes e projetos, é possível ver que há um subdocumento em cada uma, pois cada uma dessas collections em específico possui um dado e um relacionamento que depende de outra collection. 

## Explicando mais a fundo:

•	A collection usuários possui um subdocumento de equipes, no qual depende dos dados de uma equipe já existente, dessa maneira, quando um usuário for registrado, ele pode estar relacionado a uma equipe.

•	O mesmo vale para a collection equipes, onde possui dois subdocumentos respectivamente de membros e projetos, que nesse caso uma equipe vai ter registrado os membros dela e os projetos a se realizar.

•	E por fim há a collection projetos, que vem da collection de equipes como já mencionado, e com ela também possui um subdocumento de tarefas a se realizar dentro dos projetos.

A modelagem hackolade também possui campos definidos como “required”, que no qual são campos que sempre devem ser preenchidos ao fazer um cadastro de uma entidade, por exemplo, o subdocumento de membros da collection equipes foi definido como required pois não existe a possibilidade de existir uma equipe sem membros.

### É importante mencionar que, nem todos os campos foram definidos como required pois existe exceções em algumas ocasiões:

•	O subdocumento equipes da collection usuários não é obrigatório, pois pode haver o cadastro de um usuário que no momento ele não possui uma equipe.

•	Todos os campos descrições das collections não precisam necessariamente estar preenchidos pra registrar um indivíduo.

•	O subdocumento projetos da collection equipes também não é obrigatório, uma equipe pode estar sem projetos no momento.

•	Por fim o subdocumento tarefas da collection projetos não precisa sempre ser preenchido, já que um projeto pode não ter uma tarefa a ser feita em algum momento.

Esses são os campos exceções, fora eles, todos os outros campos foram definidos como required e devem sempre ser preenchidos para serem registrados no banco de dados.

Por fim disso tudo, na collection tarefas foi definido campos “Enum” em status e prioridade, para uma maior organização e simplicidade eles possuem possíveis valores já predefinidos quando for realizar um cadastro deles.

### De forma mais detalhada:

•	O campo status só pode haver 3 possíveis valores: pendente, em andamento e concluída, quando um usuário for registrar o status de uma tarefa, ele deverá escolher entre esses 3 status.

•	O mesmo vale para o campo prioridade com 3 possíveis valores: baixa, média e alta, o usuário também deverá nesse mesmo campo escolher entre esses possíveis valores ao definir qual a prioridade de uma respectiva tarefa.

## Códigos das Collections (schema mongoose):

Um Schema do Mongoose define a estrutura dos documentos dentro de uma coleção MongoDB. É essencialmente um projeto que dita os tipos de dados que podem ser armazenados, seus valores padrão, regras de validação e outras propriedades. Com isso, foi produzido 4 schemas com base no que foi estruturado na modelagem, sendo as 4 tabelas: Usuários, Equipes, Projetos e Tarefas. É importante mencionar também que a partir desses schemas foi planejado o back end do banco MongoDB

### Collection Usuários
```bash   
var usuarios = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    equipes: [
        new Schema({
            _id: {
                type: Schema.Types.ObjectId
            },
            nome: {
                type: String
            }
        })
    ]
});
 ```
### Collection Equipes
```bash   
var equipes = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    membros: [
        new Schema({
            _id: {
                type: Schema.Types.ObjectId,
                required: true
            },
            nome: {
                type: String,
                required: true
            },
            cargo: {
                type: String,
                required: true
            }
        })
    ],
    projetos: [
        new Schema({
            _id: {
                type: Schema.Types.ObjectId
            },
            nome: {
                type: String
            }
        })
    ]
});
```

### Collection Projetos
```bash    
var projetos = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    dataInicio: {
        type: Date,
        required: true
    },
    tarefas: [
        new Schema({
            _id: {
                type: Schema.Types.ObjectId
            },
            titulo: {
                type: String
            },
            status: {
                type: String
            }
        })
    ]
});
```

### Collection Tarefas
```bash   
var tarefas = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    status: {
        type: String,
        enum: [
            "pendente",
            "em andamento",
            "concluida"
        ],
        required: true
    },
    "prioridade ": {
        type: String,
        enum: [
            "baixa",
            "media",
            "alta"
        ],
        required: true
    }
});
 ```

## Pré - Requisitos

#### 1° Instalar Node.js 
Essencial porque o projeto vai usar JavaScript no backend.

Baixe e instale aqui:
👉 https://nodejs.org/pt/download

------------
#### 2° Instalar um editor de código 
Recomendado utilizar o VS Code

Baixe e instale aqui:
👉 https://code.visualstudio.com/

------------

## Instrução de Instalação

### 1º Criar a pasta do projeto Pelo terminal

Abra o terminal no VS Code e digite:

```bash
 Ctrl + '
```
![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagens2/18.png)

(Abre um terminal interno)

### 2º Digite no terminal o seguinte código:

```bash
mkdir coloque-o-nome-do-projeto
cd coloque-o-nome-do-projeto
```
Logo após aperte "Enter"

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagens2/19.png)


Será gerado em "C:\Users\Usuário" a pasta do projeto com o nome escolhido.

### 3º Localizar pasta e seleciona-la:

Através do VS Code siga este caminho:

Clique em Arquivo > Abrir Pasta > Vá no Disco C do Computador> Selecione a Pasta Usuários > Selecione a Pasta Usuário > Selecione a Pasta do Projeto

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagens2/21.png)


### 4º Iniciar o projeto Node.js

No terminal, dentro da pasta do projeto digite o codigo abaixo e aperte enter:

```bash
npm init -y
```

Será criado o package.json, que guarda os dados do projeto e dependências.

### 5º Instalar os pacotes

No terminal digite o codigo abaixo e aperte enter:

```bash
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

Será criado:

- express: framework web

- mongoose: conexão com MongoDB

- dotenv: permite usar variáveis secretas no .env

- cors: libera acesso à API de outros domínios

- nodemon: reinicia o servidor automaticamente em modo desenvolvimento


## Instrução de Uso    
```bash

```

## Roteiro de Testes da API de Tarefas em localhost

Este documento descreve o roteiro de testes realizados na API de gerenciamento de tarefas construída com Node.js, Express e MongoDB. Os testes foram realizados utilizando ferramentas como Thunder Client.

A base da API está rodando localmente no seguinte endereço:
http://localhost:3000/tarefas

### 1. POST /tarefas – Criar nova tarefa (Sucesso)

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

Verificado em teste: Collection criada com sucesso no banco de dados com os atributos do Json acima.

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

### 2. POST /tarefas – Criar nova tarefa (Erro: campo obrigatório faltando)

Método: POST

Endpoint: /tarefas

Body JSON:

```bash
{
  "descricao": "Sem título"
}
```

Esperado:

```bash
Erro 400 ou 500. Validação indicando campo obrigatório faltando.
```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/2.png)

Verificado em Teste: O bloqueio para campo obrigatório está funcionando corretamente.


Teste após atualização do arquivo de rotas:

Body JSON:

```bash
{
  "descricao": "Sem título"
}
```

Esperado:

```bash
Erro 400 ou 500. Validação indicando campo obrigatório faltando.
```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/2.png)

após a atualização dos arquivos, o bloqueio do método POST para campos obrigatórios continua funcionando corretamente.


### 3. GET /tarefas – Listar tarefas (Sucesso)

Método: GET

Endpoint: /tarefas

Esperado:

```bash  
Status 200. Retorna array com todas as tarefas.
```
Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/3.png)

Verificado em teste: A requisição GET apresenta erro, conforme imagem acima

Teste após atualização do arquivo de rotas:

Esperado:

```bash  
Status 200. Retorna array com todas as tarefas.
```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/4.png)

Após a atualização do arquivo de rotas, com a inclusão da rota para o método GET feita corretamente, o método segue respondendo como esperado

### 4. PUT /tarefas/:id – Atualizar tarefa (Sucesso)
Método: PUT

Endpoint: /tarefas/{id}

Body JSON:

```bash  
{
  "titulo": "Estudar Node.js (atualizado)",
  "status": "em andamento"
}
```
Esperado:

```bash  
Status 200. Retorna JSON da tarefa atualizada.
```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/5.png)

Verificado em Teste: A requisição PUT apresenta erro, conforme imagem acima

Teste após atualização do arquivo de rotas:

Body JSON:

```bash  
{
  "titulo": "Estudar Node.js (atualizado)",
  "status": "em andamento"
}

```

Esperado:

```bash  
Status 200. Retorna JSON da tarefa atualizada.
```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/6.png)

Após a atualização do arquivo de rotas, com a inclusão da rota para o método PUT feita corretamente, o método segue respondendo como esperado

### 5. PUT /tarefas/:id – Atualizar tarefa (Erro: ID inválido)
Método: PUT

Endpoint: /tarefas/123

Esperado:
```bash  
Erro 404 ou 500. ID inválido ou tarefa não encontrada.
NÃO TESTADO, será testado quando a requisição primária estiver funcionando
```
Teste após atualização do arquivo de rotas:

Body JSON:

```bash  
{
  "titulo": "testando ID inexistente",
  "status": "em andamento"
}
```

Esperado:
```bash  
Erro 404 ou 500. ID inválido ou tarefa não encontrada.
```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/7.png)

após atualização do arquivo de rotas, com a inserção correta do método PUT no arquivo, o bloqueio para entrada de IDs inválidos está funcionando corretamente.

### 6. DELETE /tarefas/:id – Deletar tarefa (Sucesso)
Método: DELETE

Endpoint: /tarefas/{id}

Esperado:

```bash   
Status 200. Mensagem de sucesso ao deletar tarefa.
 ```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/8.png)


Verificado em Teste: A requisição DELETE apresenta erro, conforme imagem acima


Teste após atualização do arquivo de rotas:

Esperado:
```bash   
Status 200. Mensagem de sucesso ao deletar tarefa.
 ```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/9.png)

Após a atualização do arquivo de rotas, com a inclusão da rota para o método DELETE feita corretamente, o método segue respondendo como esperado

### 7. DELETE /tarefas/:id – Deletar tarefa (Erro: ID não encontrado)
Método: DELETE

Endpoint: /tarefas/645a9ce9999f45c111111111

Esperado:

```bash   
Erro 404. Mensagem de tarefa não encontrada.
NÃO TESTADO, será testado quando a requisição primária estiver funcionando
```
Teste após atualização do arquivo de rotas:

Endpoint: /tarefas/645a9ce9999f45c111111111

Esperado:

```bash   
Erro 404. Mensagem de tarefa não encontrada.
```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/10.png)

Após a atualização do arquivo de rotas, com a inclusão da rota para o método DELETE feita corretamente, o bloqueio para entrada de IDs inválidos está funcionando corretamente

# 8. Testes Extras de Validação

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/11.png)

Estes testes garantem que a API esteja funcionando corretamente em seus endpoints principais.


Teste após atualização do arquivo de rotas:

## 8.1 Enviar status com valor inválido
Método: POST

Endpoint: /tarefas

Body JSON:

```bash    
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "Teste_de_status_invalido"
}
```

Esperado:

```bash   
Erro 400 ou 500 - Validação do status
 ```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/12.png)


O bloqueio para valor inválido no atributo está funcionando corretamente

## 8.2 Enviar campo extra no POST/PUT

### 8.2.1
Método: POST

Endpoint: /tarefas

Body JSON:
```bash   
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente",
  "campo_extra":"Teste"
}
 ```

Esperado:

```bash   
Ignorado ou salvo (dependendo da modelagem)
 ```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/14.png)

A aplicação ignora campos extras inseridos no Json e insere no banco de dados apenas campos reconhecidos .

### 8.2.2
Método: PUT

Endpoint: /tarefas/{id}

```bash  
{
  "titulo": "Estudar Node.js(teste 8.2.2)",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente",
  "campo_extra":"Teste"
}
 ```


Esperado:

```bash    
Ignorado ou salvo (dependendo da modelagem)
```

Retornado:

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/15.png)


A aplicação ignora campos extras inseridos no Json e insere no banco de dados apenas campos reconhecidos .

### 8.3 Requisição sem Content-Type: application/json
Método: POST

Endpoint: /tarefas

Esperado:

```bash    
Erro 400 - Parsing inválido
```

Retornado:

Ao enviar uma requisição POST sem conteúdo Json o retorno da aplicação é um erro 500 indicando a falta de um campo obrigatório. Esse erro não era o comportamento esperado, mas impede requisições POST sem conteúdo Json

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/16.png)

--------------------------------------------------------------------------------
## Roteiro de Testes da API de Tarefas em cloud

Roteiro de testes realizados na API de gerenciamento de tarefas construída com Node.js, Express e MongoDB. Os testes foram realizados utilizando ferramentas como Thunder Client

A base da API está rodando localmente no seguinte endereço:
???
### 1. POST /tarefas – Criar nova tarefa
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

?????????????


### 2. POST /tarefas – Criar nova tarefa (Erro: campo obrigatório faltando)
Método: POST

Endpoint: /tarefas

Body JSON:
```bash   
{
  "descricao": "Sem título"
}
 ```
Esperado:
```bash  
Erro 400 ou 500. Validação indicando campo obrigatório faltando.
 ```
Retornado:

?????????????

### 3. GET /tarefas – Listar tarefas (Sucesso)
Método: GET

Endpoint: /tarefas

Esperado:
```bash    
Status 200. Retorna array com todas as tarefas.
```

Retornado:

?????????????

### 4. PUT /tarefas/:id – Atualizar tarefa (Sucesso)
Método: PUT

Endpoint: /tarefas/{id}

Body JSON:
```bash   
{
  "titulo": "Estudar Node.js (atualizado)",
  "status": "em andamento"
}
 ```

Esperado:
```bash    
Status 200. Retorna JSON da tarefa atualizada.
```

Retornado:
?????????????

### 5. PUT /tarefas/:id – Atualizar tarefa (Erro: ID inválido)
Método: PUT

Endpoint: /tarefas/123

Body JSON:
```bash
{
  "titulo": "testando ID inexistente",
  "status": "em andamento"
}

 ```

Esperado:
```bash    
Erro 404 ou 500. ID inválido ou tarefa não encontrada.
```
Retornado:

?????????????

### 6. DELETE /tarefas/:id – Deletar tarefa (Sucesso)
Método: DELETE

Endpoint: /tarefas/{id}

Esperado:
```bash   
Status 200. Mensagem de sucesso ao deletar tarefa. 
```
Retornado:
?????????????

### 7. DELETE /tarefas/:id – Deletar tarefa (Erro: ID não encontrado)
Método: DELETE

Endpoint: /tarefas/645a9ce9999f45c111111111

Esperado:
```bash    
Erro 404. Mensagem de tarefa não encontrada.
```


Retornado:
?????????????

### 8. Testes Extras de Validação

![Imagem dos Testes](https://raw.githubusercontent.com/eduabjr/mongodb/main/imagem%20dos%20testes/17.png)


### 8.1 Enviar status com valor inválido
Método: POST

Endpoint: /tarefas

Body JSON:
```bash   
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "Teste_de_status_invalido"
}

 ```
Esperado:

```bash    
Erro 400 ou 500 - Validação do status
 ```

Retornado:

?????????????

## 8.2 Enviar campo extra no POST/PUT
### 8.2.1
Método: POST

Endpoint: /tarefas

Body JSON:
```bash    
{
  "titulo": "Estudar Node.js",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente",
  "campo_extra":"Teste"
}
```
Esperado:
```bash    
Ignorado ou salvo (dependendo da modelagem)
```

Retornado:

?????????????


### 8.2.2
Método: PUT

Endpoint: /tarefas/{id}

Body JSON:
```bash    
{
  "titulo": "Estudar Node.js(teste 8.2.2)",
  "descricao": "Aprofundar em Mongoose e APIs REST",
  "status": "pendente",
  "campo_extra":"Teste"
}

```
Esperado:
```bash   
Ignorado ou salvo (dependendo da modelagem)
 ```
Retornado:

?????????????
### 8.3 Requisição sem Content-Type: application/json
Método: POST

Endpoint: /tarefas

Esperado:
```bash    
Erro 400 - Parsing inválido
```
Retornado:

?????????????


## Licença

[MIT](https://github.com/eduabjr/mongodb/blob/main/LICENSE)


## Referência

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Agradeciomento
Obrigado por esses recursos incríveis que foram usados ​​durante o desenvolvimento do incrível modelo do GitHub :

links
