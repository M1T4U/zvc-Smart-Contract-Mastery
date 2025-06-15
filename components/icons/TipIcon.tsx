
import React from 'react';

interface TipIconProps {
  className?: string;
}

const TipIcon: React.FC<TipIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.354a7.5 7.5 0 0 1-4.5 0m4.5 0v-.375c0-.621-.504-1.125-1.125-1.125H12a1.125 1.125 0 0 1-1.125-1.125v-.375m1.5-1.5V6a2.25 2.25 0 0 0-2.25-2.25H10.5A2.25 2.25 0 0 0 8.25 6v2.25m6.75 3.75m-6.75 0H5.25m5.25 0H18" />
  </svg>
);

export default TipIcon;
    