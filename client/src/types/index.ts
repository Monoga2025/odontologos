export interface AppointmentData {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
  timestamp: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}
