import { getRepository } from 'typeorm';
import Customer from '../models/Customer';

interface Request {
  name: string;
  email: string;
  cpf: string;
  adress: string;
  phone: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    cpf,
    adress,
    phone,
  }: Request): Promise<Customer> {
    const customersRepository = getRepository(Customer);

    const checkEmailExists = await customersRepository.findOne({
      where: { email },
    });

    const checkCpfExists = await customersRepository.findOne({
      where: { cpf },
    });

    if (checkEmailExists && checkCpfExists) {
      throw new Error('email adress or cpf already used');
    }

    const customer = customersRepository.create({
      name,
      email,
      cpf,
      adress,
      phone,
    });

    await customersRepository.save(customer);

    return customer;
  }
}

export default CreateUserService;
