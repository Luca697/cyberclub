import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NewsPanel from './components/NewsPanel';
import RanksPanel from './components/RanksPanel';
import DiscordPanel from './components/DiscordPanel';
import ServerStatusPanel from './components/ServerStatusPanel';
import MaintenanceOverlay from './components/MaintenanceOverlay';
import TeamWall from './components/TeamWall';
import Footer from './components/Footer';
import { newsItems, rankAdvantages } from './data/mockData';
import { RankAdvantage } from './types';
import { getServerConfig } from './config/serverConfig';
import './styles/animations.css';

function App() {
  const [activeSection, setActiveSection] = useState('news');
  const [ranks, setRanks] = useState<RankAdvantage[]>(rankAdvantages);
  const serverConfig = getServerConfig();

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const updateRanks = (updatedRanks: RankAdvantage[]) => {
    setRanks(updatedRanks);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['news', 'ranks', 'team', 'status', 'discord'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white pt-28">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 animate-gradient-x z-50"></div>
      
      <MaintenanceOverlay config={serverConfig} />
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        <NewsPanel news={newsItems} />
        <RanksPanel ranks={ranks} onUpdateRanks={updateRanks} />
        <TeamWall />
        <ServerStatusPanel />
        <DiscordPanel />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;