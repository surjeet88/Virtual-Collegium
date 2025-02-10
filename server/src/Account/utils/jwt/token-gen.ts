import jwt from 'jsonwebtoken';

import ENVIORNMENT_VARS from '../../../config/env';
import { InternalServerError } from '../../../errors/custom-errors';

interface TokenPayload {
  email: string;
}

interface ReturnType {
  ACCESS_TOKEN: string;
  REFRESH_TOKEN: string;
}

function generateToken(payload: TokenPayload): ReturnType {
  if (
    !ENVIORNMENT_VARS.accessTokenSecret ||
    !ENVIORNMENT_VARS.refreshTokenSecret
  ) {
    throw new InternalServerError(
      'Key f error. Try again if not consult the Engineer',
    );
  }

  const ACCESS_TOKEN = jwt.sign(payload, ENVIORNMENT_VARS.accessTokenSecret, {
    expiresIn: '15m',
  });
  const REFRESH_TOKEN = jwt.sign(payload, ENVIORNMENT_VARS.refreshTokenSecret, {
    expiresIn: '20m',
  });

  return { ACCESS_TOKEN, REFRESH_TOKEN };
}

export default generateToken;
