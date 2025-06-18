import { useState } from 'react';
import { FAQItem } from '@/types';

const faqs: FAQItem[] = [
  {
    id: '1',
    question: '¿Es doloroso el tratamiento de ortodoncia?',
    answer: 'Los primeros días después de colocar los brackets puede haber molestias leves, pero no dolor intenso. Utilizamos técnicas modernas que minimizan las molestias y te proporcionamos cera dental para mayor comodidad.'
  },
  {
    id: '2',
    question: '¿Cuánto tiempo dura un implante dental?',
    answer: 'Con el cuidado adecuado, los implantes dentales pueden durar toda la vida. Utilizamos implantes de titanio de alta calidad y seguimos protocolos estrictos para garantizar su longevidad.'
  },
  {
    id: '3',
    question: '¿Qué cuidados necesito después de un blanqueamiento?',
    answer: 'Después del blanqueamiento, evita alimentos y bebidas que puedan manchar (café, vino, tabaco) durante las primeras 48 horas. Mantén una buena higiene oral y usa pasta dental especializada.'
  },
  {
    id: '4',
    question: '¿Con qué frecuencia debo visitar al dentista?',
    answer: 'Recomendamos visitas cada 6 meses para limpieza y revisión general. Sin embargo, algunos pacientes pueden necesitar visitas más frecuentes según su condición dental específica.'
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleFAQ = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos las dudas más comunes sobre nuestros tratamientos
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gray-50 rounded-2xl p-6 card-hover">
              <button 
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                <i className={`fas fa-chevron-down text-teal-500 transition-transform duration-300 ${openItems.has(faq.id) ? 'rotate-180' : ''}`}></i>
              </button>
              {openItems.has(faq.id) && (
                <div className="mt-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
