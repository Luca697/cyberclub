import { NewsItem, RankAdvantage } from '../types';
import { BadgeCheck, Shield, Crown, Zap } from 'lucide-react';

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Neuer Survival-Modus verfügbar',
    content: 'Ab sofort können alle Spieler unseren neuen Hardcore-Survival-Modus ausprobieren! Neue Biome, neue Monster und exklusive Belohnungen warten auf euch.',
    date: '15.06.2023',
    imageUrl: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Community-Event am Wochenende',
    content: 'Dieses Wochenende findet unser monatliches Bauwettbewerb statt. Das Thema lautet "Futuristische Städte". Hauptpreis ist der VIP-Rang für einen Monat!',
    date: '10.06.2023',
    imageUrl: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'Server-Update auf Version 1.19',
    content: 'Wir haben den Server auf die neueste Minecraft-Version aktualisiert. Neue Funktionen, Biome und Kreaturen warten auf euch!',
    date: '01.06.2023',
    imageUrl: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const rankAdvantages: RankAdvantage[] = [
  {
    id: '1',
    name: 'Spieler',
    description: 'Der Standardrang für alle Neuankömmlinge',
    benefits: [
      'Zugang zum Survival-Server',
      'Teilnahme an Community-Events',
      'Grundlegende Befehle (/spawn, /home)',
    ],
    color: '#44bd32',
    icon: 'Shield',
  },
  {
    id: '2',
    name: 'VIP',
    description: 'Für engagierte Mitglieder unserer Community',
    benefits: [
      'Alle Spieler-Vorteile',
      'Zugang zu VIP-Welten',
      'Farbiger Name im Chat',
      '5 zusätzliche Homes',
      'Exklusive Items und Kosmetika',
    ],
    color: '#8c7ae6',
    icon: 'BadgeCheck',
  },
  {
    id: '3',
    name: 'Premium',
    description: 'Für unsere treuesten Unterstützer',
    benefits: [
      'Alle VIP-Vorteile',
      'Prioritärer Serverzugang',
      'Zugang zu allen Welten',
      'Unbegrenzte Homes',
      'Exklusive Befehle und Werkzeuge',
      'Monatliche Belohnungen',
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