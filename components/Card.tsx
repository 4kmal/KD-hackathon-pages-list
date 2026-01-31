import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  category?: string;
  accentColor?: string; // Hex code or tailwind color class
  className?: string;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  category, 
  accentColor = '#c34a36', 
  className = '',
  noPadding = false
}) => {
  // We use inline styles for dynamic accent color to match the prompt's method
  const style = {
    '--accent': accentColor,
    '--accent-contrast': 'white', // Simplified for this implementation
    '--tab-bg': '#fcfcfc', // Matches card background
  } as React.CSSProperties;

  return (
    <div 
      className={`relative bg-[#fcfcfc] rounded-[40px] shadow-card transition-transform duration-300 hover:-translate-y-1 flex flex-col overflow-hidden ${className}`}
      style={style}
    >
      {category && (
        <div className="absolute top-0 left-0 z-10">
          <div 
            className="relative bg-[#fcfcfc] py-4 px-6 rounded-br-2xl font-bold text-sm tracking-wide"
            style={{ color: accentColor }}
          >
            {category}
            {/* Pseudo-elements for inverted radius to create the 'gooey' tab connection */}
            <div className="absolute -right-4 top-0 w-4 h-4 bg-transparent [mask-image:radial-gradient(circle_at_100%_0%,transparent_16px,black_16px)] bg-[#fcfcfc]"></div>
            <div className="absolute left-0 -bottom-4 w-4 h-4 bg-transparent [mask-image:radial-gradient(circle_at_100%_0%,transparent_16px,black_16px)] bg-[#fcfcfc]"></div>
          </div>
        </div>
      )}
      
      <div className={`h-full ${noPadding ? '' : 'p-6 md:p-8 pt-12'}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;