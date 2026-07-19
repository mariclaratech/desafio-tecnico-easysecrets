# Desafio Técnico - Easysecrets

## Objetivo

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de QA, automatizando o fluxo de cadastro, login, adição e remoção de um produto do carrinho na aplicação Demoblaze Store.

## Tecnologias utilizadas

- Playwright
- TypeScript
- Node.js

## Estrutura do projeto

```text
pages/
tests/
utils/
```

- **pages:** implementação do padrão Page Object Model (POM).
- **tests:** cenários de teste.
- **utils:** funções auxiliares, como geração de usuários.

## Decisões técnicas

Durante o desenvolvimento, foram adotadas as seguintes práticas:

- Utilização do padrão **Page Object Model (POM)** para separar a lógica das páginas da lógica dos testes.
- Organização do projeto em camadas para facilitar manutenção e reutilização.
- Utilização de **Locators** do Playwright para melhorar a legibilidade.
- Uso de **test.step()** para tornar o relatório HTML mais organizado.
- Geração dinâmica de usuários para evitar conflitos de cadastro.
- Sincronização utilizando eventos e esperas explícitas, evitando dependência de tempos fixos sempre que possível.

## Fluxo automatizado

O cenário automatizado realiza:

1. Cadastro de um novo usuário.
2. Login com o usuário criado.
3. Acesso ao produto.
4. Adição do produto ao carrinho.
5. Validação da inclusão no carrinho.
6. Remoção do produto.
7. Validação de que o carrinho ficou vazio.

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
npx playwright show-report
```