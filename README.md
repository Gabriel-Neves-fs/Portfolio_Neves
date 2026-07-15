# Gabriel Neves | Portfolio

Portfólio pessoal desenvolvido para apresentar minha trajetória profissional, meus projetos reais e minha evolução como Desenvolvedor Full Stack & RPA.

Deploy: `https://portfolio-gabriel-neves.vercel.app`

Repositório: `https://github.com/Gabriel-Neves-fs/Portfolio_Neves`

## Objetivo

Este projeto conecta minha experiência atual como Analista de Suporte Técnico Pleno com minha atuação em desenvolvimento de software.

O foco do portfólio é mostrar:

- Desenvolvimento Full Stack com Next.js, TypeScript, Node.js e PostgreSQL
- Experiência prática com sistemas em produção, APIs, logs e integrações
- Criação de automações RPA com Python, Pandas, OpenPyXL e Excel
- Projetos publicados, com código disponível e contexto técnico
- Facilidade de contato para oportunidades, networking e projetos

## Principais Recursos

- Hero section com apresentação profissional e foto otimizada
- Animação de foco no termo Full Stack
- Background interativo com efeito de pontos
- Cards flutuantes sobre a imagem principal
- Seção de experiência profissional logo após a apresentação
- Carrossel de tecnologias com ícones
- Carrossel de projetos com navegação por setas e scroll horizontal
- Cards de projetos com imagens, links, stack e destaques técnicos
- Seção de contato com email, GitHub, LinkedIn e WhatsApp
- Conteúdo organizado em arquivos locais TypeScript

## Projetos em Destaque

### Fintra

Aplicação full stack para gestão financeira pessoal.

- Stack: Next.js, TypeScript, Fastify, Prisma e PostgreSQL
- Repositório: `https://github.com/Gabriel-Neves-fs/fintra_public`
- Aplicação: `https://fintra-web-swart.vercel.app/`

### Bugsy

Extensão para apoiar organização, acompanhamento e consulta de bugs, tarefas técnicas e evidências de investigação.

- Stack: JavaScript, Chrome Extensions, HTML e CSS
- Repositório: `https://github.com/Gabriel-Neves-fs/bugsy_public`
- Site: `https://bugsy-web.vercel.app/`
- O README do projeto explica como instalar a extensão localmente.

### Validação de Emails VTEX

Automação RPA em Python para validar emails em massa contra API pública de Master Data da VTEX.

- Stack: Python, Pandas, OpenPyXL, Excel e VTEX Master Data API
- Repositório: `https://github.com/Gabriel-Neves-fs/automacao_consulta_emails_massa_vtex`

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- React Icons
- Motion / Framer Motion
- shadcn/ui style primitives

## Estrutura

```txt
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    dot-field.tsx
    projects-carousel.tsx
    section-heading.tsx
    stack-carousel.tsx
    tilted-card.tsx
    true-focus.tsx
    ui/
  data/
    experiences.ts
    profile.ts
    projects.ts
    skills.ts
public/
  profile/
  projects/
```

## Manutenção de Conteúdo

Os dados principais ficam separados da interface:

- Perfil e contatos: `src/data/profile.ts`
- Projetos: `src/data/projects.ts`
- Experiências: `src/data/experiences.ts`
- Skills e tecnologias: `src/data/skills.ts`

Para adicionar um novo projeto, inclua um objeto em `src/data/projects.ts` e, se houver imagens, coloque os arquivos em `public/projects`.

## Como Rodar Localmente

```bash
npm install
npm run dev
```

A aplicação roda em:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
```

## Deploy

O projeto foi preparado para deploy na Vercel.

Fluxo recomendado:

```bash
git add .
git commit -m "mensagem do commit"
git push
```

A Vercel publica automaticamente a versão mais recente do branch principal.

## Contato

- GitHub: `https://github.com/Gabriel-Neves-fs`
- LinkedIn: `https://www.linkedin.com/in/gabriel-neves-4194a4389/`
- Email: `gabrielnevesdev01@gmail.com`
- WhatsApp: `https://wa.link/wheb8b`
