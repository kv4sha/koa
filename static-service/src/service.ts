import * as Koa from 'koa';
import * as mount from 'koa-mount';
import * as koaStatic from 'koa-static';

// set .env in process
import { config } from 'dotenv';
config();

const app = new Koa();

app.use(mount('/static', koaStatic('public')));

// you may mount it on any url in other application
// just use koa-mount library
export { app as service };
