var clothingStore = angular.module('clothingStore', ['ui.router']);

clothingStore.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/products/index');


  // Products
  $stateProvider.state('products',{
    url: '/products',
    templateUrl: '/js/partials/test.html',
    controller: 'MainCtrl'
  })
  .state('products.index',{
      url: '/index',
      templateUrl: 'js/partials/index.html',
      // controller: 'MainCtrl'
    })
  .state('products.show',{
      url: '/show/:productID',
      templateUrl: 'js/partials/show.html',
      controller: 'MainCtrl'
    })
  .state('products.cart',{
      url: '/cart',
      templateUrl: 'js/partials/cart.html',
      // controller: 'MainCtrl'
    });

});


// Error handling
clothingStore.run(function($rootScope){
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});