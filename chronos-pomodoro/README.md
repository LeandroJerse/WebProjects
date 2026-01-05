# ⏱️ Chronos Pomodoro

Uma aplicação web moderna e elegante para praticar a Técnica Pomodoro, construída com React 19, TypeScript e Vite. O projeto foca em componentização, design system consistente e arquitetura escalável.

## 🎯 Sobre o Projeto

Chronos Pomodoro é uma interface intuitiva para gerenciar sessões de trabalho focado usando a metodologia Pomodoro. O projeto foi desenvolvido com ênfase em:

- **Componentização**: Componentes reutilizáveis e isolados
- **Design System**: Tokens de design e temas consistentes
- **Arquitetura**: Separação clara entre páginas, componentes e templates
- **Qualidade**: ESLint, Prettier e TypeScript para código limpo
- **Performance**: Vite + React 19 + SWC para desenvolvimento e build rápidos

## ✨ Funcionalidades

- 🍅 Timer Pomodoro com contagem regressiva
- 🔄 Sistema de ciclos visuais (trabalho/pausa curta/pausa longa)
- 📝 Formulário para registro de tarefas
- 🌓 Alternância entre tema claro e escuro
- 📱 Design responsivo
- 🎨 Interface moderna e minimalista
- 📄 Página informativa sobre a técnica Pomodoro
- 🚫 Página 404 customizada

## 🧰 Stack Tecnológica

### Core
- **React 19.1.1** - Biblioteca para construção de interfaces
- **TypeScript 5.9.3** - Superset JavaScript com tipagem estática
- **Vite 7.1.7** - Build tool e dev server ultra-rápido
- **@vitejs/plugin-react-swc** - Plugin React com SWC para compilação otimizada

### Bibliotecas
- **lucide-react 0.548.0** - Ícones SVG modernos e customizáveis

### Qualidade de Código
- **ESLint 9.36.0** - Linter JavaScript/TypeScript
- **typescript-eslint 8.45.0** - Regras ESLint para TypeScript
- **Prettier 3.6.2** - Formatador de código
- **eslint-config-prettier** - Integração ESLint + Prettier

### Configurações ESLint
- eslint-plugin-react-hooks - Regras para Hooks do React
- eslint-plugin-react-refresh - Validações para Fast Refresh

## 📁 Arquitetura do Projeto

```
chronos-pomodoro/
├── src/
│   ├── _templates/           # Templates de página (layouts)
│   │   └── MainTemplates/
│   │       └── index.tsx
│   │
│   ├── pages/                # Páginas da aplicação
│   │   ├── Home/
│   │   │   └── index.tsx
│   │   ├── AboutPomodoro/
│   │   │   └── index.tsx
│   │   └── NotFound/
│   │       └── index.tsx
│   │
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Container/        # Container para layout
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   │
│   │   ├── Logo/             # Logotipo da aplicação
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   │
│   │   ├── Menu/             # Menu de navegação com tema
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   │
│   │   ├── CountDown/        # Cronômetro Pomodoro
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   │
│   │   ├── Cycles/           # Indicador visual de ciclos
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   │
│   │   ├── MainForm/         # Formulário de tarefas
│   │   │   └── index.tsx
│   │   │
│   │   ├── DefaultInput/     # Input reutilizável
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   │
│   │   ├── DefaultButton/    # Botão reutilizável
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   │
│   │   ├── GenericHtml/      # Container para conteúdo HTML genérico
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   │
│   │   ├── Heading/          # Componente de título
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   │
│   │   └── Footer/           # Rodapé da aplicação
│   │       ├── index.tsx
│   │       └── styles.module.css
│   │
│   ├── styles/               # Estilos globais e tokens
│   │   ├── global.css        # Reset e estilos base
│   │   └── theme.css         # Design tokens (cores, fontes, espaçamentos)
│   │
│   ├── App.tsx               # Componente raiz da aplicação
│   └── main.tsx              # Entry point
│
├── public/                   # Arquivos públicos estáticos
├── .vscode/                  # Configurações do VS Code
│   └── settings.json         # Prettier, formatação e ESLint
├── .prettierrc               # Configurações do Prettier
├── eslint.config.js          # Configurações do ESLint
├── tsconfig.json             # Configuração TypeScript (referências)
├── tsconfig.app.json         # Configuração TypeScript da aplicação
├── tsconfig.node.json        # Configuração TypeScript do Node
├── vite.config.ts            # Configurações do Vite
└── package.json              # Dependências e scripts
```

## 🎨 Padrões de Componentização

### 1. **Componentes Atômicos** (`components/`)
Componentes pequenos e reutilizáveis com responsabilidade única:
- `Container` - Wrapper de layout
- `DefaultButton` - Botão estilizado
- `DefaultInput` - Input de formulário
- `Logo` - Logotipo
- `Heading` - Títulos padronizados
- `GenericHtml` - Container para conteúdo rico

### 2. **Componentes Compostos** (`components/`)
Componentes que combinam outros componentes:
- `Menu` - Navegação com controle de tema
- `CountDown` - Timer com lógica de estado
- `Cycles` - Visualização de ciclos
- `MainForm` - Formulário completo
- `Footer` - Rodapé com links

### 3. **Templates** (`_templates/`)
Layouts que estruturam páginas inteiras:
- `MainTemplates` - Template principal com header, menu, footer e área de conteúdo

### 4. **Páginas** (`pages/`)
Componentes de página que utilizam templates:
- `Home` - Página inicial com timer e formulário
- `AboutPomodoro` - Página informativa sobre a técnica
- `NotFound` - Página de erro 404

## 🎨 Design System

### Tokens de Design (`src/styles/theme.css`)
Sistema de design baseado em variáveis CSS para consistência visual:

- **Cores**: Paleta de cores do tema claro e escuro
- **Tipografia**: Definição de fontes, tamanhos e pesos
- **Espaçamentos**: Sistema de espaçamento consistente
- **Bordas**: Border radius padrão
- **Sombras**: Elevações e profundidade

### CSS Modules
Cada componente possui seu próprio arquivo de estilos isolado, evitando conflitos:
- Escopo local por padrão
- Composição de classes
- Integração com TypeScript

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/chronos-pomodoro.git
cd chronos-pomodoro
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O Vite iniciará o servidor em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

O bundle otimizado será gerado na pasta `dist/`

### Preview do Build

```bash
npm run preview
```

Visualiza o build de produção localmente

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com hot reload |
| `npm run build` | Gera build de produção otimizado |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Executa ESLint em todo o projeto |
| `npm run format` | Formata código com Prettier |
| `npm run format:check` | Verifica formatação sem modificar |

## ⚙️ Configurações

### VS Code Settings (`.vscode/settings.json`)
- **Prettier** como formatador padrão
- **Format on Save** habilitado
- **ESLint** automático ao salvar
- Suporte para TypeScript, JavaScript, JSON e CSS

### Prettier (`.prettierrc`)
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

### TypeScript (`tsconfig.app.json`)
- Target: ES2022
- Modo strict ativado
- JSX: react-jsx (novo runtime)
- Module resolution: bundler
- Verificações rigorosas de tipos

### ESLint (`eslint.config.js`)
- Recomendações oficiais JavaScript/TypeScript
- Regras do React Hooks
- Regras do React Refresh (Vite)
- Integração com Prettier

## 🎯 Funcionalidades Implementadas

### ✅ Sistema de Temas
- [x] Tema claro e escuro
- [x] Toggle de tema no menu
- [x] Persistência no localStorage
- [x] Ícones dinâmicos (Sol/Lua)
- [x] Transições suaves

### ✅ Componentes Base
- [x] Container responsivo
- [x] Logo customizado
- [x] Menu de navegação
- [x] Cronômetro visual
- [x] Indicador de ciclos
- [x] Formulário de tarefas
- [x] Inputs e botões estilizados
- [x] Rodapé com links

### ✅ Páginas
- [x] Home com timer e formulário
- [x] Página sobre Pomodoro
- [x] Página 404 criativa

### ✅ Arquitetura
- [x] Separação de concerns (pages/components/templates)
- [x] CSS Modules para escopo isolado
- [x] TypeScript em 100% do código
- [x] Props tipadas em todos componentes

### ✅ Qualidade
- [x] ESLint configurado
- [x] Prettier configurado
- [x] Format on save
- [x] Linting automático

## 🛣️ Roadmap Futuro

### 🔜 Próximas Features
- [ ] Implementar lógica do timer (contagem regressiva real)
- [ ] Sistema de start/pause/stop do cronômetro
- [ ] Notificações quando ciclos terminam
- [ ] Som ao completar ciclos
- [ ] Configuração personalizada de tempos (25/5/15 min)
- [ ] Persistência de tarefas no localStorage
- [ ] Histórico de tarefas completadas
- [ ] Estatísticas de produtividade
- [ ] Gráficos de progresso
- [ ] Export de dados (JSON/CSV)

### 🚀 Melhorias Técnicas
- [ ] React Router para navegação real
- [ ] Context API para estado global
- [ ] Zustand ou Redux para gerenciamento de estado
- [ ] React Query para cache
- [ ] Vitest + React Testing Library
- [ ] Storybook para documentação de componentes
- [ ] PWA (Progressive Web App)
- [ ] Service Worker para offline
- [ ] CI/CD com GitHub Actions
- [ ] Deploy automático (Vercel/Netlify)

### 🎨 UI/UX
- [ ] Animações com Framer Motion
- [ ] Feedback visual aprimorado
- [ ] Micro-interações
- [ ] Modo de foco (fullscreen)
- [ ] Customização de cores
- [ ] Temas adicionais
- [ ] Acessibilidade (WCAG AA)

## 🏗️ Decisões Arquiteturais

### Por que CSS Modules?
- Escopo local automático (sem colisões de classes)
- Integração nativa com Vite
- Melhor performance (tree-shaking de CSS)
- Type-safe com TypeScript
- Sem overhead de runtime (vs CSS-in-JS)

### Por que Vite?
- Servidor de desenvolvimento extremamente rápido (ESM nativo)
- Hot Module Replacement instantâneo
- Build otimizado com Rollup
- Suporte nativo a TypeScript
- Plugins poderosos e simples

### Por que SWC?
- 20x mais rápido que Babel
- Compilação Rust otimizada
- Menor uso de memória
- Melhor experiência de desenvolvimento

### Por que separar pages/components/templates?
- **Pages**: Rotas da aplicação (alto nível)
- **Components**: Reutilizáveis e testáveis (baixo nível)
- **Templates**: Layouts compartilhados (médio nível)
- Facilita navegação no código
- Escalabilidade do projeto
- Responsabilidades claras

## 📚 Recursos e Referências

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Técnica Pomodoro](https://francescocirillo.com/products/the-pomodoro-technique)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### Guidelines
- Siga os padrões de código (ESLint + Prettier)
- Mantenha componentes pequenos e focados
- Use TypeScript corretamente
- CSS Modules para estilos
- Commits semânticos (Conventional Commits)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido como projeto de estudos em React + TypeScript + Vite.

---

**⏱️ Foco total, sem pressa, sem pausa, só vai!** 🍅🚀

Este projeto está licenciado sob a licença MIT.