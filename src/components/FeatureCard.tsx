
import React from 'react';
import GlassCard from './GlassCard';
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  comingSoon?: boolean;
  className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  comingSoon = false,
  className
}) => {
  return (
    <GlassCard 
      className={cn(
        "group transition-all duration-500 hover:scale-105", 
        comingSoon && "opacity-80 blur-[0.5px] hover:blur-0 hover:opacity-100",
        className
      )}
      badge={comingSoon ? "SOON" : undefined}
      glowEffect={!comingSoon}
    >
      <div className="relative z-10">
        {icon && <div className="mb-4 text-mantle-mint">{icon}</div>}
        <h3 className="text-xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-mantle-mint group-hover:to-mantle-pink group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300">{description}</p>
      </div>
    </GlassCard>
  );
};

export default FeatureCard;
