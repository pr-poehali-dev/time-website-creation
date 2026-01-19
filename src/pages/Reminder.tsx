import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

type ThemeMode = 'light' | 'dark' | 'sepia';

const Reminder = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const navigate = useNavigate();

  const toggleTheme = () => {
    const themes: ThemeMode[] = ['light', 'dark', 'sepia'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.classList.remove('light', 'dark', 'sepia');
    document.documentElement.classList.add(nextTheme);
  };

  const content = {
    ru: {
      title: 'НАПОМИНАНИЕ',
      subtitle: 'Обращение к читателю',
      text: [
        'Этот архив - не попытка доказать правоту. Это напоминание о том, что логика процессов существует независимо от нашего желания её признавать.',
        'В 2010-2011 годах были написаны тексты, которые описывали не будущее, а структуру. Не предсказывали события, а объясняли механизмы. Сегодня, спустя 15 лет, мы можем наблюдать, как эти механизмы проявили себя.',
        'Цель этой публикации - не триумф автора, а приглашение к размышлению: если логика процессов была видна тогда, почему она остается невидимой сейчас? Какие тексты, написанные сегодня, через 15 лет окажутся такими же точными?',
        'Здесь нет адаптации под современность. Тексты публикуются в оригинальной редакции, с дистанцией времени, позволяющей каждому самостоятельно оценить точность анализа.',
        'Время не меняет законы. Оно лишь делает их видимыми для тех, кто готов смотреть.',
        'Читайте. Анализируйте. Делайте выводы.',
        'Автор'
      ],
      date: '18 января 2026',
      note: 'Публикуется ровно через 15 лет после последнего текста из архива'
    },
    en: {
      title: 'REMINDER',
      subtitle: 'Address to the Reader',
      text: [
        'This archive is not an attempt to prove rightness. It is a reminder that the logic of processes exists independently of our desire to acknowledge it.',
        'In 2010-2011, texts were written that described not the future, but the structure. They did not predict events, but explained mechanisms. Today, 15 years later, we can observe how these mechanisms manifested themselves.',
        'The purpose of this publication is not the author\'s triumph, but an invitation to reflection: if the logic of processes was visible then, why does it remain invisible now? Which texts, written today, will prove equally accurate in 15 years?',
        'There is no adaptation to modernity here. The texts are published in their original edition, with the distance of time, allowing each person to independently assess the accuracy of the analysis.',
        'Time does not change laws. It only makes them visible to those who are ready to look.',
        'Read. Analyze. Draw conclusions.',
        'The Author'
      ],
      date: 'January 18, 2026',
      note: 'Published exactly 15 years after the last text from the archive'
    }
  };

  const t = content[language];

  return (
    <div className={`min-h-screen paper-texture ${theme}`}>
      <div className="flex h-screen">
        <aside className="w-80 border-r border-border bg-sidebar">
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
                <h2 className="font-serif text-2xl font-bold text-sidebar-foreground mb-2">
                  {t.title}
                </h2>
                <div className="font-mono text-xs text-muted-foreground space-y-1">
                  <div className="text-accent font-medium">
                    {language === 'ru' ? 'ОБРАЩЕНИЕ' : 'ADDRESS'}
                  </div>
                  <div>{t.date}</div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="font-serif leading-relaxed italic">
                  {t.note}
                </p>
              </div>
            </div>
          </ScrollArea>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="border-b border-border bg-card">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-muted-foreground">
                  {language === 'ru' ? 'Обращение автора' : 'Author\'s Address'}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                  className="font-mono text-xs"
                >
                  {language.toUpperCase()}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="w-9 h-9 p-0"
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
            <div className="max-w-4xl mx-auto p-8 space-y-12">
              <div className="relative">
                <div className="absolute top-0 right-0 stamp text-xs text-accent">
                  {t.date}
                </div>

                <div className="pt-16 space-y-8 fade-in-up">
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
                    {t.title}
                  </h1>

                  <p className="font-serif text-xl md:text-2xl text-muted-foreground">
                    {t.subtitle}
                  </p>
                </div>
              </div>

              <Separator className="my-12" />

              <section className="space-y-8">
                {t.text.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-serif text-lg leading-relaxed text-foreground/90 fade-in-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </section>

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
                    {t.note}
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

export default Reminder;
