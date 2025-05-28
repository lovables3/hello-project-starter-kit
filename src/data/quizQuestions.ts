
import { Question, Role, Personality } from '../types/quiz';

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "How did you first discover Mantle?",
    options: [
      { text: "Via quests and leaderboard events", role: 'sniffer' },
      { text: "Browsed the site, opened docs, studied the structure", role: 'lore' },
      { text: "Deployed test node or tried Mantle SDK", role: 'constructor' }
    ]
  },
  {
    id: 2,
    text: "What's your first reaction to a new Mantle update?",
    options: [
      { text: "Meme-posting and straight to Twitter", role: 'viber' },
      { text: "Digging into GitHub / DA / restaking", role: 'brawler' },
      { text: "Reading lore to understand the meaning", role: 'lore' }
    ]
  },
  {
    id: 3,
    text: "What are you most excited to see on the upcoming Mantle site?",
    options: [
      { text: "Quests, leaderboards, onchain campaigns", role: 'sniffer' },
      { text: "Lore, gallery, history of the modular journey", role: 'lore' },
      { text: "Games, quizzes, and weird experiments", role: 'viber' }
    ]
  },
  {
    id: 4,
    text: "If you were Mantle's mascot cat, what would you do?",
    options: [
      { text: "Run community blog and host spaces", role: 'viber' },
      { text: "Hide in code and leave easter eggs", role: 'lurker' },
      { text: "Drop NFTs via secret quests", role: 'sniffer' }
    ]
  },
  {
    id: 5,
    text: "Where do you spend the most time?",
    options: [
      { text: "Coding, SDK, devtools", role: 'constructor' },
      { text: "Scanning Kaito, lurking Twitter, farming info", role: 'sniffer' },
      { text: "Exploring old lore and archived quests", role: 'lore' }
    ]
  },
  {
    id: 6,
    text: "If Mantle was a city, who would you be?",
    options: [
      { text: "The modular architect of its buildings", role: 'constructor' },
      { text: "The guide for memes, events, and chaos", role: 'viber' },
      { text: "The scout unlocking hidden areas", role: 'sniffer' }
    ]
  },
  {
    id: 7,
    text: "Favorite kind of activity?",
    options: [
      { text: "Breaking stuff, bug reports, weird testing", role: 'brawler' },
      { text: "Creating charts, guides, and breakdowns", role: 'lore' },
      { text: "Trolling in comments but always with value", role: 'lurker' }
    ]
  },
  {
    id: 8,
    text: "Choose your inner cat:",
    options: [
      { text: "Tech engineer with gears and blueprints", role: 'constructor' },
      { text: "Analyst cat with glowing visor and backpack", role: 'brawler' },
      { text: "Meme god in headphones with a chill aura", role: 'viber' }
    ]
  },
  {
    id: 9,
    text: "How do you see Mantle?",
    options: [
      { text: "As a modular playground of tools and builders", role: 'constructor' },
      { text: "As a game with levels, loot, and leaderboard", role: 'sniffer' },
      { text: "As a story you want to dive into", role: 'lore' }
    ]
  },
  {
    id: 10,
    text: "What motivates you most?",
    options: [
      { text: "Building something others can use", role: 'constructor' },
      { text: "Exploring unknown parts of an ecosystem", role: 'sniffer' },
      { text: "Turning chaos into clarity and narrative", role: 'lore' }
    ]
  }
];

export const personalityTypes: Record<Role, Personality> = {
  'constructor': {
    role: 'constructor',
    emoji: '🛠',
    title: 'The Constructor Cat',
    description: 'You see the world as modules waiting to be built, your mind connects systems like lego blocks - you\'re here to create.',
    image: '/results/constructor.png'
  },
  'sniffer': {
    role: 'sniffer',
    emoji: '🧭',
    title: 'The Treasure Sniffer',
    description: 'You feel every drop, every leaderboard wave, always first to farm, always sniffing the next meta.',
    image: '/results/sniffer.png'
  },
  'brawler': {
    role: 'brawler',
    emoji: '🧠',
    title: 'The Brainstorm Brawler',
    description: 'You don\'t just explore - you challenge the system, bugs, loopholes, restaking paths - nothing escapes your brain.',
    image: '/results/brawler.png'
  },
  'lurker': {
    role: 'lurker',
    emoji: '😼',
    title: 'The Lurker Cat',
    description: 'You\'re everywhere and nowhere, no tweets, no noise - just silent domination.',
    image: '/results/lurker.png'
  },
  'viber': {
    role: 'viber',
    emoji: '🧃',
    title: 'The Vibe Shaper',
    description: 'You\'re the pulse of the community, memes, threads, chaos - but always on brand.',
    image: '/results/viber.png'
  },
  'lore': {
    role: 'lore',
    emoji: '📜',
    title: 'The Lore Seeker',
    description: 'You read what others scroll past, from genesis docs to hidden quests - you find meaning in the margins.',
    image: '/results/lore.png'
  }
};
