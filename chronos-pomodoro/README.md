# ⏱️ Chronos Pomodoro

Chronos Pomodoro é uma interface web para praticar a Técnica Pomodoro. O foco atual do projeto é consolidar a base visual, os componentes reutilizáveis e a estrutura de código para evoluir rapidamente para um timer funcional.

## 📌 Visão Geral

- Layout construído com React 19 e TypeScript, inicializado via Vite.
- Componentização completa com CSS Modules para encapsular estilos.
- Navegação lateral com ícones Lucide, contador central e formulário para registrar tarefas.
- Indicador visual de ciclos de trabalho/pausa e rodapé com links úteis.
- Design tokens definidos em `src/styles/theme.css`, facilitando ajustes de cores e contrastes.

## 🚧 Status do Projeto

> 🔄 MVP em desenvolvimento: gerenciamento de estado global implementado com Context API. A lógica do cronômetro está em progresso.

## 🧰 Stack Principal

- React 19 + TypeScript
- Vite
- Lucide React
- CSS Modules
- ESLint + Prettier

## ▶️ Executando localmente

1. Clone o repositório:

```bash
git clone https://github.com/your-user/chronos-pomodoro.git
```

2. Acesse a pasta do projeto:

```bash
cd chronos-pomodoro
```

3. Instale as dependências:

```bash
npm install
```

4. Suba o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local (geralmente `http://localhost:5173`).

## 📦 Scripts disponíveis

- `npm run dev` – Inicia o servidor de desenvolvimento.
- `npm run build` – Gera o bundle de produção (compila TypeScript e executa o build do Vite).
- `npm run preview` – Serve o bundle de produção localmente.
- `npm run lint` – Executa regras de lint configuradas.
- `npm run format` – Formata arquivos suportados com o Prettier.
- `npm run format:check` – Checa formatação sem alterar arquivos.

## 🧱 Estrutura de pastas

```
chronos-pomodoro/
├── src/
│   ├── _templates/
│   │   └── MainTemplates/
│   ├── components/
│   │   ├── Container/
│   │   ├── CountDown/
│   │   ├── Cycles/
│   │   ├── DefaultButton/
│   │   ├── DefaultInput/
│   │   ├── Footer/
│   │   ├── GenericHtml/
│   │   ├── Heading/
│   │   ├── Logo/
│   │   ├── MainForm/
│   │   └── Menu/
│   ├── contexts/
│   │   └── TaskContext/
│   ├── models/
│   │   ├── TaskModel.ts
│   │   └── TaskStateModel.ts
│   ├── pages/
│   │   ├── AboutPomodoro/
│   │   ├── Home/
│   │   └── NotFound/
│   ├── styles/
│   │   ├── global.css
│   │   └── theme.css
│   ├── App.tsx
│   └── main.tsx
├── public/
└── index.html
```

## 🛣️ Roadmap

- [x] Configurar gerenciamento de estado global com Context API.
- [x] Criar modelos de dados para tarefas (TaskModel, TaskStateModel).
- [ ] Implementar contagem regressiva real com controle de start/stop.
- [ ] Configurar ciclos completos (25/5 minutos) e long break automático.
- [ ] Persistir histórico de sessões e tarefa ativa.
- [ ] Adicionar modo claro/escuro utilizando os tokens do tema.
- [ ] Escrever testes unitários para componentes principais.

## 📜 Licença

Este projeto está licenciado sob a licença MIT.