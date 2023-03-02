import { z } from "zod";
import {prisma} from "../../db";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { WAIT } from "../constants/status";

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

    findMatch: publicProcedure
     .input(z.object({
      userId: z.string().nullish()
     })) 
     .query(async (ctx) => {
       const findMatchQuery = await prisma.appUser.findFirst({
         where: {
          status: WAIT,
          NOT: {
            id: {
              id: ctx.input.userId
            } as unknown as string
          }
         }
       })

       if(!findMatchQuery) {
          throw new Error("No people found");
       }

       return findMatchQuery;
     })
});
