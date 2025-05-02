import React from 'react';
import { Menu, X, ChevronDown, Instagram, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import './styles/globals.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;