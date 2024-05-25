import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Full name is required." })
    .max(50, "Full name is too long."),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email." }),
  message: z
    .string()
    .min(1, { message: "Message is required." })
    .min(10, "Message is too short")
    .max(100, { message: "Message is too Long." }),
});

export type TContactSchema = z.infer<typeof contactSchema>;
