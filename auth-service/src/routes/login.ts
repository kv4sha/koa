import { IRouterContext } from 'koa-router';

export const login = async (ctx: IRouterContext) => {
    ctx.body = 'Hello world!';
};
