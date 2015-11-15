var React = require('react');
var Thumbnaillist = require('./Thumbnail-list');

var options = {
	thumbnailData: [
		{
			title: 'See React Tutorials',
			header: 'Learn ReactJS',
			number: 11,
			description: 'ReactJS is awesome and it is what I want to use if I get a job as a full stack NodeJS engineer some day after taking all these online classes and building something real.',
			imageURL: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'
		},
		{
			title: 'See Gulp Tutorials if you dare',
			header: 'Learn Gulp',
			number: 12,
			description: 'Gulp is awesome and it is what I want to use if I get a job as a full stack NodeJS engineer some day after taking all these online classes and building something real.',
			imageURL: 'http://monstar-lab.com/wp-content/uploads/fb5b1cecf01bdea17b0e2a9055b3ed9f.png'
		}
	]
};

var element = React.createElement(Thumbnaillist, options);

React.render(element, document.querySelector('.container'));