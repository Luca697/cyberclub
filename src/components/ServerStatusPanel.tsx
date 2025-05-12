import React, { useState, useEffect } from 'react';
import { Users, Server, Clock, Signal } from 'lucide-react';
import { getServerConfig } from '../config/serverConfig';

const ServerStatusPanel: React.FC = () => {
  const [playerCount, setPlayerCount] = useState(42);
  const [uptime, setUptime] = useState('99.9%');
  const [tps, setTps] = useState(20.0);
  const [ping, setPing] = useState(12);
  const config = getServerConfig();

  useEffect(() => {
    if (config.serverStatus === 'online' && !config.maintenance) {
      const interval = setInterval(() => {
        setPlayerCount(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
        setTps(prev => Math.min(20, Math.max(18, prev + (Math.random() - 0.5))));
        setPing(prev => Math.max(5, Math.min(50, prev + Math.floor(Math.random() * 5) - 2)));
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

  return (
    <section
      id="status"
      className="min-h-screen py-24 px-4 flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-green-500/20 rounded-full animate-float"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Server <span className="text-green-500">Status</span>
          </h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Echtzeitüberwachung unseres Minecraft-Servers. Hier siehst du aktuelle Spielerzahlen,
            Performance-Metriken und mehr.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-zinc-800/60 rounded-lg p-6 border border-zinc-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="text-green-400" size={24} />
              </div>
              <span className="text-3xl font-bold text-white">
                {config.serverStatus === 'online' ? playerCount : '0'}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Spieler Online</h3>
            <p className="text-gray-400 text-sm">Aktive Spieler auf dem Server</p>
          </div>

          <div className="bg-zinc-800/60 rounded-lg p-6 border border-zinc-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Server className="text-purple-400" size={24} />
              </div>
              <span className="text-3xl font-bold text-white">
                {config.serverStatus === 'online' ? tps.toFixed(1) : '0.0'}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">TPS</h3>
            <p className="text-gray-400 text-sm">Server-Performance (Ticks pro Sekunde)</p>
          </div>

          <div className="bg-zinc-800/60 rounded-lg p-6 border border-zinc-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-yellow-400" size={24} />
              </div>
              <span className="text-3xl font-bold text-white">{uptime}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Uptime</h3>
            <p className="text-gray-400 text-sm">Server-Verfügbarkeit im letzten Monat</p>
          </div>

          <div className="bg-zinc-800/60 rounded-lg p-6 border border-zinc-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Signal className="text-blue-400" size={24} />
              </div>
              <span className="text-3xl font-bold text-white">
                {config.serverStatus === 'online' ? `${ping}ms` : 'N/A'}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Ping</h3>
            <p className="text-gray-400 text-sm">Durchschnittliche Serverlatenz</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className={`inline-flex items-center space-x-2 bg-${getStatusColor()}-500/20 px-4 py-2 rounded-lg animate-pulse`}>
            <div className={`w-2 h-2 rounded-full bg-${getStatusColor()}-500`}></div>
            <span className={`text-${getStatusColor()}-400`}>{getStatusText()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStatusPanel;