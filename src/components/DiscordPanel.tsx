import React from 'react';
import { MessageSquare, Users, Video, Share2 } from 'lucide-react';

const DiscordPanel: React.FC = () => {
  return (
    <section
      id="discord"
      className="py-24 px-4 bg-gradient-to-b from-zinc-800 to-zinc-900"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tritt unserem <span className="text-indigo-500">Discord</span> bei
          </h2>
          <div className="h-1 w-24 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Verbinde dich mit unserer Community, nimm an Events teil, erhalte Support und bleibe über alle Neuigkeiten informiert.
          </p>
        </div>

        <div className="bg-zinc-800/60 rounded-lg border border-zinc-700 p-8 lg:p-12 max-w-5xl mx-auto shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                CyberClub Discord
              </h3>
              <p className="text-gray-300">
                Unser Discord-Server ist die zentrale Anlaufstelle für alles rund um unseren Minecraft-Server. Hier kannst du:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-lg mr-4">
                    <MessageSquare className="text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Community</h4>
                    <p className="text-gray-400 text-sm">
                      Chatte mit anderen Spielern und teile deine Erfahrungen
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-lg mr-4">
                    <Users className="text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Support</h4>
                    <p className="text-gray-400 text-sm">
                      Erhalte Hilfe von Moderatoren und anderen Spielern
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-lg mr-4">
                    <Video className="text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Events</h4>
                    <p className="text-gray-400 text-sm">
                      Nimm an Voice-Chats und Community-Events teil
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-500/20 p-2 rounded-lg mr-4">
                    <Share2 className="text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Updates</h4>
                    <p className="text-gray-400 text-sm">
                      Bleibe über alle Server-Updates und Ankündigungen informiert
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M20 7.5v9l-2 -2"></path><path d="M16 19h-11a3 3 0 0 1 0 -6v-.5a4.5 4.5 0 0 1 9 0v.5h2a3 3 0 0 1 2.987 2.65"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Jetzt beitreten
              </h3>
              <p className="text-gray-400 mb-6">
                Klicke auf den Button, um direkt zu unserem Discord-Server zu gelangen
              </p>
              <a
                href="https://discord.gg/Bde6Az8ZgS"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>Discord beitreten</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400">
          <p>
            Bei Fragen oder Problemen kannst du uns auch per E-Mail kontaktieren:{' '}
            <a
              href=""
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscordPanel;