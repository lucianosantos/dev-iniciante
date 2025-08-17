// Resource types for rich content
interface Resource {
    title: string;
    url: string;
}

interface PromptExample {
    label: string;
    prompt: string;
}

interface TimeAllocation {
    [key: string]: string;
}

interface Section {
    title: string;
    overview: string;
    videos?: Resource[];
    articles?: Resource[];
    readings?: Resource[];
    cheatsheets?: Resource[];
    cheatsheet_prompts?: PromptExample[];
    exercises?: string[];
}

interface Repository {
    name_suggestion: string;
    structure_pre: string;
    deliverables_checklist: string[];
}

export interface RoadmapNode {
    id: string;
    number: string;
    title: string;
    status: 'todo' | 'in-progress' | 'completed';
    duration: string;
    summary: string[];
    overview: string;
    essentials: string[];
    project: string[];
    checklist: string[];
    references: string[];
    optional?: string[];
    // New scalable structure for detailed block pages
    time_suggested?: TimeAllocation;
    sections?: { [key: string]: Section };
    repo?: Repository;
}

export const roadmapData: RoadmapNode[] = [
    {
        id: '01',
        number: '01',
        title: 'Git + IA (modo tutor)',
        status: 'in-progress',
        duration: '~40h',
        summary: [
            'IA primeiro (modo Estudo) para diagnóstico e estudo ativo',
            'Repo, branch e PR com template',
            'README, changelog e diário de erros',
        ],
        overview:
            'Foco em brasileiros sem inglês forte: começamos pela IA (modo Estudo do ChatGPT) para aprender por perguntas e checagens, depois aplicamos Git com boas práticas e um entregável real (repositório padronizado + 1 PR).',
        essentials: [
            'IA (modo Estudo): diagnóstico, questionamento socrático, revisão de commit/PR, flashcards',
            'Git: status → add → commit → pull --rebase → push',
            'Branches curtos + PR com checklist',
            'Mensagens padronizadas (Conventional Commits)',
            'Templates em .github/ (PR/Issue) e CHANGELOG',
            'Diário de erros e registro de prompts',
        ],
        project: [
            'Criar repo pessoal com README, LICENSE e CHANGELOG',
            'Definir workflow de branches (ex.: main + feature/*) e abrir 1 PR',
            'Aplicar Conventional Commits e checklist no PR',
            'Documentar prompts do modo Estudo em docs/prompts-ia.md',
            'Manter docs/diario-erros.md com lições e correções',
        ],
        checklist: [
            '[ ] Modo Estudo configurado e prompts salvos',
            '[ ] Git configurado e primeiro push no GitHub',
            '[ ] Branch strategy descrita no README',
            '[ ] Templates .github/ ativos (PR/Issue)',
            '[ ] 1 PR revisado (humano + IA) e mergeado',
            '[ ] CHANGELOG iniciado',
            '[ ] Diário de erros criado e preenchido',
        ],
        time_suggested: {
            'IA (modo Estudo)': '8-10h',
            'Git (fundamentos)': '18-20h',
            Project: '10-12h',
        },
        sections: {
            ia: {
                title: 'IA (modo Estudo) — como aprender melhor',
                overview:
                    'Ative o modo Estudar e aprender do ChatGPT. A proposta é um tutor que pergunta antes de responder, valida raciocínio e sugere exercícios graduais. Aqui você configura seus prompts-base para usar durante todo o curso.',
                videos: [
                    {
                        title: 'Apresentamos o modo Estudo (overview rápido)',
                        url: 'https://openai.com/pt-BR/index/chatgpt-study-mode/',
                    },
                    {
                        title: 'Modo Estudo do ChatGPT — demonstração (exemplo prático)',
                        url: 'https://www.youtube.com/watch?v=Ibre_TIs2Hw',
                    },
                    {
                        title: 'Como usar ChatGPT para estudar programação (demonstrações)',
                        url: 'https://www.youtube.com/watch?v=aE0qUhMIo6g',
                    },
                    {
                        title: '8 formas de estudar com ChatGPT (ideias rápidas)',
                        url: 'https://www.youtube.com/watch?v=tKazenmZwHc',
                    },
                ],
                articles: [
                    {
                        title: 'OpenAI — Apresentamos o modo Estudo',
                        url: 'https://openai.com/pt-BR/index/chatgpt-study-mode/',
                    },
                    {
                        title: 'DIO — O guia definitivo da engenharia de prompts',
                        url: 'https://www.dio.me/articles/o-guia-definitivo-da-engenharia-de-prompts-uma-jornada-desvendando-o-poder-de-prompts-assertivos',
                    },
                ],
                cheatsheet_prompts: [
                    {
                        label: 'Diagnóstico',
                        prompt: 'Ative o modo Estudar e aprender. Faça 5 perguntas sobre Git (nível iniciante). Avance só se eu acertar 3/5. Se eu errar, explique e dê 1 exercício.',
                    },
                    {
                        label: 'Socrático',
                        prompt: 'Não entregue a resposta. Faça perguntas curtas e confirme meu raciocínio a cada passo até eu chegar no comando ou conceito certo.',
                    },
                    {
                        label: 'Revisão de commit/PR',
                        prompt: 'Avalie a mensagem de commit/PR abaixo segundo Conventional Commits: clareza, escopo, quebra de compatibilidade. Sugira melhorias.',
                    },
                    {
                        label: 'Comparativo',
                        prompt: 'Explique reset --soft vs --mixed vs --hard, com quando usar cada um, e dê exemplos práticos.',
                    },
                    {
                        label: 'Flashcards',
                        prompt: 'Gere 12 flashcards em PT-BR sobre Git (pergunta/Resposta curta). Depois aplique um quiz aleatório comigo.',
                    },
                    {
                        label: 'Registro diário',
                        prompt: 'Resuma em 5 bullets o que aprendi hoje e proponha 1 próximo passo prático para amanhã.',
                    },
                ],
            },
            git: {
                title: 'Git (fundamentos) — do zero à colaboração',
                overview:
                    'Você sai do zero, entende conceitos (repositório, staging, commit, branch, remoto, PR) e pratica o fluxo status → add → commit → pull --rebase → push. Adota mensagens padronizadas e PR curto.',
                videos: [
                    {
                        title: 'Rafaella Ballerini — O que é Git e GitHub? (parte 1 — conceitos)',
                        url: 'https://www.youtube.com/watch?v=DqTITcMq68k',
                    },
                    {
                        title: 'Rafaella Ballerini — Como usar Git e GitHub na prática (parte 2)',
                        url: 'https://www.youtube.com/watch?v=UBAX-13g8OM',
                    },
                    {
                        title: 'Minicurso (45 min): Git do zero para você sair do zero',
                        url: 'https://www.youtube.com/watch?v=ts-H3W1uLMM',
                    },
                    {
                        title: 'Guia completo em 1 vídeo — Git e GitHub do zero',
                        url: 'https://www.youtube.com/watch?v=pyM5QLS2h6M',
                    },
                    {
                        title: 'Curso completo 2025 (com prática e desafios) — opcional',
                        url: 'https://www.youtube.com/watch?v=192HgwRgOYE',
                    },
                ],
                readings: [
                    {
                        title: 'Conventional Commits — especificação',
                        url: 'https://www.conventionalcommits.org/pt-br/v1.0.0/',
                    },
                    {
                        title: 'Como escrever boas mensagens de commit (FreeCodeCamp)',
                        url: 'https://www.freecodecamp.org/portuguese/news/como-escrever-boas-mensagens-de-commit-um-guia-convincente/',
                    },
                    {
                        title: 'Pro Git — capítulo básico (documentação oficial)',
                        url: 'https://git-scm.com/book/pt-br/v2',
                    },
                ],
                cheatsheets: [
                    {
                        title: 'GitHub — Folha de Dicas',
                        url: 'https://training.github.com/downloads/pt_BR/github-git-cheat-sheet.pdf',
                    },
                ],
                exercises: [
                    'Criar repo local com git init',
                    'Staging com git add (seletivo)',
                    'Commits descritivos seguindo Conventional Commits',
                    'Branches: criar, trocar, merge',
                    'Pull request básico',
                    'Resolver conflito simples',
                ],
            },
            project: {
                title: 'Projeto — aplicar conhecimentos',
                overview:
                    'Monte um projeto pessoal aplicando Git + IA + workflow profissional. Documente tudo para servir de portfólio.',
                exercises: [
                    'Criar repo pessoal com README, LICENSE e CHANGELOG',
                    'Definir workflow de branches (ex.: main + feature/*) e abrir 1 PR',
                    'Aplicar Conventional Commits e checklist no PR',
                    'Documentar prompts do modo Estudo em docs/prompts-ia.md',
                    'Manter docs/diario-erros.md com lições e correções',
                ],
            },
        },
        repo: {
            name_suggestion: 'fundamentos-dev-study',
            structure_pre: 'docs/, README.md, LICENSE, CHANGELOG.md',
            deliverables_checklist: [
                'Modo Estudo configurado e prompts salvos',
                'Git configurado e primeiro push no GitHub',
                'Branch strategy descrita no README',
                'Templates .github/ ativos (PR/Issue)',
                '1 PR revisado (humano + IA) e mergeado',
                'CHANGELOG iniciado',
                'Diário de erros criado e preenchido',
            ],
        },
        references: [
            'OpenAI — Modo Estudo do ChatGPT',
            'Rafaella Ballerini — Git e GitHub (partes 1 e 2)',
            'Minicurso Git em 45 minutos',
            'Conventional Commits',
            'Pro Git Book',
            'GitHub — Folha de Dicas',
        ],
    },
    {
        id: '02',
        number: '02',
        title: 'Python (base + testes)',
        status: 'todo',
        duration: '~40h',
        summary: [
            'Coleções, exceções, módulos',
            'pytest (inclui casos de erro)',
        ],
        overview:
            'Fundamentos de Python com foco em estruturas de dados, tratamento de erros e testes automatizados.',
        essentials: [
            'Estruturas de dados e coleções',
            'Tratamento de exceções',
            'Módulos e packages',
            'Testes com pytest',
        ],
        project: [
            'Implementar sistema de gerenciamento',
            'Cobertura de testes >80%',
            'Casos de teste para erros',
        ],
        checklist: [
            '[ ] Estruturas de dados implementadas',
            '[ ] Exceções tratadas adequadamente',
            '[ ] Módulos organizados',
            '[ ] Testes pytest funcionando',
        ],
        references: [
            'Python Documentation',
            'pytest - Documentação oficial',
            'Clean Code Python',
        ],
    },
    {
        id: '03',
        number: '03',
        title: 'Web básica: HTML5 + CSS3',
        status: 'todo',
        duration: '~40h',
        summary: [
            'Semântica, responsivo, acessibilidade',
            'Mini-site estático com dados mock',
        ],
        overview:
            'Desenvolvimento web moderno com HTML5 semântico, CSS3 responsivo e foco em acessibilidade.',
        essentials: [
            'HTML5 semântico e acessível',
            'CSS3 responsivo e flexbox/grid',
            'Princípios de design responsivo',
        ],
        project: [
            'Site estático responsivo',
            'Dados mock estruturados',
            'Validação de acessibilidade',
        ],
        checklist: [
            '[ ] HTML semântico implementado',
            '[ ] Design responsivo funcional',
            '[ ] Acessibilidade validada',
            '[ ] Site publicado',
        ],
        references: ['MDN Web Docs', 'CSS Grid Guide', 'WCAG Guidelines'],
    },
    {
        id: '04',
        number: '04',
        title: 'API: HTTP, status, docs e /status',
        status: 'todo',
        duration: '~40h',
        summary: ['CRUD + tratamento 400/401/404/422/500', 'OpenAPI viva'],
        overview:
            'Neste bloco você expõe um CRUD com validação, retorna códigos de status corretos e documenta tudo com OpenAPI. A rota pública /status será usada no bloco de deploy.',
        essentials: [
            'Rotas REST (200/201/204/400/401/404/422/500)',
            'Validação Pydantic e mensagens de erro',
            'Docs vivas (Swagger/Redoc)',
        ],
        project: [
            'Implementar /status + linkar docs no README',
            'Teste mínimo de rota de erro (ex.: 422)',
        ],
        checklist: [
            '[ ] CRUD responde 200/201/204',
            '[ ] Erros 400/401/404/422/500 padronizados',
            '[ ] /status pública',
            '[ ] OpenAPI acessível',
        ],
        references: ['Doc FastAPI — status codes', 'HTTP semântica — MDN'],
        optional: ['Responder erros com códigos e corpos consistentes'],
    },
    {
        id: '05',
        number: '05',
        title: 'Banco: SQLite → PostgreSQL',
        status: 'todo',
        duration: '~40h',
        summary: ['ORM + migrations + seed', 'GUI: pgAdmin/DBeaver'],
        overview:
            'Gerenciamento de banco de dados com ORM, migrations e ferramentas visuais.',
        essentials: [
            'SQLite para desenvolvimento',
            'PostgreSQL para produção',
            'ORM e migrations',
            'Seeds e fixtures',
        ],
        project: [
            'Schema de banco definido',
            'Migrations automatizadas',
            'Interface administrativa',
        ],
        checklist: [
            '[ ] ORM configurado',
            '[ ] Migrations funcionando',
            '[ ] Seeds implementados',
            '[ ] GUI configurada',
        ],
        references: [
            'SQLAlchemy Documentation',
            'PostgreSQL Guide',
            'pgAdmin Tutorial',
        ],
    },
    {
        id: '06',
        number: '06',
        title: 'Auth & Segurança (JWT)',
        status: 'todo',
        duration: '~40h',
        summary: [
            'Hash, OAuth2 password, JWT',
            'CORS/headers, rate-limit básico',
        ],
        overview:
            'Implementação de autenticação e segurança com JWT, OAuth2 e medidas de proteção básicas.',
        essentials: [
            'Autenticação JWT',
            'Hash de senhas seguro',
            'OAuth2 flow',
            'Headers de segurança',
        ],
        project: [
            'Sistema de login completo',
            'Rate limiting implementado',
            'CORS configurado',
        ],
        checklist: [
            '[ ] JWT implementado',
            '[ ] Passwords com hash',
            '[ ] OAuth2 funcional',
            '[ ] Rate limiting ativo',
        ],
        references: [
            'JWT.io Documentation',
            'OAuth2 Specification',
            'OWASP Security Guide',
        ],
    },
    {
        id: '07',
        number: '07',
        title: 'Vue 3 + Vite (consumindo a API)',
        status: 'todo',
        duration: '~40h',
        summary: ['Login/guard, erros/loading/empty', 'Opcional: Tailwind'],
        overview:
            'Frontend moderno com Vue 3 e Vite, consumindo a API desenvolvida anteriormente.',
        essentials: [
            'Vue 3 Composition API',
            'Roteamento com guards',
            'Estados de loading/erro/vazio',
            'Integração com API',
        ],
        project: [
            'SPA completa consumindo API',
            'Autenticação frontend',
            'UX para todos os estados',
        ],
        checklist: [
            '[ ] Vue 3 app funcionando',
            '[ ] Guards de rota implementados',
            '[ ] Estados de UI tratados',
            '[ ] API integrada',
        ],
        references: [
            'Vue 3 Documentation',
            'Vite Build Tool',
            'Vue Router Guide',
        ],
    },
    {
        id: '08',
        number: '08',
        title: 'Deploy: Render + Vercel',
        status: 'todo',
        duration: '~40h',
        summary: ['Env, /status, smoke test, rollback'],
        overview:
            'Deploy completo com monitoramento, testes de fumaça e estratégia de rollback.',
        essentials: [
            'Deploy backend (Render)',
            'Deploy frontend (Vercel)',
            'Variáveis de ambiente',
            'Monitoramento básico',
        ],
        project: [
            'Aplicação em produção',
            'Pipeline de deploy',
            'Smoke tests automatizados',
        ],
        checklist: [
            '[ ] Backend deployed (Render)',
            '[ ] Frontend deployed (Vercel)',
            '[ ] /status funcionando',
            '[ ] Smoke tests passando',
        ],
        references: [
            'Render Documentation',
            'Vercel Deploy Guide',
            'Environment Variables Best Practices',
        ],
    },
];
