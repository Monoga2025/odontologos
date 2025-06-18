import { Button } from '@/components/ui/button';

export default function Hero() {
  const openAppointmentModal = () => {
    window.dispatchEvent(new CustomEvent('openAppointmentModal'));
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Tu <span className="gradient-text">sonrisa</span> perfecta
              <br />nos inspira
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experiencia odontológica integral con tecnología de vanguardia. 
              Transformamos sonrisas con un enfoque personalizado y profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={openAppointmentModal}
                className="hero-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow"
              >
                <i className="fas fa-calendar-check mr-2"></i>
                Agendar Consulta
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline"
                className="border-2 border-teal-500 text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all duration-300"
              >
                <i className="fas fa-play mr-2"></i>
                Ver Servicios
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-600">Pacientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5★</div>
                <div className="text-sm text-gray-600">Calificación Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">8+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative lg:block hidden">
            <div className="relative z-10 animate-float">
              <img 
                src="https://pixabay.com/get/gd79123360c4d1a7e9536e99204a4b9a9b4f453d825f8468f78febad14597dc29fd7fab8a546adc25e11179d4666c94db00945105a029f828761bd402324f70d9_1280.jpg" 
                alt="Moderna clínica dental con equipos de última tecnología" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-8 -left-8 glass-effect p-4 rounded-2xl animate-float" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 hero-gradient rounded-full flex items-center justify-center">
                  <i className="fas fa-shield-alt text-white"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">100% Seguro</div>
                  <div className="text-sm text-gray-600">Protocolos de bioseguridad</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 glass-effect p-4 rounded-2xl animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 hero-gradient rounded-full flex items-center justify-center">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">24/7 Disponible</div>
                  <div className="text-sm text-gray-600">Atención de emergencias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
