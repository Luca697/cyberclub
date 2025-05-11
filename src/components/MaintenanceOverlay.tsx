import React from 'react';
import { WrenchIcon, AlertTriangle } from 'lucide-react';
import { ServerConfig } from '../config/serverConfig';

interface MaintenanceOverlayProps {
  config: ServerConfig;
}

const MaintenanceOverlay: React.FC<MaintenanceOverlayProps> = ({ config }) => {
  if (!config.maintenance) return null;

  return (
    <div className="fixed inset-0 bg-zinc-900/95 z-[100] flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="bg-yellow-500/20 p-4 rounded-full inline-block mb-6">
          <WrenchIcon className="w-12 h-12 text-yellow-500" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Wartungsmodus Aktiv</h1>
        <p className="text-xl text-gray-300 mb-8">{config.maintenanceMessage}</p>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="https://discord.gg/cyberclub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>Discord beitreten</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceOverlay;