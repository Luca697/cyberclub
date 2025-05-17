import React from 'react';
import { RankAdvantage } from '../types';
import { Shield, BadgeCheck, Crown, Zap, Edit2 } from 'lucide-react';

interface RanksPanelProps {
  ranks: RankAdvantage[];
  onUpdateRanks: (updatedRanks: RankAdvantage[]) => void;
}

const RanksPanel: React.FC<RanksPanelProps> = ({ ranks }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="h-6 w-6" />;
      case 'BadgeCheck':
        return <BadgeCheck className="h-6 w-6" />;
      case 'Crown':
        return <Crown className="h-6 w-6" />;
      case 'Zap':
        return <Zap className="h-6 w-6" />;
      default:
        return <Shield className="h-6 w-6" />;
    }
  };

  return (
    <section
      id="ranks"
      className="min-h-screen py-24 px-4 flex items-center bg-gradient-to-b from-zinc-800 to-zinc-900"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-purple-500">Rang</span> Vorteile
            </h2>
            <div className="h-1 w-24 bg-purple-500" />
            <p className="text-gray-300 mt-4 max-w-2xl">
              Entdecke die vielfältigen Vorteile unserer verschiedenen Ränge und finde heraus,
              welcher am besten zu deinem Spielstil passt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map(rank => (
            <div
              key={rank.id}
              className="relative bg-zinc-800/60 rounded-lg p-6 border border-zinc-700 hover:border-purple-500/50 transition-all duration-300 group"
              style={{
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px ${rank.color}20`,
              }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                style={{ backgroundColor: `${rank.color}20`, color: rank.color }}
              >
                {getIconComponent(rank.icon)}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{rank.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{rank.description}</p>

              <div className="space-y-2 mb-4">
                {rank.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <div className="text-green-500 mr-2 mt-0.5">•</div>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => console.log('Bearbeiten geklickt')}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <Edit2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RanksPanel;
