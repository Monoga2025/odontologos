export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
                <i className="fas fa-tooth text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">SaNan</h1>
                <p className="text-xs text-gray-400">Odontología Integral</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Transformamos sonrisas con tecnología de vanguardia y un enfoque humano excepcional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Ortodoncia</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Implantes Dentales</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Estética Dental</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Endodoncia</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Periodoncia</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Odontopediatría</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-gray-400">
              <li><button onClick={() => scrollToSection('inicio')} className="hover:text-teal-400 transition-colors">Inicio</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-teal-400 transition-colors">Servicios</button></li>
              <li><button onClick={() => scrollToSection('nosotros')} className="hover:text-teal-400 transition-colors">Nosotros</button></li>
              <li><button onClick={() => scrollToSection('galeria')} className="hover:text-teal-400 transition-colors">Galería</button></li>
              <li><button onClick={() => scrollToSection('contacto')} className="hover:text-teal-400 transition-colors">Contacto</button></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-teal-400 mt-1"></i>
                <div>
                  <p>Av. Principal 123</p>
                  <p>Colonia Centro</p>
                  <p>Ciudad, Estado 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-teal-400"></i>
                <p>+52 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-teal-400"></i>
                <p>contacto@sananodontologia.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SaNan Odontología Integral. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Términos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
