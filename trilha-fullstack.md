# Trilha Full-Stack (Python/FastAPI + Vue 3)

> **Objetivo:** sair de “curso básico de Python” para **aplicação web real online** (API + front), com testes e **deploy** (**Back: Render | Front: Vercel**).  
> **IA** participa desde o **Bloco 1** em **modo tutor** (sem “agente” automatizando IDE/commits).

- **Público-alvo:** quem já concluiu um curso básico de Python ou Node.
- **Formato:** **9 blocos sequenciais**, 2–6 semanas por bloco (auto-ritmo).
- **Resultado:** 1 projeto público (URL), com **API FastAPI + DB**, **front Vue 3** e **README forte**.

---

## Como funciona
- Avance só após cumprir **Checklist** e **Desafio** do bloco.
- **Encontro semanal (45 min):** progresso → destravar dúvidas → plano da semana.
- **Autonomia,** quando tiver uma dúvida:
  - persista por 30 min.
  - leia erro/logs.
  - pesquise na internet (google, docs, stackoverflow)  .
  - use IA no modo tutor, já veremos no primeiro bloco. O objetivo de não usar IA como primeiro recurso é criar capacidade crítica. A IA pode gerar resultados falhos, incompletos ou ruins, principalmente se não usar ótimos prompts
  - só então peça ajuda.
- **Compromissos:** ≥ 2 commits/semana; README atualizado; “diário de erros” por bloco.

---

## Critérios de avanço (por bloco)
- Saber **explicar** os conceitos do bloco (revisão).  
- Entregar o **desafio** (repositório executável).  
- Manter **diário de erros** no README (problema → tentativa → solução).  
- **Constância:** 2+ commits por semana (constância > velocidade).

---

## Encontro semanal
1) **Progresso:** o que foi entregue (repo/deploy/prints).  
2) **Destravamento:** 1–2 bloqueios com reprodução mínima.  
3) **Plano da semana:** definir um próximo passo pequeno e mensurável.  
4) **Encerramento:** confirmar entregáveis e data do próximo encontro.

---

## Visão geral dos blocos

### 1) [IA na prática: modo tutor, não “agente”](./blocos/bloco-01.md)
**Você vai aprender**
- Como usar IA para aprender (perguntas diagnósticas, pistas graduais, leitura de logs e verificação).  
- Escrever **prompts curtos** (Objetivo → Contexto → Restrições → Formato).  
- Anti-padrões: depender de “agente” na IDE, colar código gigante, ignorar erros.

**Desafio**
- Escrever 3 prompts úteis (diagnóstico, code review, arquitetura) e resolver 1 bug real com **pistas graduais** (registrar no diário).

**Checklist**
- Consegue pedir ajuda sem pedir solução completa? Explica o antes/depois do feedback da IA?

---

### 2) [Git & GitHub (fundação)](./blocos/bloco-02.md)
**Você vai aprender**
- Fluxo básico: init/add/commit/branch/merge/PR.  
- Repositório remoto (GitHub) e Markdown para README.  
- Resolução de conflitos simples.

**Desafio**
- Repo `diario-de-aprendizado` com 5 entradas + 1 PR de “feature” (mergeado).

**Checklist**
- Criou repo local/remoto, abriu PR e resolveu um conflito simples.

---

### 3) [Python intermediário + testes](./blocos/bloco-03.md)
**Você vai aprender**
- Coleções, exceções, módulos, `venv`, OOP básica.  
- `pytest` (asserts, fixtures, execução `pytest -q`).  
- Organização mínima de projeto.

**Desafio**
- Repo `py-toolbox`: 3 funções úteis + **5 testes** + README (com “diário de erros”).

**Checklist**
- Consegue rodar testes, explicar exceções e estruturar funções/módulos.

---

### 4) [Web essencial (HTTP + HTML + CSS + JS)](./blocos/bloco-04.md)
**Você vai aprender**
- Requisição/resposta, métodos, status, headers (HTTP).  
- HTML semântico e CSS básico.  
- JS: DOM + `fetch` com tratamento de erros (4xx/5xx).

**Desafio**
- Página local com formulário, validação em JS e consumo de uma API pública/mock (mostrar resposta no DOM).

**Checklist**
- Explica um ciclo HTTP e implementa `fetch` com tratamento de erro e UX mínima.

---

### 5) [Backend com FastAPI (rotas, validação, docs)](./blocos/bloco-05.md)
**Você vai aprender**
- Rotas CRUD, modelos Pydantic, validação automática.  
- Documentação (Swagger/Redoc).  
- Organização inicial (routers/services/repositories).

**Desafio**
- API **tarefas** (CRUD) + **testes de rota** básicos + documentação ativa.

**Checklist**
- CRUD com validação e docs funcionando localmente.

---

### 6) [Banco de Dados & SQL + ORM & migrations](./blocos/bloco-06.md)
**Você vai aprender**
- SQL básico (SELECT/INSERT/UPDATE/DELETE, JOIN, índices).  
- SQLModel/SQLAlchemy + Alembic (criar/aplicar/rollback).  
- Relacionamentos 1–N e paginação básica.

**Desafio**
- API persistente (SQLModel + Alembic) com **seed** + 1 endpoint com filtro/paginação.

**Checklist**
- Modelou 2 tabelas relacionadas e executou migrations com sucesso.

---

### 7) [Autenticação & Segurança (JWT)](./blocos/bloco-07.md)
**Você vai aprender**
- Hash de senha (passlib), signup/login, JWT (Bearer), expiração.  
- Proteção de rotas e autorização simples por usuário.  
- Boas práticas de armazenamento de segredos.

**Desafio**
- `/auth` (signup/login) + proteger CRUD de tarefas + testes de sucesso/falha (401/403/200).

**Checklist**
- Cada usuário enxerga apenas suas tarefas; fluxos de login falho/sucesso cobertos.

---

### 8) [Front moderno: Vue 3 + Vite + npm](./blocos/bloco-08.md)
**Você vai aprender**
- Vue 3: componentes, props, estado, eventos, computed.  
- Vite: scaffold, dev server, build.  
- Consumo da sua API com `fetch/axios`, tratamento 401/500 e CORS básico.

**Desafio**
- App Vue com **login** e **CRUD de tarefas** consumindo sua API (token com cuidado).

**Checklist**
- Roda com `npm run dev`, integra com a API e trata erros de autenticação/servidor.

---

### 9) [Deploy simples (Back: Render | Front: Vercel)](./blocos/bloco-09.md)
**Você vai aprender**
- **Back (Render):** Web Service FastAPI + Postgres Free; envs `DATABASE_URL`, `SECRET`, `PORT`; **CORS** liberado para o front.  
- **Front (Vercel):** importar repo, build Vite, env `VITE_API_URL` apontando para o back de produção.  
- Procedimento básico de rollback e leitura de logs.

**Desafio**
- App online com **duas URLs públicas** (front e back) + README com links, envs e **rollback**.

**Checklist**
- `VITE_API_URL` correto; rotas protegidas respondendo (200/401) em produção; logs verificados.
