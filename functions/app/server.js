import sapper from 'sapper';
import { manifest } from './manifest/server.js';

export const handler = sapper({manifest});