import React from 'react';

interface PillProps {
  text: string;
  accentColor?: string;
}

const Pill: React.FC<PillProps> = ({ text, accentColor = 'currentColor' }) => {
  return (
    <span 
      className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-opacity-10"
      style={{ 
        backgroundColor: `${accentColor}20`, // 20 hex alpha = ~12% opacity
        color: accentColor 
      }}
    >
      {text}
    </span>
  );
};

export default Pill;