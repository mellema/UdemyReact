var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
	render: function(){
		var list = this.props.thumbnailData.map(function(obj){
			return <Thumbnail {...obj} />
		});
		return <div>{list}</div>
	}
});