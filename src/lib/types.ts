import { z } from "zod"

export const EditUserProfileSchema = z.object({
    email: z.string().email("Required"),
    name: z.string().min(2,"Required")
  })