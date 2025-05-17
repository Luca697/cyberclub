import React, { useState } from 'react';
import { Send, Check, AlertTriangle } from 'lucide-react';
import { ApplicationFormData, RoleRequirement } from '../types';
import { roleRequirements } from '../data/mockData';

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1328364333612404806/0eiLL1QsDd85x2DvKhyeaGlR2lcorExBFBEhrMOHykVEubT3my4k4dgd_5HtZ_3tfDte';

const ApplicationPanel: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [showRequirements, setShowRequirements] = useState(false);
  
  const initialFormData: ApplicationFormData = {
    username: '',
    age: '',
    discord: '',
    experience: '',
    reason: '',
    role: ''
  };

  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setFormData(prev => ({ ...prev, role }));
    setShowRequirements(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof ApplicationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ApplicationFormData, string>> = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Benutzername wird benötigt';
    }
    
    if (!formData.age.trim()) {
      newErrors.age = 'Alter wird benötigt';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 10) {
      newErrors.age = 'Gültiges Alter eingeben (min. 10)';
    }
    
    if (!formData.discord.trim()) {
      newErrors.discord = 'Nutzer123 wird benötigt';
    }
    
    if (!formData.experience.trim()) {
      newErrors.experience = 'Erfahrung wird benötigt';
    }
    
    if (!formData.reason.trim()) {
      newErrors.reason = 'Grund wird benötigt';
    } else if (formData.reason.length < 50) {
      newErrors.reason = 'Mindestens 50 Zeichen (aktuell: ' + formData.reason.length + ')';
    }

    if (!formData.role) {
      newErrors.role = 'Bitte wähle eine Rolle aus';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToDiscord = async (formData: ApplicationFormData) => {
    const messageContent = JSON.stringify({
      embeds: [{
        title: '🎮 Neue Bewerbung',
        color: 0x00ff00,
        fields: [
          { name: '👤 Minecraft Username', value: formData.username, inline: true },
          { name: '📅 Alter', value: formData.age, inline: true },
          { name: '🎮 Nutzer123', value: formData.discord, inline: true },
          { name: '🎯 Rolle', value: formData.role, inline: true },
          { name: '💪 Erfahrung', value: formData.experience },
          { name: '📝 Begründung', value: formData.reason }
        ],
        timestamp: new Date().toISOString()
      }]
    });

    const base64Message = btoa(messageContent);

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'application',
          data: base64Message
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send to Discord');
      }
    } catch (error) {
      console.error('Error sending to Discord:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await sendToDiscord(formData);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(initialFormData);
        setSelectedRole('');
        setShowRequirements(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting application:', error);
      // Handle error appropriately
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedRoleRequirements = roleRequirements.find(r => r.role === selectedRole);

  return (
    <section
      id="apply"
      className="min-h-screen py-24 px-4 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-800"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Bewirb</span> dich
          </h2>
          <div className="h-1 w-24 bg-yellow-500 mb-6"></div>
          <p className="text-gray-300 mb-8">
            Wir suchen motivierte Teammitglieder! Wähle eine Position und zeig uns, was du drauf hast.
          </p>

          {/* Role Selection */}
          {!selectedRole && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {roleRequirements.map((role) => (
                <div
                  key={role.role}
                  onClick={() => handleRoleSelect(role.role)}
                  className="bg-zinc-800/60 rounded-lg p-6 border border-zinc-700 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{role.role}</h3>
                  <p className="text-gray-300 text-sm">{role.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Requirements Modal */}
          {showRequirements && selectedRoleRequirements && (
            <div className="bg-zinc-800/80 border border-yellow-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-start mb-4">
                <AlertTriangle className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-bold text-white">Voraussetzungen für {selectedRoleRequirements.role}</h3>
                  <p className="text-gray-300 text-sm">{selectedRoleRequirements.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {selectedRoleRequirements.requirements.map((req, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-yellow-500 mr-2">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isSubmitted ? (
            <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 animate-fadeIn">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-500 rounded-full p-2">
                  <Check size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                Bewerbung erfolgreich eingereicht!
              </h3>
              <p className="text-gray-300 text-center">
                Vielen Dank für deine Bewerbung. Wir werden diese so schnell wie möglich prüfen 
                und uns über Discord bei dir melden.
              </p>
            </div>
          ) : selectedRole && (
            <form 
              onSubmit={handleSubmit}
              className="bg-zinc-800/60 rounded-lg p-6 border border-zinc-700 shadow-xl animate-fadeIn"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="username">
                    Minecraft-Benutzername
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`w-full bg-zinc-700 rounded px-4 py-2 text-white border ${
                      errors.username ? 'border-red-500' : 'border-zinc-600'
                    } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                    placeholder="Dein Minecraft-Username"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="age">
                    Alter
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    min="10"
                    className={`w-full bg-zinc-700 rounded px-4 py-2 text-white border ${
                      errors.age ? 'border-red-500' : 'border-zinc-600'
                    } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                    placeholder="Dein Alter"
                  />
                  {errors.age && (
                    <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="discord">
                    Nutzer123
                  </label>
                  <input
                    type="text"
                    id="discord"
                    name="discord"
                    value={formData.discord}
                    onChange={handleChange}
                    className={`w-full bg-zinc-700 rounded px-4 py-2 text-white border ${
                      errors.discord ? 'border-red-500' : 'border-zinc-600'
                    } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                    placeholder="Dein Nutzer123"
                  />
                  {errors.discord && (
                    <p className="text-red-500 text-sm mt-1">{errors.discord}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="experience">
                    Erfahrung
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`w-full bg-zinc-700 rounded px-4 py-2 text-white border ${
                      errors.experience ? 'border-red-500' : 'border-zinc-600'
                    } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="Anfänger">Anfänger (&lt; 1 Jahr)</option>
                    <option value="Fortgeschritten">Fortgeschritten (1-3 Jahre)</option>
                    <option value="Erfahren">Erfahren (3-5 Jahre)</option>
                    <option value="Experte">Experte (5+ Jahre)</option>
                  </select>
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-300 mb-2" htmlFor="reason">
                  Warum möchtest du {selectedRole} werden?
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-zinc-700 rounded px-4 py-2 text-white border ${
                    errors.reason ? 'border-red-500' : 'border-zinc-600'
                  } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                  placeholder="Erzähle uns etwas über dich und warum du dich für diese Position bewirbst..."
                ></textarea>
                {errors.reason && (
                  <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
                )}
                <div className="text-right text-gray-400 text-sm mt-1">
                  {formData.reason.length}/50 Zeichen (Minimum)
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRole('');
                    setShowRequirements(false);
                    setFormData(initialFormData);
                  }}
                  className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-all duration-300"
                >
                  Zurück
                </button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Bewerbung absenden</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicationPanel;
