
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


var returned = yelp.search({ term: 'food', location: 'Montreal' })

.then(function (test) {
    //document.write("hello");
   console.log(test);
   sendJSONresponse(res,200, test);
//  var we = console.log(test);
//  console.log("help");
//     console.log(we);
})
.catch(function (err) {
  console.error(err);
});
return returned;
}
console.log(getYelp());

var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

