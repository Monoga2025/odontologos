import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Conoce a <span className="gradient-text">SaNan</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Somos una clínica dental moderna que combina experiencia, tecnología de vanguardia y un enfoque humano para brindarte la mejor atención odontológica.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-microscope text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Tecnología Avanzada</h3>
                  <p className="text-gray-600">Equipos de última generación para diagnósticos precisos y tratamientos efectivos.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user-md text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Equipo Especializado</h3>
                  <p className="text-gray-600">Profesionales altamente capacitados con años de experiencia en cada especialidad.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-heart text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Atención Personalizada</h3>
                  <p className="text-gray-600">Cada tratamiento está diseñado específicamente para las necesidades únicas de cada paciente.</p>
                </div>
              </div>
            </div>
            
            <Button className="hero-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <i className="fas fa-users mr-2"></i>
              Conoce al Equipo
            </Button>
          </div>
          
          {/* Right Content - Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Equipo profesional de dentistas trabajando en la clínica" 
              className="rounded-2xl shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Equipos dentales modernos y tecnología avanzada" 
              className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Área de espera cómoda y moderna de la clínica dental" 
              className="rounded-2xl shadow-lg w-full h-48 object-cover -mt-8"
            />
            <img 
              src="https://pixabay.com/get/g70f92e4c1f026082d13aa2e95c453b2b610411cf07af2ecddc780724d7669260cbf14b7802d27763a23ffe0368639b42f22439c0395b67562fd64e65134fc14d_1280.jpg" 
              alt="Paciente recibiendo atención dental profesional y cuidadosa" 
              className="rounded-2xl shadow-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
