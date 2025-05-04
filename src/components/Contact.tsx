import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Message envoyé ! Je vous contacterai prochainement.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-center">Contactez-moi</h2>
          <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12">
            Une idée, un projet ou une simple question ? N'hésitez pas à me contacter,
            je vous répondrai dans les plus brefs délais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
            <p className="text-zinc-600 mb-8">
              Je suis toujours à la recherche de nouveaux défis et de collaborations
              enrichissantes. Que vous soyez une start-up ou une grande entreprise,
              je serai ravie d'échanger avec vous sur vos besoins en communication.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-700">Email</h4>
                  <p className="text-zinc-600">goudadi.meriam@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-700">Téléphone</h4>
                  <p className="text-zinc-600">+33 6 03 90 43 84</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-700">Localisation</h4>
                  <p className="text-zinc-600">Istres, France</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-2">
                  Objet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  placeholder="Objet de votre message"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full btn btn-primary py-4"
              >
                Envoyer le message
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;