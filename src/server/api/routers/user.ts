import { z } from "zod";
import {prisma} from "../../db";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  userCreate: publicProcedure
    .input(z.object({ username: z.string().nullish(), contact: z.string().nullish() }))
    .mutation(async (ctx) => {
       const newUser = await prisma.appUser.create({
         data: {
          contact: ctx.input.contact!,
          username: ctx.input.username!
         }
       }) 

       return newUser;
    }),
});
