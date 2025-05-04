import { Request, Response } from 'express';
import User from '../models/User';

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ message: 'Validation failed', errors: err.errors });
    } else {
      console.error('Server error creating user:', err);
      res.status(500).json({ message: 'Server error', error: err });
    }
  }
};
