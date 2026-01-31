import React, { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Krackathon2026 from './components/Krackathon2026';
import Krackathon2027 from './components/Krackathon2027';
import Portal from './components/Portal';

function App() {
  const [version, setVersion] = useState<'2026' | '2027'>('2026');

  return (
    <div className={`max-w-[1400px] mx-auto p-4 md:p-8 min-h-screen ${version === '2027' ? 'theme-2027' : ''}`}>
      <ThemeToggle />
      <Portal currentVersion={version} onSwitch={setVersion} />
      
      {version === '2026' ? (
        <Krackathon2026 />
      ) : (
        <Krackathon2027 />
      )}
    </div>
  );
}

export default App;