clothingStore.factory('shoppingCartService',[
  function(){

    var obj = {};
    var _cart = {};  // product.id : quantity

    obj.listAll = function(){
      return _cart;
    };

    obj.addItem = function(productID, quantity){
      if ( _cart[productID] ){
        _cart[productID] += ~~quantity;
      } else {
        _cart[productID] = ~~quantity;
      }
    };

    obj.updateItem = function(productID, quantity) {
      _cart[productID] = ~~quantity;
    }

    obj.removeItem = function(productID){
      if ( _cart[productID] ) {
        delete _cart[productID];
      }
    };

    return obj;

  }]);