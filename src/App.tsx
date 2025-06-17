import React from 'react';
import ClosureOverlay from './components/ClosureOverlay';
import './styles/animations.css';

function App() {
  // Show only the closure overlay - all other components are deactivated
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <ClosureOverlay />
    </div>
  );
}

export default App;
