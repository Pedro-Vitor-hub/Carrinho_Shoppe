# 🛒 Carrinho de Compras — Shopee

Projeto desenvolvido durante o curso de **Node.js — Fundamentos**, da [DIO](https://www.dio.me/), com o objetivo de praticar os fundamentos da linguagem JavaScript no ambiente Node.js e a organização de um pequeno sistema de carrinho de compras.

## 📌 Sobre o projeto

O projeto simula um **carrinho de compras inspirado na Shopee**, permitindo trabalhar com itens adicionados ao carrinho e operações básicas relacionadas à compra.

A aplicação foi desenvolvida utilizando **Node.js**, com uma estrutura simples separando as entidades e os serviços responsáveis pelo funcionamento do carrinho.

O principal objetivo foi praticar conceitos fundamentais de programação, organização de código e manipulação de objetos e listas em JavaScript.

## 🚀 Tecnologias utilizadas

- **Node.js**
- **JavaScript**
- **Git/GitHub**

## 📂 Estrutura do projeto

```text
carrinho-shopee/
│
├── service/
│   ├── item.js
│   └── cart.js
│
└── main.js
```

### 📄 `main.js`

Arquivo principal da aplicação.

É responsável por executar o projeto e utilizar as funcionalidades desenvolvidas nos arquivos da pasta `service`.

### 📦 `service/item.js`

Contém a entidade responsável por representar um **item/produto** do carrinho.

Um item pode possuir informações como:

- Nome do produto
- Preço
- Quantidade
- SubTotal do produto

### 🛒 `service/cart.js`

Contém a lógica relacionada ao **carrinho de compras**.

É responsável pelas operações realizadas com os itens, como:

- Adicionar produtos
- Remover produtos
- Deletar itens
- Calcular total valores
- Exibir lista do Carrinho

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/carrinho-shopee.git
```

### 2. Entre na pasta do projeto

```bash
cd carrinho-shopee
```

### 3. Execute a aplicação

```bash
node main.js
```

## 💡 Exemplo de funcionamento

O fluxo básico da aplicação pode ser representado da seguinte forma:

```text
Produto
   ↓
Item
   ↓
Carrinho
   ↓
Adicionar / Remover
   ↓
Calcular total
   ↓
Exibir resultado
```

## 📚 Curso

Projeto desenvolvido como parte dos estudos do curso:

**Node.js — Fundamentos**  
**Digital Innovation One (DIO)**

O projeto foi utilizado como prática para consolidar os conhecimentos iniciais de desenvolvimento utilizando Node.js.

## 👨‍💻 Autor

**Pedro Vitor**

Estudante de Engenharia Mecânica e desenvolvedor em formação, atualmente estudando Node.js e buscando desenvolver projetos práticos para fortalecer seus conhecimentos em programação.

---

⭐ Se este projeto foi útil para seus estudos, considere deixar uma estrela no repositório!