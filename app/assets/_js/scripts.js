var app = angular.module('myApp', []);
var dataset = new Array();//informções que serão passadas para a tabala

$(document).ready(function () {
    var tRepositorios = criaTable(dataset);//inicialização da tabela
    document.getElementById("envio").disabled = true;
});

app.controller('pesquisa', function ($scope, $http) {
    $scope.search = function () {
        document.getElementById('loading').style.display = "inline-block";
        $http({
            method: 'POST',
            url: 'pesquisa.php',
            data: {nome: $scope.nome},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function successCallback(response) {
            var table = response.data;
            tRepositorios.destroy();//destroi a tabela exitente
            dataset.length = 0;//reseta a matriz para cada busca
            angular.forEach(table, function (value, key) {
                dataset[key] = new Array(table[key].id, table[key].name, table[key].html_url);
            });//preechimento da matriz
            $scope.usuario = $scope.nome;
            tRepositorios = criaTable(dataset);/*cria uma nova tabela com os resultados( data table nao tem um suporte bom para ajax entao essa e a melhor solucao)*/

            showResults();//exibe a tabela(somente na primeira vez)           
            document.getElementById('loading').style.display = "none";
        }, function errorCallback() {
        });
    };
});

function showResults() {
    box = document.getElementById("resultados");
    box.style.display = "block";
    setTimeout(function () {
        box.style.opacity = "1";
        box.style.top = "0";
    }, 10);
}

function criaTable(dataset) {
    tRepositorios = $('#tRepositorios').DataTable({
        data: dataset,
        columns: [{title: "ID"}, {title: "Nome"}, {title: "URL"}],
        "info": false,
        "bLengthChange": false,
        "searching": false,
        "language": {
            "search": "Pesquisar:",
            "paginate": {
                "first": "Primeiro",
                "last": "Ultimo",
                "next": "PrÃ³ximo",
                "previous": "Anterior"
            },
            "zeroRecords": "Nenhum resultado encontrado."
        }

    });
    return tRepositorios;
}
function valida() {
    var nome = document.getElementById("nome").value.toString();
    if (nome !== null) {
        document.getElementById("envio").disabled = false;
    }
    document.getElementById("nome").value = nome.replace(/\s+/g, "");


}

