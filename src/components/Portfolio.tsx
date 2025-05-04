import React, { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: "Stratégie de marque",
    category: "Branding",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Refonte complète de l'identité visuelle et élaboration d'une stratégie de communication."
  },
  {
    id: 2,
    title: "Gestion des réseaux sociaux",
    category: "Social Media",
    image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Planification et création de contenu engageant pour Instagram, LinkedIn et TikTok."
  },
  {
    id: 3,
    title: "Campagne publicitaire",
    category: "Advertising",
    image: "https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Conception et exécution d'une campagne publicitaire cross-média pour le lancement d'un produit."
  },
  {
    id: 4,
    title: "Rédaction web",
    category: "Content",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Création de contenus optimisés SEO pour site web et blog d'entreprise."
  },
  {
    id: 5,
    title: "Newsletter design",
    category: "Digital",
    image: "https://images.pexels.com/photos/5076527/pexels-photo-5076527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Conception et mise en œuvre d'une stratégie de newsletter mensuelle."
  },
  {
    id: 6,
    title: "Événement corporate",
    category: "Event",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Organisation et communication d'un événement d'entreprise."
  },
];

const categories = [
  "Tous", 
  "Branding", 
  "Social Media", 
  "Advertising", 
  "Content", 
  "Digital", 
  "Event"
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [activeItem, setActiveItem] = useState<number | null>(null);
  
  const filteredItems = activeCategory === "Tous" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-center">Mon Portfolio</h2>
          <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12">
            Découvrez ce que je vous propose pour votre communication marketing et digitale.
            Chaque projet est unique et adapté à des objectifs et une vision spécifique.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group card overflow-hidden hover:shadow-xl"
              onClick={() => setActiveItem(item.id)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-white/80 bg-primary/80 px-3 py-1 rounded-full inline-block mb-2 self-start">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm mb-3">{item.description}</p>
                <div className="flex items-center">
                  <span className="text-xs py-1 px-3 bg-zinc-100 rounded-full text-zinc-700">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;