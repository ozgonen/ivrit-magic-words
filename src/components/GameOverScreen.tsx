import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface GameOverScreenProps {
  score: number;
  level: number;
  onRestart: () => void;
  onBackToConfig: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ 
  score, 
  level, 
  onRestart, 
  onBackToConfig 
}) => {
  const getEncouragementMessage = (level: number) => {
    if (level >= 4) {
      return {
        emoji: '🏆',
        title: 'מדהים!',
        message: 'אתם מקריאים מעולים! סיימתם את כל הרמות!',
      };
    } else if (level >= 3) {
      return {
        emoji: '⭐',
        title: 'יפה מאוד!',
        message: 'הגעתם רחוק מאוד! אתם לומדים מצוין!',
      };
    } else {
      return {
        emoji: '💪',
        title: 'כל הכבוד!',
        message: 'התחלה נהדרת! תמשיכו להתאמן!',
      };
    }
  };

  const encouragement = getEncouragementMessage(level);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 game-card bg-card/90 backdrop-blur-sm text-center">
        <div className="animate-bounce-in">
          <div className="text-8xl mb-6 animate-float">
            {encouragement.emoji}
          </div>
          
          <h1 className="text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            {encouragement.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 hebrew-text">
            {encouragement.message}
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-8">
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="text-3xl font-bold text-fun-yellow">⭐ {score}</div>
              <div className="text-sm text-muted-foreground">סך כל הנקודות</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="text-3xl font-bold text-primary">{level}</div>
              <div className="text-sm text-muted-foreground">רמות שעברתם</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-4">
            <Button
              onClick={onRestart}
              size="lg"
              className="w-full btn-bounce gradient-primary text-white px-8 py-4 text-xl"
            >
              🎮 שחקו שוב
            </Button>
            
            <Button
              onClick={onBackToConfig}
              variant="outline"
              size="lg"
              className="w-full btn-bounce text-lg"
            >
              ⚙️ שנו הגדרות
            </Button>
          </div>

          {/* Fun facts */}
          <div className="mt-8 p-4 bg-fun-blue/10 rounded-xl border border-fun-blue/20">
            <h3 className="font-semibold text-fun-blue mb-2">💡 ידעתם?</h3>
            <p className="text-sm text-muted-foreground hebrew-text">
              {level >= 4 
                ? 'קריאה בעברית עוזרת לפתח את המוח ומשפרת את הזיכרון!'
                : level >= 3
                ? 'כל מילה שאתם לומדים מוסיפה כוח לקריאה שלכם!'
                : 'התרגול היומי הוא המפתח להצלחה בקריאה!'
              }
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GameOverScreen;