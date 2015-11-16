var React = require('react');
var Dropdown = require('./dropdown');

var options = {
	title: 'Choose a dessert', //what should show up on the button
	items: [
			'Apple Pie',
			'Peach Cobbler',
			'Cheesecake'
	]
};

var element = React.createElement(Dropdown, options);

React.render(element, document.querySelector('.container'));