import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useNavigate, useParams } from 'react-router-dom';
import { documents } from '@/data/documents';

type ThemeMode = 'light' | 'dark' | 'sepia';
type ReadingMode = 'normal' | 'focus' | 'comfortable' | 'night';

const Document = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [readingMode, setReadingMode] = useState<ReadingMode>('normal');
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [revealedParagraphs, setRevealedParagraphs] = useState<number>(0);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const docId = parseInt(id || '1');
  
  const doc = documents.find(d => d.id === docId) || documents[0];
  const content = doc.content[language];

  const toggleTheme = () => {
    const themes: ThemeMode[] = ['light', 'dark', 'sepia'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.classList.remove('light', 'dark', 'sepia');
    document.documentElement.classList.add(nextTheme);
  };

  const toggleReadingMode = () => {
    const modes: ReadingMode[] = ['normal', 'focus', 'comfortable', 'night'];
    const currentIndex = modes.indexOf(readingMode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    setReadingMode(nextMode);
    if (nextMode === 'night') {
      setTheme('dark');
      document.documentElement.classList.remove('light', 'sepia');
      document.documentElement.classList.add('dark');
    }
  };



  useEffect(() => {
    const timer = setInterval(() => {
      setRevealedParagraphs((prev) => {
        if (prev < content.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [content.length]);

  const getReadingModeClasses = () => {
    switch (readingMode) {
      case 'focus':
        return 'focus-mode';
      case 'comfortable':
        return 'text-lg leading-loose';
      case 'night':
        return 'dark';
      default:
        return '';
    }
  };

  return (
    <div className={`min-h-screen paper-texture ${theme} ${getReadingModeClasses()}`}>
      <div className="flex h-screen">
        <aside className={`w-80 border-r border-border bg-sidebar ${readingMode === 'focus' ? 'hidden' : ''}`}>
          <ScrollArea className="h-full">
            <div className="p-6">
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
                <h2 className="font-serif text-xl font-bold text-sidebar-foreground mb-2">
                  {doc.title}
                </h2>
                <div className="font-mono text-xs text-muted-foreground space-y-1">
                  <div className="text-accent font-medium">
                    {language === 'ru' ? 'ДЕКЛАССИФИЦИРОВАНО' : 'DECLASSIFIED'}
                  </div>
                  <div>{doc.date}</div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground mb-2">
                    {language === 'ru' ? 'Содержание' : 'Contents'}
                  </div>
                  <div className="space-y-2">
                    {content.map((_, idx) => (
                      <div
                        key={idx}
                        className={`font-mono text-xs py-1 px-2 rounded transition-colors ${
                          idx < revealedParagraphs
                            ? 'text-foreground bg-sidebar-accent/30'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {language === 'ru' ? 'Абзац' : 'Paragraph'} {idx + 1}
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground mb-2">
                    {language === 'ru' ? 'Прогресс чтения' : 'Reading progress'}
                  </div>
                  <div className="bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-accent h-full transition-all duration-300"
                      style={{
                        width: `${(revealedParagraphs / content.length) * 100}%`
                      }}
                    />
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mt-2">
                    {revealedParagraphs} / {content.length}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className={`border-b border-border bg-card ${readingMode === 'focus' ? 'hidden' : ''}`}>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-muted-foreground">
                  {language === 'ru' ? 'Документ' : 'Document'} #{docId}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                  className="font-mono text-xs"
                  title={language === 'ru' ? 'Сменить язык' : 'Change language'}
                >
                  {language.toUpperCase()}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleReadingMode}
                  className="w-9 h-9 p-0"
                  title={language === 'ru' ? 'Режим чтения' : 'Reading mode'}
                >
                  <Icon
                    name={readingMode === 'focus' ? 'Maximize2' : readingMode === 'comfortable' ? 'Type' : readingMode === 'night' ? 'Moon' : 'Book'}
                    size={16}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="w-9 h-9 p-0"
                  title={language === 'ru' ? 'Тема оформления' : 'Theme'}
                >
                  <Icon
                    name={theme === 'light' ? 'Sun' : theme === 'dark' ? 'Moon' : 'Eye'}
                    size={16}
                  />
                </Button>
              </div>
            </div>
          </header>

          <ScrollArea className="flex-1">
            <div className={`mx-auto p-8 space-y-12 vintage-lines ${readingMode === 'focus' ? 'max-w-3xl' : 'max-w-4xl'} ${readingMode === 'comfortable' ? 'text-xl leading-loose' : ''}`}>
              <div className="relative">
                <div className="absolute top-0 right-0 stamp text-xs text-accent">
                  {language === 'ru' ? 'Деклассифицировано' : 'Declassified'}
                  <div className="text-muted-foreground mt-1 text-center">{doc.date.split('.').reverse().join('.')}</div>
                </div>

                <div className="pt-16 space-y-4">
                  <div className="font-mono text-sm text-muted-foreground tracking-wider">
                    {doc.year}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                    {doc.title}
                  </h1>
                </div>
              </div>

              <Separator className="my-12" />

              <div className="space-y-8">
                {content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={`quote-highlight font-serif leading-relaxed text-foreground/90 transition-opacity duration-600 ${
                      idx < revealedParagraphs ? 'fade-in-up opacity-100' : 'opacity-0'
                    } ${readingMode === 'comfortable' ? 'text-xl' : 'text-lg'}`}
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-12 pb-8">
                <Separator className="mb-6" />
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => navigate('/')}
                    className="font-mono text-xs"
                  >
                    <Icon name="ArrowLeft" size={14} className="mr-2" />
                    {language === 'ru' ? 'К архиву' : 'Back to archive'}
                  </Button>
                  <div className="font-mono text-xs text-center text-muted-foreground">
                    {language === 'ru' ? 'Конец документа' : 'End of document'}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};

export default Document;