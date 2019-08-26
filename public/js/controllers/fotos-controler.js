angular.module('alurapic').controller('FotosController', function ($scope, recursoFoto, $rootScope) {
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.mensagem = $rootScope.mensagemGlobal;
    console.log($scope.mensagem);

    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });

    //    $html.get('/v1/fotos/')
      //  .success(function (retorno) {
        //    console.log(retorno);
          //  $scope.fotos = retorno;
       // })
       // .error(function (erro) {
       //     console.log = erro;
       // });//Código que busca dados no servidor.

    $scope.remover = function (foto) {
        recursoFoto.delete({fotoId: foto._id}, function(){
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = ' Foto ' + foto.titulo + ' removida com sucesso!';
        },function(erro){
            console.log(erro);
            $scope.mensagem = ' Não foi possível apagar a foto ' + foto.titulo;
        });

        
/*        $http.delete('/v1/fotos/' + foto._id)
            .success(function () {
                var indiceDaFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceDaFoto, 1);
                $scope.mensagem = 'Foto ' + foto.titulo + ' Removida com sucesso!';
            })
            .error(function (erro) {
                console.log(erro);
                console.mensagem = 'Não foi possível apagar a foto' + foto.titulo;

            });*/
    };
    $rootScope.mensagemGlobal = '';
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