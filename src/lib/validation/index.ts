import { z } from "zod"

export const SignUpValidation = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters."
    }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email().refine((email) => email.endsWith("@ucr.edu"), {
        message: "Email must be a UCR email.",
    }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
})