var React = require('react');
var ReactDOM = require('react-dom');

// ProductItems Component
var ProductItems = React.createClass({
	render: function () {
		return (
			<div className='products'>
				<img src={this.props.item.img} alt={this.props.item.prod}/>
				<h1>{this.props.item.prod}</h1>
				<p>{this.props.item.short}</p>
				<a>ADD TO CART</a>
			</div>
		)
	}
});

module.exports = ProductItems;