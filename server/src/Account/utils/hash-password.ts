import bcrypt from 'bcrypt';

async function hashPassword(password: string) {
  // Generate a SALT with a cost factor of 10 (adjust as needed)
  const SALT = await bcrypt.genSalt(10);

  // Hash the password using the generated SALT
  const HASHED_PASSWORD = await bcrypt.hash(password, SALT);
 
  return HASHED_PASSWORD;

}

export default hashPassword;
