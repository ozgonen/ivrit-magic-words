import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { GameWord, WordOption } from '@/types/game';
import { getRandomEmojis } from '@/data/hebrewWords';

interface GameScreenProps {
  currentWord: GameWord;
  level: number;
  progress: number;
  score: number;
  onAnswer: (correct: boolean) => void;
  onNextLevel: () => void;
  onBackToConfig: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({
  currentWord,
  level,
  progress,
  score,
  onAnswer,
  onNextLevel,
  onBackToConfig,
}) => {
  const [options, setOptions] = useState<WordOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Generate options for current word
    const wrongEmojis = getRandomEmojis(currentWord.emoji, 2);
    const allOptions: WordOption[] = [
      { emoji: currentWord.emoji, isCorrect: true },
      ...wrongEmojis.map(emoji => ({ emoji, isCorrect: false }))
    ];
    
    // Shuffle options
    const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
    setOptions(shuffledOptions);
    setSelectedOption(null);
    setShowResult(false);
  }, [currentWord]);

  const handleOptionClick = (option: WordOption) => {
    if (showResult) return;

    setSelectedOption(option.emoji);
    setIsCorrect(option.isCorrect);
    setShowResult(true);

    // Play audio after choice is made
    playAudio();

    setTimeout(() => {
      onAnswer(option.isCorrect);
    }, 1500);
  };

  const playAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord.text);
      utterance.lang = 'he-IL';
      utterance.rate = 0.7;
      speechSynthesis.speak(utterance);
    }
  };

  const progressPercentage = (progress / 10) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header with progress */}
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="text-right">
            <div className="text-sm text-muted-foreground">רמה</div>
            <div className="text-2xl font-bold text-primary">{level}</div>
          </div>
          <div className="flex-1 mx-8">
            <div className="text-center text-sm text-muted-foreground mb-2">
              {progress}/10 תשובות נכונות
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
          <div className="text-left">
            <div className="text-sm text-muted-foreground">ניקוד</div>
            <div className="text-2xl font-bold text-fun-yellow">⭐ {score}</div>
          </div>
        </div>
      </div>

      {/* Main game area */}
      <Card className="w-full max-w-2xl p-8 game-card bg-card/90 backdrop-blur-sm">
        {/* Word display */}
        <div className="text-center mb-12">
          <div className="mb-14">
            <div className="text-6xl font-bold hebrew-text mb-4 animate-bounce-in">
              {currentWord.text}
            </div>
          </div>
          
          {/* Options */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {options.map((option, index) => (
              <Button
                key={`${option.emoji}-${index}`}
                onClick={() => handleOptionClick(option)}
                disabled={showResult}
                variant="outline"
                size="lg"
                className={`
                  h-20 w-20 text-4xl emoji-btn relative overflow-hidden
                  ${selectedOption === option.emoji 
                    ? isCorrect && option.isCorrect
                      ? 'bg-success/20 border-success'
                      : !isCorrect && selectedOption === option.emoji
                      ? 'bg-error/20 border-error'
                      : ''
                    : ''
                  }
                  ${showResult && option.isCorrect ? 'animate-wiggle bg-success/20 border-success' : ''}
                `}
              >
                <span className={showResult && option.isCorrect ? 'animate-star-pop' : ''}>
                  {option.emoji}
                </span>
                {showResult && option.isCorrect && (
                  <div className="absolute -top-2 -right-2 text-success text-xl">
                    ✅
                  </div>
                )}
                {showResult && selectedOption === option.emoji && !option.isCorrect && (
                  <div className="absolute -top-2 -right-2 text-error text-xl">
                    ❌
                  </div>
                )}
              </Button>
            ))}
          </div>

          {/* Result feedback */}
          {showResult && (
            <div className="mt-8 animate-bounce-in">
              {isCorrect ? (
                <div className="text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <div className="text-2xl font-bold text-success">מעולה!</div>
                  <div className="text-lg text-muted-foreground">תשובה נכונה!</div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-2">💪</div>
                  <div className="text-2xl font-bold text-warning">נסו שוב!</div>
                  <div className="text-lg text-muted-foreground">לא נורא, נמשיך ללמוד!</div>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>

      {/* Configuration Button - Bottom Left */}
      <Button
        onClick={onBackToConfig}
        variant="outline"
        size="sm"
        className="fixed bottom-4 left-4 z-10 btn-bounce bg-card/90 backdrop-blur-sm border-muted hover:bg-muted/50"
      >
        ⚙️ הגדרות
      </Button>

      {/* Level complete message */}
      {progress >= 10 && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="p-8 max-w-md mx-4 text-center animate-bounce-in">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-bold mb-2 gradient-success bg-clip-text ">
              סיימתם רמה {level}!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              מעולה! מוכנים לרמה הבאה?
            </p>
            <Button
              onClick={onNextLevel}
              size="lg"
              className="btn-bounce gradient-primary text-white px-8 py-4"
            >
              🚀 לרמה הבאה!
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
};

export default GameScreen;