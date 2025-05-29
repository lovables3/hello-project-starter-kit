import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';
import { Spade, ArrowLeft, RotateCcw, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

type Card = {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: string;
  numValue: number;
};

type GameState = 'waiting' | 'playing' | 'playerWin' | 'dealerWin' | 'tie' | 'bust';

const Blackjack: React.FC = () => {
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [dealerCards, setDealerCards] = useState<Card[]>([]);
  const [gameState, setGameState] = useState<GameState>('waiting');
  const [deck, setDeck] = useState<Card[]>([]);

  const createDeck = (): Card[] => {
    const suits: Card['suit'][] = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const newDeck: Card[] = [];

    suits.forEach(suit => {
      values.forEach(value => {
        let numValue = parseInt(value);
        if (value === 'A') numValue = 11;
        if (['J', 'Q', 'K'].includes(value)) numValue = 10;
        
        newDeck.push({ suit, value, numValue });
      });
    });

    return newDeck.sort(() => Math.random() - 0.5);
  };

  const calculateScore = (cards: Card[]): number => {
    let score = 0;
    let aces = 0;

    cards.forEach(card => {
      if (card.value === 'A') {
        aces++;
        score += 11;
      } else {
        score += card.numValue;
      }
    });

    while (score > 21 && aces > 0) {
      score -= 10;
      aces--;
    }

    return score;
  };

  const dealCard = (currentDeck: Card[]) => {
    return currentDeck.pop();
  };

  const startGame = () => {
    const newDeck = createDeck();
    const playerStartCards: Card[] = [];
    const dealerStartCards: Card[] = [];

    // Deal 2 cards to each
    const card1 = dealCard(newDeck);
    const card2 = dealCard(newDeck);
    const card3 = dealCard(newDeck);
    const card4 = dealCard(newDeck);

    if (card1) playerStartCards.push(card1);
    if (card2) dealerStartCards.push(card2);
    if (card3) playerStartCards.push(card3);
    if (card4) dealerStartCards.push(card4);

    setPlayerCards(playerStartCards);
    setDealerCards(dealerStartCards);
    setDeck(newDeck);
    setGameState('playing');
  };

  const hit = () => {
    const newCard = dealCard([...deck]);
    if (newCard) {
      const newPlayerCards = [...playerCards, newCard];
      setPlayerCards(newPlayerCards);
      setDeck(deck.filter(card => card !== newCard));
      
      if (calculateScore(newPlayerCards) > 21) {
        setGameState('bust');
      }
    }
  };

  const stand = () => {
    let currentDealerCards = [...dealerCards];
    let currentDeck = [...deck];
    
    while (calculateScore(currentDealerCards) < 17) {
      const newCard = dealCard(currentDeck);
      if (newCard) {
        currentDealerCards.push(newCard);
        currentDeck = currentDeck.filter(card => card !== newCard);
      }
    }
    
    setDealerCards(currentDealerCards);
    setDeck(currentDeck);
    
    const playerScore = calculateScore(playerCards);
    const dealerScore = calculateScore(currentDealerCards);
    
    if (dealerScore > 21 || playerScore > dealerScore) {
      setGameState('playerWin');
    } else if (dealerScore > playerScore) {
      setGameState('dealerWin');
    } else {
      setGameState('tie');
    }
  };

  const resetGame = () => {
    setPlayerCards([]);
    setDealerCards([]);
    setGameState('waiting');
    setDeck([]);
  };

  const renderCard = (card: Card, hidden = false, index = 0) => {
    if (hidden) {
      return (
        <div className="w-20 h-28 bg-gradient-to-br from-blue-800 to-blue-900 border-2 border-blue-600 rounded-lg flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
          <div className="text-blue-300 text-2xl animate-pulse">?</div>
        </div>
      );
    }

    const isRed = card.suit === 'hearts' || card.suit === 'diamonds';
    
    return (
      <div 
        className="w-20 h-28 bg-white border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center text-black relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in"
        style={{ 
          animationDelay: `${index * 100}ms`,
          color: isRed ? '#ef4444' : '#000000'
        }}
      >
        <div className="text-lg font-bold">{card.value}</div>
        <div className="text-2xl animate-pulse-slow">
          {card.suit === 'hearts' && '♥️'}
          {card.suit === 'diamonds' && '♦️'}
          {card.suit === 'clubs' && '♣️'}
          {card.suit === 'spades' && '♠️'}
        </div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-white/10 pointer-events-none"></div>
      </div>
    );
  };

  const playerScore = calculateScore(playerCards);
  const dealerScore = calculateScore(dealerCards);

  return (
    <div className="min-h-screen bg-mantle-dark text-white flex items-center justify-center px-4">
      {/* Back button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-10"
      >
        <Button 
          variant="outline"
          className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portal
        </Button>
      </Link>

      <GlassCard className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <Spade className="h-12 w-12 mr-3 text-mantle-mint animate-pulse-glow" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent">
              Blackjack
            </h1>
          </div>
          <p className="text-gray-400">Get as close to 21 as possible without going bust!</p>
        </div>

        {gameState === 'waiting' && (
          <div className="text-center py-8 animate-fade-in">
            <Button 
              onClick={startGame}
              className="bg-gradient-to-r from-mantle-mint to-mantle-pink text-black font-bold px-8 py-3 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-mantle-mint/30"
            >
              Start Game
            </Button>
          </div>
        )}

        {gameState !== 'waiting' && (
          <div className="space-y-8 animate-fade-in">
            {/* Dealer's Hand */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-300">
                Dealer {gameState !== 'playing' && `(${dealerScore})`}
              </h3>
              <div className="flex justify-center gap-2 mb-4">
                {dealerCards.map((card, index) => (
                  <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                    {renderCard(card, gameState === 'playing' && index === 1, index)}
                  </div>
                ))}
              </div>
            </div>

            {/* Player's Hand */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-300">
                Your Hand ({playerScore})
              </h3>
              <div className="flex justify-center gap-2 mb-4">
                {playerCards.map((card, index) => (
                  <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                    {renderCard(card, false, index)}
                  </div>
                ))}
              </div>
            </div>

            {/* Game Controls */}
            <div className="flex justify-center gap-4 animate-fade-in">
              {gameState === 'playing' && (
                <>
                  <Button 
                    onClick={hit}
                    className="bg-mantle-mint text-black font-semibold px-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-mantle-mint/30"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Hit
                  </Button>
                  <Button 
                    onClick={stand}
                    className="bg-mantle-pink text-black font-semibold px-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-mantle-pink/30"
                  >
                    Stand
                  </Button>
                </>
              )}
              
              {gameState !== 'playing' && gameState !== 'waiting' && (
                <Button 
                  onClick={resetGame}
                  className="bg-gradient-to-r from-mantle-mint to-mantle-pink text-black font-bold px-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-mantle-mint/30"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  New Game
                </Button>
              )}
            </div>

            {/* Game Status */}
            {gameState !== 'playing' && gameState !== 'waiting' && (
              <div className="text-center p-4 border border-gray-600 rounded-lg bg-gray-800/30 animate-scale-in">
                <p className="text-xl font-bold">
                  {gameState === 'playerWin' && '🎉 You Win!'}
                  {gameState === 'dealerWin' && '😔 Dealer Wins'}
                  {gameState === 'tie' && '🤝 It\'s a Tie!'}
                  {gameState === 'bust' && '💥 Bust! You went over 21'}
                </p>
              </div>
            )}
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default Blackjack;
