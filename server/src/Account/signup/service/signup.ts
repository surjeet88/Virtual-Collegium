import createUser from '../../../models/user/create';
import hashPassword from '../../utils/hash-password';
import { UserData } from '../types/signup/types';

async function signupService(userData: UserData) {
  const EMAIL = userData.email;
  const PASSWORD = userData.password;
  const ROLE = userData.role;

  // Hash the password
  const HASHED_PASSWORD = await hashPassword(PASSWORD);

  // Create the user
  await createUser(EMAIL, HASHED_PASSWORD, ROLE);

}

export default signupService;
