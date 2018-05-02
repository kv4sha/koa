import { IRouterContext } from 'koa-router';

export const checkToken = async (ctx: IRouterContext) => {
    ctx.body = 'Hello world!';
};
