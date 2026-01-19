import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

type ThemeMode = 'light' | 'dark' | 'sepia';

interface ContactHeaderProps {
  language: 'ru' | 'en';
  theme: ThemeMode;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
}

export const ContactHeader = ({ language, theme, onToggleLanguage, onToggleTheme }: ContactHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-sidebar-foreground hover:text-accent transition-colors mb-6"
      >
        <Icon name="ArrowLeft" size={16} />
        <span className="font-mono text-sm">
          {language === 'ru' ? 'К архиву' : 'Back to archive'}
        </span>
      </button>

      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold text-sidebar-foreground mb-2">
          {language === 'ru' ? 'Контакты' : 'Contacts'}
        </h2>
      </div>

      <Separator className="mb-4" />

      <div className="space-y-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleLanguage}
          className="w-full justify-start text-sm"
        >
          <Icon name="Languages" size={16} className="mr-2" />
          {language === 'ru' ? 'English' : 'Русский'}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleTheme}
          className="w-full justify-start text-sm"
        >
          <Icon name="Palette" size={16} className="mr-2" />
          {language === 'ru' ? 'Тема' : 'Theme'}: {theme}
        </Button>
      </div>
    </div>
  );
};

import { Separator } from '@/components/ui/separator';
