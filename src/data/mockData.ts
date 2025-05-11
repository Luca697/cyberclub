import { NewsItem, RankAdvantage } from '../types';
import { BadgeCheck, Shield, Crown, Zap } from 'lucide-react';

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Unser Release: 24.Mai.2025 ',
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
    name: 'Spieler',
    description: 'Der Standardrang für alle Neuankömmlinge',
    benefits: [
      'Zugang zum Bedwars-Server (BALD)',
      'Teilnahme an Community-Events',
      'Grundlegende Befehle (/spawn, /home)',
    ],
    color: '#44bd32',
    icon: 'Shield',
  },
  {
    id: '2',
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
    id: '3',
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
    id: '4',
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
];