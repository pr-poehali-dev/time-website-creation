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
      subtitle: '15 лет спустя',
      sections: [
        {
          number: '1',
          text: 'Согласитесь, что те капиталы, которые были истрачены на реализацию проекта по приватизации России, постепенно возвращаются Западным инвесторам в виде:\n\n– золото-валютного резерва России, хранящегося в банках, принадлежащих Западным структурам; то есть задолженность регулярно погашается пополнением этих поступлений, и они, по сути, принадлежат им и находятся у них;\n\n– вывозимых из страны капиталов, полученных от легальных, нелегальных и других сделок, размещаемых в банках на Западе, принадлежащих и находящихся под контролем мировых финансовых структур;\n\n– имущества, оказавшегося в результате приватизации (проведенной с 1993-2010 г.г. под руководством Западных специалистов) в собственности подконтрольных Западным структурам офшорным компаниям;\n\n– фирм, получивших разрешение на участие в самом масштабном этапе приватизации в России;'
        },
        {
          number: '2',
          text: 'Бывшие и действующие шпионы, выходцы из силовых структур, подобранные и поставленные присматривать за тем, чтобы все досталось (де-факто и де-юре) определенным людям, а не кому-то другому, исправляют все ранее допущенные ошибки: тех, кто не хочет участвовать в этой распродаже, кто самостоятелен и пробует помешать этому процессу – выявили, нашли, деклассировали (объявили уголовниками), подставили, заставили, посадили, отобрали или убили…'
        },
        {
          number: '3',
          text: 'Родственники (в основном дети, жёны и любовницы) этих "наемников", возглавляющие теперь власть в России, их фирмы и подконтрольные им финансовые структуры, являются дополнительной гарантией завершения всей операции по приватизации России.'
        }
      ],
      continuation: [
        'Всему человеческому обществу понятно, что от предложенных:',
        '– мест в «золотом миллиарде»;\n– участия в "отмывании" криминальных и полукриминальных денег с помощью различных "государственных" проектов;\n– процента от реализации российских, сибирских (не важно, как это будет потом называться) земельных, водных, любых ресурсов;\n\nте, кто стоит во-главе России, никогда не смогут отказаться.',
        'Они считают себя самыми умными и хитрыми. Они уверены в том, что придуманная схема экономического геноцида народа этой страны: нищета, пьянство, наркомания, отсутствие медицины, образования, работы, права выбора в жизни – принадлежит им, и что контроль над всем этим позволит полностью уничтожить коренное население комплексным подходом к поставленной задаче. Но это у них никогда не получится. Такие ошибки могут плохо закончиться для всего человечества.',
        'В России всегда и во всем, при решении любых вопросов и задач, надо не избавляться, не игнорировать, а, наоборот учитывать человеческий фактор. Примером может служить нынешняя российская власть:',
        '– они стали хорошими специалистами, но школа, воспитавшая их, научила эту публику только врать, выкручиваться, плести интриги и шпионские сети, разрушать, убивать, окружать себя подонками и предателями, не верить никому, окутывать любое дело завесой тайны, предавать всех и все для своей выгоды, выдавать блеф за истину, а пустое место за свершившийся факт. При этом они по возможности сохраняют спокойствие и избегают открытых публичных столкновений с противником, ввиду полного отсутствия каких-либо нравственных и моральных человеческих чувств и качеств, во имя поставленной перед ними задачи. Они не виноваты! Их так научили, такими сделали, они по-другому не умеют, ведь использовался и подбирался только нужный, прошедший строгий отбор, человеческий материал. Ставка на таких – это огромная ошибка! Они не знают, как надо созидать, все, к чему они прикасаются, разрушается и в конце концов гибнет. Рабская натура (другие в этих структурах не выживали), получившая возможность и доступ к неограниченным материальным благам, деградирует и идет в разнос:',
        '– мелкие авантюристические наклонности трансформируются в стремление достигать всего любой ценой;\n– здоровый аскетизм становится ненасытной жаждой потребления;\n– умение адаптироваться в любой обстановке превращается в патологическую жажду власти, перерастающую в болезненную манию величия, не имеющую под собой ничего, кроме застарелых комплексов и нездорового «я».',
        'По-этому план, который начался в 1985 году, через многие годы так полностью и не реализован. Всем понятно недовольство происходящим в мире и отказ от дальнейшего финансирования этой незавершенной программы без предоставления дополнительных гарантий. Исполнители такие гарантии дать не смогут из-за складывающихся в стране обстоятельств. Они обучены и могут только обмануть, как поступают всегда, со всеми и везде, и именно потому, что по-другому просто не умеют. Им осталась только пара возможностей что-то успеть сохранить из украденного:',
        '- с молчаливого согласия фальсифицировать итоги проходящих в стране выборов (отработанные в этом вопросе технологии позволяют сделать это) или объявить в стране диктатуру, что в конечном итоге здесь и сейчас – одно и то же.',
        'Весь мир очень хорошо должен понимать ненадежность и непредсказуемость такого варианта развития событий, как для тех, кто вложился в этот проект, так и для человеческого общества в целом. Любые создания «фронтов» в России заканчиваются войнами, а это вообще не решает поставленную задачу. Потери, которые понесет мир, могут стать невосполнимыми, а при совсем плохом развитии событий – смертельными в прямом смысле этого слова!..'
      ],
      date: '2010-2011',
      note: 'Текст публикуется в оригинальной редакции 2010-2011 годов'
    },
    en: {
      title: 'REMINDER',
      subtitle: '15 years later',
      sections: [
        {
          number: '1',
          text: 'Agree that the capitals spent on implementing the project of Russia\'s privatization are gradually returning to Western investors in the form of:\n\n– Russia\'s gold and foreign exchange reserves stored in banks owned by Western structures; that is, the debt is regularly paid off by replenishing these revenues, and they essentially belong to them and are with them;\n\n– capitals exported from the country, obtained from legal, illegal and other transactions, placed in banks in the West, owned and controlled by global financial structures;\n\n– property that, as a result of privatization (carried out from 1993-2010 under the guidance of Western specialists), ended up in the ownership of offshore companies controlled by Western structures;\n\n– companies that received permission to participate in the most large-scale stage of privatization in Russia;'
        },
        {
          number: '2',
          text: 'Former and current spies, people from security structures, selected and placed to ensure that everything goes (de facto and de jure) to certain people and not to someone else, are correcting all previously made mistakes: those who do not want to participate in this sell-off, who are independent and try to prevent this process - were identified, found, declassified (declared criminals), framed, forced, imprisoned, had their property taken away or were killed...'
        },
        {
          number: '3',
          text: 'Relatives (mainly children, wives and mistresses) of these "mercenaries", now heading the government in Russia, their companies and financial structures under their control, are an additional guarantee of completing the entire operation of Russia\'s privatization.'
        }
      ],
      continuation: [
        'It is clear to all human society that from the proposed:',
        '– places in the "golden billion";\n– participation in "laundering" criminal and semi-criminal money through various "state" projects;\n– percentage from the sale of Russian, Siberian (no matter what it will be called later) land, water, any resources;\n\nthose who stand at the head of Russia will never be able to refuse.',
        'They consider themselves the smartest and most cunning. They are confident that the invented scheme of economic genocide of the people of this country: poverty, drunkenism, drug addiction, lack of medicine, education, work, right to choose in life - belongs to them, and that control over all this will completely destroy the indigenous population with a comprehensive approach to the task. But they will never succeed. Such mistakes can end badly for all humanity.',
        'In Russia, always and in everything, when solving any questions and tasks, one must not get rid of, not ignore, but on the contrary take into account the human factor. An example can be the current Russian government:',
        '– they became good specialists, but the school that raised them taught this public only to lie, wriggle out, weave intrigues and spy networks, destroy, kill, surround themselves with scoundrels and traitors, trust no one, shroud any matter in a veil of secrecy, betray everyone and everything for their own benefit, pass off bluff as truth, and empty space as an accomplished fact. At the same time, they maintain composure when possible and avoid open public confrontations with the enemy, due to the complete absence of any moral and ethical human feelings and qualities, in the name of the task set before them. They are not to blame! They were taught this way, made this way, they don\'t know how to do otherwise, because only the necessary human material, which passed strict selection, was used and selected. Betting on such people is a huge mistake! They don\'t know how to create, everything they touch is destroyed and eventually perishes. A slave nature (others did not survive in these structures), having received the opportunity and access to unlimited material goods, degrades and goes wild:',
        '– petty adventurous inclinations transform into a desire to achieve everything at any cost;\n– healthy asceticism becomes an insatiable thirst for consumption;\n– the ability to adapt to any environment turns into a pathological thirst for power, growing into a painful megalomania, which has nothing behind it except ingrained complexes and an unhealthy "ego".',
        'Therefore, the plan that began in 1985, after many years, has still not been fully implemented. Everyone understands the dissatisfaction with what is happening in the world and the refusal to further finance this unfinished program without providing additional guarantees. The executors will not be able to provide such guarantees due to the circumstances developing in the country. They are trained and can only deceive, as they always do, with everyone and everywhere, and precisely because they simply don\'t know how to do otherwise. They only have a couple of opportunities left to manage to preserve something from what was stolen:',
        '- with tacit consent, falsify the results of elections taking place in the country (technologies developed in this matter allow this to be done) or declare dictatorship in the country, which ultimately here and now is the same thing.',
        'The whole world must understand very well the unreliability and unpredictability of such a variant of events, both for those who invested in this project and for human society as a whole. Any creation of "fronts" in Russia ends in wars, and this does not solve the task at all. The losses that the world will suffer may be irreparable, and in a very bad development of events - deadly in the literal sense of the word!..'
      ],
      date: '2010-2011',
      note: 'The text is published in its original 2010-2011 edition'
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
                    {language === 'ru' ? 'ДОКУМЕНТ' : 'DOCUMENT'}
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

              <Separator className="my-6" />

              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase text-muted-foreground tracking-wide mb-2">
                  {language === 'ru' ? 'Содержание' : 'Contents'}
                </h3>
                <a href="#section-1" className="block px-3 py-1.5 text-xs font-mono text-sidebar-foreground hover:text-accent hover:bg-sidebar-accent/50 rounded-sm transition-colors">
                  {language === 'ru' ? 'Пункт 1' : 'Point 1'}
                </a>
                <a href="#section-2" className="block px-3 py-1.5 text-xs font-mono text-sidebar-foreground hover:text-accent hover:bg-sidebar-accent/50 rounded-sm transition-colors">
                  {language === 'ru' ? 'Пункт 2' : 'Point 2'}
                </a>
                <a href="#section-3" className="block px-3 py-1.5 text-xs font-mono text-sidebar-foreground hover:text-accent hover:bg-sidebar-accent/50 rounded-sm transition-colors">
                  {language === 'ru' ? 'Пункт 3' : 'Point 3'}
                </a>
                <a href="#analysis" className="block px-3 py-1.5 text-xs font-mono text-sidebar-foreground hover:text-accent hover:bg-sidebar-accent/50 rounded-sm transition-colors">
                  {language === 'ru' ? 'Анализ' : 'Analysis'}
                </a>
              </div>
            </div>
          </ScrollArea>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="border-b border-border bg-card">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-muted-foreground">
                  {language === 'ru' ? 'Документ о приватизации' : 'Privatization Document'}
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
                  <div className="text-muted-foreground mt-1 text-center">
                    {language === 'ru' ? 'АРХИВ' : 'ARCHIVE'}
                  </div>
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

              <section className="space-y-10">
                {t.sections.map((section, idx) => (
                  <div 
                    key={idx}
                    id={`section-${section.number}`}
                    className="fade-in-up scroll-mt-20"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent">
                        <span className="font-mono text-lg font-bold text-accent">{section.number}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-serif text-lg leading-relaxed text-foreground/90 whitespace-pre-line">
                          {section.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              <Separator className="my-12" />

              <section id="analysis" className="space-y-8">
                {t.continuation.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-serif text-lg leading-relaxed text-foreground/90 fade-in-up whitespace-pre-line"
                    style={{ animationDelay: `${(t.sections.length + idx) * 0.1}s` }}
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