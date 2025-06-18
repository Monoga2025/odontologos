import { AppointmentData } from '@/types';

const APPOINTMENTS_KEY = 'sanan_appointments';

export const appointmentStorage = {
  save: (appointment: Omit<AppointmentData, 'id' | 'timestamp'>): AppointmentData => {
    const appointments = appointmentStorage.getAll();
    const newAppointment: AppointmentData = {
      ...appointment,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };
    
    appointments.push(newAppointment);
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
    return newAppointment;
  },

  getAll: (): AppointmentData[] => {
    try {
      const stored = localStorage.getItem(APPOINTMENTS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  getById: (id: string): AppointmentData | undefined => {
    return appointmentStorage.getAll().find(appointment => appointment.id === id);
  },

  delete: (id: string): boolean => {
    const appointments = appointmentStorage.getAll();
    const filtered = appointments.filter(appointment => appointment.id !== id);
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(filtered));
    return filtered.length < appointments.length;
  },
};
