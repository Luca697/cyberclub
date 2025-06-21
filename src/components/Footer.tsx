import React from 'react';
import { Heart, Code, Zap, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                CyberClub
              </h2>
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 px-3 py-1 text-xs rounded-full text-white font-medium">
                Minecraft Server
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Der beste Ort für dein Minecraft-Abenteuer. Eine Community voller Kreativität, 
              Freundschaft und unvergesslicher Momente.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="text-red-400 animate-pulse" size={16} />
              <span>by the CyberClub Team</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span>Home</span>
                  <Zap size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span>News</span>
                  <Zap size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a href="#ranks" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span>Ränge</span>
                  <Zap size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span>Team</span>
                  <Zap size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a href="#apply" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span>Bewerben</span>
                  <Zap size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Community</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://discord.gg/Bde6Az8ZgS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                >
                  <span>Discord Server</span>
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span>Twitter</span>
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center group">
                  <span>YouTube</span>
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center group">
                  <span>Instagram</span>
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Server IP Section */}
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
          <div className="text-center">
            <h3 className="text-white font-bold text-xl mb-4">Verbinde dich mit unserem Server</h3>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 inline-block">
              <p className="text-gray-400 mb-2">Server IP:</p>
              <div className="flex items-center space-x-4">
                <code className="text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-bold">
                  cyberclub24.de
                </code>
                <button className="bg-green-500/20 hover:bg-green-500/30 p-2 rounded-lg transition-all duration-200 border border-green-500/30 group">
                  <svg className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <Code className="text-purple-400" size={16} />
              <span className="text-gray-400 text-sm">
                Powered by CyberLuca
              </span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm mb-2">
              &copy; {currentYear} CyberClub. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-600 text-xs">
              CyberClub ist nicht mit Mojang verbunden und wird nicht von Mojang unterstützt.
              Minecraft ist eine Marke von Mojang AB.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
