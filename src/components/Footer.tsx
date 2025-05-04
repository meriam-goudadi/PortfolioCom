import React from 'react';
import { Instagram, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Mériam Goudadi</h3>
            <p className="text-zinc-400 mb-6">
              Chargée de communication marketing passionnée par la création de stratégies 
              innovantes qui font rayonner votre marque.
            </p>
            <button 
              onClick={scrollToTop}
              className="flex items-center text-zinc-400 hover:text-white transition-colors"
            >
              Retour en haut <ArrowUp className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Stratégie de communication</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Content marketing</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Social media management</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Email marketing</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Gestion d'événements</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Liens utiles</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-zinc-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#portfolio" className="text-zinc-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#skills" className="text-zinc-400 hover:text-white transition-colors">Compétences</a></li>
              <li><a href="#testimonials" className="text-zinc-400 hover:text-white transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Suivez-moi</h3>
            <p className="text-zinc-400 mb-6">
              Restez connecté(e) pour les dernières actualités et conseils en communication marketing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mériam-goudadi-8a24b6170" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/meriam-goudadi" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            © 2025 Mériam Goudadi. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Mentions légales</a>
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;