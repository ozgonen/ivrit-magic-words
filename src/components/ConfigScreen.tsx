import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { GameConfig, Nikud } from '@/types/game';

interface ConfigScreenProps {
  config: GameConfig;
  onConfigChange: (config: GameConfig) => void;
  onStartGame: () => void;
}

const nikudOptions: { value: Nikud; label: string; example: string }[] = [
  { value: 'patach', label: 'פַּתַח', example: 'בַּת' },
  { value: 'kamatz', label: 'קָמָץ', example: 'אָב' },
  { value: 'hirik', label: 'חִירִיק', example: 'בִּית' },
  { value: 'shurek', label: 'שׁוּרֶק', example: 'כּוּס' },
  { value: 'segol', label: 'סֶגוֹל', example: 'כֶּלֶב' },
  { value: 'tzere', label: 'צֵירֵה', example: 'בֵּן' },
  { value: 'holam', label: 'חוֹלָם', example: 'בּוֹא' },
];

const ConfigScreen: React.FC<ConfigScreenProps> = ({ config, onConfigChange, onStartGame }) => {
  const handleNikudChange = (nikud: Nikud, checked: boolean) => {
    const newNikud = checked 
      ? [...config.selectedNikud, nikud]
      : config.selectedNikud.filter(n => n !== nikud);
    
    onConfigChange({ ...config, selectedNikud: newNikud });
  };

  const handleWordLengthChange = (length: number) => {
    onConfigChange({ ...config, wordLength: length });
  };


  const canStartGame = config.selectedNikud.length > 0;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 game-card bg-card/80 backdrop-blur-sm">
        <div className="text-center mb-8">
          <div className="mb-6">
            <img 
              src="/hebrew-game-preview.jpg" 
              alt="משחק קריאה עברית לילדים" 
              className="w-32 h-32 mx-auto rounded-full object-cover shadow-fun animate-float mb-4"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2 gradient-primary bg-clip-text ">
            🎯 משחק הקריאה שלי
          </h1>
          <p className="text-lg text-muted-foreground">
            בואו נתחיל ללמוד לקרוא עברית!
          </p>
        </div>

        <div className="space-y-8">
          {/* Nikud Selection */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold hebrew-text text-right">
              איזה סימני ניקוד אתם כבר מכירים? 📝
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nikudOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-3 space-x-reverse p-4 rounded-xl bg-muted/50 hover:bg-muted/70 transition-colors"
                >
                  <Checkbox
                    id={option.value}
                    checked={config.selectedNikud.includes(option.value)}
                    onCheckedChange={(checked) => handleNikudChange(option.value, !!checked)}
                    className="scale-125"
                  />
                  <div className="flex-1 text-right">
                    <label htmlFor={option.value} className="cursor-pointer">
                      <div className="font-medium hebrew-text text-lg">{option.label}</div>
                      <div className="text-2xl hebrew-text text-primary mt-1">{option.example}</div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Word Length Selection */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold hebrew-text text-right">
              באיזה אורך מילים נתחיל? 📏
            </h2>
            <div className="flex justify-center gap-4">
              {[2, 3, 4].map((length) => (
                <Button
                  key={length}
                  variant={config.wordLength === length ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleWordLengthChange(length)}
                  className="btn-bounce text-xl px-8 py-4"
                >
                  {length} אותיות
                </Button>
              ))}
            </div>
          </div>

   

          {/* Start Game Button */}
          <div className="text-center pt-6">
            <Button
              onClick={onStartGame}
              disabled={!canStartGame}
              size="lg"
              className="btn-bounce text-xl px-12 py-6 gradient-primary text-white shadow-button"
            >
              {canStartGame ? '🚀 בואו נתחיל!' : '⏳ בחרו סימני ניקוד תחילה'}
            </Button>
            {!canStartGame && (
              <p className="text-sm text-muted-foreground mt-2">
                צריך לבחור לפחות סימן ניקוד אחד
              </p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ConfigScreen;