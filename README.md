# Desafio Técnico - Easysecrets

## Objetivo

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de QA, automatizando o fluxo de cadastro, login, adição e remoção de um produto do carrinho na aplicação Demoblaze Store.

## Tecnologias utilizadas

- **Playwright:** framework utilizado para automação dos testes end-to-end por oferecer excelente suporte a múltiplos navegadores, API moderna e geração de relatórios HTML.
- **TypeScript:** utilizado para proporcionar tipagem estática, maior legibilidade e facilidade de manutenção do código.
- **Node.js:** ambiente de execução utilizado para gerenciamento das dependências e execução dos testes.

## Estrutura do projeto

```text
.
├── pages/
├── tests/
├── utils/
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
└── .gitignore
```

### Organização

- **pages/**: implementação do padrão **Page Object Model (POM)**, concentrando os elementos e ações de cada página.
- **tests/**: contém os cenários automatizados.
- **utils/**: funções auxiliares reutilizáveis, como geração dinâmica de usuários.
- **playwright.config.ts**: configurações do Playwright, como browsers, reporter e demais opções de execução.
- **package.json**: gerenciamento das dependências e scripts do projeto.
- **tsconfig.json**: configuração do compilador TypeScript.

## Decisões técnicas

Durante o desenvolvimento foram adotadas algumas práticas visando organização, manutenção e reutilização do código.

- Utilização do padrão **Page Object Model (POM)** para separar a lógica da interface da lógica dos testes.
- Organização do projeto em pastas (Page Objects, testes e utilitários), separando responsabilidades e facilitando manutenção e reutilização.
- Utilização de **Locators** do Playwright, evitando seletores frágeis.
- Uso de **test.step()**, proporcionando relatórios HTML mais claros e organizados.
- Geração dinâmica de usuários para evitar conflitos entre execuções.
- Sincronização utilizando eventos e esperas explícitas sempre que possível, reduzindo a dependência de tempos fixos (`waitForTimeout`).

 ## Diferenciais implementados

Além dos requisitos obrigatórios, foram implementadas algumas melhorias visando aumentar a qualidade e a manutenção do projeto:

- Utilização do padrão Page Object Model (POM).
- Organização do projeto em camadas.
- Uso de `test.step()` para gerar relatórios HTML mais legíveis.
- Geração dinâmica de usuários para permitir múltiplas execuções sem conflitos.
- Código reutilizável por meio de métodos encapsulados nas Page Objects.

## Fluxo automatizado

O cenário automatizado realiza:

1. Cadastro de um novo usuário.
2. Login com o usuário criado.
3. Acesso ao produto.
4. Adição do produto ao carrinho.
5. Validação da inclusão no carrinho.
6. Remoção do produto.
7. Validação de que o carrinho ficou vazio.

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Como executar

Instalar as dependências:

```bash
npm install
```

Instalar os navegadores do Playwright:

```bash
npx playwright install
```

Executar os testes:

```bash
npx playwright test
```

Executar em modo visual:

```bash
npx playwright test --headed
```

Abrir o relatório:

```bash

## Observações

Este projeto foi desenvolvido com foco em legibilidade, reutilização de código e facilidade de manutenção, seguindo boas práticas de automação de testes com Playwright.
npx playwright show-report
```
