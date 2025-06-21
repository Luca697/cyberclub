import React from 'react';
import { MessageSquare, Users, Video, Share2, ExternalLink, Hash, Mic, Crown } from 'lucide-react';

const DiscordPanel: React.FC = () => {
  return (
    <section
      id="discord"
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <MessageSquare className="text-indigo-400 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Discord Community
            </h2>
            <Users className="text-purple-400 animate-pulse" size={32} />
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Verbinde dich mit unserer lebendigen Community, nimm an Events teil, erhalte Support 
            und bleibe über alle Neuigkeiten informiert. Unser Discord ist das Herzstück der CyberClub Familie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Features */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">
              Warum unserem <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Discord</span> beitreten?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="bg-indigo-500/20 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="text-indigo-400" size={32} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Live Chat</h4>
                <p className="text-gray-400 text-sm">
                  Chatte in Echtzeit mit anderen Spielern und teile deine Minecraft-Erfahrungen
                </p>
              </div>

              <div className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="bg-purple-500/20 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-purple-400" size={32} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Community Support</h4>
                <p className="text-gray-400 text-sm">
                  Erhalte schnelle Hilfe von Moderatoren und erfahrenen Community-Mitgliedern
                </p>
              </div>

              <div className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="bg-pink-500/20 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Video className="text-pink-400" size={32} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Voice Events</h4>
                <p className="text-gray-400 text-sm">
                  Nimm an Voice-Chats, Gaming-Sessions und Community-Events teil
                </p>
              </div>

              <div className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="bg-cyan-500/20 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Share2 className="text-cyan-400" size={32} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Exklusive Updates</h4>
                <p className="text-gray-400 text-sm">
                  Erhalte als Erster Informationen über Server-Updates und neue Features
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Discord Preview */}
          <div className="relative">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              
              {/* Discord Header */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Crown className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">CyberClub Discord</h4>
                  <p className="text-green-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    2,847 Mitglieder online
                  </p>
                </div>
              </div>

              {/* Channel List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <Hash size={16} />
                  <span className="text-sm">allgemein</span>
                  <div className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <Hash size={16} />
                  <span className="text-sm">minecraft-chat</span>
                  <div className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">12</div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <Mic size={16} />
                  <span className="text-sm">Gaming Lounge</span>
                  <div className="ml-auto text-green-400 text-xs">8 online</div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <Hash size={16} />
                  <span className="text-sm">screenshots</span>
                </div>
              </div>

              {/* Sample Messages */}
              <div className="bg-slate-900/50 rounded-xl p-4 space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-green-400 font-medium text-sm">CyberLucx_</span>
                      <span className="text-xs text-gray-500">heute um 14:32</span>
                    </div>
                    <p className="text-gray-300 text-sm">Neues Update ist live! 🎉</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-purple-400 font-medium text-sm">BuilderPro</span>
                      <span className="text-xs text-gray-500">heute um 14:35</span>
                    </div>
                    <p className="text-gray-300 text-sm">Wer hat Lust auf ein Build-Battle? 🏗️</p>
                  </div>
                </div>
              </div>

              {/* Join Button */}
              <div className="text-center">
                <a
                  href="https://discord.gg/Bde6Az8ZgS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-3">
                    <MessageSquare size={24} />
                    <span>Discord beitreten</span>
                    <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </a>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Werde Teil unserer Community! 🎮
            </h3>
            <p className="text-gray-400 mb-6">
              Über 2,800 Spieler haben bereits ihren Platz in unserer Discord-Familie gefunden. 
              Worauf wartest du noch?
            </p>
            <a
              href="https://discord.gg/Bde6Az8ZgS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare size={20} />
              <span>Jetzt beitreten</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordPanel;
