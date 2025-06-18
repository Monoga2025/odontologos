import { Button } from '@/components/ui/button';

export default function FloatingWhatsApp() {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola! Me gustaría agendar una cita en SaNan Odontología Integral');
    window.open(`https://wa.me/5255551234567?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={openWhatsApp}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl text-white text-2xl transition-all duration-300 hover:scale-110 animate-bounce p-0"
      >
        <i className="fab fa-whatsapp"></i>
      </Button>
    </div>
  );
}
