import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    role: 'Paciente de ortodoncia',
    content: 'Increíble atención desde el primer día. El equipo es muy profesional y me explicaron todo el proceso. Mi sonrisa cambió completamente.',
    rating: 5,
    image: 'https://pixabay.com/get/g8ac78d635d43c2fff8e861be8d111fa00d934bfb57428674560b7cb23a7d6f7f049192cbbfd0f8a6cd5b12d1b50e4e1cab0f5c9e29cb338cb790332dcedda7e3_1280.jpg'
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    role: 'Paciente de implantes',
    content: 'Los implantes quedaron perfectos. No sentí dolor en ningún momento y el resultado superó mis expectativas. 100% recomendado.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '3',
    name: 'Ana Martínez',
    role: 'Madre de paciente infantil',
    content: 'Mi hija se siente súper cómoda en la clínica. La doctora tiene mucha paciencia con los niños y hace que la visita sea divertida.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Lo que dicen nuestros <span className="gradient-text">pacientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-lg card-hover border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
