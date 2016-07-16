<!DOCTYPE html>
<html>
    <head>
        <title>Teste Mongeral Aegon</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/tabelas.css" rel="stylesheet" />
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="assets/js/tabelas.js"></script>
        <script src="assets/js/main.js"></script>


    </head>
    <body ng-app="myApp">
        <div class="top">
            <img class="left" src="https://madstyle.mongeralaegon.com.br/assets/app/css/img/site/global/mongeral-aegon-logo-site.png" alt="Mongeral Aegon Logo" title="Direitos autoriais da imagem pertencem a Mongeral Aegon">
            <div class="titulo">Teste para Front-End <span class="desnvolvedor">Desenvolvedor: André Moreira</span></div>
        </div>
        <div class="clear"></div>


        <div ng-controller="pesquisa">

            <div class="box">
                <div class="titulo">Pesquisa de repositórios por usuários</div>
                <div class="inner">

                    <form method="post" ng-submit="search()">
                        <label for="nome">Digite o nome do usuario:</label>
                        <div class="search"><input type="text" ng-model="nome" id="nome" onkeyup="valida()"><img id="loading" src="assets/imgs/loadingGif.gif"></img></div>
                        <button id="envio" type="submit">Enviar</button>
                    </form>

                </div>
            </div>

            <div class="box" id="resultados">
                <div class="titulo">Resultados da pesquisa para {{usuario}}</div>
                <div class="inner">

                    <table id="tRepositorios" class="display" style="width: 100%;">
                    </table>
                </div>
            </div>

        </div>



    </body>
</html>