var React = require('react');
var ReactDOM = require('react-dom');

// CSS requires
require('./css/index.css');

// Module requires
var Nav = require('./nav');
var ProductItems = require('./product-item');

var data = [
	{
		'prod': 'Country Heat',
		'img': 'https://www.beachbody.com/images//beachbody/en_us/products/programs/countryheat/7941-CH_ChallengePack_210x100.jpg',
		'short':'Now there\'s a workout that\'s so effective—and such a blast—you actually can\'t wait to do it! Country Heat combines simple dance moves with the hottest country music to create easy-to-follow 30-minute workouts that burn off the fat and tone your entire body in just 30 days. Plus FREE BONUS WORKOUT!'
	},
	{
		'prod': 'Piyo',
		'img': 'https://www.beachbody.com/images//products/programs/piyo/17_4037_PiYo_BBcom_Base_Thumbnail_210x100.jpg',
		'short':'Superstar trainer Chalene Johnson will help you define every inch of your body—without bulking up or straining your joints. You\'ll perform low-impact, high-intensity moves to get your strength training, flexibility, and cardio—all in each workout! No weights. No jumps. Just hardcore results.'
	},
	{
		'prod': 'Core De Force',
		'img': 'https://www.beachbody.com/images//beachbody/en_us/products/programs/coredeforce/7444_JJ_BB_Launch_Banners_04_210x100_BaseKit.png',
		'short':'What could you accomplish in 30 days? How about getting into knockout shape—with the mixed martial arts-inspired workout designed to slash inches off your waist, blast away belly fat, and carve total-body definition! PLUS 3 FREE GIFTS!'
	},
	{
		'prod': '21 Day Fix®',
		'img': 'https://www.beachbody.com/images/beachbody/en_us/products/programs/21dayfix/21DayFix_210x100b.jpg',
		'short':'With 21 Day Fix, simple fitness and simple eating mean fast results. Easy-to-follow portion control and 30-minute workouts take the guesswork out of losing weight. Plus 3 FREE gifts!'
	},
	{
		'prod': 'Country Heat',
		'img': 'https://www.beachbody.com/images//beachbody/en_us/products/programs/countryheat/7941-CH_ChallengePack_210x100.jpg',
		'short':'Now there\'s a workout that\'s so effective—and such a blast—you actually can\'t wait to do it! Country Heat combines simple dance moves with the hottest country music to create easy-to-follow 30-minute workouts that burn off the fat and tone your entire body in just 30 days. Plus FREE BONUS WORKOUT!'
	},
	{
		'prod': 'Piyo',
		'img': 'https://www.beachbody.com/images//products/programs/piyo/17_4037_PiYo_BBcom_Base_Thumbnail_210x100.jpg',
		'short':'Superstar trainer Chalene Johnson will help you define every inch of your body—without bulking up or straining your joints. You\'ll perform low-impact, high-intensity moves to get your strength training, flexibility, and cardio—all in each workout! No weights. No jumps. Just hardcore results.'
	},
	{
		'prod': 'Core De Force',
		'img': 'https://www.beachbody.com/images//beachbody/en_us/products/programs/coredeforce/7444_JJ_BB_Launch_Banners_04_210x100_BaseKit.png',
		'short':'What could you accomplish in 30 days? How about getting into knockout shape—with the mixed martial arts-inspired workout designed to slash inches off your waist, blast away belly fat, and carve total-body definition! PLUS 3 FREE GIFTS!'
	},
	{
		'prod': '21 Day Fix®',
		'img': 'https://www.beachbody.com/images/beachbody/en_us/products/programs/21dayfix/21DayFix_210x100b.jpg',
		'short':'With 21 Day Fix, simple fitness and simple eating mean fast results. Easy-to-follow portion control and 30-minute workouts take the guesswork out of losing weight. Plus 3 FREE gifts!'
	}
]

//Create CategoryComponent
var CategoryComponent = React.createClass({
	getInitialState() {
		return {
			data: data
		}	
	},
	render: function() {
		var products = this.state.data;
		products = products.map((item, index) => {
			return (
				<ProductItems item={item} key={index} />
			)
		});
		return (
			<div className='container'>
				<Nav />
				<img className='banner' src='https://img1.beachbodyimages.com/beachbody/image/upload/bbweb/coredeforce/kickers/CDF_680x170-new.jpg' />
				{products}
			</div>
		)
	}
});



ReactDOM.render(<CategoryComponent />, document.getElementById('app'));