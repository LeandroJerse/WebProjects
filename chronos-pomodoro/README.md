# ⏱️ Chronos Pomodoro

Um aplicativo de cronômetro Pomodoro desenvolvido com React, TypeScript e Vite.

## 📋 Sobre o Projeto

Chronos Pomodoro é uma aplicação web que implementa a técnica Pomodoro para gerenciamento de tempo. O aplicativo ajuda você a focar em tarefas dividindo o trabalho em intervalos de tempo concentrados, tradicionalmente de 25 minutos.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento rápido
- **Lucide React** - Biblioteca de ícones modernos
- **CSS Modules** - Estilização modular com escopamento local
- **ESLint** - Linter para manter qualidade de código
- **Prettier** - Formatador de código

## 🎨 Features

- ⏱️ Cronômetro Pomodoro
- 🎨 Sistema de tema dark
- 🎯 Interface moderna e intuitiva
- 📱 Design responsivo
- ⚡ Performance otimizada com Vite

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/chronos-pomodoro.git
```

2. Entre na pasta do projeto:
```bash
cd chronos-pomodoro
```

3. Instale as dependências:
```bash
npm install
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter ESLint
- `npm run format` - Formata o código com Prettier
- `npm run format:check` - Verifica a formatação do código

## 🧱 Estrutura do Projeto

```
chronos-pomodoro/
├── src/
│   ├── components/            # Componentes React (co-location CSS Module)
│   │   ├── Container/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── Heading/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── Logo/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   ├── styles/                # Estilos globais e tema
│   │   ├── global.css
│   │   └── theme.css
│   ├── App.tsx                # Componente raiz
│   └── main.tsx               # Entry point
├── public/                    # Arquivos estáticos
└── index.html                 # HTML de entrada
```

## 📝 Mudanças Recentes

- Reestruturação dos componentes para pastas dedicadas com `index.tsx` e `styles.module.css` (co-location de estilos).
- Novo componente `Logo` e importação no `App.tsx`.
- Atualização do `App.tsx` para utilizar `Container`, `Heading` e `Logo` organizando as seções de Menu, Formulário e Footer.
- Ajustes no `styles/global.css` (reset/base) e uso de variáveis em `styles/theme.css`.

## 🎨 Sistema de Tema

O projeto utiliza CSS Custom Properties para gerenciamento de cores:

- **Gray Scale** - Tons de cinza de 100 a 900
- **Primary Colors** - Cores primárias e variações
- **Semantic Colors** - Cores para sucesso, aviso, erro e informação
- **Text Colors** - Cores de texto para diferentes superfícies

## 📝 Licença

Este projeto está sob a licença MIT.