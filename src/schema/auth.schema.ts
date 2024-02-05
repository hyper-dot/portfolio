import { z } from "zod";

export const authSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export type TAuthSchema = z.infer<typeof authSchema>;
