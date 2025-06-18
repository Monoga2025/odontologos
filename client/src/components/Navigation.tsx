import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openAppointmentModal = () => {
    setIsModalOpen(true);
    window.dispatchEvent(new CustomEvent('openAppointmentModal'));
  };

  return (
    <nav className="fixed w-full top-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
              <i className="fas fa-tooth text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">SaNan</h1>
              <p className="text-xs text-gray-600">Odontología Integral</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Galería
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Contacto
            </button>
            <Button onClick={openAppointmentModal} className="hero-gradient text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
              Reservar Cita
            </Button>
          </div>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden p-2 rounded-lg glass-effect">
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-teal-600 transition-colors font-medium">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('servicios')} className="text-left text-gray-700 hover:text-teal-600 transition-colors font-medium">
                  Servicios
                </button>
                <button onClick={() => scrollToSection('nosotros')} className="text-left text-gray-700 hover:text-teal-600 transition-colors font-medium">
                  Nosotros
                </button>
                <button onClick={() => scrollToSection('galeria')} className="text-left text-gray-700 hover:text-teal-600 transition-colors font-medium">
                  Galería
                </button>
                <button onClick={() => scrollToSection('contacto')} className="text-left text-gray-700 hover:text-teal-600 transition-colors font-medium">
                  Contacto
                </button>
                <Button onClick={openAppointmentModal} className="hero-gradient text-white rounded-full font-medium">
                  Reservar Cita
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
