import { middleware  } from './middleware.js';
import server from './dev-server.js';

export const handler = process.env.DEV === 'local' ? server(middleware) : middleware;