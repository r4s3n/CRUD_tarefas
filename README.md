# API de Gerenciamento de Tarefas

API REST desenvolvida em Node.js para gerenciamento de tarefas, com suporte a CRUD completo e importação em massa via CSV.

Projeto focado em prática de backend, streams, manipulação de arquivos e boas práticas de arquitetura.

## 🚀 Tecnologias

- Node.js
- Fastify
- Knex
- SQLite
- Zod
- csv-parse

## 📦 Funcionalidades

- Criar tarefas
- Listar tarefas (com busca por título e descrição)
- Atualizar tarefas
- Deletar tarefas
- Marcar/desmarcar tarefa como concluída
- Importar tarefas via CSV


## ⚙️ Como rodar

### 1. Clone o projeto
git clone https://github.com/r4s3n/CRUD_tarefas.git

### 2. Instale as dependências
npm install

### 3. Rode o servidor
npm run dev

A API estará disponível em:
http://localhost:3333

## 📌 Rotas

### Criar tarefa
POST /tasks

```json:
{
  "title": "Estudar Node",
  "description": "Praticar backend"
}
```
---

### Listar tarefas
GET /tasks
GET /tasks?search=palavra-chave

---

### Atualizar tarefa
PUT /tasks/:id

---

### Deletar tarefa
DELETE /tasks/:id

---

### Completar tarefa
PATCH /tasks/:id/complete

---

### Importar CSV
POST /tasks/import

Body:
multipart/form-data
file: arquivo.csv

## 📄 Exemplo de CSV

```csv:
title;description
Task 01;Descricao da Task 01
Task 02;Descricao da Task 02
```

## 🧠 Regras de negócio

- `completed_at` inicia como null
- A rota de completar alterna entre concluído e não concluído
- `updated_at` é atualizado a cada modificação
- Importação CSV processa linha por linha usando streams