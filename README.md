1 - Baixe os arquivos do projeto e descompacte-os em uma pasta de sua preferência.

2 - Instale o bower usando o comando abaixo:

npm install -g bower

3 - instale o gulp com o comando abaixo:

npm install -g gulp 

4 - Na linha de comando, mova-se para o diretório onde foi descompactado o projeto.

5 - instale as dependências do projeto com o comando:

bower install

6 - instale o gulp localmente:

npm install gulp --save-dev

7 - instale os plugins do gulp necessários a instalação:

npm install jshint gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-changed gulp-rev gulp-rename gulp-notify  browser-sync del --save-dev

8 - Execute o gulp para instalar o projeto:

gulp

9 - A instalação foi feita na past "dist" do diretório do projeto