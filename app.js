'use strict'

angular.module('vehicleApp', [])
  .controller('vehicleController', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.data = {
      multipleSelect: [],
      mileageFrom: 0,
      mileageTo: 0
    }
    $scope.submit = function() {
      $http.get('http://dc339.4shared.com/img/4UL0HmoW/s7/138d336b818/gambar-foto-lucu-bayi4')
        .then(function(response) {
          console.log(response)
          var data = response.data
          var blob = new Blob([data], { type: 'text/plain' })
          var url = $window.URL || $window.webkitURL
          $scope.fileUrl = url.createObjectURL(blob);
        })
    }

  }])
  .config(['$compileProvider', function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
  }]);