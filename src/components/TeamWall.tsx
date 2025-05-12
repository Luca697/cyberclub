import React, { useEffect, useRef } from 'react';
import { Users, Code, Shield, Crown } from 'lucide-react';
import * as skinview3d from 'skinview3d';

interface TeamMember {
  name: string;
  role: string;
  uuid: string;
  description: string;
}

const TeamWall: React.FC = () => {
  const skinViewRefs = useRef<{ [key: string]: HTMLCanvasElement | null }>({});

  const teamMembers: TeamMember[] = [
    // Owners
    { name: "CyberLucx_", role: "Owner", uuid: "9e1bb8282f804a73930e5d463bef82da", description: "Gründer & Hauptentwickler" },
    { name: "MrJulien", role: "Owner", uuid: "a796502a2f5e4bfba8a7d6628add21d8", description: "Server-Infrastruktur & Management" },
    
    // Admins
    { name: "CyberAlex0815", role: "Admin", uuid: "5ed08ed38d8c4eec9789a8779a73cf92", description: "Developer/Leitung" },
    { name: "CyberKnightt", role: "Admin", uuid: "56e95876fef246fa8f115c14bb623231", description: "Moderator-Leitung" },
    { name: "PinguinboyMoppi", role: "Admin", uuid: "3bf024fee85b404eb8011932306cc803", description: "Team Leitung" },
    
    // Developer
    { name: "MarleyN11", role: "Developer", uuid: "08497efa6f234ba5980348ff1a11d1af", description: "Plugin-Entwicklung" },
    
    // Moderator
    { name: "Tray_ofKill", role: "Moderator", uuid: "71ae9f6c0b28497086579b7c53b8e9bc", description: "Community Moderation" },
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

        // Animation
        skinViewer.animation = new skinview3d.WalkingAnimation();
        skinViewer.animation.speed = 0.5;

        // Camera position and angle
        skinViewer.camera.position.set(15, 2, 30);
        skinViewer.controls.enableRotate = true;

        // Auto-rotate
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
        return <Crown className="w-6 h-6 text-red-500" />;
      case 'Admin':
        return <Shield className="w-6 h-6 text-red-500" />;
      case 'Developer':
        return <Code className="w-6 h-6 text-orange-500" />;
      default:
        return <Users className="w-6 h-6 text-green-500" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Owner':
        return 'bg-red-500/20 border-yellow-500/50';
      case 'Admin':
        return 'bg-red-500/20 border-red-500/50';
      case 'Developer':
        return 'bg-orange-500/20 border-blue-500/50';
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
              className={`relative group rounded-lg p-6 border transition-all duration-300 transform hover:scale-105 ${getRoleColor(
                member.role
              )}`}
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
      </div>
    </section>
  );
};

export default TeamWall;