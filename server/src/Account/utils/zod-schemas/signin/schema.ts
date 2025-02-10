import { z } from 'zod';

const SIGNIN_SCHEMA = z.object({
  email: z.string().email({ message: 'Email or password is not correct' }),
  password: z.string().min(8, { message: 'Email or password is not correct' }),
});

export default SIGNIN_SCHEMA;
