export interface ServerConfig {
  maintenance: boolean;
  serverStatus: 'online' | 'offline' | 'maintenance';
  maintenanceMessage: string;
}

export const defaultConfig: ServerConfig = {
  maintenance: true,
  serverStatus: 'online',
  maintenanceMessage: 'Unser Server wird aktuell gewartet. Wir sind bald wieder für euch da!',
};

// Simuliere das Laden der Konfiguration
let currentConfig: ServerConfig = { ...defaultConfig };

export const getServerConfig = (): ServerConfig => {
  return currentConfig;
};

export const updateServerConfig = (newConfig: Partial<ServerConfig>): void => {
  currentConfig = { ...currentConfig, ...newConfig };
};