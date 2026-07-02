# Guia de conteudo

## Onde atualizar cada coisa

Projetos:

- Arquivo: `src/data/projects.ts`
- Use quando quiser adicionar, remover ou editar projetos.

Skills:

- Arquivo: `src/data/skills.ts`
- Use para atualizar tecnologias por categoria.

Experiencia:

- Arquivo: `src/data/experiences.ts`
- Use para ajustar cargos, responsabilidades, ferramentas e conquistas.

Perfil e contatos:

- Arquivo: `src/data/profile.ts`
- Use para atualizar nome, headline, email, GitHub, LinkedIn, curriculo e WhatsApp caso entre no futuro.

Pagina principal:

- Arquivo: `src/app/page.tsx`
- Use para ajustar estrutura, ordem das secoes e textos fixos da interface.

## Padrao para projetos

Cada projeto deve responder:

- Qual problema ele resolve?
- Quem se beneficia dele?
- Qual stack foi usada?
- Qual decisao tecnica merece destaque?
- Ele esta publicado?
- Ele possui link web, download ou apenas repositorio?
- O repositorio esta limpo o suficiente para ser mostrado?

## Como escrever bons destaques tecnicos

Prefira frases especificas:

- "Autenticacao com cookies HTTP Only"
- "Dashboard mensal com agregacao por categoria"
- "API REST modular com Fastify"
- "Modelagem relacional com Prisma"

Evite frases vagas:

- "Projeto completo"
- "Codigo bem feito"
- "Sistema moderno"
- "Varias funcionalidades"

## Checklist antes de publicar

- Links de GitHub e LinkedIn corretos.
- Email real no CTA.
- Projetos sem links vazios.
- Textos revisados em portugues.
- `npm run build` passando.
- README publico atualizado.

## Observacao sobre arquivos ocultos

A pasta `.docs` e oculta por convencao visual, mas nao e secreta. Se algum conteudo nao deve ir para o GitHub, ele deve ficar fora do repositorio ou ser adicionado ao `.gitignore`.
