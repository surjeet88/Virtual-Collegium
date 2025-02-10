import { z } from 'zod';

const SEND_RESET_EMAIL_SCHEMA = z.object({
  email: z.string().email({ message: 'Email is not provided' }),
});

export default SEND_RESET_EMAIL_SCHEMA;
