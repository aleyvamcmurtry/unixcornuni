
//angular.module('myYelpApp', []);
    
// var YelpController = function($scope){
    
     var getYelp = function (req, res) {
      var Yelp = require('yelp');
      var url =  'http://api.yelp.com/v2/search';
      var yelp = new Yelp({
      consumer_key: 'PtgpJmRFHJZoeY5AHmUCOg',
      consumer_secret:  'T5bXNOO7IcAynAbHfks16bws1qM',
      token: 'zmgd80w7xG8bmT9L0n-2G-v7jvH5g2Ia',
      token_secret: 'Wnn2JYxF5d2ra_WmnIbxYJkDYz4'
    });
    
    // See http://www.yelp.com/developers/documentation/v2/search_api
    // $(document).ready(function(){
        
     yelp.search({ term: 'food', location: 'Montreal' })
  
    .then(function (test) {
        //document.write("hello");
       console.log(test);
       //  reyelp = test + "hi";
        
       // $("#reyelp").val();
       //  return reyelp;
    //  var we = console.log(test);
    //  console.log("help");
    //     console.log(we);
    })
    .catch(function (err) {
      console.error(err);
    });
    //return $scope.reyelp;
   // return reyelp;
    };
     //);
    console.log(getYelp());
 // };
 
// angular
//     .module('myYelpApp')
//     .controller('YelpController', YelpController);