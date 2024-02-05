import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email." }),
  message: z.string().min(1, { message: "Message is required." }),
});

export type TContactSchema = z.infer<typeof contactSchema>;
