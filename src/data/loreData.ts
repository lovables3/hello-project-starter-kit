
export interface LoreChapter {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  isUnlocked: boolean;
  position: { x: number; y: number };
}

export const loreChapters: LoreChapter[] = [
  {
    id: 1,
    title: "Chapter 1 — The BitDAO Convergence",
    subtitle: "The Foundation",
    content: `before mantle became a chain, it was an idea
and before that — it was a treasury

BitDAO wasn't a startup. It wasn't a protocol. It was power — in the form of $2.5 billion in onchain assets.

Launched by Bybit, BitDAO quickly became one of the most capitalized DAOs in crypto.
But it was fragmented — no users, no real product, just potential.

Then came a vote.
In May 2023, the BitDAO community passed a proposal to converge all efforts — capital, vision, and builders — into a single modular L2:

Mantle.

This wasn't just a rebrand.
It was a signal to the ecosystem: "We're not here to follow. We're here to build."

🧱 **The Builders Behind the Move**
👨‍💻 **Arjun Kalsy**
Ex-VP at Polygon. Scaled with Reddit and Disney.
Now leading Mantle's ecosystem from the ground up — product-first, user-focused.

🧠 **Jordi Alexander**
Founder of Selini Capital. Master of game theory.
At Mantle, he restructured incentives, coordinated treasury design, and laid the logic for long-term resilience.

Together, they didn't just launch a chain.
They architected an economic engine — modular by design, flexible by default, and liquid from day one.

🌱 **The Cultural Shift**
With the convergence came a shift in energy.
No longer just tokenomics and GitHub commits — but memes, quests, competition.
Mantle became fertile ground for builders and degenerates alike.

In its earliest days, the chain had no mainnet — just a vibe, a treasury, and momentum.

But that was enough.

And it was only the beginning.

⚙️ Next chapter: The Mainnet Awakening →`,
    isUnlocked: true,
    position: { x: 20, y: 50 }
  },
  {
    id: 2,
    title: "Chapter 2 — The Mainnet Awakening",
    subtitle: "Coming Soon",
    content: "This chapter is still being written...",
    isUnlocked: false,
    position: { x: 35, y: 30 }
  },
  {
    id: 3,
    title: "Chapter 3 — The Modular Machine",
    subtitle: "Coming Soon", 
    content: "This chapter is still being written...",
    isUnlocked: false,
    position: { x: 50, y: 70 }
  },
  {
    id: 4,
    title: "Chapter 4 — The Culture Layer",
    subtitle: "Coming Soon",
    content: "This chapter is still being written...",
    isUnlocked: false,
    position: { x: 65, y: 40 }
  },
  {
    id: 5,
    title: "Chapter 5 — Treasury Games & Beyond",
    subtitle: "Coming Soon",
    content: "This chapter is still being written...",
    isUnlocked: false,
    position: { x: 80, y: 60 }
  }
];
