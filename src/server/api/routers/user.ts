import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  userCreate: publicProcedure
    .input(z.object({ username: z.string().nullish(), contact: z.string().nullish() }))
    .mutation((req) => {
      /* const user: User = {
        id,
        name: req.input.name,
      };
 
      userList.push(user);
  */
      /* return user; */
    }),
});
