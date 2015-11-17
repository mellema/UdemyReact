var React = require('react');
var Button = require('./button');
var ListItem = require('./listitem');
//var List  = require('./list');

module.exports = React.createClass({

	handleClick: function(){
		alert("Hello from dropdown.jsx");
	},

	render: function () {
		var visible;

		//if (this.state.dropdownOpen) {
		//
		//	visible = "visible";
		//}
		//else {
		//	visible = "hidden";
		//}

		var list = this.props.items.map(function(item){
			return <ListItem item={item} />
		});

		return (<div className="dropdown">
			<Button whenClicked={this.handleClick} className="btn-default" title={this.props.title} subTitleClassName="caret"/>
			<ul>{list}</ul>
		</div>)
	}

});