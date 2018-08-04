import sapper from 'sapper';
import { manifest } from './manifest/server.js';

export const middleware = sapper({manifest});