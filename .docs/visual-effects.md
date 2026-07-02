# Documentacao dos efeitos visuais

Este documento explica os principais efeitos visuais usados no portfolio e por que cada um foi aplicado. A ideia e servir como guia de manutencao: se voce quiser ajustar intensidade, cor, performance ou comportamento, sabe onde mexer.

## DotField

Arquivo principal: `src/components/dot-field.tsx`

CSS de apoio: `src/components/dot-field.css`

Uso na pagina: `src/app/page.tsx`

O `DotField` e o background interativo do hero. Ele cria uma grade de pontos em `canvas` e altera a posicao dos pontos conforme o movimento do mouse.

### Como funciona

O componente monta um `canvas` e calcula uma lista de pontos com base em:

- largura e altura do container;
- raio de cada ponto;
- espacamento entre pontos;
- densidade da tela (`devicePixelRatio`).

Cada ponto guarda duas posicoes principais:

- `ax` e `ay`: posicao original, ou ancora;
- `sx` e `sy`: posicao suavizada usada para desenhar.

Quando o mouse passa perto, o componente calcula a distancia entre o cursor e cada ponto. Se o ponto esta dentro do raio de influencia (`cursorRadius`), ele aplica um deslocamento suave. Esse deslocamento cria a sensacao de volume, como se a malha estivesse reagindo ao cursor.

### Por que usamos canvas

Usar `canvas` evita renderizar centenas ou milhares de elementos HTML. Isso melhora performance, porque o React nao precisa reconciliar cada ponto. O React apenas monta o componente; a animacao roda direto no canvas com `requestAnimationFrame`.

### Controle de movimento

O efeito usa:

- `requestAnimationFrame` para animar em sincronia com o navegador;
- `mousemove` para atualizar a posicao do cursor;
- interpolacao para suavizar o movimento dos pontos;
- `engagement` para o efeito ficar mais forte quando o mouse esta se movendo.

Esse `engagement` evita que o background fique agitado o tempo todo. O efeito responde melhor quando ha movimento real.

### Brilho do cursor

Alem do canvas, existe um `svg` com `radialGradient`. Ele acompanha o mouse e cria um brilho suave em volta do cursor.

Foi usado `useId()` para gerar um id estavel para o gradiente. Isso evita erro de hidratacao no Next.js, porque o HTML renderizado no servidor precisa bater com o HTML do cliente.

### Onde ajustar

No uso do componente em `src/app/page.tsx`:

```tsx
<DotField
  dotRadius={2.2}
  dotSpacing={13}
  cursorRadius={440}
  bulgeStrength={58}
  glowRadius={180}
  sparkle
  waveAmplitude={0.5}
/>
```

Principais props:

- `dotRadius`: tamanho dos pontos;
- `dotSpacing`: distancia entre pontos;
- `cursorRadius`: area de influencia do mouse;
- `bulgeStrength`: forca do deslocamento;
- `glowRadius`: tamanho do brilho;
- `sparkle`: adiciona variacao sutil no tamanho de alguns pontos;
- `waveAmplitude`: adiciona movimento leve constante.

## Transicao do DotField para fundo solido

Arquivo: `src/app/globals.css`

O DotField fica apenas no hero. Do Sobre para baixo, o portfolio usa fundo solido escuro para melhorar leitura.

Isso foi feito com:

- `.dot-field-layer` limitado a uma altura especifica;
- `mask-image` para o efeito desaparecer aos poucos;
- `.ink-panel::after` criando um gradiente no final do hero.

Esse conjunto evita um corte seco entre o background com pontos e o restante da pagina.

## TiltedCard

Arquivo principal: `src/components/tilted-card.tsx`

CSS de apoio: `src/components/tilted-card.css`

Uso na pagina: foto principal do hero.

O `TiltedCard` aplica uma inclinacao 3D na imagem conforme a posicao do mouse.

### Como funciona

O componente mede a posicao do cursor dentro da imagem:

- se o mouse vai para cima, altera `rotateX`;
- se vai para os lados, altera `rotateY`;
- no hover, aumenta levemente o `scale`.

Foi usado `motion/react` com `useMotionValue` e `useSpring`. O `useSpring` evita movimento duro, deixando a animacao mais natural.

### Por que usar aqui

A foto do hero e um ponto forte da primeira dobra. O tilt deixa o visual mais vivo sem transformar o portfolio em algo exagerado.

## TrueFocus

Arquivo principal: `src/components/true-focus.tsx`

CSS de apoio: `src/components/true-focus.css`

Uso na pagina: texto "Full Stack" no hero.

O `TrueFocus` separa uma frase em palavras e anima um frame de foco entre elas.

### Como funciona

O componente:

- separa a frase usando `separator`;
- guarda refs de cada palavra;
- calcula a posicao da palavra ativa com `getBoundingClientRect`;
- move o frame usando `motion.div`;
- aplica blur nas palavras que nao estao ativas.

No portfolio, ele reforca visualmente o termo "Full Stack", que e o foco profissional da pagina.

## StackCarousel

Arquivo principal: `src/components/stack-carousel.tsx`

Uso na pagina: secao Stack.

O `StackCarousel` recebe os grupos de tecnologias de `src/data/skills.ts`, filtra as tecnologias com icones disponiveis e renderiza uma faixa animada.

### Como funciona

O componente duplica a lista de tecnologias:

```tsx
const marqueeSkills = [...skills, ...skills];
```

Isso permite uma animacao horizontal continua. O CSS move a faixa com `@keyframes stack-marquee`.

Os icones vem da biblioteca `react-icons`, usando Simple Icons para tecnologias como React, Next.js, TypeScript, Tailwind, Node.js, Prisma e PostgreSQL.

## Preview dos projetos

Arquivos:

- `src/data/projects.ts`
- `src/app/page.tsx`
- `src/app/globals.css`

Cada projeto pode ter varias imagens em `images`. Exemplo:

```ts
images: ["/projects/fintra01.png", "/projects/fintra02.png"]
```

No card, essas imagens viram uma galeria horizontal automatica dentro de um mockup escuro. O objetivo e mostrar prints reais sem quebrar a identidade visual do portfolio.

### Tratamento visual

O preview aplica:

- overlay escuro;
- filtro de saturacao;
- moldura interna;
- scanline no hover;
- pausa da galeria ao passar o mouse.

Assim os prints continuam reais, mas ficam integrados ao tema escuro/ambar do site.

## Animacao dos botoes

Arquivo: `src/components/ui/button.tsx`

CSS: `src/app/globals.css`

Todos os botoes recebem a classe `interactive-button`.

Ela adiciona:

- leve subida no hover;
- brilho passando pelo botao;
- sombra ambar;
- movimento sutil no icone;
- feedback no clique com `scale`.

Isso cria consistencia entre botoes do hero, projetos e contato.

## Decisao geral de design

O portfolio usa efeitos para reforcar percepcao de cuidado tecnico, mas sem esconder o conteudo. A regra principal foi:

- hero pode ter mais impacto visual;
- secoes de conteudo precisam de leitura limpa;
- stack e projetos devem provar capacidade tecnica;
- experiencia atual entra como contexto profissional, nao como foco visual principal.
