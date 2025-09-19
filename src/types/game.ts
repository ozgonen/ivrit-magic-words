export type Nikud = 'patach' | 'kamatz' | 'hirik' | 'shurek' | 'segol' | 'tzere' | 'holam';

export interface GameWord {
  text: string;
  nikud: Nikud[];
  emoji: string;
  difficulty: number; // 2, 3, 4 letters etc.
}

export interface GameConfig {
  selectedNikud: Nikud[];
  wordLength: number;
}

export interface GameState {
  currentLevel: number;
  currentWordIndex: number;
  correctAnswers: number;
  totalAnswers: number;
  score: number;
  config: GameConfig;
  gameMode: 'config' | 'playing' | 'levelComplete' | 'gameOver';
}

export interface WordOption {
  emoji: string;
  isCorrect: boolean;
}