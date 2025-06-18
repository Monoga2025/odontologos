import { Button } from '@/components/ui/button';
import { Service } from '@/types';

const services: Service[] = [
  {
    id: 'ortodoncia',
    title: 'Ortodoncia',
    description: 'Alineamos tu sonrisa con brackets tradicionales, estéticos y ortodoncia invisible.',
    icon: 'fas fa-tooth',
    features: [
      'Brackets metálicos y estéticos',
      'Ortodoncia invisible',
      'Seguimiento digital'
    ]
  },
  {
    id: 'implantes',
    title: 'Implantes Dentales',
    description: 'Reemplazamos dientes perdidos con implantes de titanio de última generación.',
    icon: 'fas fa-plus-circle',
    features: [
      'Implantes de titanio',
      'Cirugía guiada por computadora',
      'Prótesis personalizadas'
    ]
  },
  {
    id: 'estetica',
    title: 'Estética Dental',
    description: 'Transformamos tu sonrisa con blanqueamientos, carillas y diseño de sonrisa.',
    icon: 'fas fa-star',
    features: [
      'Blanqueamiento profesional',
      'Carillas de porcelana',
      'Diseño digital de sonrisa'
    ]
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia',
    description: 'Salvamos dientes con tratamientos de conducto precisos y sin dolor.',
    icon: 'fas fa-heart',
    features: [
      'Tratamiento sin dolor',
      'Tecnología rotativa',
      'Microscopia dental'
    ]
  },
  {
    id: 'periodoncia',
    title: 'Periodoncia',
    description: 'Cuidamos la salud de tus encías con tratamientos especializados.',
    icon: 'fas fa-leaf',
    features: [
      'Limpieza profunda',
      'Cirugía periodontal',
      'Mantenimiento preventivo'
    ]
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatría',
    description: 'Atención dental especializada para niños en un ambiente cálido y divertido.',
    icon: 'fas fa-child',
    features: [
      'Prevención temprana',
      'Sellantes de fosas',
      'Educación en higiene'
    ]
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de tratamientos dentales con la más alta calidad y tecnología avanzada
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-8 shadow-lg card-hover border border-gray-100">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-check text-teal-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full hero-gradient text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Más información
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
