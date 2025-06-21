import React, { useState, useEffect } from 'react';
import { Users, Server, Clock, Signal, Zap, Activity, Globe, Shield } from 'lucide-react';
import { getServerConfig } from '../config/serverConfig';

const ServerStatusPanel: React.FC = () => {
  const [playerCount, setPlayerCount] = useState(42);
  const [uptime, setUptime] = useState('99.9%');
  const [tps, setTps] = useState(20.0);
  const [ping, setPing] = useState(12);
  const [memoryUsage, setMemoryUsage] = useState(68);
  const [activeWorlds, setActiveWorlds] = useState(5);
  const config = getServerConfig();

  useEffect(() => {
    if (config.serverStatus === 'online' && !config.maintenance) {
      const interval = setInterval(() => {
        setPlayerCount(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
        setTps(prev => Math.min(20, Math.max(18, prev + (Math.random() - 0.5))));
        setPing(prev => Math.max(5, Math.min(50, prev + Math.floor(Math.random() * 5) - 2)));
        setMemoryUsage(prev => Math.max(50, Math.min(90, prev + Math.floor(Math.random() * 6) - 3)));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [config]);

  const getStatusColor = () => {
    switch (config.serverStatus) {
      case 'online':
        return 'green';
      case 'maintenance':
        return 'yellow';
      case 'offline':
        return 'red';
    }
  };

  const getStatusText = () => {
    switch (config.serverStatus) {
      case 'online':
        return 'Server ist online';
      case 'maintenance':
        return 'Server wird gewartet';
      case 'offline':
        return 'Server ist offline';
    }
  };

  const stats = [
    {
      icon: Users,
      label: 'Spieler Online',
      value: config.serverStatus === 'online' ? playerCount.toString() : '0',
      description: 'Aktive Spieler auf dem Server',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Server,
      label: 'TPS',
      value: config.serverStatus === 'online' ? tps.toFixed(1) : '0.0',
      description: 'Server-Performance (Ticks pro Sekunde)',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Clock,
      label: 'Uptime',
      value: uptime,
      description: 'Server-Verfügbarkeit im letzten Monat',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: Signal,
      label: 'Ping',
      value: config.serverStatus === 'online' ? `${ping}ms` : 'N/A',
      description: 'Durchschnittliche Serverlatenz',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Activity,
      label: 'RAM Usage',
      value: config.serverStatus === 'online' ? `${memoryUsage}%` : '0%',
      description: 'Speicherverbrauch des Servers',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/30'
    },
    {
      icon: Globe,
      label: 'Welten',
      value: activeWorlds.toString(),
      description: 'Aktive Minecraft-Welten',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/20',
      borderColor: 'border-indigo-500/30'
    }
  ];

  return (
    <section
      id="status"
      className="min-h-screen py-24 px-4 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full animate-float"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 10 + 's',
              animationDuration: Math.random() * 20 + 15 + 's',
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Zap className="text-green-400 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              Server Status
            </h2>
            <Shield className="text-blue-400 animate-pulse" size={32} />
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Echtzeitüberwachung unseres Minecraft-Servers. Hier siehst du aktuelle Spielerzahlen,
            Performance-Metriken und detaillierte Systemstatistiken.
          </p>
        </div>

        {/* Server Status Badge */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center space-x-3 bg-${getStatusColor()}-500/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-${getStatusColor()}-500/30 animate-pulse shadow-lg`}>
            <div className={`w-4 h-4 rounded-full bg-${getStatusColor()}-500 animate-ping`}></div>
            <span className={`text-${getStatusColor()}-400 font-bold text-lg`}>{getStatusText()}</span>
            <Server className={`text-${getStatusColor()}-400`} size={24} />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${stat.bgColor}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${stat.bgColor}`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <span className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {stat.description}
                  </p>

                  {/* Progress Bar for certain stats */}
                  {(stat.label === 'RAM Usage' || stat.label === 'TPS') && (
                    <div className="mt-4">
                      <div className="w-full bg-slate-700/50 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
                          style={{ 
                            width: stat.label === 'RAM Usage' 
                              ? `${memoryUsage}%` 
                              : `${(tps / 20) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Server IP Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Verbinde dich mit unserem Server</h3>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-gray-400 mb-2">Server IP:</p>
              <div className="flex items-center justify-center space-x-4">
                <code className="text-3xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-bold">
                  cyberclub.de
                </code>
                <button className="bg-green-500/20 hover:bg-green-500/30 p-3 rounded-xl transition-all duration-200 border border-green-500/30 group">
                  <svg className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStatusPanel;
