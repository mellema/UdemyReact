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
			title: 'See Gulp Tutorials',
			header: 'Learn Gulp',
			number: 12,
			description: 'Gulp is awesome and it is what I want to use if I get a job as a full stack NodeJS engineer some day after taking all these online classes and building something real.',
			imageURL: 'http://monstar-lab.com/wp-content/uploads/fb5b1cecf01bdea17b0e2a9055b3ed9f.png'
		}
	]
};

var element = React.createElement(Thumbnaillist, options);

React.render(element, document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
	render: function(){
		this.props //{} see options below
		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
			this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
		)
	}
});
var Thumbnaillist = React.createClass({displayName: "Thumbnaillist",
	render: function(){
		var list = this.props.thumbnailData.map(function(obj){
			return React.createElement(Thumbnail, React.__spread({},  obj))
		});
		return React.createElement("div", null, list)
	}
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function(){
		return React.createElement("div", {className: "thumbnail"}, 
			React.createElement("img", {src: this.props.imageURL}), 
			React.createElement("div", {className: "caption"}, 
				React.createElement("h3", null, this.props.header), 
				React.createElement("p", null, this.props.description), 
				React.createElement("p", null, 
					React.createElement(Badge, {title: this.props.title, number: this.props.number})
				)
			)
		)
	}
});