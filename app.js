'use strict'

angular.module('vehicleApp', [])
  .controller('vehicleController', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.data = {
      multipleSelect: [],
      mileageFrom: 0,
      mileageTo: 0
    }
    $scope.submit = function() {
      $http.get('http://dc339.4shared.com/img/4UL0HmoW/s7/138d336b818/gambar-foto-lucu-bayi4', { responseType: 'arraybuffer' })
        .then(function(response) {
          console.log(response)
          var data = response.data
          var blob = new Blob([data], { type: 'timage/jpeg' })
          var a = document.createElement("a");
          a.href = window.URL.createObjectURL(blob);
          a.download = 'image.jpg';
          a.click();
          console.log(blob)
        })
    }

  }])
