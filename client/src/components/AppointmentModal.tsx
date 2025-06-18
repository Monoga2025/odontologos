import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('openAppointmentModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('openAppointmentModal', handleOpenModal);
    };
  }, []);

  const scrollToContact = () => {
    setIsOpen(false);
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const callPhone = () => {
    window.open('tel:+525551234567', '_self');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-4">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">Agenda tu cita</DialogTitle>
        </DialogHeader>
        
        <p className="text-gray-600 mb-6">
          ¿Listo para transformar tu sonrisa? Completa el formulario de contacto o llámanos directamente.
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={scrollToContact}
            className="w-full hero-gradient text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            <i className="fas fa-calendar-check mr-2"></i>
            Ir al formulario
          </Button>
          <Button 
            onClick={callPhone}
            variant="outline"
            className="w-full border-2 border-teal-500 text-teal-600 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300"
          >
            <i className="fas fa-phone mr-2"></i>
            Llamar ahora
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
