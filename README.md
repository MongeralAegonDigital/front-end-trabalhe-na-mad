# Instruções de instalação

**Caro avaliador**, 

Devido a políticas do github eu optei por manter a api autenticada, para tal acesse 
https://github.com/settings/tokens e requisite um token. Eu optei por essa escolha pois
o uso da api de maneira não autenticada acarreta em número limitado de requisições, com
o acesso via token esse limite aumenta de maneira consideravel evitando erros de limite de requests.

## Dependências

1. nodejs
2. bower


## Criando uma build
1. Acesse https://github.com/settings/tokens e obtenha um token para usar a API do github de maneira segura.
2. **npm install**
3. **bower install**
4. Com o seu token em mãos abra o arquivo **src/assets/constants/strings.json**  e na entrada API_TOKEN subsititua
   a entrada "PUT YOUR TOKEN HERE" pelo seu token obtido no passo 1;
5. **gulp**
6. **gulp serve:dist**
7. Acesse http://localhost:3000 e use à demontração


Obrigao pela oportunidade!
