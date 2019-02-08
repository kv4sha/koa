// import * as Koa from 'koa';

import { routes } from './routes/routes';

const app = new Koa();

app.use(routes());

// you may mount it on any url in other application
// just use koa-mount library
export { app as service };
