# Teste Front-End para trabalhar na MAD

Esta aplicação busca no GitHub listas de repositórios, de empresas e usuários, usando a API desse serviço. Basta o usuário digitar o nome da empresa/organização/usuário, e clicar em buscar.

Para o teste, foi usado AngularJS, Gulp, Sass, Bootstrap (apenas CSS, parte dele) e uma font bonita :).

Segue abaixo a listagem de tudo o que é necessário para rodar o app na versão de desenvolvimento.

### Requisitos:

* Node.js
* NPM
* Gulp (sudo npm install -g gulp)

Instalar dependências do fontgen (pacote de conversão de fontes para Linux):
"fontforge ttfautohint" e "ttf2eot ttf2svg" :
```
    sudo apt-get install  fontforge ttfautohint
    sudo npm install -g  ttf2eot ttf2svg
```
Para iniciar o projeto, utilize o comando `npm install` para instalar as demais dependências abaixo:
* angular
* bootstrap
* browser-sync
* gulp
* gulp-concat
* gulp-fontgen
* gulp-minify-css
* gulp-ngmin
* gulp-rename
* gulp-sass
* gulp-uglify
* gulp-useref
* ttf2woff2
* useref

Para gerar nova versão de build, execute a task do Gulp `gulp build`
(esta task minifica e concatena css, js e gera fontes apartir do formato .ttf ou .otf).

Para rodar a versão de desenvolvimento, execute a task `gulp watch` que atualiza no navegador alterações feitas nos arquivos .scss.

Dúvidas a respeito das tasks, consultar arquivos gulpfile.js.
