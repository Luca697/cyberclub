import React, { useState, useEffect } from 'react';
import { Wrench, Clock, MessageSquare, ExternalLink, Settings, Zap, AlertTriangle, Heart, ChevronDown, CheckCircle, Circle, ArrowDown } from 'lucide-react';
import { ServerConfig } from '../config/serverConfig';

interface MaintenanceOverlayProps {
  config: ServerConfig;
}

const MaintenanceOverlay: React.FC<MaintenanceOverlayProps> = ({ config }) => {
  const [showContent, setShowContent] = useState(false);
  const [currentGlow, setCurrentGlow] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const glowTimer = setInterval(() => {
      setCurrentGlow(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(glowTimer);
  }, []);

  if (!config.maintenance) return null;

  const glowColors = [
    'shadow-orange-500/50',
    'shadow-purple-500/50', 
    'shadow-cyan-500/50'
  ];

  const progressSteps = [
    { name: 'Server herunterfahren', completed: true, description: 'Server sicher gestoppt' },
    { name: 'Backup erstellen', completed: true, description: 'Vollständige Datensicherung' },
    { name: 'Plugin-Updates', completed: true, description: 'Neue Features installieren' },
    { name: 'Performance-Optimierung', completed: false, description: 'Server-Geschwindigkeit verbessern', current: true },
    { name: 'Sicherheitsupdates', completed: false, description: 'Schutz vor neuen Bedrohungen' },
    { name: 'Tests durchführen', completed: false, description: 'Funktionalität überprüfen' },
    { name: 'Server starten', completed: false, description: 'Zurück online gehen' }
  ];

  const scrollToProgress = () => {
    const progressSection = document.getElementById('progress-section');
    if (progressSection) {
      progressSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 z-[100] overflow-y-auto">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 10 + 's',
              animationDuration: Math.random() * 20 + 15 + 's',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Main Icon */}
            <div className={`relative mb-8 transition-all duration-500 ${glowColors[currentGlow]}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-full p-8 border border-white/20 inline-block">
                <Wrench className="w-16 h-16 text-orange-400 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 animate-gradient-x">
                Wartungsmodus
              </span>
            </h1>

            {/* Status Badge */}
            <div className="inline-flex items-center space-x-3 bg-orange-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-500/30 mb-8 animate-pulse">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
              <span className="text-orange-400 font-medium">Server wird gewartet</span>
              <Settings className="text-orange-400 animate-spin" size={20} style={{ animationDuration: '2s' }} />
            </div>

            {/* Main Message */}
            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl mb-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <AlertTriangle className="text-yellow-400 animate-pulse" size={24} />
                <h2 className="text-2xl font-bold text-white">Server vorübergehend nicht verfügbar</h2>
                <AlertTriangle className="text-yellow-400 animate-pulse" size={24} />
              </div>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {config.maintenanceMessage}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/50">
                  <Clock className="text-cyan-400 mx-auto mb-2" size={24} />
                  <p className="text-white font-medium">Geschätzte Dauer</p>
                  <p className="text-gray-400 text-sm">{config.estimatedDuration || '1-3 Stunden'}</p>
                </div>
                <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/50">
                  <Zap className="text-purple-400 mx-auto mb-2" size={24} />
                  <p className="text-white font-medium">Grund</p>
                  <p className="text-gray-400 text-sm">{config.maintenanceReason || 'Server-Updates'}</p>
                </div>
                <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/50">
                  <Heart className="text-red-400 mx-auto mb-2" size={24} />
                  <p className="text-white font-medium">Status</p>
                  <p className="text-gray-400 text-sm">In Bearbeitung</p>
                </div>
              </div>
            </div>

            {/* Discord CTA */}
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Bleib auf dem Laufenden!</h3>
              <p className="text-gray-300 mb-6">
                Erhalte Live-Updates über den Wartungsfortschritt und sei der Erste, 
                der erfährt, wenn der Server wieder online ist.
              </p>
              <a
                href="https://discord.gg/Bde6Az8ZgS"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <MessageSquare size={24} />
                  <span>Discord beitreten</span>
                  <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce cursor-pointer" onClick={scrollToProgress}>
              <ArrowDown className="text-gray-400 mx-auto mb-2" size={32} />
              <p className="text-gray-400 text-sm">Fortschritt anzeigen</p>
              <ChevronDown className="text-gray-400 mx-auto mt-2 animate-pulse" size={24} />
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div id="progress-section" className="min-h-screen py-24 px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Progress Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Wartungsfortschritt
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg">
                Hier siehst du den aktuellen Stand der Wartungsarbeiten
              </p>
            </div>

            {/* Overall Progress Bar */}
            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl mb-12">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white font-bold text-xl">Gesamtfortschritt</span>
                <span className="text-cyan-400 font-bold text-2xl">{config.progressPercentage || 65}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 rounded-full transition-all duration-1000 animate-pulse" 
                  style={{ width: `${config.progressPercentage || 65}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-center">Updates werden installiert und getestet...</p>
            </div>

            {/* Detailed Progress Steps */}
            <div className="space-y-6">
              {progressSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 ${
                    step.completed 
                      ? 'border-green-500/50 bg-green-500/10' 
                      : step.current 
                        ? 'border-orange-500/50 bg-orange-500/10 animate-pulse' 
                        : 'border-slate-600/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      step.completed 
                        ? 'bg-green-500/20 border-2 border-green-500' 
                        : step.current 
                          ? 'bg-orange-500/20 border-2 border-orange-500' 
                          : 'bg-slate-700/50 border-2 border-slate-600'
                    }`}>
                      {step.completed ? (
                        <CheckCircle className="text-green-400" size={24} />
                      ) : step.current ? (
                        <Settings className="text-orange-400 animate-spin" size={24} />
                      ) : (
                        <Circle className="text-slate-400" size={24} />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg ${
                        step.completed 
                          ? 'text-green-400' 
                          : step.current 
                            ? 'text-orange-400' 
                            : 'text-gray-400'
                      }`}>
                        {step.name}
                      </h3>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                    
                    <div className={`text-sm font-medium px-3 py-1 rounded-full ${
                      step.completed 
                        ? 'bg-green-500/20 text-green-400' 
                        : step.current 
                          ? 'bg-orange-500/20 text-orange-400' 
                          : 'bg-slate-700/50 text-slate-400'
                    }`}>
                      {step.completed ? 'Abgeschlossen' : step.current ? 'Läuft...' : 'Wartend'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ETA Section */}
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mt-12 text-center">
              <Clock className="text-cyan-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">Voraussichtliche Fertigstellung</h3>
              <p className="text-cyan-400 text-xl font-bold mb-2">
                {config.estimatedDuration || 'In ca. 1-2 Stunden'}
              </p>
              <p className="text-gray-300">
                Wir arbeiten mit Hochdruck daran, den Server so schnell wie möglich wieder online zu bringen.
              </p>
            </div>

            {/* Discord CTA Bottom */}
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">
                Für Live-Updates und Community-Chat:
              </p>
              <a
                href="https://discord.gg/Bde6Az8ZgS"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare size={20} />
                <span>Discord Server</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default MaintenanceOverlay;
