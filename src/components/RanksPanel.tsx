import React, { useState } from 'react';
import { RankAdvantage } from '../types';
import { Shield, BadgeCheck, Crown, Zap, Edit2, Save, X, Star, Sparkles } from 'lucide-react';

interface RanksPanelProps {
  ranks: RankAdvantage[];
  onUpdateRanks: (updatedRanks: RankAdvantage[]) => void;
}

const RanksPanel: React.FC<RanksPanelProps> = ({ ranks, onUpdateRanks }) => {
  const [editMode, setEditMode] = useState(false);
  const [editingRank, setEditingRank] = useState<RankAdvantage | null>(null);
  const [editedBenefits, setEditedBenefits] = useState<string[]>([]);

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

  const handleEditRank = (rank: RankAdvantage) => {
    setEditingRank(rank);
    setEditedBenefits([...rank.benefits]);
    setEditMode(true);
  };

  const handleSaveRank = () => {
    if (editingRank) {
      const updatedRanks = ranks.map((rank) =>
        rank.id === editingRank.id
          ? { ...rank, benefits: editedBenefits }
          : rank
      );
      onUpdateRanks(updatedRanks);
      setEditMode(false);
      setEditingRank(null);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditingRank(null);
  };

  const handleAddBenefit = () => {
    setEditedBenefits([...editedBenefits, '']);
  };

  const handleUpdateBenefit = (index: number, value: string) => {
    const updatedBenefits = [...editedBenefits];
    updatedBenefits[index] = value;
    setEditedBenefits(updatedBenefits);
  };

  const handleRemoveBenefit = (index: number) => {
    const updatedBenefits = [...editedBenefits];
    updatedBenefits.splice(index, 1);
    setEditedBenefits(updatedBenefits);
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
                <div className="absolute -right-2 -top-2">
                  <button
                    onClick={() => handleEditRank(rank)}
                    className="bg-slate-700/80 backdrop-blur-sm p-2 rounded-full text-slate-300 hover:bg-purple-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100"
                  >
                    <Edit2 size={14} />
                  </button>
                </div>

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

                {/* Rank Badge */}
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

        {/* Edit Modal */}
        {editMode && editingRank && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-8 w-full max-w-md border border-white/20 animate-scaleIn shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Rang bearbeiten: <span className="text-purple-400">{editingRank.name}</span>
                </h3>
                <button
                  onClick={handleCancelEdit}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-sm text-gray-300">
                  Bearbeite die Vorteile dieses Ranges. Füge neue hinzu oder entferne bestehende.
                </p>

                {editedBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={benefit}
                      onChange={(e) => handleUpdateBenefit(index, e.target.value)}
                      className="flex-1 bg-slate-700/50 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Vorteil eingeben..."
                    />
                    <button
                      onClick={() => handleRemoveBenefit(index)}
                      className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/20 rounded-lg transition-all duration-200"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddBenefit}
                  className="px-6 py-3 bg-slate-700/50 backdrop-blur-sm text-white rounded-lg hover:bg-slate-600/50 transition-all duration-200 border border-white/20"
                >
                  Vorteil hinzufügen
                </button>
                <button
                  onClick={handleSaveRank}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <Save size={16} />
                  <span>Speichern</span>
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
