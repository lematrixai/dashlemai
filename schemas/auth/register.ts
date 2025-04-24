import { z } from "zod";
import { nameSchema } from "../name";
import { emailSchema } from "../email";
import { passwordSchema } from "../password";

export const registerSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export type RegisterSchemaType = z.infer<typeof registerSchema>; 