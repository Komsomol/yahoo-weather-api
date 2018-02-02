// connect to Yahoo API
// jshint esversion:6

const got = require('got');
const yw = require('./yahoo-weather');

yw('kuala lumpur').then(data =>{
	console.log(data);
});