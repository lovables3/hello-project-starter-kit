
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
    subtitle: "Genesis",
    content: `belief became consensus
consensus became chain
and the chain… awakened

for months, mantle was only a promise — a treasury, a name, a vision of modularity.
but then it happened.
block #1 was sealed, and the world changed.

⚙️ **when genesis turned real**
on july 17, 2023, the first transaction went live.
not a test, not a simulation — but real bytes, real gas, real value.
builders who once lurked in testnets deployed live.
devs claimed their space. the machine began humming.

🛠 **the early deploys**
mantle's modular stack — once just diagrams — started running.
node operators went live.
mantle SDK launched.
the first explorers came online.
soon, smart contracts followed.

there were bugs. there was chaos.
and there were people who stayed to fix them.

🧑‍🚀 **the first settlers**
not everyone was ready.
those who were became something else.
they didn't just build — they settled
they explored gasless UX, experimented with DA layers, tweaked mempools

they were constructors, brawlers, lurkers — names that only later became roles.

🌐 **from chain to campus**
mantle wasn't just a mainnet
it became a modular playground
a place where ideas were tested live
where explorers found quests
where yappers logged in at midnight and stayed until their wallets burned

✨ **this was the awakening**
and as the chain grew
its stories grew with it
from the first tx to the first meme

this was the moment mantle became alive

📍 next: Chapter 3 — The Modular Machine`,
    isUnlocked: true,
    position: { x: 35, y: 30 }
  },
  {
    id: 3,
    title: "Chapter 3 — The Modular Machine",
    subtitle: "Engineering the Core",
    content: `🧠 **intro**
they called it a machine
but it wasn't metal or gears
it was contracts, layers, and logic

🧩 **the architecture revealed**
mantle wasn't built like others
no monoliths, no hardcoded silos
everything was a module — replaceable, upgradeable, interoperable
DA layers, execution clients, rollup configs
builders didn't just deploy
they configured, tuned, and assembled

🛠 **the gears in motion**
devs explored every angle
sequencer upgrades, custom DA integrations, alt proving systems
mantle wasn't the L2
it was the OS of modularity
and the community?
they were the sysadmins

🧬 **the modular codebase**
from the SDK to the rollup tools
builders forked, merged, extended
the line between core dev and app dev blurred
on Mantle, everyone built infra

🔧 **this was the machine**
not a static system, but a living, breathing config
a machine that learned through usage
that scaled by design
this was modularity, made manifest

📍 next: Chapter 4 — The Culture Layer`,
    isUnlocked: true,
    position: { x: 50, y: 70 }
  },
  {
    id: 4,
    title: "Chapter 4 — The Culture Layer",
    subtitle: "Signals, Symbols & Chaos",
    content: `📡 **the signal broke through**
the devs built the system
but the users built the story
memes, leaderboards, xp grinds
threads that explained what docs never could

📀 **the cultural middleware**
this was more than vibes
Kaito made stats visible
Yappers turned competition into narrative
Zentry made participation a mechanic
Culture became infrastructure

🎨 **the creators emerged**
some made memes
some built dashboards
some just kept posting — every day
and they mattered
because in the modular stack
culture was the most viral layer

🧃 **the viber class**
every ecosystem has degens
but Mantle had vibers
not trolls, not influencers —
just people with taste, instinct, and timing
they turned chaos into coherence
noise into signal

📂 **this was the culture layer**
not an add-on
not a nice-to-have
a core primitive
on Mantle, code didn't ship without story

📍 next: Chapter 5 — Treasury Games & Beyond`,
    isUnlocked: true,
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
