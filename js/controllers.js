// controllers related to route controllers only 
(function(){   
  "use strict";

  // accessing the module in another can be done by calling angular.module without the []-brackets
  angular.module('thisApp')
    .controller('navControlller', ['dep1', function(dep1){
      //..
    }])

  // appending another service/controller/filter etc to the same module-call inside the same file
    .service('myservice', ['dep2', function(dep2){ 
    //... 
    }]);

  // you can of course use angular.module('mymod') here as well
  angular.module('mymod').controller('anothermyctrl', ['dep1', function(dep1){
      //..
  }])
})();