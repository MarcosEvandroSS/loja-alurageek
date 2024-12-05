# Mercado Joja

Este projeto simula um catálogo de produtos dinâmico para o **Mercado Joja**, inspirado no universo de Stardew Valley. Ele utiliza um servidor local para fornecer uma lista de produtos que é carregada dinamicamente no front-end por meio de JavaScript.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura do site.
- **CSS**: Estilização com design inspirado em jogos retrô.
- **JavaScript**: Lógica e manipulação do DOM.
- **JSON Server**: Simulação de uma API REST para servir os dados dos produtos.

## 🚀 Funcionalidades

- Carregamento dinâmico de produtos a partir de uma API local.
- Layout responsivo e estilizado.
- Exibição de informações como nome, preço e imagem dos produtos.

## 📂 Estrutura do Projeto

- `index.html`: Estrutura principal do site.
- `styles/style.css`: Estilização do site.
- `js/controles/main.js`: Lógica para carregar os produtos e renderizá-los no DOM.
- `services/product-services.js`: Serviço para comunicação com a API.
- `db.json`: Base de dados simulada do JSON Server.

## 🏃 Como Rodar o Projeto

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Instale o JSON Server globalmente (caso ainda não tenha):
   ```bash
   npm install -g json-server
   ```
3. Clone este repositório e navegue até a pasta do projeto.
4. Inicie o JSON Server:
   ```bash
   json-server --watch db.json --port 3001
   ```
5. Abra o arquivo `index.html` em seu navegador para visualizar o projeto.

## 👨‍💻 Desenvolvido por

**Marcos Evandro**


