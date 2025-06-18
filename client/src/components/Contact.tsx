import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { appointmentStorage } from '@/lib/storage';

const appointmentSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  phone: z.string().min(10, 'Ingresa un teléfono válido'),
  service: z.string().min(1, 'Selecciona un servicio'),
  date: z.string().min(1, 'Selecciona una fecha'),
  message: z.string().optional(),
});

type AppointmentForm = z.infer<typeof appointmentSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AppointmentForm>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: '',
    },
  });

  const onSubmit = async (data: AppointmentForm) => {
    setIsSubmitting(true);
    try {
      appointmentStorage.save(data);
      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactaremos pronto para confirmar tu cita.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content - Contact Info */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Contáctanos <span className="gradient-text">Hoy</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos listos para cuidar tu sonrisa. Agenda tu cita o contáctanos para resolver cualquier duda.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Dirección</h3>
                  <p className="text-gray-600">Av. Principal 123, Colonia Centro<br />Ciudad, Estado 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Teléfono</h3>
                  <p className="text-gray-600">+52 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contacto@sananodontologia.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Horarios</h3>
                  <p className="text-gray-600">
                    Lun - Vie: 9:00 AM - 7:00 PM<br />
                    Sáb: 9:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <i className="fab fa-whatsapp text-white"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Agenda tu cita</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apellido</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu apellido" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+52 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Servicio de interés</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ortodoncia">Ortodoncia</SelectItem>
                          <SelectItem value="implantes">Implantes Dentales</SelectItem>
                          <SelectItem value="estetica">Estética Dental</SelectItem>
                          <SelectItem value="endodoncia">Endodoncia</SelectItem>
                          <SelectItem value="periodoncia">Periodoncia</SelectItem>
                          <SelectItem value="odontopediatria">Odontopediatría</SelectItem>
                          <SelectItem value="consulta">Consulta General</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha preferida</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje adicional</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntanos sobre tu caso o cualquier pregunta específica..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full hero-gradient text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <i className="fas fa-calendar-check mr-2"></i>
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestros términos de privacidad y nos autorizas a contactarte.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
