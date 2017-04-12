var React = require('react');
var ReactDOM = require('react-dom');


// Nav Items
var nav = ['fitness', 'nutrition', 'gear', 'success stories', 'apparel', 'beachbody on demand']

// ProductItems Component
var Nav = React.createClass({
	getInitialState() {
		return {
			nav: nav
		}
	},
	render: function () {
		var nav = this.state.nav;
		nav = nav.map((navItem, index) => {
			return (
				<li>{navItem}</li>
			)
		});
		return (
			<ul className='nav'>
				{nav}
			</ul>
		)
	}
});

module.exports = Nav;