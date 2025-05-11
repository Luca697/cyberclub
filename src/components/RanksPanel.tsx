import React, { useState } from 'react';
import { RankAdvantage } from '../types';
import { Shield, BadgeCheck, Crown, Zap, Edit2, Save, X } from 'lucide-react';

interface RanksPanelProps {
  ranks: RankAdvantage[];
  onUpdateRanks: (updatedRanks: RankAdvantage[]) => void;
}

const RanksPanel: React.FC<RanksPanelProps> = ({ ranks, onUpdateRanks }) => {
      
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
            <div className="h-1 w-24 bg-purple-500"></div>
            <p className="text-gray-300 mt-4 max-w-2xl">
              Entdecke die vielfältigen Vorteile unserer verschiedenen Ränge und finde heraus, 
              welcher am besten zu deinem Spielstil passt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map((rank) => (
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

              <div className="space-y-2">
                {rank.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-green-500 mr-2 mt-0.5">•</div>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingRank && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-800 rounded-lg p-6 w-full max-w-md border border-zinc-600 animate-scaleIn">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  Rang bearbeiten: {editingRank.name}
                </h3>
                <button
                  onClick={handleCancelEdit}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4 mb-4">
                <p className="text-sm text-gray-300">
                  Bearbeite die Vorteile dieses Ranges. Füge neue hinzu oder entferne bestehende.
                </p>

                {editedBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="text"
                      value={benefit}
                      onChange={(e) => handleUpdateBenefit(index, e.target.value)}
                      className="flex-1 bg-zinc-700 border border-zinc-600 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      onClick={() => handleRemoveBenefit(index)}
                      className="ml-2 text-red-400 hover:text-red-300"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleAddBenefit}
                  className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600 transition-colors duration-200"
                >
                  Vorteil hinzufügen
                </button>
                <button
                  onClick={handleSaveRank}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors duration-200 flex items-center"
                >
                  <Save size={16} className="mr-2" />
                  Speichern
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RanksPanel;