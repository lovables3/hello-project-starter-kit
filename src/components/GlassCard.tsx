
import React from 'react';
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
  badge?: string;
};

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  glowEffect = false,
  badge 
}) => {
  return (
    <div className={cn(
      'glass-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-mantle-mint/10',
      glowEffect ? 'glow-effect' : '',
      className
    )}>
      {badge && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-mantle-mint to-mantle-pink px-3 py-1 rounded-full text-xs font-bold text-black">
          {badge}
        </div>
      )}
      {children}
    </div>
  );
};

export default GlassCard;
