import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Activity, Newspaper, MessageSquare, Crown, Clock, History, Zap } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface UpdateLog {
  type: 'website' | 'server';
  date: string;
  title: string;
  description: string;
}

const updateLogs: UpdateLog[] = [
  {
    type: 'server',
    date: '15.03.2024',
    title: 'Server Launch',
    description: 'CyberClub Minecraft Server geht offiziell online!'
  },
  {
    type: 'website',
    date: '12.03.2024',
    title: 'Website Update',
    description: 'Neue Features auf der Website: Bewerbungssystem und Update-Log'
  },
  {
    type: 'server',
    date: '10.03.2024',
    title: 'Beta-Phase',
    description: 'Start der geschlossenen Beta-Phase mit ausgewählten Spielern.'
  },
  {
    type: 'website',
    date: '05.03.2024',
    title: 'Website Launch',
    description: 'Launch der neuen CyberClub Website mit modernem Design'
  }
];

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showUpdateLog, setShowUpdateLog] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'server' | 'website'>('all');

  const targetDate = new Date('2025-05-01T13:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', label: 'Home', icon: Zap },
    { id: 'news', label: 'News', icon: Newspaper },
    { id: 'ranks', label: 'Ränge', icon: Crown },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'status', label: 'Status', icon: Activity },
    { id: 'discord', label: 'Discord', icon: MessageSquare },
    { id: 'apply', label: 'Bewerben', icon: Users },
  ];

  const filteredLogs = activeTab === 'all' 
    ? updateLogs 
    : updateLogs.filter(log => log.type === activeTab);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md py-2 px-4 z-50 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowUpdateLog(!showUpdateLog)}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
            >
              <History size={16} className="group-hover:animate-spin" />
              <span className="text-sm">Updates</span>
            </button>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <Clock size={16} className="text-cyan-400" />
            <div className="flex space-x-3">
              <div className="text-center">
                <span className="text-cyan-400 font-mono">{timeLeft.days}</span>
                <span className="text-gray-400 ml-1">T</span>
              </div>
              <div className="text-center">
                <span className="text-cyan-400 font-mono">{timeLeft.hours}</span>
                <span className="text-gray-400 ml-1">H</span>
              </div>
              <div className="text-center">
                <span className="text-cyan-400 font-mono">{timeLeft.minutes}</span>
                <span className="text-gray-400 ml-1">M</span>
              </div>
              <div className="text-center">
                <span className="text-cyan-400 font-mono">{timeLeft.seconds}</span>
                <span className="text-gray-400 ml-1">S</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Log Modal */}
      {showUpdateLog && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 max-w-lg w-full border border-white/20 animate-scaleIn shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Update Log</h3>
              <button
                onClick={() => setShowUpdateLog(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1 rounded-lg transition-all duration-200 ${
                  activeTab === 'all'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                Alle
              </button>
              <button
                onClick={() => setActiveTab('server')}
                className={`px-3 py-1 rounded-lg transition-all duration-200 ${
                  activeTab === 'server'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                Server
              </button>
              <button
                onClick={() => setActiveTab('website')}
                className={`px-3 py-1 rounded-lg transition-all duration-200 ${
                  activeTab === 'website'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                Website
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {filteredLogs.map((log, index) => (
                <div
                  key={index}
                  className={`border-l-4 pl-4 py-3 rounded-r-lg ${
                    log.type === 'server' 
                      ? 'border-green-500 bg-green-500/10' 
                      : 'border-blue-500 bg-blue-500/10'
                  }`}
                >
                  <div className="text-sm text-gray-400">{log.date}</div>
                  <h4 className="text-white font-medium mb-1">{log.title}</h4>
                  <p className="text-gray-300 text-sm">{log.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header 
        className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 transition-transform duration-300 group-hover:scale-110">
                  CyberClub
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 px-3 py-1 text-xs rounded-full text-white animate-pulse font-medium">
                Minecraft Server
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => onSectionChange(section.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-purple-400 transition-colors duration-200 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 animate-slideDown">
              <nav className="flex flex-col space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        onSectionChange(section.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-sm font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{section.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
