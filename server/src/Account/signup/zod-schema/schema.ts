import { z } from 'zod';

const SIGNUP_SCHEMA = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  role: z.enum(['STUDENT', 'TEACHER']),
});

export default SIGNUP_SCHEMA;
