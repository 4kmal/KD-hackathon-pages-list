import React, { useState } from 'react';
import { PortalIcon } from './Icons';

interface PortalProps {
  currentVersion: '2026' | '2027';
  onSwitch: (version: '2026' | '2027') => void;
}

const Portal: React.FC<PortalProps> = ({ currentVersion, onSwitch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-2 p-2 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => { onSwitch('2026'); setIsOpen(false); }}
            className={`px-4 py-2 text-sm font-bold rounded-xl transition-colors text-left flex items-center gap-2 ${
              currentVersion === '2026' 
                ? 'bg-k-red text-white' 
                : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
            }`}
          >
            <span>🌿</span>
            Krackathon 2026
          </button>
          <button
            onClick={() => { onSwitch('2027'); setIsOpen(false); }}
            className={`px-4 py-2 text-sm font-bold rounded-xl transition-colors text-left flex items-center gap-2 ${
              currentVersion === '2027' 
                ? 'bg-fuchsia-600 text-white' 
                : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
            }`}
          >
            <span>🤖</span>
            Krackathon 2027
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg border transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen 
            ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-700 rotate-90' 
            : 'bg-black text-white dark:bg-white dark:text-black border-transparent'
        }`}
        aria-label="Open Portal"
      >
        <PortalIcon />
      </button>
    </div>
  );
};

export default Portal;