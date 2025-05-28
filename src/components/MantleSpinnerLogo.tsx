
import React from 'react';
import { cn } from "@/lib/utils";

type MantleSpinnerLogoProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
};

const MantleSpinnerLogo: React.FC<MantleSpinnerLogoProps> = ({ 
  className, 
  size = 'md',
  animated = true 
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
  };

  return (
    <div className={cn(
      'relative',
      sizeClasses[size],
      animated ? 'animate-pulse-glow' : '',
      className
    )}>
      <div className="relative w-full h-full">
        {/* Outer ring - animated rotation */}
        <div className={cn(
          "absolute inset-0 rounded-full border-2 border-transparent",
          animated ? 'animate-rotate-slow' : ''
        )}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-mantle-mint to-mantle-pink opacity-60" 
              style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', padding: '2px' }} />
        </div>
        
        {/* Inner circle */}
        <div className="absolute inset-0 m-4 bg-mantle-dark rounded-full flex items-center justify-center overflow-hidden">
          <img 
            src="/lovable-uploads/01435a0f-9b05-4781-99db-af8546d59384.png" 
            alt="Mantle Logo" 
            className={cn(
              "w-full h-full scale-[0.85] object-contain",
              animated ? 'animate-pulse-slow' : ''
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default MantleSpinnerLogo;
