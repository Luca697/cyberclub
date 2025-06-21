import React, { useEffect, useRef, useState } from 'react';
import { Users, Code, Shield, Crown, X } from 'lucide-react';
import * as skinview3d from 'skinview3d';
import { TeamMember } from '../types';

const TeamWall: React.FC = () => {
  const skinViewRefs = useRef<{ [key: string]: HTMLCanvasElement | null }>({});
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    // Owners
    {
      name: "CyberLucx_",
      role: "Owner",
      uuid: "9e1bb8282f804a73930e5d463bef82da",
      description: "Gründer & Hauptentwickler",
      summary: {
        joinDate: "März 2024",
        specialization: "Server-Entwicklung & Community Management",
        achievements: [
          "Gründung des CyberClub Servers",
          "Entwicklung des Custom-Plugin-Systems",
          "Aufbau der Server-Infrastruktur"
        ],
        quote: "Gemeinsam erschaffen wir eine einzigartige Minecraft-Erfahrung!"
      }
    },
    {
      name: "MrJulien",
      role: "Owner",
      uuid: "a796502a2f5e4bfba8a7d6628add21d8",
      description: "Server-Infrastruktur & Management",
      summary: {
        joinDate: "März 2024",
        specialization: "Technische Infrastruktur & Sicherheit",
        achievements: [
          "Implementierung der Server-Sicherheit",
          "Optimierung der Server-Performance",
          "Entwicklung des Backup-Systems"
        ],
        quote: "Stabilität und Sicherheit sind der Grundstein für jeden erfolgreichen Server."
      }
    },
    
    // Manager
    {
      name: "CyberAlex0815",
      role: "Manager",
      uuid: "5ed08ed38d8c4eec9789a8779a73cf92",
      description: "Server Management & Development",
      summary: {
        joinDate: "April 2025",
        specialization: "Server Management & Plugin-Entwicklung",
        achievements: [
          "Leitung des Server-Managements",
          "Koordination der Entwicklungsteams",
          "Strategische Serverentwicklung"
        ],
        quote: "Innovation und effektives Management sind der Schlüssel zum Erfolg."
      }
    },
    
    // Admins
    {
      name: "CyberKnightt",
      role: "Admin",
      uuid: "56e95876fef246fa8f115c14bb623231",
      description: "Moderator-Leitung",
      summary: {
        joinDate: "Mai 2025",
        specialization: "Team-Koordination & Moderation",
        achievements: [
          "Aufbau des Moderationsteams",
          "Entwicklung der Moderationsrichtlinien",
          "Schulung neuer Moderatoren"
        ],
        quote: "Ein faires Spielerlebnis für alle ist unsere oberste Priorität."
      }
    },
    {
      name: "PinguinboyMoppi",
      role: "Admin",
      uuid: "3bf024fee85b404eb8011932306cc803",
      description: "Team Leitung",
      summary: {
        joinDate: "Juni 2024",
        specialization: "Team Management & Koordination",
        achievements: [
          "Organisation des Serverteams",
          "Entwicklung von Teamstrukturen",
          "Verbesserung der Teamkommunikation"
        ],
        quote: "Ein starkes Team ist das Fundament eines erfolgreichen Servers."
      }
    },
    
    // Developer
    {
      name: "MarleyN11",
      role: "Developer",
      uuid: "08497efa6f234ba5980348ff1a11d1af",
      description: "Plugin-Entwicklung",
      summary: {
        joinDate: "April 2025",
        specialization: "Plugin-Entwicklung & Systemintegration",
        achievements: [
          "Entwicklung von Custom-Plugins",
          "Implementierung neuer Spielmechaniken",
          "Optimierung bestehender Systeme"
        ],
        quote: "Kreative Lösungen für einzigartige Spielerlebnisse."
      }
    },
    
    // Sr. Moderator
    {
      name: "Tray_ofKill",
      role: "Sr. Moderator",
      uuid: "71ae9f6c0b28497086579b7c53b8e9bc",
      description: "Senior Community Moderation",
      summary: {
        joinDate: "Februar 2024",
        specialization: "Community Support & Moderation",
        achievements: [
          "Leitung des Moderationsteams",
          "Entwicklung von Moderationsrichtlinien",
          "Mentoring neuer Moderatoren"
        ],
        quote: "Eine freundliche und sichere Spielumgebung für alle."
      }
    },
    
    // Moderator
    {
      name: "zQuapzZ",
      role: "Moderator",
      uuid: "d8f5871eb37f4461b5c36da2c8f26c21",
      description: "Community Moderation",
      summary: {
        joinDate: "Mai 2024",
        specialization: "Community Support & Spielerbetreuung",
        achievements: [
          "Aktive Spielerunterstützung",
          "Community-Events Organisation",
          "Konfliktmanagement"
        ],
        quote: "Gemeinsam machen wir CyberClub zu einem besseren Ort."
      }
    }
  ];

  useEffect(() => {
    teamMembers.forEach((member) => {
      const canvas = skinViewRefs.current[member.name];
      if (canvas) {
        const skinViewer = new skinview3d.SkinViewer({
          canvas: canvas,
          width: 200,
          height: 300,
          skin: `https://crafatar.com/skins/${member.uuid}`,
        });

        skinViewer.animation = new skinview3d.WalkingAnimation();
        skinViewer.animation.speed = 0.5;
        skinViewer.camera.position.set(15, 2, 30);
        skinViewer.controls.enableRotate = true;

        let rotation = 0;
        const animate = () => {
          rotation += 0.01;
          skinViewer.playerObject.rotation.y = rotation;
          requestAnimationFrame(animate);
        };
        animate();
      }
    });
  }, []);

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Owner':
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 'Manager':
        return <Crown className="w-6 h-6 text-orange-500" />;
      case 'Admin':
        return <Shield className="w-6 h-6 text-red-500" />;
      case 'Developer':
        return <Code className="w-6 h-6 text-blue-500" />;
      case 'Sr. Moderator':
        return <Shield className="w-6 h-6 text-purple-500" />;
      default:
        return <Users className="w-6 h-6 text-green-500" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Owner':
        return 'bg-yellow-500/20 border-yellow-500/50';
      case 'Manager':
        return 'bg-orange-500/20 border-orange-500/50';
      case 'Admin':
        return 'bg-red-500/20 border-red-500/50';
      case 'Developer':
        return 'bg-blue-500/20 border-blue-500/50';
      case 'Sr. Moderator':
        return 'bg-purple-500/20 border-purple-500/50';
      default:
        return 'bg-green-500/20 border-green-500/50';
    }
  };

  return (
    <section id="team" className="py-24 px-4 bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unser <span className="text-purple-500">Team</span>
          </h2>
          <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Lerne die Menschen kennen, die CyberClub zu einem besonderen Ort machen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={`relative group rounded-lg p-6 border transition-all duration-300 transform hover:scale-105 cursor-pointer ${getRoleColor(
                member.role
              )}`}
              onClick={() => setSelectedMember(member)}
            >
              <div className="absolute -right-2 -top-2">
                <div className="bg-zinc-800 p-2 rounded-full">
                  {getRoleIcon(member.role)}
                </div>
              </div>

              <div className="mb-4">
                <canvas
                  ref={(el) => (skinViewRefs.current[member.name] = el)}
                  className="w-full rounded-lg bg-zinc-800/50"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <div className="text-sm font-medium text-purple-400 mb-2">
                  {member.role}
                </div>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Member Details Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-800 rounded-lg p-6 max-w-2xl w-full border border-zinc-600 animate-scaleIn relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className={`p-4 rounded-lg ${getRoleColor(selectedMember.role)}`}>
                    <div className="flex items-center gap-2 mb-4">
                      {getRoleIcon(selectedMember.role)}
                      <span className="text-white font-bold">{selectedMember.role}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedMember.name}</h3>
                    <p className="text-gray-300">{selectedMember.description}</p>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-1">Dabei seit</h4>
                      <p className="text-white">{selectedMember.summary?.joinDate}</p>
                    </div>

                    <div>
                      <h4 className="text-purple-400 font-semibold mb-1">Spezialisierung</h4>
                      <p className="text-white">{selectedMember.summary?.specialization}</p>
                    </div>

                    <div>
                      <h4 className="text-purple-400 font-semibold mb-1">Erfolge</h4>
                      <ul className="list-disc list-inside text-white space-y-1">
                        {selectedMember.summary?.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-zinc-600">
                      <blockquote className="text-gray-300 italic">
                        "{selectedMember.summary?.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamWall;
