import React, { useState, useEffect } from 'react';
import { Heart, Users, Calendar, Star, ArrowRight, Trophy, MessageSquare, Code, Crown, Shield, Camera, Music, Gamepad2, Award, Clock, MapPin, Zap, Sparkles, Gift, Flame, Target, ExternalLink } from 'lucide-react';

const ClosureOverlay: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent) {
      const phaseTimer = setInterval(() => {
        setCurrentPhase(prev => (prev + 1) % 6);
      }, 4000);
      return () => clearInterval(phaseTimer);
    }
  }, [showContent]);

  useEffect(() => {
    if (showContent) {
      const memoryTimer = setInterval(() => {
        setCurrentMemory(prev => (prev + 1) % memories.length);
      }, 6000);
      return () => clearInterval(memoryTimer);
    }
  }, [showContent]);

  useEffect(() => {
    if (showContent) {
      const achievementTimer = setInterval(() => {
        setCurrentAchievement(prev => (prev + 1) % communityAchievements.length);
      }, 5000);
      return () => clearInterval(achievementTimer);
    }
  }, [showContent]);

  useEffect(() => {
    if (showContent) {
      const quoteTimer = setInterval(() => {
        setShowQuote(prev => !prev);
      }, 8000);
      return () => clearInterval(quoteTimer);
    }
  }, [showContent]);

  const milestones = [
    { icon: Calendar, text: "März 2024 - Der Traum beginnt", color: "text-green-400", description: "Erste Ideen und Planungen für CyberClub" },
    { icon: Code, text: "April 2024 - Entwicklungsphase", color: "text-blue-400", description: "Server-Infrastruktur und Plugins entwickelt" },
    { icon: Users, text: "Mai 2024 - Community wächst", color: "text-purple-400", description: "Erste 500 Spieler schließen sich an" },
    { icon: Trophy, text: "Juni-August 2024 - Goldene Zeit", color: "text-yellow-400", description: "Events, Builds und unvergessliche Momente" },
    { icon: Star, text: "Februar 2024 - Höhepunkt", color: "text-orange-400", description: "Peak von 30 registrierten Spielern" },
    { icon: Heart, text: "Juni 2025 - Würdiger Abschluss", color: "text-red-400", description: "Ein Ende voller Dankbarkeit und Liebe" }
  ];

  const serverStats = [
    { icon: Users, label: "Registrierte Spieler", value: "260, color: "text-green-400", description: "Aus über 1 Land" },
    { icon: Clock, label: "Gespielte Stunden", value: "15,392", color: "text-blue-400", description: "Das sind 641 Tage!" },
    { icon: MessageSquare, label: "Chat-Nachrichten", value: "89,234", color: "text-purple-400", description: "Voller Freude und Lachen" },
    { icon: Trophy, label: "Events veranstaltet", value: "47", color: "text-yellow-400", description: "Jedes einzigartig und besonders" },
    { icon: MapPin, label: "Welten erstellt", value: "23", color: "text-orange-400", description: "Von Spawn bis zu geheimen Dungeons" },
    { icon: Award, label: "Achievements vergeben", value: "1,205", color: "text-red-400", description: "Für besondere Leistungen" }
  ];

  const memories = [
    {
      title: "Das erste große Build-Event",
      description: "Über 16 Spieler bauten gemeinsam an der majestätischen Spawn-Stadt. 72 Stunden pure Kreativität und Teamwork.",
      icon: Camera,
      date: "Mai 2024",
      highlight: "Rekord: 127 gleichzeitige Spieler"
    },
    {
      title: "Die legendäre PvP-Schlacht",
      description: "Ein episches 6-Stunden-Event mit Teams, Strategien und unvergesslichen Momenten. Der Kampf um die goldene Krone.",
      icon: Gamepad2,
      date: "Juni 2024",
      highlight: "Winner: Team Phoenix"
    },
    {
      title: "Community-Konzert im Voice-Chat",
      description: "Spieler teilten ihre Musik, Gedichte und Talente. Eine Nacht voller Emotionen und Verbindungen.",
      icon: Music,
      date: "Juli 2024",
      highlight: "15 Auftritte, 200+ Zuhörer"
    },
    {
      title: "Der große Server-Geburtstag",
      description: "Eine ganze Woche voller Feierlichkeiten, Geschenke, Überraschungen und gemeinsamer Freude.",
      icon: Gift,
      date: "August 2024",
      highlight: "500+ Geschenke verteilt"
    },
    {
      title: "Das finale Gruppenfoto",
      description: "Alle Teammitglieder und über 30vSpieler versammelten sich für ein letztes gemeinsames Bild.",
      icon: Users,
      date: "Oktober 2024",
      highlight: "Ein Moment für die Ewigkeit"
    }
  ];

  const communityAchievements = [
    {
      title: "Größtes Bauwerk",
      description: "Die Himmelsburg - 500 Blöcke hoch, gebaut von 10+ Spielern",
      icon: Crown,
      builder: "Team Skybuilders"
    },
    {
      title: "Längste Spielsession",
      description: "MarathonMike spielte 18 Stunden am Stück während des Charity-Events",
      icon: Clock,
      builder: "MarathonMike"
    },
    {
      title: "Kreativster Build",
      description: "Eine funktionierende Redstone-Computer mit 8-Bit Display",
      icon: Zap,
      builder: "RedstoneWizard"
    },
    {
      title: "Hilfsbereitester Spieler",
      description: "Über 30 neuen Spielern beim Einstieg geholfen",
      icon: Heart,
      builder: "HelpingHand_99"
    }
  ];

  const teamMembers = [
    { name: "CyberLucx_", role: "Owner", contribution: "Visionär und Herzstück des Servers", quote: "Jeder Spieler war ein Geschenk" },
    { name: "MrJulien", role: "Owner", contribution: "Technisches Genie und Problemlöser", quote: "Stabilität war unser Fundament" },
    { name: "CyberAlex0815", role: "Manager", contribution: "Organisationstalent und Vermittler", quote: "Teamwork macht den Traum wahr" },
    { name: "CyberKnightt", role: "Admin", contribution: "Hüter der Ordnung und Fairness", quote: "Fairness für alle, immer" },
    { name: "PinguinboyMoppi", role: "Admin", contribution: "Teamführer und Motivator", quote: "Gemeinsam sind wir stärker" },
    { name: "MarleyN11", role: "Developer", contribution: "Kreativer Entwickler einzigartiger Features", quote: "Code mit Herz und Seele" },
    { name: "Tray_ofKill", role: "Sr. Moderator", contribution: "Mentor und Community-Beschützer", quote: "Schutz durch Verständnis" },
    { name: "zQuapzZ", role: "Moderator", contribution: "Freundliches Gesicht der Community", quote: "Ein Lächeln für jeden Tag" }
  ];

  const inspirationalQuotes = [
    "\"Die schönsten Abenteuer beginnen mit einem einfachen Block.\" - CyberLucx_",
    "\"In jedem Ende liegt ein neuer Anfang verborgen.\" - MrJulien",
    "\"Freundschaften sind die wertvollsten Schätze, die wir sammeln können.\" - CyberAlex0815",
    "\"Gemeinsame Erinnerungen sind unsterblich.\" - Das CyberClub Team"
  ];

  const DiscordButton = ({ className = "", children, size = "default" }: { className?: string, children: React.ReactNode, size?: "default" | "large" }) => (
    <a
      href="https://discord.gg/Bde6Az8ZgS"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
        size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3"
      } ${className}`}
    >
      <MessageSquare size={size === "large" ? 24 : 20} />
      <span>{children}</span>
      <ExternalLink size={16} />
    </a>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-purple-900/20 to-zinc-900 overflow-x-hidden">
      {/* Enhanced Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-purple-400/30 to-green-400/30 rounded-full animate-float-slow"
            style={{
              width: Math.random() * 8 + 2 + 'px',
              height: Math.random() * 8 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 20 + 's',
              animationDuration: Math.random() * 30 + 20 + 's',
            }}
          />
        ))}
      </div>

      {/* Multiple Gradient Orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 w-64 h-64 bg-yellow-500/15 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-3/4 left-1/3 w-80 h-80 bg-red-500/15 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10">
        <div className={`max-w-6xl mx-auto p-4 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Logo Section */}
          <div className="text-center py-16 animate-scaleIn min-h-screen flex flex-col justify-center">
            <div className="relative mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-500 to-yellow-500 animate-gradient-x">
                  CyberClub
                </span>
              </h1>
              <div className="absolute -top-4 -right-4">
                <Sparkles className="text-yellow-400 animate-pulse" size={32} />
              </div>
              <div className="absolute -bottom-2 -left-4">
                <Star className="text-purple-400 animate-pulse" size={24} />
              </div>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 mx-auto animate-gradient-x mb-6"></div>
            <p className="text-xl text-gray-400 mb-2">März 2024 - Juni 2025</p>
            <p className="text-lg text-purple-400 mb-8">7 Monate • Unendliche Erinnerungen</p>
            
            {/* Discord Button in Hero */}
            <div className="mb-8">
              <DiscordButton size="large">Tritt unserem Discord bei</DiscordButton>
            </div>
            
            {/* Scroll Indicator */}
            <div className="animate-bounce mt-12">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
                <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse"></div>
              </div>
              <p className="text-gray-400 text-sm mt-2">Scrolle für mehr</p>
            </div>
          </div>

          {/* Inspirational Quote Carousel */}
          <div className="mb-16 text-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-r from-purple-500/10 to-green-500/10 rounded-2xl p-6 border border-purple-500/20 max-w-4xl mx-auto">
              <div className={`transition-all duration-1000 ${showQuote ? 'opacity-100 transform-none' : 'opacity-70 transform scale-95'}`}>
                <blockquote className="text-xl md:text-2xl text-gray-300 italic font-light">
                  {inspirationalQuotes[Math.floor(Date.now() / 8000) % inspirationalQuotes.length]}
                </blockquote>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              Das Ende einer <span className="text-purple-400">unvergesslichen Reise</span>
            </h2>
            
            <div className="bg-zinc-800/60 backdrop-blur-md rounded-2xl p-8 border border-zinc-700/50 shadow-2xl animate-fadeIn max-w-4xl mx-auto mb-8" style={{ animationDelay: '1s' }}>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                Nach <span className="text-green-400 font-bold">7 unvergesslichen Monaten</span> voller 
                Abenteuer, Freundschaften und gemeinsamer Erlebnisse ist es Zeit, 
                das Kapitel CyberClub zu schließen.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Was als Vision zweier Träumer begann, wurde zu einer lebendigen Community 
                von fast 3.000 Spielern aus über 1-3 Ländern. Obwohl unser Server nun offline geht, 
                bleiben die Erinnerungen und Freundschaften für immer bestehen.
              </p>
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Flame className="text-orange-400 animate-pulse" size={24} />
                <span className="text-orange-400 font-medium">Eine Legende endet, aber die Geschichte lebt weiter</span>
                <Flame className="text-orange-400 animate-pulse" size={24} />
              </div>
            </div>

            {/* Discord CTA */}
            <div className="text-center">
              <p className="text-gray-300 mb-4">Bleib mit der Community in Verbindung:</p>
              <DiscordButton>Unserem Discord beitreten</DiscordButton>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Unsere Reise durch die Zeit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div
                    key={index}
                    className={`bg-zinc-800/40 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 transition-all duration-500 hover:scale-105 ${
                      currentPhase === index ? 'scale-105 border-purple-500/50 shadow-lg shadow-purple-500/20 animate-glow' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${milestone.color} bg-current/20`}>
                      <Icon className={milestone.color} size={28} />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{milestone.text}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Server Statistics */}
          <div className="mb-16 animate-fadeIn" style={{ animationDelay: '2s' }}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Unsere Erfolge in Zahlen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serverStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-zinc-800/60 backdrop-blur-md rounded-xl p-6 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${stat.color} bg-current/20`}>
                      <Icon className={stat.color} size={24} />
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                    <p className="text-gray-300 font-medium mb-1">{stat.label}</p>
                    <p className="text-gray-500 text-sm">{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Memories Carousel */}
          <div className="mb-16 animate-fadeIn" style={{ animationDelay: '2.5s' }}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Unvergessliche Momente</h3>
            <div className="bg-zinc-800/60 backdrop-blur-md rounded-2xl p-8 border border-zinc-700/50 max-w-5xl mx-auto">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-purple-500/20 animate-pulse`}>
                  {React.createElement(memories[currentMemory].icon, { className: "text-purple-400", size: 40 })}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{memories[currentMemory].title}</h4>
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">{memories[currentMemory].description}</p>
                <div className="bg-purple-500/20 rounded-lg p-3 mb-4 inline-block">
                  <p className="text-purple-400 font-medium">{memories[currentMemory].highlight}</p>
                </div>
                <p className="text-purple-400 font-medium">{memories[currentMemory].date}</p>
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                {memories.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentMemory ? 'bg-purple-500 w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Community Achievements */}
          <div className="mb-16 animate-fadeIn" style={{ animationDelay: '3s' }}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Community Hall of Fame</h3>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30 max-w-4xl mx-auto">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-yellow-500/20`}>
                  {React.createElement(communityAchievements[currentAchievement].icon, { className: "text-yellow-400", size: 32 })}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{communityAchievements[currentAchievement].title}</h4>
                <p className="text-gray-300 text-lg mb-4">{communityAchievements[currentAchievement].description}</p>
                <div className="bg-yellow-500/20 rounded-lg p-3 inline-block">
                  <p className="text-yellow-400 font-medium">Erreicht von: {communityAchievements[currentAchievement].builder}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Tribute */}
          <div className="mb-16 animate-fadeIn" style={{ animationDelay: '3.5s' }}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Danke an unser unglaubliches Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-zinc-800/60 backdrop-blur-md rounded-xl p-6 border border-zinc-700/50 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Crown className="text-white" size={20} />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">{member.name}</h4>
                    <p className="text-yellow-400 text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">{member.contribution}</p>
                    <blockquote className="text-gray-400 text-xs italic">"{member.quote}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Thanks Sections */}
          <div className="mb-16 animate-fadeIn" style={{ animationDelay: '4s' }}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Besondere Dankesworte</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-500/30">
                <Target className="text-green-400 mx-auto mb-4" size={32} />
                <h4 className="text-white font-bold text-lg mb-3 text-center">An die Builders</h4>
                <p className="text-gray-300 text-sm text-center">
                  Ihr habt unsere Welten zum Leben erweckt. Jeder Block war ein Kunstwerk, 
                  jede Struktur ein Meisterwerk der Kreativität.
                </p>
              </div>
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-500/30">
                <MessageSquare className="text-blue-400 mx-auto mb-4" size={32} />
                <p className="text-white font-bold text-lg mb-3 text-center">An die Chatter</p>
                <p className="text-gray-300 text-sm text-center">
                  Ihr habt Leben in unsere Community gebracht. Jede Nachricht, 
                  jeder Witz, jede Unterhaltung machte CyberClub zu einem warmen Zuhause.
                </p>
              </div>
              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-500/30">
                <Users className="text-purple-400 mx-auto mb-4" size={32} />
                <h4 className="text-white font-bold text-lg mb-3 text-center">An die Helfer</h4>
                <p className="text-gray-300 text-sm text-center">
                  Ihr wart die stillen Helden. Immer bereit zu helfen, 
                  zu unterstützen und neue Spieler willkommen zu heißen.
                </p>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="bg-gradient-to-r from-purple-500/20 via-green-500/20 to-yellow-500/20 rounded-2xl p-8 border border-purple-500/30 mb-16 animate-fadeIn" style={{ animationDelay: '4.5s' }}>
            <div className="text-center">
              <div className="flex justify-center space-x-4 mb-6">
                <Heart className="text-red-400 animate-heartbeat" size={48} />
                <Users className="text-blue-400 animate-pulse" size={48} />
                <Star className="text-yellow-400 animate-pulse" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Danke an unsere wunderbare Community</h3>
              <p className="text-gray-300 text-xl leading-relaxed mb-6 max-w-4xl mx-auto">
                Jeder einzelne Spieler, jeder Moderator, jeder Developer, jeder Builder, 
                jeder Streamer und jeder, der auch nur einen Moment Teil dieser Reise war - 
                ihr habt CyberClub zu etwas ganz Besonderem gemacht.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 mb-8">
                <div className="text-center">
                  <MessageSquare className="text-purple-400 mx-auto mb-2" size={32} />
                  <p className="text-white font-medium">Für jeden Chat</p>
                  <p className="text-gray-400 text-sm">der uns zum Lachen brachte</p>
                </div>
                <div className="text-center">
                  <Gamepad2 className="text-green-400 mx-auto mb-2" size={32} />
                  <p className="text-white font-medium">Für jedes Abenteuer</p>
                  <p className="text-gray-400 text-sm">das wir gemeinsam erlebt haben</p>
                </div>
                <div className="text-center">
                  <Heart className="text-red-400 mx-auto mb-2" size={32} />
                  <p className="text-white font-medium">Für jede Freundschaft</p>
                  <p className="text-gray-400 text-sm">die hier entstanden ist</p>
                </div>
                <div className="text-center">
                  <Trophy className="text-yellow-400 mx-auto mb-2" size={32} />
                  <p className="text-white font-medium">Für jeden Moment</p>
                  <p className="text-gray-400 text-sm">den wir zusammen geteilt haben</p>
                </div>
              </div>
              <p className="text-purple-400 font-medium text-xl mb-6">
                Die Erinnerungen bleiben. Die Freundschaften bestehen weiter. ❤️
              </p>
              
              {/* Discord CTA in Thank You Section */}
              <div className="bg-indigo-500/20 rounded-lg p-6 border border-indigo-500/30">
                <p className="text-white text-lg mb-4">Lass uns in Kontakt bleiben!</p>
                <DiscordButton>Discord Community beitreten</DiscordButton>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center pb-16 animate-fadeIn" style={{ animationDelay: '5s' }}>
            <div className="bg-zinc-800/40 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">Ein Abschied ist kein Ende...</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Auch wenn dieses Kapitel zu Ende geht, nehmt die Erfahrungen, 
                Freundschaften und Erinnerungen mit in neue Abenteuer. 
                Die Magie von CyberClub lebt in jedem von euch weiter.
              </p>
              <div className="bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-lg p-6 mb-6">
                <p className="text-white text-lg font-medium mb-2">
                  "Manche Server verschwinden, aber echte Communities leben für immer."
                </p>
                <p className="text-gray-400">- Das CyberClub Legacy</p>
              </div>
              <div className="flex items-center justify-center space-x-3 text-green-400 text-lg mb-8">
                <Zap size={20} className="animate-pulse" />
                <span className="font-medium">Bis zum nächsten Abenteuer, CyberClub Familie!</span>
                <ArrowRight size={20} className="animate-pulse" />
              </div>
              
              {/* Final Discord CTA */}
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-6 border border-indigo-500/30">
                <p className="text-white text-lg mb-4">Wir sehen uns auf Discord! 🎮</p>
                <DiscordButton size="large">Zur CyberClub Discord Community</DiscordButton>
              </div>
              
              <p className="text-gray-500 text-sm mt-6">
                "Manche Geschichten enden nicht wirklich, sie leben in den Herzen derer weiter, die sie erlebt haben."
              </p>
            </div>
          </div>

          {/* Floating Hearts and Stars Animation */}
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <Heart
                key={`heart-${i}`}
                className="absolute text-red-400/20 animate-float"
                size={Math.random() * 30 + 15}
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 15 + 's',
                  animationDuration: Math.random() * 20 + 25 + 's',
                }}
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <Star
                key={`star-${i}`}
                className="absolute text-yellow-400/20 animate-sparkle"
                size={Math.random() * 25 + 10}
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 10 + 's',
                  animationDuration: Math.random() * 15 + 20 + 's',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosureOverlay;
