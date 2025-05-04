import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Mériam a transformé notre approche des réseaux sociaux. Sa stratégie nous a permis d'augmenter notre chiffre et de fidéliser plus de clients. Une professionnelle créative et efficace, toujours avec son sourire et sa bonne humeur."
  },
  {
    id: 2,
    quote: "Travailler avec Mériam a été un véritable plaisir. Elle est toujours à l'écoute, souriante, de bonne humeur, réactive et propose des idées innovantes qui font la différence. Je la recommande sans hésitation."
  },
  {
    id: 3,
    quote: "Mériam a su nous guider à travers les défis du marketing digital avec brio. Sa connaissance approfondie des outils et des tendances actuelles est impressionnante."
  },
  {
    id: 4,
    quote: "Son approche personnalisée et son attention aux détails ont fait toute la différence au sein de notre équipe."
  },
  {
    id: 5,
    quote: "Sa passion pour la communication et son expertise technique font d'elle une partenaire précieuse. Mériam a su nous aider à naviguer dans le monde complexe du marketing digital avec aisance."
  },
  {
    id: 6,
    quote: "Elle a su nous apporter une vision nouvelle et rafraîchissante. Mériam est une professionnelle qui sait allier créativité et stratégie."
  },
  {
    id: 7,
    quote: "Mériam est une communicante hors pair. Elle a une capacité à créer du contenu engageant et pertinent ce qui est un atout majeur pour n'importe quelle entreprise."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-center">Ce que l'on dit généralement de moi, professionnellement parlant :</h2>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 text-primary/20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
          </div>
          
          <div className="p-8 md:p-12 bg-white rounded-2xl shadow-xl">
            <div className="flex flex-col items-center">
              
              <p className="text-lg md:text-xl text-center mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex space-x-3">
                {testimonials.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      currentIndex === slideIndex ? 'bg-primary' : 'bg-zinc-300'
                    }`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-zinc-50 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-800" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-zinc-50 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-zinc-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;