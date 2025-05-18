export interface ServerConfig {
  maintenance: boolean;
  serverStatus: 'online' | 'offline' | 'maintenance';
  maintenanceMessage: string;
}

// Hier kannst du den Server-Status direkt ändern
export const defaultConfig: ServerConfig = {
  // Ändere maintenance auf true wenn der Server in Wartung ist
  maintenance: true,
  
  // Ändere den serverStatus zu:
  // - 'online' für Online
  // - 'offline' für Offline
  // - 'maintenance' für Wartung
  serverStatus: 'offline',
  
  // Die Nachricht die angezeigt wird wenn der Server in Wartung ist
  maintenanceMessage: 'Unser Server wird aktuell gewartet. Wir sind bald wieder für euch da!',
};

let currentConfig: ServerConfig = { ...defaultConfig };

export const getServerConfig = (): ServerConfig => {
  return currentConfig;
};

export const updateServerConfig = (newConfig: Partial<ServerConfig>): void => {
  currentConfig = { ...currentConfig, ...newConfig };
};
