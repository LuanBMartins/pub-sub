Requisitos:
- Node.js v14.21.0 +
- Redis (Porta padrão: 6379)

Instalar dependências (estando na raiz do projeto)
- npm install

Rodar a aplicação (estando na raiz do projeto):
- 1°: npm run start:pub
- 2°: npm run start:sub
- 3°: cd serverless/steam_consume_promo
- - 4°: npm install
- - 5°: node index.js

Descrição
- SUB - Conexão Web Socket que se comunica com o cliente e recebe os tópicos de inscrição
- PUB - Método HTTP que recebe uma requisição e dispara mensagens através da função PUB
- steam_consume_promo - Rotina com objetivo de verificar promoções do dia contidas na plataforma Steam