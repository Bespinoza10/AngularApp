angular
  .module('tas', [])
  .controller('TasController', function () {
    var vm = this;

    vm.data = [
      {
        nickName: 'TAdam',
        name: 'Adam'
      },
      {
        nickName: 'ZAdam',
        name: 'Adam'
      },
      {
        nickName: 'JuAdam',
        name: 'Adam'
      },
      {
        nickName: 'BrAdam',
        name: 'Adam'
      },
      {
        nickName: 'BAdam',
        name: 'Adam'
      }
    ];

    vm.addTA = function () {
      var obj = {
        name: vm.newName
      };

      vm.data.push(obj);
    }

    vm.removeTA = function (person) {
      var index = vm.data.indexOf(person);
      vm.data.splice(index, 1);
    };

  });
