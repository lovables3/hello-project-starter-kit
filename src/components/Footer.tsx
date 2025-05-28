import React from 'react';
import { ExternalLink, Twitter, Send, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-mantle-lightGray">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mantle-mint to-mantle-pink p-0.5">
            <img 
              src="/lovable-uploads/b58e8ee1-fafe-4de7-aa6f-c25208ef5cbb.png" 
              alt="Mantle Logo" 
              className="w-full h-full rounded-full"
            />
          </div>
          <span className="ml-3 text-lg font-bold bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent">
            Mantle Network
          </span>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://x.com/Mantle_Official" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://discord.com/invite/0xMantle" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative group"
            aria-label="Discord"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-mantle-mint/10 to-mantle-pink/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
            <MessageSquare size={20} className="text-gray-400 group-hover:text-white transition-colors duration-200 group-hover:scale-110 transform relative z-10" />
          </a>
          <a 
            href="https://t.me/mantlenetwork" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            aria-label="Telegram"
          >
            <Send size={20} />
          </a>
        </div>
        
        <div className="flex justify-center mb-6">
          <a 
            href="https://x.com/i/communities/1881380038265688220" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline flex items-center gap-1"
          >
            <ExternalLink size={16} />
            <span>Community</span>
          </a>
        </div>
        
        {/* Attribution Text */}
        <div className="text-gray-400/80 text-xs mb-4 flex items-center">
          <span className="mr-1">🛠️</span> 
          <span>Crafted by </span>
          <a 
            href="https://x.com/0x_yato" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-1 hover:text-white transition-colors duration-200"
          >
            @0x_yato
          </a>
        </div>
        
        <div className="text-gray-500 text-sm">
          © {currentYear} Mantle Genesis
        </div>
      </div>
    </footer>
  );
};

export default Footer;
