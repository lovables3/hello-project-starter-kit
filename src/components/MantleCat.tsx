
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

type MantleCatProps = {
  className?: string;
};

const MantleCat: React.FC<MantleCatProps> = ({ className }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    // Set up blinking animation every 10-15 seconds
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 300); // Blink for 300ms
    }, Math.random() * 5000 + 10000); // Random between 10-15 seconds
    
    // Set up floating animation
    const floatInterval = setInterval(() => {
      setIsFloating(prev => !prev);
    }, 2000); // Toggle floating every 2 seconds
    
    return () => {
      clearInterval(blinkInterval);
      clearInterval(floatInterval);
    };
  }, []);

  return (
    <div className={cn(
      "fixed bottom-0 right-0 z-50 transform transition-all duration-700 ease-in-out translate-x-[75%] hover:translate-x-[70%]",
      isFloating ? "translate-y-1" : "translate-y-0",
      className
    )}>
      <div className="relative w-48 h-48">
        {/* Use the new uploaded cat image */}
        <img 
          src="/lovable-uploads/c93fdd72-cc44-4602-93cf-3be755e54ba5.png" 
          alt="Mantle Cat" 
          className={cn(
            "w-full h-full object-contain transition-all",
            isBlinking ? "scale-[0.97]" : "scale-100"
          )}
        />
        
        {/* Cat collar with Mantle logo */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gradient-to-r from-mantle-mint to-mantle-pink rounded-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-5 h-5 bg-mantle-dark rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/01435a0f-9b05-4781-99db-af8546d59384.png" 
                alt="Mantle Logo" 
                className="w-full h-full object-contain scale-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MantleCat;
