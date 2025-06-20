import React, { useState, useEffect } from 'react';
import { MessageSquare, ExternalLink, Zap, Eye, EyeOff, Skull, AlertTriangle, Wifi, WifiOff } from 'lucide-react';

const ClosureOverlay: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [glitchText, setGlitchText] = useState('CYBERCLUB');
  const [isGlitching, setIsGlitching] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [showDiscordButton, setShowDiscordButton] = useState(false);
  const [staticNoise, setStaticNoise] = useState(false);
  const [systemCorrupted, setSystemCorrupted] = useState(false);

  const glitchTexts = [
    'CYBERCLUB',
    'C¥B3RCLUB',
    'CYB3R€LUB',
    'CYBER€LUB',
    'C¥B€R€LUB',
    '€¥B€R€LUB',
    'CYBERCLUB',
    'C̸Y̷B̴E̵R̶C̷L̸U̴B̵',
    'ĊẎḂĖṘĊĿỦḂ',
    'CYBERCLUB'
  ];

  const errorMessages = [
    'SYSTEM_ERROR: 0x00000001',
    'MEMORY_CORRUPTION_DETECTED',
    'UNAUTHORIZED_ACCESS_ATTEMPT',
    'FIREWALL_BREACH_WARNING',
    'DATA_INTEGRITY_COMPROMISED',
    'SECURITY_PROTOCOL_FAILED',
    'CONNECTION_TERMINATED',
    'ACCESS_DENIED: CLASSIFIED'
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent) {
      const glitchInterval = setInterval(() => {
        setIsGlitching(true);
        setGlitchText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
        
        setTimeout(() => {
          setIsGlitching(false);
          setGlitchText('CYBERCLUB');
        }, 200);
      }, Math.random() * 3000 + 2000);

      return () => clearInterval(glitchInterval);
    }
  }, [showContent]);

  useEffect(() => {
    if (showContent) {
      const errorInterval = setInterval(() => {
        setErrorCount(prev => prev + 1);
        setStaticNoise(true);
        
        setTimeout(() => setStaticNoise(false), 500);
        
        if (Math.random() > 0.7) {
          setSystemCorrupted(true);
          setTimeout(() => setSystemCorrupted(false), 1000);
        }
      }, Math.random() * 5000 + 3000);

      return () => clearInterval(errorInterval);
    }
  }, [showContent]);

  useEffect(() => {
    if (errorCount >= 5) {
      setShowSecret(true);
      setTimeout(() => setShowDiscordButton(true), 2000);
    }
  }, [errorCount]);

  const handleSecretClick = () => {
    setShowSecret(true);
    // Discord button appears after 2 seconds when secret is manually triggered
    setTimeout(() => setShowDiscordButton(true), 2000);
  };

  const DiscordButton = () => (
    <a
      href="https://discord.gg/Bde6Az8ZgS"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-2 bg-red-600/80 hover:bg-red-700 text-white font-mono text-sm px-4 py-2 border border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 ${
        showDiscordButton ? 'opacity-100 animate-pulse' : 'opacity-0'
      }`}
      style={{
        filter: 'drop-shadow(0 0 10px #ef4444)',
        textShadow: '0 0 10px #ef4444'
      }}
    >
      <MessageSquare size={16} />
      <span className="glitch-text">ENTER_DISCORD</span>
      <ExternalLink size={14} />
    </a>
  );

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Static Noise Overlay */}
      {staticNoise && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="w-full h-full bg-static opacity-30 animate-pulse"></div>
        </div>
      )}

      {/* System Corruption Effect */}
      {systemCorrupted && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 font-mono text-xs animate-bounce">
            SYSTEM CORRUPTED
          </div>
        </div>
      )}

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <div className="scanlines"></div>
      </div>

      {/* Matrix-style background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500/20 font-mono text-xs animate-matrix-fall"
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      {/* Error Messages */}
      <div className="fixed top-4 left-4 z-20 space-y-2">
        {Array.from({ length: Math.min(errorCount, 8) }, (_, i) => (
          <div
            key={i}
            className="bg-red-900/80 border border-red-500 px-3 py-1 font-mono text-xs text-red-300 animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <AlertTriangle size={12} className="inline mr-2" />
            {errorMessages[i % errorMessages.length]}
          </div>
        ))}
      </div>

      {/* Connection Status */}
      <div className="fixed top-4 right-4 z-20">
        <div className="flex items-center space-x-2 bg-zinc-900/80 border border-zinc-700 px-3 py-2 font-mono text-xs">
          {Math.random() > 0.5 ? (
            <>
              <Wifi size={12} className="text-green-500 animate-pulse" />
              <span className="text-green-500">CONNECTED</span>
            </>
          ) : (
            <>
              <WifiOff size={12} className="text-red-500 animate-pulse" />
              <span className="text-red-500">DISCONNECTED</span>
            </>
          )}
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className={`text-center transition-all duration-2000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Main Title with Glitch Effect */}
          <div className="mb-8 relative">
            <h1 
              className={`text-6xl md:text-8xl font-mono font-bold mb-4 transition-all duration-200 ${
                isGlitching ? 'glitch-effect text-red-500' : 'text-green-500'
              }`}
              style={{
                textShadow: isGlitching 
                  ? '2px 0 #ff0000, -2px 0 #00ff00, 0 2px #0000ff' 
                  : '0 0 20px #22c55e',
                filter: isGlitching ? 'blur(1px)' : 'none'
              }}
            >
              {glitchText}
            </h1>
            
            {/* Glitch bars */}
            {isGlitching && (
              <>
                <div className="absolute top-1/4 left-0 w-full h-1 bg-red-500 animate-pulse"></div>
                <div className="absolute top-3/4 left-0 w-full h-1 bg-blue-500 animate-pulse"></div>
              </>
            )}
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-2xl md:text-4xl font-mono text-white mb-4 animate-pulse">
              SCHON BALD
            </p>
            <div className="h-px w-64 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto animate-pulse"></div>
          </div>

          {/* Terminal-style loading */}
          <div className="bg-black/80 border border-green-500 p-6 font-mono text-left max-w-md mx-auto mb-8">
            <div className="text-green-500 text-sm space-y-1">
              <div className="flex items-center">
                <span className="text-green-400">$</span>
                <span className="ml-2 animate-typing">Initializing CyberClub...</span>
              </div>
              <div className="text-green-400">Loading modules... [████████░░] 80%</div>
              <div className="text-yellow-500">Warning: Classified content detected</div>
              <div className="text-red-500">Access level: RESTRICTED</div>
              <div className="flex items-center">
                <span className="animate-pulse">█</span>
                <span className="ml-1">Awaiting authorization...</span>
              </div>
            </div>
          </div>

          {/* Hidden Secret Trigger */}
          <div 
            className="absolute bottom-10 left-10 w-4 h-4 cursor-pointer opacity-0 hover:opacity-20 transition-opacity duration-1000"
            onClick={handleSecretClick}
            title="???"
          >
            <Eye className="text-green-500" size={16} />
          </div>

          {/* Secret Content */}
          {showSecret && (
            <div className="animate-fadeIn">
              <div className="bg-red-900/20 border border-red-500 p-6 mb-6 max-w-lg mx-auto">
                <div className="flex items-center mb-4">
                  <Skull className="text-red-500 mr-2 animate-pulse" size={24} />
                  <span className="text-red-500 font-mono font-bold">CLASSIFIED ACCESS</span>
                </div>
                <p className="text-red-300 font-mono text-sm mb-4">
                  AUTHORIZATION GRANTED<br/>
                  SECURITY LEVEL: OMEGA<br/>
                  PROJECT: CYBERCLUB_REVIVAL
                </p>
                <div className="text-green-400 font-mono text-xs">
                  &gt; Accessing encrypted channels...<br/>
                  &gt; Establishing secure connection...<br/>
                  &gt; Ready for transmission...
                </div>
              </div>

              {/* Hidden Discord Button */}
              <div className="text-center">
                <p className="text-red-400 font-mono text-sm mb-4 animate-pulse">
                  ENTER THE UNDERGROUND
                </p>
                <DiscordButton />
              </div>
            </div>
          )}

          {/* Floating Error Icons */}
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute text-red-500/30 animate-float-error"
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 5 + 's',
                  animationDuration: Math.random() * 10 + 5 + 's',
                }}
              >
                <Zap size={Math.random() * 20 + 10} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scanlines {
          background: linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%);
          background-size: 100% 4px;
          height: 100%;
          animation: scanlines 0.1s linear infinite;
        }

        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }

        .glitch-effect {
          animation: glitch 0.3s infinite;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }

        @keyframes float-error {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.7; }
          100% { transform: translateY(0) rotate(360deg); opacity: 0.3; }
        }

        .animate-float-error {
          animation: float-error infinite ease-in-out;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        .animate-typing {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3s steps(40, end) infinite;
        }

        .bg-static {
          background-image: 
            radial-gradient(circle, transparent 20%, rgba(255,255,255,0.1) 21%, rgba(255,255,255,0.1) 34%, transparent 35%, transparent),
            linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%, transparent);
          background-size: 3px 3px;
        }

        .glitch-text {
          animation: glitch-text 2s infinite;
        }

        @keyframes glitch-text {
          0% { text-shadow: 0 0 5px #ef4444; }
          25% { text-shadow: -2px 0 #ef4444, 2px 0 #22c55e; }
          50% { text-shadow: 2px 0 #ef4444, -2px 0 #3b82f6; }
          75% { text-shadow: -2px 0 #22c55e, 2px 0 #ef4444; }
          100% { text-shadow: 0 0 5px #ef4444; }
        }
      `}</style>
    </div>
  );
};

export default ClosureOverlay;
