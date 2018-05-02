import { IRouterContext } from 'koa-router';

import * as mongoose from 'mongoose';

const connection = mongoose.createConnection('mongodb://localhost:27017/koa');

export const register = async (ctx: IRouterContext) => {
    ctx.body = 'Hello world!';

    try {
        const arr = await connection
            .collection('users')
            .find()
            .limit(2)
            .toArray();

        console.log(arr);
    } catch (e) {
        console.log(e);
    }
};
