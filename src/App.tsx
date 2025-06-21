import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NewsPanel from './components/NewsPanel';
import RanksPanel from './components/RanksPanel';
import TeamWall from './components/TeamWall';
import ServerStatusPanel from './components/ServerStatusPanel';
import DiscordPanel from './components/DiscordPanel';
import ApplicationPanel from './components/ApplicationPanel';
import Footer from './components/Footer';
import { newsItems, rankAdvantages } from './data/mockData';
import './styles/animations.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [ranks, setRanks] = useState(rankAdvantages);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'news', 'ranks', 'team', 'status', 'discord', 'apply'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 10 + 's',
              animationDuration: Math.random() * 20 + 10 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Header activeSection={activeSection} onSectionChange={scrollToSection} />
        <HeroSection />
        <NewsPanel news={newsItems} />
        <RanksPanel ranks={ranks} onUpdateRanks={setRanks} />
        <TeamWall />
        <ServerStatusPanel />
        <DiscordPanel />
        <ApplicationPanel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
