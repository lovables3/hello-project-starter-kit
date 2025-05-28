
export type Role = 'constructor' | 'sniffer' | 'brawler' | 'lurker' | 'viber' | 'lore';

export type Question = {
  id: number;
  text: string;
  options: {
    text: string;
    role: Role;
  }[];
};

export type Personality = {
  role: Role;
  emoji: string;
  title: string;
  description: string;
  image: string;
};
