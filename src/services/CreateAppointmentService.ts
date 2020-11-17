import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentRepository from '../repositories/AppointmentsRepository';
import Appointment from '../models/Appointment';

interface Request {
  providerId: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ providerId, date }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentRepository);

    const appoitmentDate = startOfHour(date);
    const findAppointmentsEqual = await appointmentsRepository.findByDate(
      appoitmentDate,
    );

    if (findAppointmentsEqual) {
      throw Error('erro, agendamento mesmo horario!');
    }
    const appointment = appointmentsRepository.create({
      providerId,
      date: appoitmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
