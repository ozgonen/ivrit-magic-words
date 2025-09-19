import React from 'react';
import { useGameState } from '@/hooks/useGameState';
import ConfigScreen from './ConfigScreen';
import GameScreen from './GameScreen';
import GameOverScreen from './GameOverScreen';

const HebrewReadingGame: React.FC = () => {
  const {
    gameState,
    updateConfig,
    startGame,
    answerQuestion,
    nextLevel,
    resetGame,
    backToConfig,
    getCurrentWord,
    getProgress,
  } = useGameState();

  const currentWord = getCurrentWord();

  switch (gameState.gameMode) {
    case 'config':
      return (
        <ConfigScreen
          config={gameState.config}
          onConfigChange={updateConfig}
          onStartGame={startGame}
        />
      );

    case 'playing':
      if (!currentWord) {
        // No words available for current configuration
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="text-center">
              <div className="text-6xl mb-4">😅</div>
              <h2 className="text-2xl font-bold mb-4">אופס!</h2>
              <p className="text-lg text-muted-foreground mb-6 hebrew-text">
                לא מצאנו מילים עם הניקוד שבחרתם.
                <br />
                בואו נבחר סימני ניקוד אחרים!
              </p>
              <button
                onClick={backToConfig}
                className="btn-bounce bg-primary text-primary-foreground px-6 py-3 rounded-lg"
              >
                חזרה להגדרות
              </button>
            </div>
          </div>
        );
      }

      return (
        <GameScreen
          currentWord={currentWord}
          level={gameState.currentLevel}
          progress={getProgress()}
          score={gameState.score}
          onAnswer={answerQuestion}
          onNextLevel={nextLevel}
          audioHint={gameState.config.audioHint}
        />
      );

    case 'levelComplete':
      return (
        <GameScreen
          currentWord={currentWord!}
          level={gameState.currentLevel}
          progress={getProgress()}
          score={gameState.score}
          onAnswer={answerQuestion}
          onNextLevel={nextLevel}
          audioHint={gameState.config.audioHint}
        />
      );

    case 'gameOver':
      return (
        <GameOverScreen
          score={gameState.score}
          level={gameState.currentLevel}
          onRestart={resetGame}
          onBackToConfig={backToConfig}
        />
      );

    default:
      return null;
  }
};

export default HebrewReadingGame;