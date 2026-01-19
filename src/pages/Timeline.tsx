import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

type ThemeMode = 'light' | 'dark' | 'sepia';

interface TimelineEvent {
  year: number;
  month: string;
  title: {
    ru: string;
    en: string;
  };
  description: {
    ru: string;
    en: string;
  };
  prediction?: {
    ru: string;
    en: string;
  };
  outcome?: {
    ru: string;
    en: string;
  };
  type: 'prediction' | 'event' | 'milestone';
}

const Timeline = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleTheme = () => {
    const themes: ThemeMode[] = ['light', 'dark', 'sepia'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.classList.remove('light', 'dark', 'sepia');
    document.documentElement.classList.add(nextTheme);
  };

  const events: TimelineEvent[] = [
    {
      year: 2010,
      month: language === 'ru' ? 'Май' : 'May',
      title: {
        ru: 'G.O.B. - Международные ЦОДы',
        en: 'G.O.B. - International Data Centers'
      },
      description: {
        ru: 'Концепция создания свободных международных виртуальных консорциумов',
        en: 'Concept of creating free international virtual consortiums'
      },
      prediction: {
        ru: 'Виртуальное пространство выйдет за границы государств',
        en: 'Virtual space will transcend state borders'
      },
      outcome: {
        ru: '2015-2020: Облачные платформы AWS, Google, Azure стали глобальными инфраструктурами',
        en: '2015-2020: Cloud platforms AWS, Google, Azure became global infrastructures'
      },
      type: 'prediction'
    },
    {
      year: 2010,
      month: language === 'ru' ? 'Август' : 'August',
      title: {
        ru: 'Приватизация через финансы',
        en: 'Privatization through finance'
      },
      description: {
        ru: 'Анализ механизмов экономического контроля над государством',
        en: 'Analysis of economic control mechanisms over the state'
      },
      prediction: {
        ru: 'Банковские клубы усилят контроль над ресурсами',
        en: 'Banking clubs will strengthen control over resources'
      },
      outcome: {
        ru: '2014-2022: Санкции, финансовые кризисы, концентрация капитала',
        en: '2014-2022: Sanctions, financial crises, capital concentration'
      },
      type: 'prediction'
    },
    {
      year: 2011,
      month: language === 'ru' ? 'Март' : 'March',
      title: {
        ru: 'Структура банковских клубов',
        en: 'Structure of banking clubs'
      },
      description: {
        ru: 'Описание глобальных механизмов влияния финансовых институтов',
        en: 'Description of global influence mechanisms of financial institutions'
      },
      type: 'event'
    },
    {
      year: 2014,
      month: language === 'ru' ? 'Февраль' : 'February',
      title: {
        ru: 'Начало геополитического перелома',
        en: 'Beginning of geopolitical shift'
      },
      description: {
        ru: 'События на Украине запускают процессы, описанные в текстах 2010',
        en: 'Events in Ukraine trigger processes described in 2010 texts'
      },
      type: 'milestone'
    },
    {
      year: 2016,
      month: language === 'ru' ? 'Ноябрь' : 'November',
      title: {
        ru: 'Цифровизация политики',
        en: 'Digitalization of politics'
      },
      description: {
        ru: 'Социальные сети становятся инструментом влияния на выборы',
        en: 'Social networks become tools for election influence'
      },
      type: 'milestone'
    },
    {
      year: 2020,
      month: language === 'ru' ? 'Март' : 'March',
      title: {
        ru: 'Глобальная пандемия',
        en: 'Global pandemic'
      },
      description: {
        ru: 'Ускорение процессов цифровизации и централизации контроля',
        en: 'Acceleration of digitalization and centralization of control'
      },
      type: 'milestone'
    },
    {
      year: 2022,
      month: language === 'ru' ? 'Февраль' : 'February',
      title: {
        ru: 'Финансовая война',
        en: 'Financial warfare'
      },
      description: {
        ru: 'Отключение от SWIFT, заморозка активов - механизмы из текстов 2010',
        en: 'SWIFT disconnection, asset freezes - mechanisms from 2010 texts'
      },
      type: 'milestone'
    },
    {
      year: 2023,
      month: language === 'ru' ? 'Ноябрь' : 'November',
      title: {
        ru: 'Эра генеративного ИИ',
        en: 'Era of generative AI'
      },
      description: {
        ru: 'ChatGPT и подобные системы меняют информационное пространство',
        en: 'ChatGPT and similar systems transform information space'
      },
      type: 'milestone'
    },
    {
      year: 2026,
      month: language === 'ru' ? 'Январь' : 'January',
      title: {
        ru: 'Деклассификация архива',
        en: 'Archive declassification'
      },
      description: {
        ru: 'Публикация текстов с дистанцией 15 лет для анализа',
        en: 'Publication of texts with 15-year distance for analysis'
      },
      type: 'event'
    }
  ];

  const years = Array.from(new Set(events.map(e => e.year))).sort();
  const filteredEvents = selectedYear 
    ? events.filter(e => e.year === selectedYear)
    : events;

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'prediction': return 'text-accent';
      case 'milestone': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  const getTypeLabel = (type: string) => {
    if (language === 'ru') {
      switch(type) {
        case 'prediction': return 'Предсказание';
        case 'milestone': return 'Веха';
        default: return 'Событие';
      }
    } else {
      switch(type) {
        case 'prediction': return 'Prediction';
        case 'milestone': return 'Milestone';
        default: return 'Event';
      }
    }
  };

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
                  {language === 'ru' ? 'Временная шкала' : 'Timeline'}
                </h2>
                <div className="font-mono text-xs text-muted-foreground">
                  2010 → 2026
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <button
                  onClick={() => setSelectedYear(null)}
                  className={`w-full text-left px-3 py-2 rounded-sm text-sm transition-colors ${
                    selectedYear === null
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                  }`}
                >
                  {language === 'ru' ? 'Все годы' : 'All years'}
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`w-full text-left px-3 py-2 rounded-sm text-sm font-mono transition-colors ${
                      selectedYear === year
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                    }`}
                  >
                    {year}
                    <span className="ml-2 text-xs text-muted-foreground">
                      ({events.filter(e => e.year === year).length})
                    </span>
                  </button>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase text-muted-foreground tracking-wide">
                  {language === 'ru' ? 'Легенда' : 'Legend'}
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="font-mono">{language === 'ru' ? 'Предсказание' : 'Prediction'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="font-mono">{language === 'ru' ? 'Веха' : 'Milestone'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-muted" />
                    <span className="font-mono">{language === 'ru' ? 'Событие' : 'Event'}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="border-b border-border bg-card">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-muted-foreground">
                  {language === 'ru' ? 'Шкала времени' : 'Time Scale'} 2010-2026
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
            <div className="max-w-5xl mx-auto p-8">
              <div className="relative">
                <div className="absolute top-0 right-0 font-mono text-xs text-accent border border-accent px-3 py-1.5 bg-background/80 backdrop-blur">
                  {language === 'ru' ? 'ВРЕМЕННАЯ ШКАЛА' : 'TIMELINE'}
                  <div className="text-muted-foreground mt-1">2010 → 2026</div>
                </div>

                <div className="pt-16 space-y-4 fade-in-up mb-12">
                  <h1 className="font-serif text-5xl font-bold text-foreground leading-tight">
                    {language === 'ru' ? 'Хронология процессов' : 'Process Chronology'}
                  </h1>
                  <p className="font-serif text-xl leading-relaxed text-foreground/90 max-w-3xl">
                    {language === 'ru' 
                      ? 'Ключевые точки временной оси: от предсказаний 2010 года до событий 2026. Наблюдение за проявлением логики процессов.'
                      : 'Key points on the timeline: from 2010 predictions to 2026 events. Observing the manifestation of process logic.'}
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

                  <div className="space-y-8">
                    {filteredEvents.map((event, idx) => (
                      <Card 
                        key={idx} 
                        className="ml-16 p-6 relative fade-in-up hover:shadow-lg transition-all"
                        style={{animationDelay: `${idx * 0.1}s`}}
                      >
                        <div className="absolute -left-[50px] top-6 w-4 h-4 rounded-full bg-background border-2 border-accent" 
                             style={{
                               borderColor: event.type === 'prediction' ? 'hsl(var(--accent))' : 
                                           event.type === 'milestone' ? 'hsl(var(--primary))' : 
                                           'hsl(var(--muted))'
                             }}
                        />

                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="font-mono text-xs text-muted-foreground mb-1">
                              {event.month} {event.year}
                            </div>
                            <h3 className="font-serif text-xl font-bold text-foreground">
                              {event.title[language]}
                            </h3>
                          </div>
                          <div className={`font-mono text-xs px-2 py-1 rounded bg-muted ${getTypeColor(event.type)}`}>
                            {getTypeLabel(event.type)}
                          </div>
                        </div>

                        <p className="font-serif text-base leading-relaxed text-foreground/90 mb-4">
                          {event.description[language]}
                        </p>

                        {event.prediction && (
                          <div className="border-l-2 border-accent pl-4 mb-3">
                            <div className="font-mono text-xs text-accent mb-1">
                              {language === 'ru' ? 'Прогноз 2010' : 'Forecast 2010'}
                            </div>
                            <p className="text-sm text-foreground/80 italic">
                              {event.prediction[language]}
                            </p>
                          </div>
                        )}

                        {event.outcome && (
                          <div className="border-l-2 border-primary pl-4">
                            <div className="font-mono text-xs text-primary mb-1">
                              {language === 'ru' ? 'Реализация' : 'Outcome'}
                            </div>
                            <p className="text-sm text-foreground/80">
                              {event.outcome[language]}
                            </p>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <div className="font-mono text-xs text-center text-muted-foreground">
                    {language === 'ru' 
                      ? `Отображено событий: ${filteredEvents.length} из ${events.length}`
                      : `Events shown: ${filteredEvents.length} of ${events.length}`}
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

export default Timeline;
