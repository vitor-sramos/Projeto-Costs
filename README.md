#  Costs

**Costs** é uma aplicação web desenvolvida em **React.js** que permite o cadastro, gerenciamento e monitoramento de projetos e serviços, com controle de orçamento e custos. O projeto foi criado com foco educacional, como prática de componentes, hooks, rotas e integração com APIs simuladas.

## Funcionalidades

-  Criar projetos com nome, orçamento e categoria
-  Adicionar e remover serviços em cada projeto
-  Calcular o custo total dos serviços
-  Listar projetos existentes com informações resumidas
-  Navegação entre páginas com React Router
-  Feedback visual para ações como criação, edição e exclusão

##  Tecnologias utilizadas

- [React.js](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [json-server](https://github.com/typicode/json-server)
- [React Icons](https://react-icons.github.io/react-icons/)
- [uuid](https://www.npmjs.com/package/uuid)
- HTML5 + CSS3

# Estrutura do projeto

```plaintext
src/
├── components/         # Componentes reutilizáveis (Button, Input, etc.)
├── layout/             # Componentes de layout (Navbar, Container)
├── pages/              # Páginas principais (Home, Projects, etc.)
├── services/           # Requisições HTTP
├── App.js              # Arquivo principal com rotas
└── index.js            # Ponto de entrada do React
```

##  Instalação e uso

# Clone o repositório
```bash
git clone https://github.com/vitor-sramos/Projeto-Costs
```

# Instale as dependências
```bash
npm install
```

# Inicie o servidor json (em um terminal separado)
```bash
npx json-server --watch db.json --port 5000
```

# Inicie a aplicação React
```bash
npm start
```
Acesse a aplicação em: http://localhost:3000

# Aprendizados
- Estruturação de componentes React
- Utilização de Hooks (useState, useEffect)
- Integração com API REST fake (json-server)
- Gerenciamento de estado em componentes
- Rotas com React Router DOM


## Autor
- Desenvolvido por Vitor de Souza Ramos
- Estudante de Ciência da Computação na UNESC
- [GitHub](https://github.com/vitor-sramos). 
- [LinkedIn](https://www.linkedin.com/in/vitor-ramos-934302349).
