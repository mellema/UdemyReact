var React = require('react');
var Button = require('./button');
//var List  = require('./list');

module.exports = React.createClass({

	render: function () {
		var visible;

		//if (this.state.dropdownOpen) {
		//
		//	visible = "visible";
		//}
		//else {
		//	visible = "hidden";
		//}

		return (<div className="dropdown">
			<Button className="btn-default" title={this.props.title} subTitleclassName="caret"/>
		</div>)
	}

});