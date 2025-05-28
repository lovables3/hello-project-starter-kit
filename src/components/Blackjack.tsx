import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';
import { Spade, Play, RotateCcw, Home, HelpCircle, Plus, Hand, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type Card = {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: string;
  numValue: number;
};

type GameMode = 'menu' | 'vs-bot' | 'create-pvp' | 'join-pvp';
type GameState = 'playing' | 'player-turn' | 'dealer-turn' | 'game-over';

const Blackjack: React.FC = () => {
  const [gameMode, setGameMode] = useState<GameMode>('menu');
  const [gameState, setGameState] = useState<GameState>('playing');
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [gameResult, setGameResult] = useState<string | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  const createDeck = (): Card[] => {
    const suits: Card['suit'][] = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = [
      { value: '2', numValue: 2 }, { value: '3', numValue: 3 }, { value: '4', numValue: 4 },
      { value: '5', numValue: 5 }, { value: '6', numValue: 6 }, { value: '7', numValue: 7 },
      { value: '8', numValue: 8 }, { value: '9', numValue: 9 }, { value: '10', numValue: 10 },
      { value: 'J', numValue: 10 }, { value: 'Q', numValue: 10 }, { value: 'K', numValue: 10 },
      { value: 'A', numValue: 11 }
    ];
    const deck: Card[] = [];

    suits.forEach(suit => {
      values.forEach(({ value, numValue }) => {
        deck.push({ suit, value, numValue });
      });
    });

    return shuffleDeck(deck);
  };

  const shuffleDeck = (deck: Card[]): Card[] => {
    const newDeck = [...deck];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    return newDeck;
  };

  const calculateScore = (hand: Card[]): number => {
    let score = 0;
    let aces = 0;

    hand.forEach(card => {
      if (card.value === 'A') {
        aces++;
        score += 11;
      } else {
        score += card.numValue;
      }
    });

    // Handle aces (convert from 11 to 1 if needed)
    while (score > 21 && aces > 0) {
      score -= 10;
      aces--;
    }

    return score;
  };

  const dealCard = (currentDeck: Card[]): { card: Card; newDeck: Card[] } => {
    const card = currentDeck[0];
    const newDeck = currentDeck.slice(1);
    return { card, newDeck };
  };

  const startVsBotGame = () => {
    const newDeck = createDeck();
    let currentDeck = newDeck;

    // Deal initial cards
    const { card: playerCard1, newDeck: deck1 } = dealCard(currentDeck);
    const { card: dealerCard1, newDeck: deck2 } = dealCard(deck1);
    const { card: playerCard2, newDeck: deck3 } = dealCard(deck2);
    const { card: dealerCard2, newDeck: finalDeck } = dealCard(deck3);

    const newPlayerHand = [playerCard1, playerCard2];
    const newDealerHand = [dealerCard1, dealerCard2];

    setPlayerHand(newPlayerHand);
    setDealerHand(newDealerHand);
    setDeck(finalDeck);
    setPlayerScore(calculateScore(newPlayerHand));
    setDealerScore(calculateScore(newDealerHand));
    setGameState('player-turn');
    setGameResult(null);
    setGameMode('vs-bot');
  };

  const hit = () => {
    if (gameState !== 'player-turn') return;

    const { card, newDeck } = dealCard(deck);
    const newPlayerHand = [...playerHand, card];
    const newScore = calculateScore(newPlayerHand);

    setPlayerHand(newPlayerHand);
    setDeck(newDeck);
    setPlayerScore(newScore);

    if (newScore > 21) {
      setGameResult('Player Bust! Dealer Wins');
      setGameState('game-over');
    }
  };

  const stand = () => {
    if (gameState !== 'player-turn') return;
    setGameState('dealer-turn');
    dealerPlay();
  };

  const dealerPlay = () => {
    setTimeout(() => {
      let currentDealerHand = [...dealerHand];
      let currentDeck = [...deck];
      let currentDealerScore = dealerScore;

      // Dealer hits until 17 or higher
      while (currentDealerScore < 17) {
        const { card, newDeck } = dealCard(currentDeck);
        currentDealerHand.push(card);
        currentDeck = newDeck;
        currentDealerScore = calculateScore(currentDealerHand);
      }

      setDealerHand(currentDealerHand);
      setDeck(currentDeck);
      setDealerScore(currentDealerScore);

      // Determine winner
      if (currentDealerScore > 21) {
        setGameResult('Dealer Bust! You Win!');
      } else if (currentDealerScore > playerScore) {
        setGameResult('Dealer Wins!');
      } else if (playerScore > currentDealerScore) {
        setGameResult('You Win!');
      } else {
        setGameResult('Push! It\'s a Tie!');
      }

      setGameState('game-over');
    }, 1000);
  };

  const getCardImagePath = (card: Card): string => {
    return `/cards/${card.value}_${card.suit}.png`;
  };

  const CardComponent = ({ card, isHidden = false }: { card?: Card; isHidden?: boolean }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div className="w-16 h-24 md:w-20 md:h-28 rounded-lg border-2 border-gray-300 overflow-hidden bg-white mr-2 mb-2">
        {isHidden || !card ? (
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-mantle-mint to-mantle-pink flex items-center justify-center">
            <Spade className="h-6 w-6 text-white" />
          </div>
        ) : imageError ? (
          // Fallback to text display if image fails to load
          <div className="flex flex-col items-center justify-center h-full">
            <div className={`text-sm md:text-lg font-bold ${getSuitColor(card.suit)}`}>
              {card.value}
            </div>
            <div className="text-lg md:text-xl">
              {getSuitSymbol(card.suit)}
            </div>
          </div>
        ) : (
          <img 
            src={getCardImagePath(card)}
            alt={`${card.value} of ${card.suit}`}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>
    );
  };

  const getSuitSymbol = (suit: Card['suit']) => {
    switch (suit) {
      case 'hearts': return '♥️';
      case 'diamonds': return '♦️';
      case 'clubs': return '♣️';
      case 'spades': return '♠️';
    }
  };

  const getSuitColor = (suit: Card['suit']) => {
    return suit === 'hearts' || suit === 'diamonds' ? 'text-red-500' : 'text-gray-800';
  };

  const HelpModal = () => (
    showHelp && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <GlassCard className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent">
              How to Play Blackjack
            </h2>
            <Button onClick={() => setShowHelp(false)} variant="ghost">×</Button>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-lg font-bold text-mantle-mint mb-2">🎯 Goal</h3>
              <p>Get as close to 21 as possible without going over (busting).</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-mantle-mint mb-2">🃏 Card Values</h3>
              <div className="space-y-1">
                <p><strong>Number cards (2-10):</strong> Face value</p>
                <p><strong>Face cards (J, Q, K):</strong> 10 points each</p>
                <p><strong>Ace (A):</strong> 1 or 11 (whichever is better)</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-mantle-mint mb-2">🎮 How to Play</h3>
              <div className="space-y-2">
                <p><strong>1.</strong> You and the dealer each get 2 cards</p>
                <p><strong>2.</strong> Choose to <strong>Hit</strong> (take another card) or <strong>Stand</strong> (keep your total)</p>
                <p><strong>3.</strong> If you go over 21, you bust and lose</p>
                <p><strong>4.</strong> Dealer plays after you (hits until 17+)</p>
                <p><strong>5.</strong> Closest to 21 without busting wins!</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    )
  );

  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-mantle-dark text-white flex items-center justify-center px-4">
        {/* Back button */}
        <Link 
          to="/" 
          className="fixed top-6 left-6 z-10"
        >
          <Button 
            variant="outline"
            className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portal
          </Button>
        </Link>

        <GlassCard className="max-w-lg mx-auto text-center">
          <div className="mb-6">
            <Spade className="h-16 w-16 mx-auto mb-4 text-mantle-mint" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent mb-2">
              Blackjack
            </h1>
            <p className="text-lg text-mantle-mint font-medium">powered by Mantle</p>
          </div>
          
          <p className="text-gray-300 mb-8 text-lg italic">
            "Get as close to 21 as you dare..."
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={startVsBotGame}
              className="button-gradient button-hover text-black font-semibold px-8 py-3 text-lg w-full"
            >
              <Play className="mr-2 h-5 w-5" />
              Play vs AI
            </Button>
            
            <Button 
              onClick={() => setGameMode('create-pvp')}
              variant="outline"
              className="border-mantle-mint text-mantle-mint hover:bg-mantle-mint hover:text-black px-8 py-3 w-full"
              disabled
            >
              <Plus className="mr-2 h-4 w-4" />
              Create PvP Game (Coming Soon)
            </Button>
            
            <Button 
              onClick={() => setShowHelp(true)}
              variant="outline"
              className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white px-6 py-2"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              How to Play
            </Button>
          </div>
        </GlassCard>
        <HelpModal />
      </div>
    );
  }

  if (gameMode === 'vs-bot') {
    return (
      <div className="min-h-screen bg-mantle-dark text-white py-8 px-4">
        {/* Back button */}
        <Link 
          to="/" 
          className="fixed top-6 left-6 z-10"
        >
          <Button 
            variant="outline"
            className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portal
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent">
              Blackjack vs AI
            </h1>
            <p className="text-gray-400">Get as close to 21 as possible</p>
          </div>

          {/* Game Board */}
          <GlassCard className="p-6">
            {/* Dealer Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-mantle-pink">Dealer</h3>
                <div className="text-lg">
                  Score: {gameState === 'player-turn' ? '?' : dealerScore}
                </div>
              </div>
              <div className="flex flex-wrap">
                {dealerHand.map((card, index) => (
                  <CardComponent 
                    key={index} 
                    card={card} 
                    isHidden={gameState === 'player-turn' && index === 1}
                  />
                ))}
              </div>
            </div>

            {/* Player Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-mantle-mint">You</h3>
                <div className="text-lg">Score: {playerScore}</div>
              </div>
              <div className="flex flex-wrap">
                {playerHand.map((card, index) => (
                  <CardComponent key={index} card={card} />
                ))}
              </div>
            </div>

            {/* Game Controls */}
            <div className="text-center">
              {gameState === 'player-turn' && (
                <div className="space-x-4">
                  <Button 
                    onClick={hit}
                    className="button-gradient button-hover text-black font-semibold px-6 py-3"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Hit
                  </Button>
                  <Button 
                    onClick={stand}
                    variant="outline"
                    className="border-mantle-mint text-mantle-mint hover:bg-mantle-mint hover:text-black px-6 py-3"
                  >
                    <Hand className="mr-2 h-4 w-4" />
                    Stand
                  </Button>
                </div>
              )}

              {gameState === 'dealer-turn' && (
                <div className="text-yellow-500 text-lg">Dealer is playing...</div>
              )}

              {gameState === 'game-over' && gameResult && (
                <div className="space-y-4">
                  <div className="text-2xl font-bold">
                    {gameResult.includes('You Win') ? (
                      <span className="text-green-500">{gameResult}</span>
                    ) : gameResult.includes('Tie') ? (
                      <span className="text-yellow-500">{gameResult}</span>
                    ) : (
                      <span className="text-red-500">{gameResult}</span>
                    )}
                  </div>
                  <div className="space-x-4">
                    <Button 
                      onClick={startVsBotGame}
                      className="button-gradient button-hover text-black font-semibold px-6 py-2"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Play Again
                    </Button>
                    <Button 
                      onClick={() => setGameMode('menu')}
                      variant="outline"
                      className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white px-6 py-2"
                    >
                      <Home className="mr-2 h-4 w-4" />
                      Back to Menu
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </GlassCard>

          {/* Back Button at bottom - remove the existing one and keep only help button */}
          <div className="text-center mt-8 flex gap-4 justify-center">
            <Button 
              onClick={() => setShowHelp(true)}
              variant="outline"
              className="border-mantle-mint text-mantle-mint hover:bg-mantle-mint hover:text-black"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              Rules
            </Button>
          </div>
        </div>
        <HelpModal />
      </div>
    );
  }

  return null;
};

export default Blackjack;
