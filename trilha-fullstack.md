# Trilha Full-Stack Minimalista (Python/FastAPI + Vue 3) — com IA como Tutor

> Objetivo: sair do básico para **aplicação web real online** (API + front), com testes e deploy (**Back: Render | Front: Vercel**).
> A IA entra **como tutor** (diagnóstico, revisão, pistas graduais) — **nunca** como “agente” que faz por você.
> Premissa: cada bloco traz **lógica aplicada** dentro dos desafios (sem módulo teórico isolado).

---

## Sumário dos blocos

1. **Fundamentos de Trabalho: Git + IA (modo tutor)**
2. **Python intermediário + testes**
3. **Web essencial (HTTP + HTML + CSS + JS)**
4. **Backend com FastAPI (rotas, validação, docs)**
5. **Banco de Dados & ORM + migrations**
6. **Autenticação & Segurança (JWT)**
7. **Front moderno: Vue 3 + Vite (consumindo a API)**
8. **Deploy simples (Back: Render | Front: Vercel)**

---

## Bloco 1 — Fundamentos de Trabalho: **Git + IA (modo tutor)**

**Você vai aprender**

-   Git/GitHub: repo, branch curta, PR, `.gitignore`, README e changelog simples.
-   Templates de processo: `ISSUE_TEMPLATE.md` e `PULL_REQUEST_TEMPLATE.md`.
-   IA como **tutor**: prompts curtos (diagnóstico, code review, arquitetura), **pistas graduais** e pedir ajuda com **reprodução mínima** (contexto, tentativa, logs).
-   **Lógica aplicada**: organizar pensamento em passos (checklist), decompor bug e escrever critérios de aceite (operações lógicas na prática).

**Desafio**

-   Abrir o repo do projeto integrador, criar 1 issue, 1 branch e 1 PR usando o template.
-   Criar `PROMPTS.md` (3 prompts úteis) e `DIARIO_DE_ERROS.md` com **1 bug real** resolvido (antes → depois).
-   Tag inicial `v0.1.0` + changelog.

**Checklist**

-   [ ] Repo instalável do zero (comandos no README)
-   [ ] 1 PR revisado (feedback aplicado)
-   [ ] `PROMPTS.md` e `DIARIO_DE_ERROS.md` versionados
-   [ ] Política de uso da IA em 10 linhas no README

---

## Bloco 2 — **Python intermediário + testes**

**Você vai aprender**

-   Coleções, exceções, módulos, `venv`, organização mínima.
-   `pytest` (asserts, fixtures) e primeiros testes de erro (unhappy path).
-   **Lógica aplicada**: pré-condições/validações, fluxo de erro e invariantes de função.

**Desafio**

-   Repo `py-toolbox` com 3 funções úteis + **5 testes** + README.

**Checklist**

-   [ ] Executa `pytest -q`
-   [ ] Explica exceções e validações
-   [ ] Estrutura de pastas mínima

---

## Bloco 3 — **Web essencial (HTTP + HTML + CSS + JS)**

**Você vai aprender**

-   Ciclo requisição/resposta, métodos, status e headers.
-   HTML semântico, CSS básico; JS com `fetch` e tratamento de 4xx/5xx.
-   **Lógica aplicada**: estados (loading/erro/vazio) e condições no DOM.

**Desafio**

-   Página que consome uma API pública/mock, valida formulário e exibe resposta no DOM.

**Checklist**

-   [ ] Explica um ciclo HTTP
-   [ ] `fetch` com tratamento de erro
-   [ ] Acessibilidade mínima (labels, foco, contraste)

---

## Bloco 4 — **FastAPI (rotas, validação, docs)**

**Você vai aprender**

-   CRUD, Pydantic, status codes e documentação (Swagger/Redoc).
-   Organização por camadas (routers/services/repositories).
-   **Lógica aplicada**: regras de negócio simples no service + validação.

**Desafio**

-   API de **tarefas** com validação + **testes de rota** básicos + docs ativas.

**Checklist**

-   [ ] CRUD funcional com validação
-   [ ] Docs servindo como contrato
-   [ ] Testes cobrindo caso de erro

---

## Bloco 5 — **Banco de Dados & ORM + migrations**

**Você vai aprender**

-   SQL básico (SELECT/INSERT/UPDATE/DELETE, JOIN, índices).
-   SQLModel/SQLAlchemy + Alembic (criar/aplicar/rollback).
-   **Lógica aplicada**: relacionamentos, filtros e paginação.

**Desafio**

-   API persistente com **seed** + 1 endpoint com filtro/paginação.

**Checklist**

-   [ ] 2 tabelas relacionadas
-   [ ] Migrations indo e voltando
-   [ ] Seed reproduzível

---

## Bloco 6 — **Autenticação & Segurança (JWT)**

**Você vai aprender**

-   Hash de senha (passlib), signup/login, JWT (Bearer) e expiração.
-   Proteção de rotas, autorização simples e cuidado com segredos (`.env`).
-   **Lógica aplicada**: regras de acesso (e/ou), expiração/renovação.

**Desafio**

-   `/auth` (signup/login) + proteger CRUD de tarefas + testes (401/403/200).

**Checklist**

-   [ ] Usuário enxerga apenas suas tarefas
-   [ ] Fluxos de login falho/sucesso cobertos

---

## Bloco 7 — **Vue 3 + Vite (consumindo a API)**

**Você vai aprender**

-   Componentes, props/estado, composables e services de API.
-   Integração com Auth (token), tratamento 401/500 e CORS.
-   **Lógica aplicada**: guarda de rota, renderização condicional e cache leve.

**Desafio**

-   App Vue com **login** e **CRUD** consumindo sua API (token com cuidado).

**Checklist**

-   [ ] `npm run dev` funcionando
-   [ ] Fluxos de erro (401/500) tratados
-   [ ] Composable de API com retries básicos (opcional)

---

## Bloco 8 — **Deploy simples (Back: Render | Front: Vercel)**

**Você vai aprender**

-   Back (Render): Web Service FastAPI + Postgres Free; envs `DATABASE_URL`, `SECRET`, `PORT`; **CORS** liberado para o front.
-   Front (Vercel): importar repo, build Vite, `VITE_API_URL` apontando para produção.
-   **Lógica aplicada**: healthcheck e **smoke test** pós-deploy (passo a passo).

**Desafio**

-   App online com **duas URLs públicas** + README com links, envs e **rollback**.

**Checklist**

-   [ ] `VITE_API_URL` correto
-   [ ] Rotas protegidas respondendo em produção
-   [ ] Logs verificados e smoke test registrado

---

### Rituais rápidos (mantidos em todos os blocos)

-   **Retro** ao fim do bloco (20–30 min): 1 melhoria de processo para a próxima semana.
-   **Regra 30–15–perguntar** com **pistas graduais**.
-   **Diário de erros**: problema → tentativa → solução (linkado no README).
-   **PRs pequenos** com template (por quê? riscos? rollback?).
