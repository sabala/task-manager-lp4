var app = angular.module('TaskManager', []);

app.controller('taskController', function ($scope, $http) {
    var carregaTarefas = function () {
        $http.get("http://localhost:3000/tasks")
            .then(function (response) {
                $scope.tasks = response.data;
            });
    };
    
    carregaTarefas();

    $scope.tarefasCompletas = function () {
        $http.get("http://localhost:3000/tasks/todasTarefas")
            .then(function (response) {
                $scope.tasks = response.data;
            });
    }

    $scope.adicionarNova = function () {
        var dados = {
            tarefa: $scope.tarefa,
            data: $scope.data,
            prioridade: $scope.prioridade,
            feita: false
        };
        $http.post("http://localhost:3000/tasks/", JSON.stringify(dados))
            .then(
                function (sucesso) {
                    location.reload(true);
                },
                function (erro) {
                    $scope.erro = "Erro ao tentar criar tarefa!";
                });
    }

    $scope.editarTarefa = function(id) {
        $http.get('/tarefas/' + id)
            .success(function(data) {
                $scope.formTask = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.atualizarTarefa = function() {        
        $http.put('/tarefas/' + $scope.formTask._id, $scope.formTask)
        .success(function(response){
            refresh();
        });
    };

    $scope.completarTarefa = function (feita) {
        $http.put("http://localhost:3000/tasks/completarTarefa/" + feita)
            .then(function (sucesso) {
                    alert("Tarefa finalizada com sucesso!")
                    location.reload(true);
                },
                function (erro) {
                    alert("Não foi possível finalizar a tarefa: " + feita)
                });
    }

    $scope.excluirTarefa = function (id) {
        var confirm = window.confirm("Realmente deseja excluir essa tarefa?");
        if (confirm) {
            $http.delete("http://localhost:3000/tasks/" + id)
            location.reload(true);
        }
    }
});