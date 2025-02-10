import { Request, Response, NextFunction } from 'express';
import signupService from '../service/signup';

async function signupController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const USER_DATA = req.body;
    
    await signupService(USER_DATA);

    res.status(201).json({ message: 'User created successfully'}); 
  } catch (error) {
    next(error);
  }
}

export default signupController;