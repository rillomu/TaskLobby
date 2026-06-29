# TaskLobby — Roadmap

## Escopo Completo do Projeto

```
├── Sistema de Usuários
│   ├── Cadastro
│   ├── Login
│   ├── Perfil
│   ├── Configurações
│   └── Recuperação de senha
│
├── Projetos
│   ├── Criar Projeto
│   ├── Editar Projeto
│   ├── Excluir Projeto
│   ├── Favoritar
│   └── Arquivar
│
├── Pastas
│   ├── Criar Pasta
│   ├── Subpastas
│   ├── Reorganizar
│   └── Mover
│
├── Tarefas
│   ├── Criar
│   ├── Editar
│   ├── Excluir
│   ├── Duplicar
│   ├── Concluir
│   ├── Reverter conclusão
│   ├── Mover
│   └── Pesquisar
│
├── Subtarefas
│
├── Etiquetas (Tags)
│
├── Prioridades
│   ├── 🔴 Alta
│   ├── 🟡 Média
│   └── 🟢 Baixa
│
├── Datas
│   ├── Criação
│   ├── Prazo (Calendário)
│   └── Conclusão
│
├── Notas por tarefa
│
├── Comentários
│
├── Upload de Arquivos
│
├── Itens Apagados (Lixeira com recuperação)
│
├── Dashboard
│
├── Relatórios
│
├── Notificações
│
├── Histórico de Atividades
│
├── Inbox
│
├── Equipes
│
├── Permissões
│
├── Tema claro / escuro
│
├── API REST
│
├── Banco de Dados
│
├── Testes
│
├── Docker
│
├── Deploy
│
└── Documentação
```

---

## Versões

### ✅ V1 — Fundação (HTML + CSS + JS)
**Objetivo:** aprender manipulação do DOM.
**Status:** Concluída

**Funcionalidades implementadas:**
- Criar tarefa via modal
- Marcar tarefa como concluída
- Persistência com localStorage
- Contadores automáticos (Pendentes · Concluídos)
- Layout dark mode fiel ao Figma
- Modal com overlay e blur

**O que foi usado:**
- HTML semântico e BEM
- CSS Flexbox e variáveis
- DOM, Eventos, Funções
- localStorage e JSON
- Delegação de eventos
- Template literals

---

### 🔧 V1.1 — Polimentos
**Objetivo:** melhorar a experiência do usuário sem adicionar complexidade.

**Funcionalidades:**
- [ ] Nome "TaskLobby" no canto superior esquerdo (tipografia elegante)
- [ ] Enter no teclado confirma tarefa no modal
- [ ] Opção de reverter tarefa concluída para pendente
- [ ] Ícone de lixeira para excluir tarefas
- [ ] Mais ícones na interface (sidebar, navegação)

---

### 📁 V2 — Organização
**Objetivo:** o sistema deixa de ser apenas uma lista.

**Funcionalidades:**
- [ ] Criar projetos com ícone `+` ao lado de "Projetos"
- [ ] Criar pastas dentro de projetos
- [ ] Arrastar tarefas para pastas
- [ ] Arrastar para reorganizar a ordem das tarefas (drag and drop)
- [ ] Lixeira com recuperação de itens apagados

**O que sera utilizado:**
- Arrays e objetos
- Estruturas de dados
- Drag and Drop API

---

### 💾 V3 — Persistência Avançada
> Você já adiantou o localStorage na V1! 🎉 Aqui vai aprofundar.

**Funcionalidades:**
- [ ] Salvar projetos e pastas no localStorage
- [ ] Salvar ordem das tarefas
- [ ] Salvar estado da lixeira

**O que sera utilizado:**
- JSON avançado
- Estruturas de dados aninhadas

---

### ⚙️ V4 — Organização Avançada
**Objetivo:** agora parece um software de verdade.

**Funcionalidades:**
- [ ] Prioridade por tarefa (🔴 Alta / 🟡 Média / 🟢 Baixa)
- [ ] Data de entrega com calendário
- [ ] Tags por tarefa
- [ ] Notas por tarefa
- [ ] Layout da lista de tarefas fiel ao Figma (prioridade, data, `...` de edição)
- [ ] Filtros (Todas / Pendentes / Concluídas)
- [ ] Pesquisa funcional
- [ ] Tema claro / escuro

**O que sera utilizado:**
- Métodos de arrays (filter, sort, map)
- Manipulação de datas
- Filtros e ordenação

---

### 📊 V5 — Dashboard
**Objetivo:** o sistema começa a gerar informações.

**Métricas:**
- Projetos: X
- Tarefas: X
- Concluídas: X
- Pendentes: X
- Produtividade: X%
- Tarefas atrasadas

**Funcionalidades:**
- [ ] Dashboard com estatísticas
- [ ] Inbox (central de notificações internas)

**O que sera utilizado:**
- Estatísticas e cálculos
- Organização de dados

---

### ⚛️ V6 — React
**Objetivo:** recriar tudo com componentização.

**Componentes:**
- Header
- Sidebar
- Projeto
- Task
- Modal

**O que sera utilizado:**
- Componentização
- State e Props
- Hooks (useState, useEffect)

---

### 🖥️ V7 — Backend
**Objetivo:** começa a verdadeira aplicação.

**Stack:**
```
React → Node → Banco
```

**API:**
```
GET    /projects
POST   /projects
PUT    /projects/:id
DELETE /projects/:id

GET    /tasks
POST   /tasks
PUT    /tasks/:id
DELETE /tasks/:id
```

**O que sera utilizado:**
- Express
- REST
- Controllers e Services

---

### 🗄️ V8 — Banco de Dados
**Objetivo:** tudo sai do localStorage.

**Relacionamentos:**
```
Usuário → Projeto → Pastas → Tarefas → Subtarefas
```

**O que sera utilizado:**
- SQL
- Relacionamentos
- CRUD real

---

### 🔐 V9 — Login
**Objetivo:** cada usuário possui sua conta.

**Fluxo:**
```
Cadastro → Login → JWT → Área Logada
```

**O que sera utilizado:**
- Autenticação
- Hash de senha
- Middleware

---

### 👥 V10 — Colaboração
**Objetivo:** várias pessoas podem usar o mesmo projeto.

**Funcionalidades:**
- [ ] Convidar membros para projetos
- [ ] Comentários por tarefa
- [ ] Histórico de atividades

---

### 📎 V11 — Uploads
**Funcionalidades:**
- [ ] Upload de PDF por tarefa
- [ ] Upload de imagens
- [ ] Outros arquivos

---

### 📈 V12 — Dashboard Profissional
**Funcionalidades:**
- [ ] Gráficos de produtividade
- [ ] Horas trabalhadas
- [ ] Prazo médio
- [ ] Tarefas atrasadas

---

### 🔔 V13 — Notificações
**Exemplos:**
- ⚠️ Sua tarefa vence amanhã.
- ✔️ Projeto concluído.
- 📌 João comentou uma tarefa.

---

### 🌐 V14 — Deploy
**Stack online:**
```
Frontend → Backend → Banco → Internet
```

---

### 🏆 V15 — Projeto Profissional
**Objetivo:** elevar a qualidade do código.

- [ ] Docker
- [ ] Testes automatizados
- [ ] Documentação
- [ ] CI/CD
- [ ] Logs
- [ ] Arquitetura
- [ ] Refatoração

---

### 🚀 V16+ — Futuro (A Definir)
- [ ] Assistente IA integrado
- [ ] Sistema de times / Party
- [ ] Comercialização do produto
- [ ] App mobile (iOS / Android)

---

*Atualizado durante o desenvolvimento — versão por versão, commit por commit.* 🚀
