
//NOTA: aplicação para a vaga de Front-End da Mongeral Aegon

//instruções para instalação da aplicação de testes


1 - Baixar a aplicação e descompactá-la em uma pasta


2 - através do cmd mover-se para a pasta onde foi descompactada o projeto e instalar as dependências da aplicação:
	
	bower install
	
	
	
3 - instalar o gulp localmente:

	npm install gulp --save-dev
	
	
4 - instalar as dependências do gulp:

	npm install jshint gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-changed gulp-rev gulp-rename gulp-notify  browser-sync del --save-dev
	
	
5 - instalar o projeto localmente:

	gulp
	
	
6 - rodar a aplicação em ambiente local na porta 3000:

	gulp watch			