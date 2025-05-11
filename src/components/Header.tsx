import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Activity, Newspaper, MessageSquare } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { id: 'status', label: 'Server Status (FAKE)', icon: Activity },
    { id: 'discord', label: 'Discord', icon: MessageSquare },
  ];

  return (
    <header 
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
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
  );
};

export default Header;