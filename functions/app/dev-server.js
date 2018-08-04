import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';

const server = (middleware) => {
	console.log('server starting');
	polka() // You can also use Express
		.use(compression({ threshold: 0 }), sirv('assets'), middleware)
		.listen(process.env.PORT || 3000)
		.catch(err => {
			console.log('error', err);
		});
};

export default server;
