import React, { useState, useEffect } from 'react';
import { Play, Users, Server, Zap, ArrowDown, Sparkles, Crown, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "Dein neues Minecraft-Abenteuer",
    "Eine Community voller Möglichkeiten", 
    "Wo Träume zu Blöcken werden",
    "Gemeinsam bauen wir Legenden"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Logo with Glow Effect */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <h1 className="relative text-6xl md:text-8xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 animate-gradient-x">
                CyberClub
              </span>
            </h1>
            <div className="absolute -top-4 -right-8">
              <Sparkles className="text-yellow-400 animate-pulse" size={40} />
            </div>
            <div className="absolute -bottom-4 -left-8">
              <Crown className="text-purple-400 animate-bounce" size={32} />
            </div>
          </div>

          {/* Dynamic Subtitle */}
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 animate-fadeIn">
              {heroTexts[currentText]}
            </p>
          </div>

          {/* Server Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-500/20 px-6 py-3 rounded-full border border-green-500/30 mb-8 animate-pulse">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-green-400 font-medium">Server Online</span>
            <Server className="text-green-400" size={20} />
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Users className="text-purple-400" size={32} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">über 60</div>
              <div className="text-gray-400">Registrierte Spieler</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-cyan-500/20 p-3 rounded-full">
                  <Zap className="text-cyan-400" size={32} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Server Uptime</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <Shield className="text-green-400" size={32} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support & Schutz</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Play size={24} />
                <span>Jetzt Spielen</span>
              </div>
            </button>
            
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/20">
              Mehr Erfahren
            </button>
          </div>

          {/* Server IP */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-md mx-auto mb-12">
            <p className="text-gray-400 mb-2">Server IP:</p>
            <div className="flex items-center justify-center space-x-2">
              <code className="text-2xl font-mono text-green-400 font-bold">cyberclub24.de</code>
              <button className="bg-green-500/20 hover:bg-green-500/30 p-2 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="text-gray-400 mx-auto" size={32} />
            <p className="text-gray-400 text-sm mt-2">Entdecke mehr</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
