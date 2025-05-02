import React from 'react';
import { ArrowRight } from 'lucide-react';
import profilePic from '../images/imagePP.jpg';


const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,49,48,0.08),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-6/12 animate-fade-in">
            <h2 className="text-sm uppercase tracking-wider text-primary mb-3 font-medium">
              Chargée de Communication
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Je crée des <span className="text-gradient">stratégies</span> qui captent l'attention
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-xl">
              Experte en communication marketing et digitale, je transforme les messages complexes en contenus engageants qui résonnent avec votre audience et renforcent votre marque.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="btn btn-primary">
                Voir mon portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Me contacter
              </a>
            </div>
          </div>
          
          <div className="lg:w-6/12 relative animate-fade-in animate-delay-300">
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={profilePic}
                alt="Mériam Goudadi"
                className="w-35 h-40 rounded mx-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in animate-delay-500">
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow">
            <p className="text-4xl font-bold text-primary mb-2">5+</p>
            <p className="text-zinc-600">Années d'expérience</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow">
            <p className="text-4xl font-bold text-primary mb-2">35+</p>
            <p className="text-zinc-600">Campagnes réussies</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow">
            <p className="text-4xl font-bold text-primary mb-2">20+</p>
            <p className="text-zinc-600">Clients satisfaits</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow">
            <p className="text-4xl font-bold text-primary mb-2">100%</p>
            <p className="text-zinc-600">Passion créative</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;