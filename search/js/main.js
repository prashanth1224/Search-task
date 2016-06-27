// AngularJS module defination
var storeApp = angular.module('SearchApp', []);
storeApp.controller('SearchCtrl', function($scope, $http, $q) {


  // Ajax call to get the products list of data
   //
  //  var url = "search/products.json";
   //
  //  $http.get(url).success(function(response) {
  //    $scope.productList = response;
  //  });

  $scope.productList = [

      {
          "name": "Product1",
          "description": "FIFA approved size and weight",
          "category": "Soccer",
          "price": 19.95,
          "id": "60d4f82c7f41b87e"
      },
      {
          "name": "Product Flags",
          "description": "Give your playing field a personal touch",
          "category": "Soccer",
          "price": 34.95,
          "id": "753b6488e4275863"
      },
      {
          "name": "Product New",
          "description": "Flat packed 35,000 seat stadium",
          "category": "Soccer",
          "price": 79500,
          "id": "e8fe85eab1f9b913"
      },
      {
          "name": "Product Thinking Cap",
          "description": "Improve your brain efficiency by 75%",
          "category": "Chess",
          "price": 16,
          "id": "e8c4a582043c799b"
      },
      {
          "name": "Human Chess Board",
          "description": "A fun game for the family",
          "category": "Chess",
          "price": 73,
          "id": "c250633930fbc987"
      },
      {
          "name": "Bling Bling King",
          "description": "Gold plated diamond studded King",
          "category": "Chess",
          "price": 1200,
          "id": "6ff650c49a356a61"
      }
  ];

  // To delete an item from the displaying list
  $scope.deleteItem = function(id) {
    for (var i in $scope.productList) {
      if ($scope.productList[i].id == id) {
        $scope.productList.splice(i, 1);
        break;
      }
    }
  };

  // to add an item to displaying list
  $scope.addItem = function() {
    $scope.productList.push({
      "name": $scope.itemName,
      "description": $scope.itemDesc,
      "category": "Chess",
      "price": $scope.itemPrice,
      "id": "6ff650c49a356a6" + $scope.productList.length
    });
  };
});
