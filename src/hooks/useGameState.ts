import { useState, useEffect } from 'react';
import { GameState, GameConfig, GameWord, Nikud } from '@/types/game';
import { getWordsForLevel } from '@/data/hebrewWords';

const initialConfig: GameConfig = {
  selectedNikud: ['patach', 'kamatz'],
  wordLength: 2,
};

const initialState: GameState = {
  currentLevel: 1,
  currentWordIndex: 0,
  correctAnswers: 0,
  totalAnswers: 0,
  score: 0,
  config: initialConfig,
  gameMode: 'config',
};

const STORAGE_KEY = 'hebrew-reading-game-state';

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(initialState);
  const [currentWords, setCurrentWords] = useState<GameWord[]>([]);
  const [usedWordIndices, setUsedWordIndices] = useState<Set<number>>(new Set());

  // Load saved state on mount
  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setGameState({ ...initialState, ...parsed });
      } catch (error) {
        console.error('Error loading saved game state:', error);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  }, [gameState]);

  // Update available words when level or config changes
  useEffect(() => {
    if (gameState.gameMode === 'playing') {
      const words = getWordsForLevel(gameState.currentLevel, gameState.config.selectedNikud);
      setCurrentWords(words);
    }
  }, [gameState.currentLevel, gameState.config.selectedNikud, gameState.gameMode]);

  const updateConfig = (config: GameConfig) => {
    setGameState(prev => ({
      ...prev,
      config,
    }));
  };

  const startGame = () => {
    const words = getWordsForLevel(1, gameState.config.selectedNikud);
    setCurrentWords(words);
    setUsedWordIndices(new Set());
    const randomStartIndex = words.length > 0 ? Math.floor(Math.random() * words.length) : 0;
    setUsedWordIndices(prev => new Set(prev).add(randomStartIndex));
    setGameState(prev => ({
      ...prev,
      gameMode: 'playing',
      currentLevel: 1,
      currentWordIndex: randomStartIndex,
      correctAnswers: 0,
      totalAnswers: 0,
    }));
  };

  const answerQuestion = (correct: boolean) => {
    setGameState(prev => {
      const newCorrectAnswers = correct ? prev.correctAnswers + 1 : prev.correctAnswers;
      const newScore = correct ? prev.score + 10 : prev.score;
      const newTotalAnswers = prev.totalAnswers + 1;

      // Check if level is complete (10 correct answers)
      if (newCorrectAnswers >= 10) {
        return {
          ...prev,
          correctAnswers: newCorrectAnswers,
          totalAnswers: newTotalAnswers,
          score: newScore,
          gameMode: 'levelComplete' as const,
        };
      }

      // Choose a RANDOM word that we haven't used yet!
      let nextWordIndex: number;
      let attempts = 0;
      const maxAttempts = currentWords.length * 2;
      
      do {
        nextWordIndex = Math.floor(Math.random() * currentWords.length);
        attempts++;
      } while (usedWordIndices.has(nextWordIndex) && attempts < maxAttempts);

      console.log('Selecting word:', currentWords[nextWordIndex]?.text, 'Used indices:', usedWordIndices.size, '/', currentWords.length);

      // If we've used all words, reset the used words set
      if (usedWordIndices.size >= currentWords.length - 1) {
        console.log('Resetting used words - used all available words');
        setUsedWordIndices(new Set([nextWordIndex]));
      } else {
        setUsedWordIndices(prev => new Set(prev).add(nextWordIndex));
      }
      
      return {
        ...prev,
        correctAnswers: newCorrectAnswers,
        totalAnswers: newTotalAnswers,
        score: newScore,
        currentWordIndex: nextWordIndex,
      };
    });
  };

  const nextLevel = () => {
    const nextLevelNum = gameState.currentLevel + 1;
    const words = getWordsForLevel(nextLevelNum, gameState.config.selectedNikud);
    
    // Check if there are words for the next level
    if (words.length === 0) {
      setGameState(prev => ({
        ...prev,
        gameMode: 'gameOver',
      }));
      return;
    }

    setCurrentWords(words);
    setUsedWordIndices(new Set());
    const randomStartIndex = Math.floor(Math.random() * words.length);
    setUsedWordIndices(prev => new Set(prev).add(randomStartIndex));
    setGameState(prev => ({
      ...prev,
      currentLevel: nextLevelNum,
      currentWordIndex: randomStartIndex,
      correctAnswers: 0,
      gameMode: 'playing',
    }));
  };

  const resetGame = () => {
    setGameState({
      ...initialState,
      config: gameState.config, // Keep the configuration
    });
    setCurrentWords([]);
    setUsedWordIndices(new Set());
  };

  const backToConfig = () => {
    setGameState(prev => ({
      ...prev,
      gameMode: 'config',
    }));
  };

  const getCurrentWord = (): GameWord | null => {
    if (currentWords.length === 0) return null;
    return currentWords[gameState.currentWordIndex] || null;
  };

  const getProgress = () => {
    return gameState.correctAnswers;
  };

  return {
    gameState,
    currentWords,
    updateConfig,
    startGame,
    answerQuestion,
    nextLevel,
    resetGame,
    backToConfig,
    getCurrentWord,
    getProgress,
  };
};