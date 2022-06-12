import Router from '@koa/router';
import { PrismaClient } from '@prisma/client';

export const router = new Router();

const prisma = new PrismaClient();

router.get('/tweets', async ctx =>{
    const tweets = await prisma.tweet.findMany();
    ctx.body = tweets;
})

router.post('/tweets', async ctx =>{
    const tweet = {
      userId: 'cl4ax29j90054x92y420sd7k5',
      text: ctx.request.body.text  
    }

    const doc = await prisma.tweet.create({
        data: tweet
    })

    ctx.body = doc
})

router.put('', ctx =>{
    ctx.body = ''
})

router.delete('', ctx =>{
    ctx.body = ''
})