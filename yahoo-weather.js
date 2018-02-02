//jshint esversion:6
const got = require('got');

const getter = url => {
	return new Promise(function(resolve, reject) {
		got(url)
			.then(response => {
				resolve(response.body);
			})
			.catch(error => {
				console.log(error);
				reject(error);
			});
	});
};

const getWeather = ( location ) => {
	return new Promise((resolve , reject) => {
		var locationUrl = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+location+'") and u="c"&format=json&env=store://datatables.org/alltableswithkeys';

		getter(locationUrl).then(function(response) {
			// console.log(locationUrl);
			var result = JSON.parse(response);
			// console.log(result.query.results.channel);
			resolve(result.query.results.channel);
		});
	});
};

module.exports = getWeather;
