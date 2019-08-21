angular.module('alurapic').controller('FotosController', function($scope, $http){
 $scope.fotos = [];
 $scope.filtro = '';
 $http.get('/v1/fotos')
    .success(function(retorno){
        console.log(retorno);
        $scope.fotos = retorno;
    })
    .error(function(erro){
        console.log = erro;
    });//Código que busca dados no servidor.

});

    /*Código utilizado quando não se buscava fotos do servidor.
 $scope.fotos = [
     {
    url : 'https://ap.imagensbrasil.org/images/imagens-lobos.jpg',
    titulo : 'Lobo1'
    },

    {
    url : 'https://ap.imagensbrasil.org/images/imagens-lobos.jpg',
    titulo : 'Lobo2'
    },

    {
    url : 'https://ap.imagensbrasil.org/images/imagens-lobos.jpg',
    titulo : 'Lobo3'
    }
];*/