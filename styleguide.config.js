const path = require('path');

module.exports = {
	title: 'React Notifications',
	styleguideDir: 'docs/',
	webpackConfig: require('./webpack.config.js'),
	components: ['src/*.jsx', 'examples/Example.jsx'],
	ribbon: {
		url: 'https://github.com/trendmicro-frontend/react-notifications',
		text: 'Fork me on GitHub'
	},
	require: [
		'babel-polyfill',
    	path.join(__dirname, 'node_modules/trendmicro-ui/dist/css/trendmicro-ui.css'),
    	path.join(__dirname, 'node_modules/@trendmicro/react-modal/dist/react-modal.css'),
    	path.join(__dirname, 'node_modules/@trendmicro/react-modal'),
    	path.join(__dirname, 'node_modules/@trendmicro/react-buttons'),
    	path.join(__dirname, 'node_modules/@trendmicro/react-anchor'),
    	path.join(__dirname, 'dist/react-notifications.css'),
	]
};