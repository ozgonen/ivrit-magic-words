import { GameWord, Nikud } from '../types/game';

// Hebrew words database with nikud and matching emojis - CORRECTED
export const hebrewWordsDatabase: GameWord[] = [
  // 2 letters - REAL Hebrew words only!
  { text: 'אָב', nikud: ['kamatz'], emoji: '👨', difficulty: 2 },
  { text: 'אֵם', nikud: ['tzere'], emoji: '👩', difficulty: 2 },
  { text: 'בַּת', nikud: ['patach'], emoji: '👧', difficulty: 2 },
  { text: 'בֵּן', nikud: ['tzere'], emoji: '👦', difficulty: 2 },
  { text: 'דַּג', nikud: ['patach'], emoji: '🐟', difficulty: 2 },
  { text: 'יַד', nikud: ['patach'], emoji: '✋', difficulty: 2 },
  { text: 'פֶּה', nikud: ['segol'], emoji: '👄', difficulty: 2 },
  { text: 'רֹאשׁ', nikud: ['holam'], emoji: '👤', difficulty: 2 },
  { text: 'בּוֹר', nikud: ['holam'], emoji: '🕳️', difficulty: 2 },
  { text: 'גַּג', nikud: ['patach'], emoji: '🏠', difficulty: 2 },

  // 3 letters
  { text: 'בַּיִת', nikud: ['patach', 'hirik'], emoji: '🏠', difficulty: 3 },
  { text: 'סֵפֶר', nikud: ['tzere', 'segol'], emoji: '📖', difficulty: 3 },
  { text: 'אֹכֶל', nikud: ['holam', 'segol'], emoji: '🍎', difficulty: 3 },
  { text: 'מַיִם', nikud: ['patach', 'hirik'], emoji: '💧', difficulty: 3 },
  { text: 'לֵב', nikud: ['tzere'], emoji: '❤️', difficulty: 3 },
  { text: 'עַיִן', nikud: ['patach', 'hirik'], emoji: '👁️', difficulty: 3 },
  { text: 'אֹזֶן', nikud: ['holam', 'segol'], emoji: '👂', difficulty: 3 },
  { text: 'פַּרַח', nikud: ['patach', 'patach'], emoji: '🌸', difficulty: 3 },
  { text: 'עָנָן', nikud: ['kamatz', 'kamatz'], emoji: '☁️', difficulty: 3 },
  { text: 'כּוֹכָב', nikud: ['holam', 'kamatz'], emoji: '⭐', difficulty: 3 },

  // 4 letters
  { text: 'כֶּלֶב', nikud: ['segol', 'segol'], emoji: '🐶', difficulty: 4 },
  { text: 'חָתוּל', nikud: ['kamatz', 'shurek'], emoji: '🐱', difficulty: 4 },
  { text: 'שֶׁמֶשׁ', nikud: ['segol', 'segol'], emoji: '☀️', difficulty: 4 },
  { text: 'שֻׁלְחָן', nikud: ['shurek', 'kamatz'], emoji: '🪑', difficulty: 4 },
  { text: 'אַרְיֵה', nikud: ['patach', 'tzere'], emoji: '🦁', difficulty: 4 },
  { text: 'צִפּוֹר', nikud: ['hirik', 'holam'], emoji: '🐦', difficulty: 4 },
  { text: 'כַּדּוּר', nikud: ['patach', 'shurek'], emoji: '⚽', difficulty: 4 },
  { text: 'אוֹטוֹ', nikud: ['holam', 'holam'], emoji: '🚗', difficulty: 4 },
  { text: 'מָטוֹס', nikud: ['kamatz', 'holam'], emoji: '✈️', difficulty: 4 },
  { text: 'רַכֶּבֶת', nikud: ['patach', 'segol', 'segol'], emoji: '🚂', difficulty: 4 },
];

// Generate wrong emoji options for each word
export const emojiOptions = [
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵',
  '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋',
  '🐌', '🐞', '🐜', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞',
  '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘',
  '🦏', '🦛', '🦒', '🐪', '🐫', '🦘', '🦬', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙',
  '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐈‍⬛', '🪶', '🐓', '🦃', '🦤', '🦚', '🦜', '🦢',
  '🦩', '🕊️', '🐇', '🦝', '🦨', '🦡', '🦫', '🦦', '🦥', '🐁', '🐀', '🐿️', '🦔'
];

// Food emojis for food-related words
export const foodEmojis = [
  '🍎', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝',
  '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠',
  '🥐', '🥖', '🫓', '🥨', '🥯', '🍞', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗',
  '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🫔', '🌮', '🌯', '🫔', '🥙', '🧆', '🥘', '🍝', '🍜',
  '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡'
];

export function getRandomEmojis(correctEmoji: string, count: number = 2): string[] {
  const allEmojis = [...emojiOptions, ...foodEmojis];
  const availableEmojis = allEmojis.filter(emoji => emoji !== correctEmoji);
  const shuffled = availableEmojis.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getWordsForLevel(level: number, selectedNikud: Nikud[]): GameWord[] {
  // Filter words by difficulty (word length based on level)
  const targetLength = Math.min(2 + level - 1, 4);
  
  return hebrewWordsDatabase.filter(word => {
    // Check if word matches target difficulty
    const matchesDifficulty = word.difficulty === targetLength;
    
    // Check if word uses only selected nikud
    const usesSelectedNikud = word.nikud.every(n => selectedNikud.includes(n));
    
    return matchesDifficulty && usesSelectedNikud;
  });
}