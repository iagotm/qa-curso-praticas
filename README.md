# 🧪 QA Curso Práticas – Testes Automatizados com Cypress

<p align="center">
  <img style='width: 70%' alt="Cypress Real World App" src="./public/img/rwa-readme-screenshot.png" />
</p>

Este repositório contém exercícios práticos de automação de testes realizados durante meu curso de formação em **Quality Assurance (QA)**. Utilizei **Cypress.io** para automatizar testes funcionais de um sistema web baseado no projeto *Real World App*.

---

## 📚 Funcionalidades testadas

### 🔐 Login
- ✅ Login com sucesso com credenciais válidas
- 🚫 Login com erro ao usar credenciais inválidas

### 🧾 Registro de Usuário
- ✅ Registro de novo usuário com informações válidas
- 🚫 Tentativa de registro com informações incompletas

### 💸 Enviar Dinheiro
- ✅ Envio de dinheiro com saldo suficiente
- 🚫 Tentativa de envio com saldo insuficiente

### 📜 Histórico de Transações
- ✅ Visualização correta de transações anteriores
- ℹ️ Mensagem exibida para usuários sem transações

---

## 🚀 Como executar os testes

## ✅ Pré-requisitos

Este projeto requer o **Node.js** instalado na sua máquina. Consulte o arquivo `.node-version` para saber a versão exata necessária.

Também é necessário o **Yarn Classic**. Após instalar o Node.js, execute o seguinte comando para instalar o módulo `yarn` (versão Classic - 1.x) globalmente:

```bash
npm install yarn@latest -g
```
🔍 Se você tiver o recurso experimental Corepack do Node.js habilitado, pode pular o passo acima, pois o projeto RWA já está configurado para usar o Yarn Classic localmente via Corepack.

#### 🚫 Yarn Modern
Este projeto não é compatível com o Yarn Modern (versão 2 ou superior).

### 📦 Instalação
Para clonar o repositório e instalar as dependências, execute os seguintes comandos:

```bash
git clone https://github.com/cypress-io/cypress-realworld-app
cd cypress-realworld-app
yarn
```

#### 💻 Usuários de Mac com chip M-series devem adicionar a variável `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true` antes da instalação:

```bash
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
````

### ▶️ Executar a aplicação

```bash
yarn dev
````
🚩 Nota importante:

A aplicação será executada por padrão nas portas 3000 (frontend) e 3001 (API backend).
Verifique se nenhuma outra aplicação ou serviço está utilizando essas portas.

Caso deseje alterar as portas padrão, modifique as variáveis PORT e VITE_BACKEND_PORT no arquivo .env.
⚠️ Atenção: Não versionar essas mudanças no Git, pois os ambientes de CI esperam que o app rode nas portas padrão.

### 🧪 Iniciar o Cypress
```bash
yarn cypress:open
```
Com isso, você terá o projeto rodando localmente e poderá iniciar os testes automatizados com Cypress.

### 🛠️ Tecnologias Utilizadas
Cypress.io

Node.js

JavaScript (ES6+)

### 📌 Objetivo do Projeto
Desenvolver habilidades práticas em QA, incluindo:

Criação de casos de teste baseados em cenários reais

Escrita de scripts de teste automatizados

Estruturação de testes utilizando boas práticas

### 📫 Contato
Se tiver sugestões ou quiser trocar ideias sobre QA, fico à disposição:

LinkedIn: www.linkedin.com/in/iago-teixeira-mendes

GitHub: https://github.com/iagotm/
