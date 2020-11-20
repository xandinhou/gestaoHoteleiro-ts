import { Router } from 'express';

import CreateCustomerService from '../services/CreateCustomerService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, cpf, adress, phone } = request.body;

    const createdCustomer = new CreateCustomerService();

    const customer = await createdCustomer.execute({
      name,
      email,
      cpf,
      adress,
      phone,
    });

    return response.json(customer);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
