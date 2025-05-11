import React, { useState, useEffect } from 'react';
import { Users, Server, Clock, Signal, AlertTriangle, Settings } from 'lucide-react';
import { getServerConfig, updateServerConfig, ServerConfig } from '../config/serverConfig';

const ServerStatusPanel: React.FC = () => {
  const [playerCount, setPlayerCount] = useState(42);
  const [uptime, setUptime] = useState('99.9%');
  const [tps, setTps] = useState(20.0);
  const [ping, setPing] = useState(12);
  const [config, setConfig] = useState<ServerConfig>(getServerConfig());
  const [isEditing, setIsEditing] = useState(false);
  const [tempMessage, setTempMessage] = useState(config.maintenanceMessage);

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

  const handleStatusChange = (status: 'online' | 'offline' | 'maintenance') => {
    const newConfig = {
      ...config,
      serverStatus: status,
      maintenance: status === 'maintenance',
    };
    updateServerConfig(newConfig);
    setConfig(newConfig);
  };

  const handleMessageSave = () => {
    const newConfig = {
      ...config,
      maintenanceMessage: tempMessage,
    };
    updateServerConfig(newConfig);
    setConfig(newConfig);
    setIsEditing(false);
  };

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
      {/* Animated background particles */}
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
            Server <span className="text-green-500">Status Beta</span>
          </h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Das ist nicht der reale Server Status, diese Funktion ist noch in Arbeit.
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
            <p className="text-gray-400 text-sm">Aktuell ist das nicht real. Bald kommt es.</p>
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

        <div className="mt-12 space-y-6">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleStatusChange('online')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                config.serverStatus === 'online'
                  ? 'bg-green-500 text-white'
                  : 'bg-zinc-700 text-gray-300 hover:bg-green-500/20'
              }`}
            >
              <span>Online</span>
            </button>
            <button
              onClick={() => handleStatusChange('maintenance')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                config.serverStatus === 'maintenance'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-zinc-700 text-gray-300 hover:bg-yellow-500/20'
              }`}
            >
              <span>Wartung</span>
            </button>
            <button
              onClick={() => handleStatusChange('offline')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                config.serverStatus === 'offline'
                  ? 'bg-red-500 text-white'
                  : 'bg-zinc-700 text-gray-300 hover:bg-red-500/20'
              }`}
            >
              <span>Offline</span>
            </button>
          </div>

          <div className="text-center">
            <div className={`inline-flex items-center space-x-2 bg-${getStatusColor()}-500/20 px-4 py-2 rounded-lg animate-pulse`}>
              <div className={`w-2 h-2 rounded-full bg-${getStatusColor()}-500`}></div>
              <span className={`text-${getStatusColor()}-400`}>{getStatusText()}</span>
            </div>
          </div>

          {config.serverStatus === 'maintenance' && (
            <div className="max-w-2xl mx-auto mt-8">
              <div className="bg-zinc-800/60 rounded-lg p-6 border border-zinc-700">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Wartungsnachricht</h3>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-gray-400 hover:text-white"
                  >
                    <Settings size={20} />
                  </button>
                </div>
                {isEditing ? (
                  <div className="space-y-4">
                    <textarea
                      value={tempMessage}
                      onChange={(e) => setTempMessage(e.target.value)}
                      className="w-full bg-zinc-700 border border-zinc-600 rounded px-4 py-2 text-white"
                      rows={3}
                    />
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600"
                      >
                        Abbrechen
                      </button>
                      <button
                        onClick={handleMessageSave}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Speichern
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-300">{config.maintenanceMessage}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServerStatusPanel;