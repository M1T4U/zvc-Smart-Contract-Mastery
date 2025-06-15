
import React from 'react';

interface DigitalAlienIconProps {
  className?: string;
}

const DigitalAlienIcon: React.FC<DigitalAlienIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 64 64" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className || "w-8 h-8"}
  >
    {/* Alien Head - Darker Green */}
    <path 
      d="M32,5 C16,5 8,22 8,34 C8,48 18,60 32,60 C46,60 56,48 56,34 C56,22 48,5 32,5 Z" 
      fill="#1A531A" // Darker Green (e.g., forest green)
      stroke="#0F3D0F" // Even Darker Green Outline
      strokeWidth="2.5"
    />
    
    {/* Eyes - almond shaped, angled */}
    {/* Left Eye */}
    <ellipse 
      cx="23" 
      cy="31" 
      rx="5.5" 
      ry="9.5" 
      fill="#000000" // Black eyes
      transform="rotate(-15 23 31)" 
      stroke="none"
    />
    {/* Right Eye */}
    <ellipse 
      cx="41" 
      cy="31" 
      rx="5.5" 
      ry="9.5" 
      fill="#000000" // Black eyes
      transform="rotate(15 41 31)" 
      stroke="none"
    />

    {/* "ZVC" Text - smaller */}
    <text 
      x="32" 
      y="18" // Adjusted y-position slightly
      fontFamily="Lexend, Arial, Helvetica, sans-serif"
      fontSize="8" // Reduced font size
      fontWeight="bold"
      fill="#FFFFFF" 
      stroke="#0F3D0F" 
      strokeWidth="0.2"
      textAnchor="middle"
      dominantBaseline="middle"
      letterSpacing="0.5"
    >
      ZVC
    </text>

    {/* Dollar Sign ($) in mouth */}
    <text
      x="32"
      y="50" // Positioned in the mouth area
      fontFamily="Arial, sans-serif"
      fontSize="9" // Appropriate size for a symbol
      fontWeight="bold"
      fill="#FFFFFF" // White color
      stroke="#0F3D0F"
      strokeWidth="0.2"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      $
    </text>

    {/* Subtle Nostrils - matching darker outline color */}
    <circle cx="30" cy="43.5" r="1.2" fill="#0F3D0F" /> 
    <circle cx="34" cy="43.5" r="1.2" fill="#0F3D0F" />
  </svg>
);

export default DigitalAlienIcon;