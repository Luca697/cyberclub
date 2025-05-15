import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Activity, Newspaper, MessageSquare, Crown, Clock, History } from 'lucide-react';

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
    date: '24.Mai.2025',
    title: 'Server Launch',
    description: 'CyberClub Minecraft Server geht am 24.Mai online!!'
  },
  {
    type: 'website',
    date: '15.05.2025',
    title: 'Website Update',
    description: 'Neue Features auf der Website: Bewerbungssystem und Update-Log'
  },
  {
    type: 'server',
    date: '10.03.2025',
    title: 'Beta-Phase',
    description: 'Start der geschlossenen Beta-Phase mit ausgewählten Spielern.'
  },
  {
    type: 'website',
    date: '.11.05.2025',
    title: 'Website Launch',
    description: 'Launch der neuen CyberClub Website mit modernem Design'
  },
  {
    type: 'server',
    date: '01.07.2024',
    title: 'Entwicklungsstart',
    description: 'Beginn der Serverentwicklung und Infrastrukturaufbau.'
  }
];

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showUpdateLog, setShowUpdateLog] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'server' | 'website'>('all');

  const targetDate = new Date('2025-05-24T13:00:00');

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
    { id: 'news', label: 'Neuigkeiten', icon: Newspaper },
    { id: 'ranks', label: 'Ränge', icon: Users },
    { id: 'team', label: 'Team', icon: Crown },
    { id: 'status', label: 'Server Status', icon: Activity },
    { id: 'discord', label: 'Discord', icon: MessageSquare },
    { id: 'apply', label: 'Bewerben', icon: Users },
  ];

  const filteredLogs = activeTab === 'all' 
    ? updateLogs 
    : updateLogs.filter(log => log.type === activeTab);

  return (
    <>
      <div className="fixed top-1 left-0 right-0 bg-zinc-900/95 backdrop-blur-md py-2 px-4 z-50 border-b border-zinc-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowUpdateLog(!showUpdateLog)}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <History size={16} />
              <span className="text-sm">Updates</span>
            </button>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <Clock size={16} className="text-green-500" />
            <div className="flex space-x-4">
              <div className="text-center">
                <span className="text-green-500">{timeLeft.days}</span>
                <span className="text-gray-400 ml-1">Tage</span>
              </div>
              <div className="text-center">
                <span className="text-green-500">{timeLeft.hours}</span>
                <span className="text-gray-400 ml-1">Std</span>
              </div>
              <div className="text-center">
                <span className="text-green-500">{timeLeft.minutes}</span>
                <span className="text-gray-400 ml-1">Min</span>
              </div>
              <div className="text-center">
                <span className="text-green-500">{timeLeft.seconds}</span>
                <span className="text-gray-400 ml-1">Sek</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Log Modal */}
      {showUpdateLog && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60] p-4">
          <div className="bg-zinc-800 rounded-lg p-6 max-w-lg w-full border border-zinc-600 animate-scaleIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Update Log</h3>
              <button
                onClick={() => setShowUpdateLog(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1 rounded ${
                  activeTab === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                }`}
              >
                Alle
              </button>
              <button
                onClick={() => setActiveTab('server')}
                className={`px-3 py-1 rounded ${
                  activeTab === 'server'
                    ? 'bg-green-600 text-white'
                    : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                }`}
              >
                Server
              </button>
              <button
                onClick={() => setActiveTab('website')}
                className={`px-3 py-1 rounded ${
                  activeTab === 'website'
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                }`}
              >
                Website
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {filteredLogs.map((log, index) => (
                <div
                  key={index}
                  className={`border-l-2 pl-4 py-2 ${
                    log.type === 'server' ? 'border-green-500' : 'border-blue-500'
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

      <header 
        className={`fixed top-14 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-zinc-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <h1 className="text-2xl md:text-3xl font-bold text-green-500 transition-transform duration-300 group-hover:scale-110">
                  CyberClub
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
              <span className="bg-purple-600 px-2 py-0.5 text-xs rounded-md text-white animate-pulse">
                Minecraft Server
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => onSectionChange(section.id)}
                    className={`text-sm font-medium transition-all duration-200 flex items-center space-x-2 hover:scale-105 ${
                      activeSection === section.id
                        ? 'text-green-400 scale-105'
                        : 'text-gray-300 hover:text-white'
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
              className="md:hidden text-white hover:text-green-400 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 animate-slideDown">
              <nav className="flex flex-col space-y-4">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        onSectionChange(section.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-sm font-medium py-2 transition-all duration-200 flex items-center space-x-2 ${
                        activeSection === section.id
                          ? 'text-green-400 bg-zinc-800/50 pl-2 rounded'
                          : 'text-gray-300 hover:text-white'
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