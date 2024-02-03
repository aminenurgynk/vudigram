import { z } from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Too short'}).max(50),
    username: z.string().min(2, { message: 'Too short'}).max(50),
    email: z.string().email(),
    password: z.string().min(8, { message: 'It must be at least 8 char.'}).max(50),
  });

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'It must be at least 8 char.'}).max(50),
  });

  export const PostValidation = z.object({
    caption: z.string().max(500),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
  });