module.exports.getYelp = function (req, res) {
  var Yelp = require('yelp');
  var url = 'http://api.yelp.com/v2/search';
  var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	var text = xhr.responseText;
	var textObject = JSON.parse(text);
  var client = new Yelp({
  consumer_key: 'PtgpJmRFHJZoeY5AHmUCOg',
  consumer_secret:  'T5bXNOO7IcAynAbHfks16bws1qM',
  token: 'zmgd80w7xG8bmT9L0n-2G-v7jvH5g2Ia',
  token_secret: 'Wnn2JYxF5d2ra_WmnIbxYJkDYz4'
});


var parameters = {
  term: 'food',
  location: 'Montreal',
};
client.search(parameters)
  console.log(data);
  console.error(err);
};

console.log(getYelp());