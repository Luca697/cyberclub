import React from 'react';
import { RankAdvantage } from '../types';
import { Shield, BadgeCheck, Crown, Zap, Star, Sparkles } from 'lucide-react';

interface RanksPanelProps {
  ranks: RankAdvantage[];
  onUpdateRanks: (updatedRanks: RankAdvantage[]) => void;
}

const RanksPanel: React.FC<RanksPanelProps> = ({ ranks }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="h-8 w-8" />;
      case 'BadgeCheck':
        return <BadgeCheck className="h-8 w-8" />;
      case 'Crown':
        return <Crown className="h-8 w-8" />;
      case 'Zap':
        return <Zap className="h-8 w-8" />;
      default:
        return <Shield className="h-8 w-8" />;
    }
  };

  return (
    <section
      id="ranks"
      className="min-h-screen py-24 px-4 flex items-center relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Sparkles className="text-yellow-400 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-400 to-purple-400">
              Rang Vorteile
            </h2>
            <Sparkles className="text-purple-400 animate-pulse" size={32} />
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-yellow-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Entdecke die vielfältigen Vorteile unserer verschiedenen Ränge und finde heraus, 
            welcher am besten zu deinem Spielstil passt. Jeder Rang bietet einzigartige Privilegien und Möglichkeiten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ranks.map((rank, index) => (
            <div
              key={rank.id}
              className="group relative bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px ${rank.color}20`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: `${rank.color}20` }}
              ></div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 relative"
                    style={{ backgroundColor: `${rank.color}20`, color: rank.color }}
                  >
                    <div className="absolute inset-0 rounded-2xl animate-pulse" style={{ backgroundColor: `${rank.color}10` }}></div>
                    <div className="relative">
                      {getIconComponent(rank.icon)}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {rank.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{rank.description}</p>
                </div>

                <div className="space-y-3">
                  {rank.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start group/benefit">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3 transition-all duration-300"
                           style={{ backgroundColor: rank.color }}>
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed group-hover/benefit:text-white transition-colors duration-200">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center">
                    <div 
                      className="px-4 py-2 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: `${rank.color}40`, border: `1px solid ${rank.color}60` }}
                    >
                      <Star size={12} className="inline mr-1" />
                      {rank.name.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RanksPanel;

