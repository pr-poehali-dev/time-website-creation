import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

type ThemeMode = 'light' | 'dark' | 'sepia';

const Author = () => {
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
      title: 'ОБ АВТОРЕ',
      subtitle: 'Философский контекст проекта',
      sections: [
        {
          title: 'Цель архива',
          text: 'Этот архив создан не для того, чтобы доказать правоту автора. Его цель — показать, что логика процессов существует независимо от нашего желания её признавать. Тексты 2010-2011 годов описывали не будущее, а структуру. Они не предсказывали события, а объясняли механизмы.'
        },
        {
          title: 'О природе истины',
          text: 'Автор исходит из убеждения, что истина не нуждается в защите от сомнений. Если истина слаба и требует запретов на критику, то она не истина. Настоящая истина лишь укрепляется под натиском сомнений и отрицаний — как золото очищается в огне.'
        },
        {
          title: 'Философская основа',
          text: 'В основе работ лежит понимание единства духа и материи: дух — это мысль, источник жизни, а материя — форма, без которой мысль не могла бы проявиться. Они нуждаются друг в друге. Все происходящее в мире — частные проявления единой идеи.'
        },
        {
          title: 'Человек и общество',
          text: 'Человек — воплощенный разум, существо мыслящее. Развитие общества возможно только через развитие каждой личности. Судьба одной личности важнее судеб всего мира и здоровья всех правителей вместе взятых.'
        },
        {
          title: 'О роли выдающихся людей',
          text: 'Великий человек не должен выдумывать себе дел — он должен находить их во времени и обстоятельствах. Он не может находиться во враждебных отношениях со своим народом. Истинное величие в созидании, а не в разрушении.'
        },
        {
          title: 'Критика и патриотизм',
          text: 'Национальная гордость — чувство благородное. Но критика недостатков народа — не преступление, а заслуга и истинный патриотизм. Только то, что любишь всем сердцем, можно критиковать искренне и конструктивно.'
        },
        {
          title: 'О будущем России',
          text: 'Высшее благо для России — создание экономики, государственности и культуры, соответствующих интересам людей. Спасение не в мистицизме, а в просвещении и гуманности. Нужны права и законы, написанные для людей, с их участием.'
        },
        {
          title: 'Выбор пути',
          text: 'Перед каждым человеком — два пути: служить истине бескорыстно или торговать своим даром ради выгоды. Первый путь труден, второй — легок и губителен. Автор выбрал первый и приглашает читателя к осознанному выбору.'
        }
      ],
      conclusion: 'Автор этих текстов остается за кадром не из желания скрыться, а потому что важны не имена, а идеи. Время проверило логику, изложенную в документах 2010-2011 годов. Теперь каждый может сам оценить её точность и сделать собственные выводы о настоящем и будущем.',
      quote: '«Наш век – весь вопрос, весь стремление, весь искание и тоска по истине… Он не боится, что его обманет истина, он боится лжи, которую человеческая ограниченность часто принимает за истину».',
      date: '2010-2026'
    },
    en: {
      title: 'ABOUT THE AUTHOR',
      subtitle: 'Philosophical context of the project',
      sections: [
        {
          title: 'Purpose of the archive',
          text: 'This archive was created not to prove the author right. Its purpose is to show that the logic of processes exists independently of our desire to acknowledge it. The texts of 2010-2011 described not the future, but the structure. They did not predict events, but explained mechanisms.'
        },
        {
          title: 'On the nature of truth',
          text: 'The author proceeds from the conviction that truth does not need protection from doubts. If truth is weak and requires prohibitions on criticism, then it is not truth. Real truth only strengthens under the onslaught of doubts and denials — like gold purified in fire.'
        },
        {
          title: 'Philosophical foundation',
          text: 'The work is based on understanding the unity of spirit and matter: spirit is thought, the source of life, and matter is form, without which thought could not manifest. They need each other. Everything happening in the world is particular manifestations of a single idea.'
        },
        {
          title: 'Man and society',
          text: 'Man is embodied reason, a thinking being. The development of society is possible only through the development of each individual. The fate of one individual is more important than the fate of the whole world and the health of all rulers combined.'
        },
        {
          title: 'On the role of outstanding people',
          text: 'A great man should not invent tasks for himself — he should find them in time and circumstances. He cannot be in hostile relations with his people. True greatness is in creation, not destruction.'
        },
        {
          title: 'Criticism and patriotism',
          text: 'National pride is a noble feeling. But criticism of the people\'s shortcomings is not a crime, but merit and true patriotism. Only what you love with all your heart can be criticized sincerely and constructively.'
        },
        {
          title: 'On Russia\'s future',
          text: 'The highest good for Russia is creating an economy, statehood and culture that correspond to people\'s interests. Salvation is not in mysticism, but in enlightenment and humanity. We need rights and laws written for people, with their participation.'
        },
        {
          title: 'Choice of path',
          text: 'Before each person are two paths: serve truth selflessly or trade one\'s gift for profit. The first path is difficult, the second is easy and destructive. The author chose the first and invites the reader to make a conscious choice.'
        }
      ],
      conclusion: 'The author of these texts remains behind the scenes not out of a desire to hide, but because ideas are important, not names. Time has tested the logic set forth in the documents of 2010-2011. Now everyone can evaluate its accuracy for themselves and draw their own conclusions about the present and future.',
      quote: '«Our century is all question, all aspiration, all searching and longing for truth… It is not afraid that truth will deceive it, it fears the lie that human limitation often mistakes for truth».',
      date: '2010-2026'
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
                  {language === 'ru' ? 'Об авторе' : 'About Author'}
                </h2>
                <div className="font-mono text-xs text-muted-foreground">
                  {t.date}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase text-muted-foreground tracking-wide mb-2">
                  {language === 'ru' ? 'Разделы' : 'Sections'}
                </h3>
                {t.sections.map((section, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx}`}
                    className="block px-3 py-1.5 text-xs font-serif text-sidebar-foreground hover:text-accent hover:bg-sidebar-accent/50 rounded-sm transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </ScrollArea>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="border-b border-border bg-card">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-muted-foreground">
                  {language === 'ru' ? 'Философия проекта' : 'Project Philosophy'}
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
                  {language === 'ru' ? 'АВТОР' : 'AUTHOR'}
                  <div className="text-muted-foreground mt-1 text-center">{t.date}</div>
                </div>

                <div className="pt-16 space-y-8 fade-in-up">
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
                    {t.title}
                  </h1>

                  <p className="font-serif text-xl md:text-2xl text-muted-foreground italic">
                    {t.subtitle}
                  </p>
                </div>
              </div>

              <Separator className="my-12" />

              <div className="border-l-4 border-accent pl-6 my-8">
                <p className="font-serif text-lg leading-relaxed text-foreground/90 italic">
                  {t.quote}
                </p>
              </div>

              <section className="space-y-12">
                {t.sections.map((section, idx) => (
                  <div
                    key={idx}
                    id={`section-${idx}`}
                    className="fade-in-up scroll-mt-20"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 document-line pb-2">
                      {section.title}
                    </h2>
                    <p className="font-serif text-lg leading-relaxed text-foreground/90">
                      {section.text}
                    </p>
                  </div>
                ))}
              </section>

              <Separator className="my-12" />

              <div className="bg-muted/30 p-8 rounded-sm border border-border">
                <p className="font-serif text-base leading-relaxed text-foreground/90 italic">
                  {t.conclusion}
                </p>
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
                    {language === 'ru' ? 'Текст публикуется впервые' : 'Text published for the first time'}
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

export default Author;
