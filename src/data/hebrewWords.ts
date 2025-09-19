import { GameWord, Nikud } from '../types/game';

// Hebrew words database with nikud and matching emojis - EXPANDED VERSION
export const hebrewWordsDatabase: GameWord[] = [
  // 2 letters - MANY more real Hebrew words!
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
  { text: 'כַּף', nikud: ['patach'], emoji: '🥄', difficulty: 2 },
  { text: 'סוּס', nikud: ['shurek'], emoji: '🐎', difficulty: 2 },
  { text: 'דּוֹב', nikud: ['holam'], emoji: '🐻', difficulty: 2 },
  { text: 'שֹׁר', nikud: ['holam'], emoji: '🐂', difficulty: 2 },
  { text: 'עֵז', nikud: ['tzere'], emoji: '🐐', difficulty: 2 },
  { text: 'גַּן', nikud: ['patach'], emoji: '🌳', difficulty: 2 },
  { text: 'דַּר', nikud: ['patach'], emoji: '🚪', difficulty: 2 },
  { text: 'חַם', nikud: ['patach'], emoji: '🔥', difficulty: 2 },
  { text: 'קַר', nikud: ['patach'], emoji: '❄️', difficulty: 2 },
  { text: 'טוֹב', nikud: ['holam'], emoji: '👍', difficulty: 2 },

  // 3 letters - MORE variety
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
  { text: 'יֶלֶד', nikud: ['segol', 'segol'], emoji: '👦', difficulty: 3 },
  { text: 'יַלְדָּה', nikud: ['patach', 'kamatz'], emoji: '👧', difficulty: 3 },
  { text: 'חֲבֵר', nikud: ['tzere'], emoji: '👫', difficulty: 3 },
  { text: 'מוֹרָה', nikud: ['holam', 'kamatz'], emoji: '👩‍🏫', difficulty: 3 },
  { text: 'דֶּלֶת', nikud: ['segol', 'segol'], emoji: '🚪', difficulty: 3 },
  { text: 'חַלּוֹן', nikud: ['patach', 'holam'], emoji: '🪟', difficulty: 3 },
  { text: 'כִּסֵּא', nikud: ['hirik', 'tzere'], emoji: '🪑', difficulty: 3 },
  { text: 'מִטָּה', nikud: ['hirik', 'kamatz'], emoji: '🛏️', difficulty: 3 },
  { text: 'כּוֹס', nikud: ['holam'], emoji: '🥤', difficulty: 3 },
  { text: 'צַלַּחַת', nikud: ['patach', 'patach', 'patach'], emoji: '🍽️', difficulty: 3 },
  { text: 'מַזְלֵג', nikud: ['patach', 'tzere'], emoji: '🍴', difficulty: 3 },
  { text: 'סַכִּין', nikud: ['patach', 'hirik'], emoji: '🔪', difficulty: 3 },
  { text: 'תּוּת', nikud: ['shurek'], emoji: '🍓', difficulty: 3 },
  { text: 'תַּפּוּחַ', nikud: ['patach', 'shurek', 'patach'], emoji: '🍎', difficulty: 3 },
  { text: 'בָּנָנָה', nikud: ['kamatz', 'kamatz', 'kamatz'], emoji: '🍌', difficulty: 3 },

  // 4 letters - EXPANDED list
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
  { text: 'פַּרְפַּר', nikud: ['patach', 'patach'], emoji: '🦋', difficulty: 4 },
  { text: 'דְּבוֹרָה', nikud: ['holam', 'kamatz'], emoji: '🐝', difficulty: 4 },
  { text: 'פִּילְפֵּל', nikud: ['hirik', 'tzere'], emoji: '🌶️', difficulty: 4 },
  { text: 'אַגָּס', nikud: ['patach', 'kamatz'], emoji: '🍐', difficulty: 4 },
  { text: 'תַּמָּר', nikud: ['patach', 'kamatz'], emoji: '🌴', difficulty: 4 },
  { text: 'גְּזֶר', nikud: ['segol'], emoji: '🥕', difficulty: 4 },
  { text: 'בָּצָל', nikud: ['kamatz', 'kamatz'], emoji: '🧅', difficulty: 4 },
  { text: 'עֲגָבַנִיָּה', nikud: ['kamatz', 'patach', 'hirik', 'kamatz'], emoji: '🍅', difficulty: 4 },
  { text: 'מִקְלֶחֶת', nikud: ['hirik', 'segol', 'segol'], emoji: '🚿', difficulty: 4 },
  { text: 'מִכוֹנִית', nikud: ['hirik', 'holam', 'hirik'], emoji: '🚘', difficulty: 4 },
  { text: 'חֲנוּת', nikud: ['shurek'], emoji: '🏪', difficulty: 4 },
  { text: 'בֵּית־סֵפֶר', nikud: ['tzere', 'tzere', 'segol'], emoji: '🏫', difficulty: 4 },
  { text: 'גַּן־יְלָדִים', nikud: ['patach', 'kamatz', 'hirik'], emoji: '🏫', difficulty: 4 },
  { text: 'חֲבֵרָה', nikud: ['tzere', 'kamatz'], emoji: '👭', difficulty: 4 },
  { text: 'מִשְׁפָּחָה', nikud: ['hirik', 'kamatz', 'kamatz'], emoji: '👨‍👩‍👧‍👦', difficulty: 4 },
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
  
  const filteredWords = hebrewWordsDatabase.filter(word => {
    // Check if word matches target difficulty
    const matchesDifficulty = word.difficulty === targetLength;
    
    // Check if word uses only selected nikud
    const usesSelectedNikud = word.nikud.every(n => selectedNikud.includes(n));
    
    return matchesDifficulty && usesSelectedNikud;
  });

  // Shuffle the words to prevent repetitive patterns!
  return shuffleArray([...filteredWords]);
}

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}