import sirv from 'sirv';
import polka from 'polka';
import sapper from 'sapper';
import compression from 'compression';
import {handler} from './middleware.js';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('assets'),
		handler
	)
	.listen(process.env.PORT)
	.catch(err => {
		console.log('error', err);
	})
