
//NOTA: aplica��o para a vaga de Front-End da Mongeral Aegon

//instru��es para instala��o da aplica��o de testes


1 - Baixar a aplica��o e descompact�-la em uma pasta


2 - atrav�s do cmd mover-se para a pasta onde foi descompactada o projeto e instalar as depend�ncias da aplica��o:
	
	bower install
	
	
	
3 - instalar o gulp localmente:

	npm install gulp --save-dev
	
	
4 - instalar as depend�ncias do gulp:

	npm install jshint gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-changed gulp-rev gulp-rename gulp-notify  browser-sync del --save-dev
	
	
5 - instalar o projeto localmente:

	gulp
	
	
6 - rodar a aplica��o em ambiente local na porta 3000:

	gulp watch			