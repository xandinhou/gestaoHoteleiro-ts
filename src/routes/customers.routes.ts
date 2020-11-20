import { Router } from 'express';
import { getRepository } from 'typeorm';
import Customer from '../models/Customer';

import CreateCustomerService from '../services/CreateCustomerService';

const customersRouter = Router();

customersRouter.post('/', async (request, response) => {
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

customersRouter.get('/', async (request, response) => {
  try {
    const customersRepository = getRepository(Customer);
    const customers = await customersRepository.find();

    return response.json(customers);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default customersRouter;
