import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createdUser = new CreateUserService();
    const user = await createdUser.execute({
      name,
      email,
      password,
    });

    const date = {
      name: user.name,
      email: user.email,
      id: user.id,
      createdAt: user.createdAt,
    };
    return response.json(date);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
