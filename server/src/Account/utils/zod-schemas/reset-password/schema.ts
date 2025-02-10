import { z } from 'zod';

const RESET_PASSWORD_SCHEMA = z.object({
  token: z.string(), 
  password: z.string().min(8),  
}).strict();

export default RESET_PASSWORD_SCHEMA;
