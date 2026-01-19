import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

type ThemeMode = 'light' | 'dark' | 'sepia';

interface Comparison {
  id: number;
  category: {
    ru: string;
    en: string;
  };
  year: number;
  then: {
    quote: {
      ru: string;
      en: string;
    };
    source: string;
  };
  now: {
    reality: {
      ru: string;
      en: string;
    };
    examples: {
      ru: string[];
      en: string[];
    };
  };
  accuracy: number;
}

const ThenNow = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const toggleTheme = () => {
    const themes: ThemeMode[] = ['light', 'dark', 'sepia'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.classList.remove('light', 'dark', 'sepia');
    document.documentElement.classList.add(nextTheme);
  };

  const comparisons: Comparison[] = [
    {
      id: 1,
      category: {
        ru: 'Цифровое пространство',
        en: 'Digital Space'
      },
      year: 2010,
      then: {
        quote: {
          ru: 'Создание на территории России свободных международных ЦОДов (виртуального пространства), не имеющего статуса конкретной государственной принадлежности.',
          en: 'Creation on Russian territory of free international data centers (virtual space), without specific state affiliation status.'
        },
        source: 'G.O.B., 2010'
      },
      now: {
        reality: {
          ru: 'К 2020-м годам глобальные облачные платформы действительно создали виртуальные пространства, функционирующие вне традиционных государственных границ.',
          en: 'By the 2020s, global cloud platforms indeed created virtual spaces operating beyond traditional state borders.'
        },
        examples: {
          ru: [
            'AWS, Google Cloud, Azure работают в сотнях юрисдикций одновременно',
            'Дата-центры размещены глобально, но управляются централизованно',
            'Попытки государств регулировать облачные сервисы через суверенитет данных'
          ],
          en: [
            'AWS, Google Cloud, Azure operate in hundreds of jurisdictions simultaneously',
            'Data centers placed globally but managed centrally',
            'State attempts to regulate cloud services through data sovereignty'
          ]
        }
      },
      accuracy: 92
    },
    {
      id: 2,
      category: {
        ru: 'Экономический контроль',
        en: 'Economic Control'
      },
      year: 2010,
      then: {
        quote: {
          ru: 'Придуманная схема экономического геноцида народа: нищета, пьянство, наркомания, отсутствие медицины, образования, работы.',
          en: 'Invented scheme of economic genocide: poverty, alcoholism, drug addiction, lack of medicine, education, work.'
        },
        source: 'Кто приватизирует Россию?, 2010'
      },
      now: {
        reality: {
          ru: 'Социальное расслоение усилилось, системы здравоохранения и образования коммерциализировались, доступ определяется финансовым статусом.',
          en: 'Social stratification intensified, healthcare and education systems commercialized, access determined by financial status.'
        },
        examples: {
          ru: [
            'Рост разрыва между доходами топ-1% и остальным населением (2010-2025)',
            'Платная медицина как норма в развитых странах',
            'Кредитная задолженность за образование в США превысила $1.7 трлн'
          ],
          en: [
            'Growing gap between top 1% income and rest of population (2010-2025)',
            'Paid medicine as norm in developed countries',
            'Student debt in USA exceeded $1.7 trillion'
          ]
        }
      },
      accuracy: 87
    },
    {
      id: 3,
      category: {
        ru: 'Банковские механизмы',
        en: 'Banking Mechanisms'
      },
      year: 2011,
      then: {
        quote: {
          ru: 'Банковские клубы играют ключевую роль в контроле потоков капитала и определении правил игры на финансовых рынках.',
          en: 'Banking clubs play a key role in controlling capital flows and determining rules of the game in financial markets.'
        },
        source: 'Структура банковских клубов, 2011'
      },
      now: {
        reality: {
          ru: 'Санкционные механизмы через SWIFT, заморозка активов, контроль международных платежей подтвердили описанную структуру власти.',
          en: 'Sanction mechanisms through SWIFT, asset freezes, control of international payments confirmed the described power structure.'
        },
        examples: {
          ru: [
            'Отключение российских банков от SWIFT (2022)',
            'Заморозка $300+ млрд резервов ЦБ РФ',
            'Вторичные санкции против стран, торгующих с Россией'
          ],
          en: [
            'Disconnection of Russian banks from SWIFT (2022)',
            'Freeze of $300+ billion of Russian CB reserves',
            'Secondary sanctions against countries trading with Russia'
          ]
        }
      },
      accuracy: 95
    },
    {
      id: 4,
      category: {
        ru: 'Информационное пространство',
        en: 'Information Space'
      },
      year: 2010,
      then: {
        quote: {
          ru: 'Средства массовой информации формируют нужную картину мира, отвлекая внимание от реальных процессов перераспределения ресурсов.',
          en: 'Mass media form the needed picture of the world, distracting attention from real processes of resource redistribution.'
        },
        source: 'Кто приватизирует Россию?, 2010'
      },
      now: {
        reality: {
          ru: 'Социальные сети, алгоритмические ленты, фильтрующие пузыри создали управляемое информационное пространство беспрецедентного масштаба.',
          en: 'Social networks, algorithmic feeds, filter bubbles created a controlled information space of unprecedented scale.'
        },
        examples: {
          ru: [
            'Cambridge Analytica и влияние на выборы через Facebook (2016)',
            'Алгоритмы рекомендаций TikTok, YouTube формируют восприятие',
            'Дезинформационные кампании как инструмент геополитики'
          ],
          en: [
            'Cambridge Analytica and election influence through Facebook (2016)',
            'TikTok, YouTube recommendation algorithms shape perception',
            'Disinformation campaigns as geopolitical tool'
          ]
        }
      },
      accuracy: 89
    },
    {
      id: 5,
      category: {
        ru: 'Технологический контроль',
        en: 'Technological Control'
      },
      year: 2011,
      then: {
        quote: {
          ru: 'Виртуальное пространство станет полем борьбы за ресурсы и влияние, где традиционные границы потеряют значение.',
          en: 'Virtual space will become a battlefield for resources and influence, where traditional borders lose meaning.'
        },
        source: 'Виртуальное пространство, 2011'
      },
      now: {
        reality: {
          ru: 'Технологические платформы (GAFAM) превратились в новые формы власти, контролирующие коммуникации, данные и поведение миллиардов.',
          en: 'Tech platforms (GAFAM) transformed into new forms of power, controlling communications, data and behavior of billions.'
        },
        examples: {
          ru: [
            'Капитализация Apple, Microsoft, Google превысила ВВП большинства стран',
            'Платформы определяют правила модерации контента глобально',
            'Цифровые валюты как альтернатива государственным деньгам'
          ],
          en: [
            'Apple, Microsoft, Google capitalization exceeded GDP of most countries',
            'Platforms determine content moderation rules globally',
            'Digital currencies as alternative to state money'
          ]
        }
      },
      accuracy: 91
    }
  ];

  const categories = [
    { id: 'all', ru: 'Все категории', en: 'All categories' },
    ...Array.from(new Set(comparisons.map(c => c.category.ru))).map((cat, idx) => ({
      id: `cat-${idx}`,
      ru: cat,
      en: comparisons.find(c => c.category.ru === cat)?.category.en || cat
    }))
  ];

  const filteredComparisons = activeCategory === 'all' 
    ? comparisons 
    : comparisons.filter(c => `cat-${categories.findIndex(cat => cat.ru === c.category.ru) - 1}` === activeCategory);

  const avgAccuracy = Math.round(
    filteredComparisons.reduce((sum, c) => sum + c.accuracy, 0) / filteredComparisons.length
  );

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
                  {language === 'ru' ? 'Тогда и сейчас' : 'Then and Now'}
                </h2>
                <div className="font-mono text-xs text-muted-foreground">
                  2010 → 2026
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-sm text-sm transition-colors ${
                      activeCategory === cat.id
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                    }`}
                  >
                    {cat[language]}
                  </button>
                ))}
              </div>

              <Separator className="my-6" />

              <Card className="p-4">
                <div className="text-xs font-mono uppercase text-muted-foreground mb-3">
                  {language === 'ru' ? 'Статистика' : 'Statistics'}
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-foreground mb-1">
                      {language === 'ru' ? 'Средняя точность' : 'Average accuracy'}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-mono font-bold text-accent">{avgAccuracy}%</span>
                    </div>
                  </div>
                  <div className="bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-accent h-full transition-all duration-500"
                      style={{ width: `${avgAccuracy}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {language === 'ru' 
                      ? `${filteredComparisons.length} сопоставлений`
                      : `${filteredComparisons.length} comparisons`}
                  </div>
                </div>
              </Card>
            </div>
          </ScrollArea>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="border-b border-border bg-card">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-muted-foreground">
                  {language === 'ru' ? 'Параллельное сравнение' : 'Parallel Comparison'}
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
            <div className="max-w-6xl mx-auto p-8">
              <div className="relative">
                <div className="absolute top-0 right-0 font-mono text-xs text-accent border border-accent px-3 py-1.5 bg-background/80 backdrop-blur">
                  {language === 'ru' ? 'ТОГДА И СЕЙЧАС' : 'THEN AND NOW'}
                  <div className="text-muted-foreground mt-1">2010 → 2026</div>
                </div>

                <div className="pt-16 space-y-4 fade-in-up mb-12">
                  <h1 className="font-serif text-5xl font-bold text-foreground leading-tight">
                    {language === 'ru' ? 'Проверка временем' : 'Time Verification'}
                  </h1>
                  <p className="font-serif text-xl leading-relaxed text-foreground/90 max-w-4xl">
                    {language === 'ru'
                      ? 'Сопоставление предсказаний 2010-2011 с реальностью 2020-х. Без интерпретаций — только факты и цитаты.'
                      : 'Matching 2010-2011 predictions with 2020s reality. No interpretations — only facts and quotes.'}
                  </p>
                </div>

                <div className="space-y-8">
                  {filteredComparisons.map((comp, idx) => (
                    <Card 
                      key={comp.id} 
                      className="p-6 fade-in-up hover:shadow-lg transition-shadow"
                      style={{animationDelay: `${idx * 0.1}s`}}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="font-mono text-xs text-muted-foreground mb-2">
                            {comp.category[language]}
                          </div>
                          <div className="font-mono text-sm text-accent">
                            {comp.then.source}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="text-3xl font-mono font-bold text-accent">
                            {comp.accuracy}%
                          </div>
                          <div className="text-xs text-muted-foreground font-mono">
                            {language === 'ru' ? 'точность' : 'accuracy'}
                          </div>
                        </div>
                      </div>

                      <Tabs defaultValue="then" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                          <TabsTrigger value="then" className="font-mono text-xs">
                            {language === 'ru' ? 'ТОГДА (2010-2011)' : 'THEN (2010-2011)'}
                          </TabsTrigger>
                          <TabsTrigger value="now" className="font-mono text-xs">
                            {language === 'ru' ? 'СЕЙЧАС (2020-2026)' : 'NOW (2020-2026)'}
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="then" className="space-y-4">
                          <div className="border-l-4 border-accent pl-6 py-2">
                            <p className="font-serif text-lg leading-relaxed text-foreground italic">
                              "{comp.then.quote[language]}"
                            </p>
                          </div>
                        </TabsContent>

                        <TabsContent value="now" className="space-y-4">
                          <div className="border-l-4 border-primary pl-6 py-2">
                            <p className="font-serif text-base leading-relaxed text-foreground mb-4">
                              {comp.now.reality[language]}
                            </p>
                            <div className="space-y-2">
                              <div className="font-mono text-xs uppercase text-muted-foreground mb-2">
                                {language === 'ru' ? 'Примеры:' : 'Examples:'}
                              </div>
                              {comp.now.examples[language].map((example, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm">
                                  <span className="text-primary mt-1">→</span>
                                  <span className="text-foreground/90">{example}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <div className="font-mono text-xs text-center text-muted-foreground">
                    {language === 'ru'
                      ? `Средняя точность предсказаний: ${avgAccuracy}%`
                      : `Average prediction accuracy: ${avgAccuracy}%`}
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

export default ThenNow;
