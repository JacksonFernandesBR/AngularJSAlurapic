angular.module('alurapic')
    .controller('FotoController', function($scope, recursoFoto, $routeParams) {

        $scope.foto = {};
        
        if($routeParams.fotoId){
            /*$http.get('/v1/fotos/' + $routeParams.fotoId)
            .success(function(foto){
                $scope.foto = foto;
            })
            .error(function(erro){
                $scope.mensagem = 'Não foi possível obter a foto'
            });*/

            recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
                $scope.foto = foto;
            }, function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            });
        }

        $scope.submeter = function() {

            if ($scope.formulario.$valid) {

                if($routeParams.fotoId){
                    /*$http.put('/v1/fotos/'+ $scope.foto._id, $scope.foto)
                    .sucess(function(){
                        $scope.mensagem = ' Foto ' + $scope.foto.titulo + ' foi alterarada';
                    })
                    .error(function(erro){
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível alterar';
                    });*/

                    recursoFoto.update({fotoId: $scope.foto._id},
                        $scope.foto, function(){
                            $scope.mensagem = 'Foto alterada com sucesso';
                        }, function(erro){
                            console.log(erro);
                            $scope.mensagem = 'Não foi possível alterar';
                        });
                }else{
                    recursoFoto.save($scope.foto, function(){
                        $scope.foto = {};
                        $scope.mensagem = 'Foto cadastrada com sucesso';                      
                    }, function(erro){
                        $scope.mensagem = 'Não foi possível cadastrar a foto';
                    });
                    
                    
                    
                    /*$http.post('/v1/fotos', $scope.foto)
                    .success(function() {
                        console.log('Foto adicionada com sucesso');
                    })
                    .error(function(erro) {
                        console.log('Não foi possível cadastra a foto');
                    })*/


                }

                
            }
        };

    });