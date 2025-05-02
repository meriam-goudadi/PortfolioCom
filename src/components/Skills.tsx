import React from 'react';

const marketingSkills = [
  { 
    name: "Stratégie de marque",
    icon: "https://img.icons8.com/fluency/96/null/commercial.png",
  },
  { 
    name: "Social Media Management",
    icon: "https://img.icons8.com/fluency/96/null/instagram-new.png",
  },
  { 
    name: "Content Marketing",
    icon: "https://img.icons8.com/fluency/96/null/content.png",
  },
  { 
    name: "Email Marketing",
    icon: "https://img.icons8.com/fluency/96/null/mail.png",
  },
  { 
    name: "SEO",
    icon: "https://img.icons8.com/?size=100&id=CnsAhdkyB9wu&format=png&color=000000",
  },
  { 
    name: "Analytics",
    icon: "https://img.icons8.com/fluency/96/null/combo-chart.png",
  }
];

const toolSkills = [
  { 
    name: "Canva",
    icon: "https://img.icons8.com/fluency/96/null/canva-app.png",
  },
  { 
    name: "Figma",
    icon: "https://img.icons8.com/fluency/96/null/figma.png",
  },
  { 
    name: "CapCut",
    icon: "https://img.icons8.com/?size=100&id=k3oL6excPPcT&format=png&color=000000",
  },
  { 
    name: "Notion",
    icon: "https://img.icons8.com/fluency/96/null/notion.png",
  },
  { 
    name: "Trello",
    icon: "https://img.icons8.com/?size=100&id=vrmg1S9Hfbiv&format=png&color=000000",
  },
  { 
    name: "Pinterest",
    icon: "https://img.icons8.com/?size=100&id=63676&format=png&color=000000",
  },
  { 
    name: "LinkedIn",
    icon: "https://img.icons8.com/fluency/96/null/linkedin.png",
  },
  { 
    name: "Instagram",
    icon: "https://img.icons8.com/?size=100&id=32323&format=png&color=000000",
  },
  { 
    name: "TikTok",
    icon: "https://img.icons8.com/?size=100&id=118640&format=png&color=000000",
  },
  { 
    name: "Snapchat",
    icon: "https://img.icons8.com/?size=100&id=36628&format=png&color=000000",
  },
  { 
    name: "YouTube",
    icon: "https://img.icons8.com/?size=100&id=19318&format=png&color=000000",
  },
];

const SkillCard: React.FC<{ name: string; icon: string }> = ({ 
  name, 
  icon 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex flex-col items-center">
        <img src={icon} alt={name} className="w-16 h-16 mb-4" />
        <h3 className="text-lg font-medium text-center">{name}</h3>
      </div>
    </div>
  );
};


const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-zinc-100/50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-center">Mes Compétences</h2>
          <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12">
            La combinaison parfaite de créativité, de stratégie et de maîtrise des outils 
            pour développer des communications percutantes et efficaces.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Expertise Marketing</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingSkills.map((skill) => (
              <SkillCard 
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Maîtrise des Outils</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolSkills.map((skill) => (
              <SkillCard 
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;