import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { ApplicationFormData } from '../types';

const ApplicationPanel: React.FC = () => {
  const initialFormData: ApplicationFormData = {
    username: '',
    age: '',
    email: '',
    experience: '',
    reason: '',
  };

  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
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
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail wird benötigt';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Gültige E-Mail eingeben';
    }
    
    if (!formData.experience.trim()) {
      newErrors.experience = 'Erfahrung wird benötigt';
    }
    
    if (!formData.reason.trim()) {
      newErrors.reason = 'Grund wird benötigt';
    } else if (formData.reason.length < 50) {
      newErrors.reason = 'Mindestens 50 Zeichen (aktuell: ' + formData.reason.length + ')';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(initialFormData);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="apply"
      className="min-h-screen py-24 px-4 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-800"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Bewirb</span> dich
          </h2>
          <div className="h-1 w-24 bg-yellow-500 mb-6"></div>
          <p className="text-gray-300 mb-8">
            Wir freuen uns immer über neue Mitglieder in unserer Community! Fülle das Formular aus, 
            um dich für unseren Minecraft-Server zu bewerben.
          </p>

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
                und uns per E-Mail bei dir melden.
              </p>
            </div>
          ) : (
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
                  <label className="block text-gray-300 mb-2" htmlFor="email">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-zinc-700 rounded px-4 py-2 text-white border ${
                      errors.email ? 'border-red-500' : 'border-zinc-600'
                    } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                    placeholder="deine@email.de"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="experience">
                    Minecraft-Erfahrung
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
                  Warum möchtest du unserem Server beitreten?
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
                  placeholder="Erzähle uns etwas über dich und warum du unserem Server beitreten möchtest..."
                ></textarea>
                {errors.reason && (
                  <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
                )}
                <div className="text-right text-gray-400 text-sm mt-1">
                  {formData.reason.length}/50 Zeichen (Minimum)
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
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