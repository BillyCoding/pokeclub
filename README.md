<h1 align="center">
<a href="https://pokeclub.vercel.app/">
<img  src="https://i.ibb.co/nLrfgXB/thumbnail.png" width="800"/>
</a>
</h1>
<br />

<!-- <p style="font-size: 18px; font-weight: bold; margin: 4px 0">Sobre o projeto</p> -->

### Sobre o projeto

Este modelo foi realizado para demonstrar como utilizar o Frontend com ReactJs fazendo requisições com uma API Rest.

Para esta demonstração utilizei a API pública de pokemons [PokeAPI](https://pokeapi.co/docs/v2).

### Pré-requisitos

Antes de seguirmos para as configurações e uso do projeto, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React, para isso você pode seguir o guia do link abaixo:

[Ambiente React JS](https://pt-br.reactjs.org/)

### Instalação

1. Para instalar e utilizar o projeto é bem simples, basta baixar o projeto no computador com o ambiente configurado e executar o comando "yarn" para instalar as bibliotecas.

2. Em seguida é só executar o comando a seguir para iniciar o projeto:

```
yarn start
```

Com isso o projeto já estará funcionando pronto para testes.

<details style="margin:8px 0">
<summary style="font-size: 18px; font-weight: bold; margin: 4px 0">Feito com</summary>
<section>
AS tecnologias usadas para fazer essa template:

- [React](https://pt-br.reactjs.org/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [Redux](https://redux.js.org/) - O Redux é um contêiner de estado previsível para aplicativos JavaScript. Ele ajuda você a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;
  - [Redux Saga](https://redux-saga.js.org/) - O redux-saga é uma biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores em lidar com falhas;
- [React Router Dom](https://reactrouter.com/web) - O React Router Dom surgiu da necessidade comunidade do React de uma navegação de forma fácil de se usar, e escrita toda em JavaScript;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

</section>
</details>

<details style="margin:8px 0">

<summary style="font-size: 18px; font-weight: bold; margin: 4px 0">Estrutura de Arquivos</summary>
<section>
A estrutura de arquivos está da seguinte maneira:

```bash
YourApp
├── src/
│   ├── components/
│   │   └── Componentes da aplicação
│   ├── pages/
│   │   └── Telas da aplicação
│   ├── routes/
│   │   ├── Rotas da aplicação
│   ├── services/
│   │   └── api.ts
│   ├── store/
│   │   ├── ducks/
│   │   │   ├── pokemons/
│   │   │   │   └── actions.tsx
│   │   │   │   └── index.tsx
│   │   │   │   └── sagas.tsx
│   │   │   │   └── types.tsx
│   │   └── index.js
│   ├── styles/
│   │   ├── global.ts
│   ├── index.js
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .prettierrc.js
├── commitlint.config.js
├── package.json
└── tsconfig.json
```

</section>
</details>

<details style="margin:8px 0">
<summary style="font-size: 18px; font-weight: bold; margin: 4px 0">Edição</summary>
<section>
Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **components** - Diretório para armazenar arquivos de mídia em geral que possam ser utilizadas na aplicação;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.ts** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP;

  - **styles** - Diretório onde serão criados os arquivos de estilo para a aplicação;

  - **store** - Diretório onde será criada toda a estrutura do Redux para a aplicação, como os **Ducks** (Reducers + Action Types + Action Creators), os **Sagas** e um arquivo para centralizar toda essa configuração e disponibilizar para o restante da aplicação;

    - **ducks** - Diretório destinado a centralizar os **Ducks** da aplicação para padronização na estrutura relacionada ao Redux;

      - **index.ts** - Arquivo responsável por importar cada **Duck** criado e combiná-los em um só para serem usados no Redux através da função `combineReducers()` ;

    - **sagas** - Diretório destinado a centralizar os **Sagas** da aplicação para padronização na estrutura relacionada ao Redux;

      - **index.ts** - Arquivo responsável por relacionar as **Actions** disparadas pela aplicação às funções do **Saga**, que são Funções Generator, nele é definido os **Action Types** a serem "escutados" e qual função executar quando um Action Creator for executado;

    - **index.ts** - Arquivo responsável por executar a configuração para o funcinamento do Redux + Redux Saga, dentre suas funções estão: criar um **Middleware** para monitorar as Actions disparadas na aplicação, aplicar o middleware criado juntamente com um Enhancer que monitora o fluxo de uma função do **Saga**, criar o store global da aplicação combinando os reducers existentes e exportar o state criado;

  - **index.tsx** - Arquivo responsável por centralizar o código do diretório `src` , nele é inserido o HOC Provider do `react-redux` que é o responsável por disponilizar o state global para a aplicação, e dentro do Provider são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src` ;

  - **routes** - Diretório onde fica os arquivos com as configurações de navegação da aplicação, nele são criados os Navigators disponibilizados na biblioteca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__` ;

- **commitlint.config.js** - Arquivo que configura o commitizen para padronização dos commits;

- **tsconfig.json** - Arquivo de configuração do TypeScript no Editor, ele é o responsável por ativar o Auto Complete de códigos TypeScript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.
</section>
</details>

<!-- <p style="font-size: 18px; font-weight: bold; margin: 4px 0">Licença</p> -->

### Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- <p style="font-size: 14px; font-weight: bold; margin-top: 48px">Agradecemos por visitar nossa template :D </p> -->
