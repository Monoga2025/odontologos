import { GalleryImage } from '@/types';

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1606811842689-23dfdb7ee46b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Transformación de sonrisa antes y después del tratamiento',
    title: 'Transformación de Sonrisa',
    description: 'Antes y después'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Sala de tratamiento dental moderna con equipos avanzados',
    title: 'Sala de Tratamiento',
    description: 'Equipos de última generación'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Tratamiento de ortodoncia con alineadores transparentes',
    title: 'Ortodoncia Invisible',
    description: 'Alineadores transparentes'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Procedimiento de implante dental con tecnología digital',
    title: 'Implantes Dentales',
    description: 'Cirugía guiada'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    alt: 'Área de consulta y espera cómoda para pacientes',
    title: 'Área de Consulta',
    description: 'Ambiente cómodo'
  },
  {
    id: '6',
    src: 'https://pixabay.com/get/g4267c2695e38cc1433a4ae65712d6b7c9c1180ec8e8cb1d605064c799a0e9ddc6b3572fdd9b7245325d66e9ada7633852f7cc4e8b25f681bff7cbfaaa6b1d420_1280.jpg',
    alt: 'Resultados de blanqueamiento dental profesional',
    title: 'Blanqueamiento',
    description: 'Resultados increíbles'
  }
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestra <span className="gradient-text">Galería</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestras instalaciones modernas y algunos de nuestros casos de éxito
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-2xl shadow-lg card-hover h-64">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
