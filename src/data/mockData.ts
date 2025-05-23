import { NewsItem, RankAdvantage, RoleRequirement } from '../types';

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Unser Release: 25.Mai.2025 ',
    content: 'Bald wird der Server das 2te mal Released!!',
    date: '24.Mai.2025',
    imageUrl: 'https://cdn.pixabay.com/photo/2022/01/05/15/30/minecraft-6917341_1280.jpg'
  },
  {
    id: '2',
    title: 'Neue Kiste kommt bald',
    content: 'Seit gespannt auf unser nächstes Update',
    date: 'Bald.',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/03/11/21/53/minecraft-669307_1280.jpg'
  },
  {
    id: '3',
    title: 'Server-Update auf Version 1.21.4',
    content: 'Wir haben den Server auf die neueste Minecraft-Version aktualisiert. Neue Funktionen, Biome und Kreaturen warten auf euch!',
    date: '10.04.2025',
    imageUrl: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const rankAdvantages: RankAdvantage[] = [
  {
    id: '1',
    name: 'Owner',
    description: 'Serverbesitzer mit höchsten Rechten',
    benefits: [
      'Alle Admin-Rechte',
      'Serververwaltung und Backups',
      'Zugriff auf alles',
    ],
    color: '#800000',
    icon: 'Crown',
  },
  {
    id: '2',
    name: 'Admin',
    description: 'Serveradministratoren',
    benefits: [
      'Vollständige Serverkontrollen',
      'Zugang zu allen Befehlen',
      'Moderationstools',
      'Backend-Zugriff',
    ],
    color: '#e84118',
    icon: 'Zap',
  },
  {
    id: '3',
    name: 'Developer',
    description: 'Technische Leitung und Feature-Entwicklung',
    benefits: [
      'Zugang zu Dev-Tools',
      'Systementwicklung & Bugfixes',
      'Feature Deployment',
    ],
    color: '#0097e6',
    icon: 'Zap',
  },
  {
    id: '4',
    name: 'Moderator',
    description: 'Verantwortlich für Ordnung und Support',
    benefits: [
      'Chat-Moderation',
      'Spieler-Support',
      'Warnen, Kicken, Muting',
    ],
    color: '#fbc531',
    icon: 'Shield',
  },
  {
    id: '5',
    name: 'Content',
    description: 'Verantwortlich für Inhalte und kreative Events',
    benefits: [
      'Erstellen von Events und Challenges',
      'Kreative Inhalte für die Community',
      'Gestaltung von NPCs und Texten',
    ],
    color: '#fd79a8',
    icon: 'BadgeCheck',
  },
  {
    id: '6',
    name: 'HERO',
    description: 'Für unsere treuesten Unterstützer',
    benefits: [
      'Alle VIP-Vorteile',
      'Prioritärer Serverzugang',
      'Zugang zu allen Welten',
      'Unbegrenzte Homes',
      'Exklusive Befehle und Werkzeuge',
      'Und noch vieles mehr..',
    ],
    color: '#e1b12c',
    icon: 'Crown',
  },
  {
    id: '7',
    name: 'Odin',
    description: 'Für engagierte Mitglieder unserer Community',
    benefits: [
      'Alle Spieler-Vorteile',
      'Zugang zu VIP-Welten',
      'Farbiger Name im Chat',
      '10 zusätzliche Homes',
      'Und noch vieles mehr...',
    ],
    color: '#8c7ae6',
    icon: 'BadgeCheck',
  },
  {
    id: '8',
    name: 'Spieler',
    description: 'Der Standardrang für alle Neuankömmlinge',
    benefits: [
      'Zugang zum Bedwars-Server (BALD)',
      'Teilnahme an Community-Events',
      'Grundlegende Befehle (/spawn, /home)',
    ],
    color: '#44bd32',
    icon: 'Shield',
  }
];

export const roleRequirements: RoleRequirement[] = [
  {
    role: 'Developer',
    requirements: [
      'Mindestens 2 Jahre Java-Entwicklungserfahrung',
      'Erfahrung mit Spigot/Paper API',
      'Grundkenntnisse in Git',
      'Aktive Teilnahme an der Community',
      'Mindestens 14 Jahre alt'
    ],
    description: 'Als Developer bist du für die Entwicklung und Wartung unserer Plugins und Systeme verantwortlich.'
  },
  {
    role: 'Moderator',
    requirements: [
      'Mindestens 1 Monat aktiv auf unserem Server',
      'Vorbildliches Verhalten in der Community',
      'Gute Kommunikationsfähigkeiten',
      'Mindestens 12 Jahre alt',
      'Zeitliche Verfügbarkeit von mind. 6h/Woche'
    ],
    description: 'Moderatoren sind der erste Ansprechpartner für unsere Community und sorgen für ein faires Spielerlebnis.'
  },
  {
    role: 'Builder',
    requirements: [
      'Herausragende Build-Skills in Minecraft',
      'Portfolio mit bisherigen Bauten',
      'Kreativität und Detailverliebtheit',
      'Mindestens 13 Jahre alt',
      'Erfahrung mit WorldEdit'
    ],
    description: 'Builder erschaffen die einzigartigen Welten und Bauwerke auf unserem Server.'
  },
  {
    role: 'YouTuber',
    requirements: [
      'Aktiver YouTube-Kanal mit mind. 1000 Abonnenten',
      'Regelmäßige Upload-Frequenz',
      'Qualitativ hochwertige Produktionen',
      'Mindestens 12 Jahre alt',
      'Positive Ausstrahlung und Engagement'
    ],
    description: 'Als YouTuber repräsentierst du unseren Server nach außen und erstellst unterhaltsamen Content.'
  }
];

