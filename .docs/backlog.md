# Backlog por tasks

## Task 1 - Fundacao do projeto

Objetivo: criar a base tecnica e visual inicial do portfolio.

O que sera feito:

- Criar projeto Next.js com TypeScript.
- Configurar Tailwind CSS.
- Criar estrutura `src/app`, `src/components`, `src/data` e `src/lib`.
- Criar primeira versao das secoes principais.

Por que isso importa:

Uma base simples e organizada reduz retrabalho e deixa o projeto pronto para evoluir por secoes.

Criterio de conclusao:

- `npm run build` passa.
- Pagina inicial renderiza.
- Dados principais ficam fora da interface.

Resultado esperado:

Portfolio navegavel localmente.

Status: concluida.

## Task 2 - Dados reais e identidade

Objetivo: trocar placeholders por informacoes reais e ajustar a narrativa.

O que sera feito:

- Atualizar GitHub, LinkedIn, email e curriculo.
- Revisar headline profissional.
- Refinar texto do hero e sobre mim.
- Confirmar se WhatsApp entrara no CTA.

Por que isso importa:

Portfolio profissional precisa comunicar clareza em poucos segundos. Dados placeholder reduzem confianca.

Criterio de conclusao:

- Nenhum link generico restante.
- Textos principais revisados.
- CTA final pronto para contato real.

Resultado esperado:

Primeira versao apresentavel do conteudo pessoal.

Status: em andamento.

Notas:

- GitHub, LinkedIn e email adicionados.
- WhatsApp nao entra nesta versao.
- Curriculo ainda pendente de arquivo/link.
- Projetos destacados: Fintra e Bugsy.
- Links de repositorio, deploy do Fintra e download do Bugsy adicionados.

## Task 2.1 - Primeiro commit e publicacao no GitHub

Objetivo: versionar a fundacao do portfolio no repositorio remoto.

O que sera feito:

- Revisar arquivos que entram no primeiro commit.
- Garantir que `.next`, `node_modules` e arquivos locais estejam no `.gitignore`.
- Criar o commit inicial.
- Enviar para `origin/main`.

Por que isso importa:

Versionar cedo permite acompanhar evolucao, abrir deploy pela Vercel e manter historico profissional do projeto.

Criterio de conclusao:

- Remote `origin` configurado.
- Primeiro commit criado.
- Branch principal publicada no GitHub.

Resultado esperado:

Repositorio GitHub pronto para conectar na Vercel.

## Task 3 - Projetos reais

Objetivo: transformar a secao de projetos no ponto mais forte do portfolio.

O que sera feito:

- Cadastrar projetos reais em `src/data/projects.ts`.
- Adicionar links de GitHub e deploy.
- Criar ou inserir previews dos projetos.
- Escrever problema, stack e destaques tecnicos de cada projeto.

Por que isso importa:

Projetos bem descritos mostram capacidade tecnica, raciocinio de produto e maturidade de engenharia.

Criterio de conclusao:

- Pelo menos 2 projetos reais completos.
- Cada projeto tem problema, stack, status e destaques tecnicos.
- Links funcionam.

Resultado esperado:

Secao de projetos pronta para recrutadores e contatos tecnicos.

## Task 4 - Responsividade e polimento visual

Objetivo: garantir que o site funcione bem em desktop e mobile.

O que sera feito:

- Revisar espacamentos.
- Ajustar tamanhos de texto.
- Validar cards em telas pequenas.
- Corrigir quebras, overflow e hierarquia visual.

Por que isso importa:

A maioria dos acessos iniciais pode vir do celular, principalmente via LinkedIn.

Criterio de conclusao:

- Sem textos cortados.
- Sem sobreposicao visual.
- Navegacao confortavel no mobile.

Resultado esperado:

Portfolio com aparencia profissional em diferentes telas.

## Task 5 - README e deploy

Objetivo: preparar o projeto para publicacao.

O que sera feito:

- Refinar README publico.
- Criar instrucoes de instalacao e execucao.
- Preparar deploy na Vercel.
- Revisar metadados da pagina.

Por que isso importa:

Um repositorio organizado tambem comunica maturidade profissional.

Criterio de conclusao:

- README finalizado.
- Build passando.
- Deploy publicado.
- URL pronta para LinkedIn e curriculo.

Resultado esperado:

Portfolio publicado e compartilhavel.
