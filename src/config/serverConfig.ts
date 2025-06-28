
export interface ServerConfig {
  maintenance: boolean;
  serverStatus: 'online' | 'offline' | 'maintenance';
  maintenanceMessage: string;
  estimatedDuration?: string;
  maintenanceReason?: string;
  progressPercentage?: number;
}

// Hier kannst du den Server-Status direkt ändern
export const defaultConfig: ServerConfig = {
  // Ändere maintenance auf true wenn der Server in Wartung ist
  maintenance: false,
  
  // Ändere den serverStatus zu:
  // - 'online' für Online
  // - 'offline' für Offline  
  // - 'maintenance' für Wartung
  serverStatus: 'true',
  
  // Die Nachricht die angezeigt wird wenn der Server in Wartung ist
  maintenanceMessage: 'Unser Server wird aktuell gewartet. Wir installieren neue Features und Verbesserungen für ein noch besseres Spielerlebnis!',
  
  // Optional: Geschätzte Dauer der Wartung
  estimatedDuration: 'Sonntag 9-10 Uhr',
  
  // Optional: Grund für die Wartung
  maintenanceReason: 'Server-Updates & Performance-Optimierungen',
  
  // Optional: Fortschritt der Wartung (0-100)
  progressPercentage: 50
};

let currentConfig: ServerConfig = { ...defaultConfig };

export const getServerConfig = (): ServerConfig => {
  return currentConfig;
};

export const updateServerConfig = (newConfig: Partial<ServerConfig>): void => {
  currentConfig = { ...currentConfig, ...newConfig };
};

// Hilfsfunktionen für einfache Konfiguration
export const enableMaintenance = (message?: string, duration?: string, reason?: string): void => {
  updateServerConfig({
    maintenance: true,
    serverStatus: 'maintenance',
    maintenanceMessage: message || defaultConfig.maintenanceMessage,
    estimatedDuration: duration,
    maintenanceReason: reason
  });
};

export const disableMaintenance = (): void => {
  updateServerConfig({
    maintenance: false,
    serverStatus: 'online'
  });
};

export const setMaintenanceProgress = (percentage: number): void => {
  updateServerConfig({
    progressPercentage: Math.max(0, Math.min(100, percentage))
  });
};
