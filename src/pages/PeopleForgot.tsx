import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

type ThemeMode = 'light' | 'dark' | 'sepia';

const PeopleForgot = () => {
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
      title: 'ЛЮДИ ПРОСТО НЕ ПОМНЯТ, ЧТО:',
      sections: [
        {
          term: 'Маркитант',
          text: 'Продавцы жизненных припасов, состоящие при войске на войне. Неудобства, с которыми сопряжены перевозка и хранение товаров, опасность с переменою обстоятельств на «фронтах» лишиться всего своего достояния заставляют маркитантов продавать свои продукты и товары по чрезвычайно высокой цене. Присутствие их на фронте есть необходимое зло: они разоряют всех, склоняя к излишним тратам, нередко подталкивают окружение к грабежу, в котором сами принимают живое участие. Нередко среди этой публики оказываются подосланные шпионы. У этих торгашей можно найти все, что нужно. Это составляет потребность развращенной, хищнической вольницы, которая называется войском на «фронте».'
        },
        {
          term: 'Материализм',
          text: 'Материализмом называется такой взгляд на вещи, по которому все духовное, сверхчувственное, считается вымыслом. Человек же есть не что иное, как усовершенствованное животное, не имеющее иной цели, кроме удовлетворения своих телесных потребностей, но отличающееся от других животных искусством умножать и утончать эти потребности, предвидеть их и удовлетворять их с расчетом и умом.'
        },
        {
          term: 'Меркантильная система',
          text: 'Наличие и обладание огромными сырьевыми ресурсами и полезными ископаемыми имеет сильное влияние на людей, на понимание ими народного богатства. Они начинают видеть его в обилии и избытке благородных металлов и денег, то есть, чем больше народ приобретает их, торгуя своими знаниями, изделиями, произведениями и т.д., тем успешнее он и богаче.'
        },
        {
          term: 'Мизантропия',
          text: 'Людобоязнь, ненависть к людям. Так называют не столько болезнь, сколько склонность человека бояться или ненавидеть людей. Причина кроется не в темпераменте человека, а в недостатке или повреждении одной из его духовных способностей, преимущественно рассудка.'
        },
        {
          term: 'Монета',
          text: 'Слово «деньги» означает вообще всякий предмет, принимаемый в обществе за мерило при определении относительной цены различных предметов. Монетой называется металл, получивший определенную форму посредством чекана и служащий как общепризнанный знак ценности к облегчению меновых оборотов в обществе. Наравне с монетами имеют хождение бумажные деньги – ассигнации, без настоящего обеспечения чем-либо: такая финансовая система представляет собой пирамиду, легко влечет за собой банкротство и неизбежные при этом государственные потрясения.'
        },
        {
          term: 'Монополия',
          text: 'Исключительное право, предоставленное одному или нескольким лицам на переработку и продажу любых произведений рук и ума человеческого. Монополии вредны для народного благосостояния, кому бы они не принадлежали: хоть государству, хоть частным лицам; потому что монополист уверен в сбыте и, не имея конкурентов, не заботится об усовершенствовании своей продукции, назначает за нее цену, какую захочет.'
        },
        {
          term: 'Моногамия',
          text: 'Единобрачие, соединение в браке одного мужчины с одной женщиной. Это древнейшая и естественнейшая форма брачного союза, единственно соответствующая нравственной природе человека.'
        },
        {
          term: 'Монотеизм',
          text: 'Вера в единого Бога в противоположность политеизму, или многобожию. Монотеизм составляет существенное основание трех великих религий: иудейской, христианской и магометанской.'
        },
        {
          term: 'Мораль',
          text: 'Наука о нравах, о должном поведении человека, о добре и зле в отношениях людей. Мораль определяет правила человеческого общежития на основании высших требований разума и совести.'
        },
        {
          term: 'Натуральный и натуральность',
          text: 'Естественный, природный, не искусственный. В применении к человеческой деятельности означает такую деятельность, которая вытекает из непосредственных потребностей и влечений природы, без участия высших сил души - разума и свободной воли.'
        },
        {
          term: 'Натуральное право',
          text: 'Право, вытекающее из самой природы человека, предшествующее всякому положительному законодательству. Натуральное право составляет основу всех гражданских законов и служит критерием их справедливости.'
        },
        {
          term: 'Нация',
          text: 'Народ, составляющий политическое целое, государство. Нация отличается от простого этнического племени тем, что имеет общее государственное устройство, общие законы, общую культуру и литературу.'
        },
        {
          term: 'Национальное собрание',
          text: 'Представительное учреждение, составленное из депутатов всех сословий народа для обсуждения и решения государственных дел. Во Франции так называлось собрание сословий, провозгласившее себя в 1789 году представителем всей нации.'
        },
        {
          term: 'Нек плюс ультра',
          text: 'Латинское изречение, означающее высшую степень совершенства, до которой можно дойти в чем-либо; дальше идти некуда - предел совершенства.'
        },
        {
          term: 'Некрополис',
          text: 'Город мертвых, кладбище. Так назывались у древних места погребения, особенно когда они составляли обширные подземные здания с множеством гробниц.'
        },
        {
          term: 'Немейские игры',
          text: 'Одно из четырех великих национальных празднеств древней Греции, учрежденное в память Геркулеса, победившего немейского льва. Происходили каждые два года в Немее, в Арголиде.'
        },
        {
          term: 'Неология',
          text: 'Введение новых слов или новых значений старых слов в язык. В более узком смысле - склонность к нововведениям в области религии, стремление толковать религиозные догматы согласно требованиям разума.'
        },
        {
          term: 'Неохристианизм',
          text: 'Попытка примирения христианства с современной философией и наукой путем нового толкования христианских догматов. Стремление обновить христианское учение, приспособив его к потребностям времени.'
        },
        {
          term: 'Непотизм',
          text: 'Покровительство родственникам. Так называлось особенно злоупотребление пап, которые раздавали высшие церковные должности и богатства своим родственникам, племянникам.'
        },
        {
          term: 'Номенклатура',
          text: 'Собрание имен, названий предметов какой-либо отрасли науки или искусства. В общественном смысле - совокупность лиц, занимающих определенные должности и образующих привилегированный слой.'
        },
        {
          term: 'Нормальное состояние',
          text: 'Состояние, согласное с установленной нормой, правилом. В приложении к обществу - состояние, соответствующее его естественному развитию, когда все его части находятся в должном отношении друг к другу.'
        },
        {
          term: 'Нотабене',
          text: 'Латинское выражение, употребляемое для обозначения того, на что следует обратить особенное внимание. Означает: заметь хорошо, запомни.'
        },
        {
          term: 'Нотаболи',
          text: 'Знатнейшие, почетнейшие граждане. Так назывались в средние века в некоторых итальянских республиках лица, принадлежавшие к высшему сословию и имевшие право участвовать в управлении государством.'
        },
        {
          term: 'Нотариус',
          text: 'Должностное лицо, на обязанности которого лежит засвидетельствование различных актов: договоров, духовных завещаний, доверенностей и прочих документов с целью придания им юридической силы.'
        },
        {
          term: 'Новаторство',
          text: 'Стремление вводить новое, делать нововведения. В хорошем смысле означает полезную деятельность, направленную на усовершенствование существующего; в дурном - страсть к переменам ради самих перемен.'
        },
        {
          term: 'Новатор',
          text: 'Человек, вводящий что-либо новое в науке, искусстве, общественной жизни. Новатор отличается от простого изобретателя тем, что не только придумывает новое, но и проводит его в жизнь.'
        },
        {
          term: 'Новация',
          text: 'Обновление, преобразование чего-либо. В юридическом смысле - замена одного обязательства другим, когда прежнее обязательство уничтожается и на его место становится новое.'
        },
        {
          term: 'Обскурант',
          text: 'Противник просвещения, мракобес. Так называют людей, которые из личных или партийных видов стараются держать народ в невежестве, препятствуют распространению образования и света.'
        },
        {
          term: 'Обскурантизм',
          text: 'Полнота и степень совершенства знания и самосознания в человеке или для человека есть основа и залог его действительного могущества. Без всезнания всемогущество немыслимо. Обскурантизм вообще является важной составной частью в любом религиозном властительстве или чьем-либо правлении; стараться использовать сами знания как орудие для унижения и оставления народа в еще больше невежестве, объясняя, что ум человеческий ограничен, истина – недосягаема, божество – непонятно.'
        },
        {
          term: 'Овенизм',
          text: 'Учение Роберта Овена о преобразовании общества на началах социализма. Овен полагал, что характер человека образуется обстоятельствами, что человек - продукт среды, и потому для исправления человечества нужно изменить общественные условия.'
        },
        {
          term: 'Олигархия',
          text: 'Форма правления, при которой власть находится в руках немногих. Олигархия может быть аристократической, когда власть принадлежит знатным, или плутократической, когда правят богачи.'
        },
        {
          term: 'Оппозиция',
          text: 'Противодействие, сопротивление. В политическом смысле - партия или группа лиц, противодействующих правительству, не соглашающихся с его мерами и стремящихся заменить его собой.'
        },
        {
          term: 'Оптиматы',
          text: 'Лучшие, знатнейшие люди. Так называлась в древнем Риме аристократическая партия, состоявшая из патрициев и богатых плебеев, противополагавшаяся демократической партии популяров.'
        },
        {
          term: 'Оратор',
          text: 'Человек, обладающий даром красноречия, умеющий говорить убедительно, увлекательно. Ораторство есть искусство словом действовать на ум, чувство и волю других людей.'
        },
        {
          term: 'Органическая эпоха',
          text: 'Время спокойного, правильного развития общества, когда все его части находятся в гармонии, когда господствует одно цельное миросозерцание. Противополагается критической эпохе - времени разложения старого и борьбы за новое.'
        },
        {
          term: 'Организатор',
          text: 'Человек, обладающий способностью устроять, приводить в порядок какое-либо дело. Организатор не только придумывает план, но и умеет осуществить его, соединяя и направляя деятельность многих людей к одной цели.'
        },
        {
          term: 'Орда',
          text: 'Кочующее племя, народ. В истории России ордой называлось татарское государство, покорившее Русь в XIII веке. Переносно означает беспорядочную толпу, шайку.'
        },
        {
          term: 'Ордалии',
          text: 'Суды Божии, испытания огнем, водой, железом для открытия истины в судебных делах. Основывались на убеждении, что Бог чудесным образом защитит невинного и обличит виновного.'
        },
        {
          term: 'Оракул',
          text: 'Так у древних называлось или божество, предрекавшее будущее, или место, где находилось прорицалище. При первом своем взгляде на мир человек во всем видит сверхъестественное: природа является божеством, почти любой предмет представляется жилищем божества, каждое явление природы – непосредственным действием божества.'
        }
      ],
      footer: 'Текст публикуется в оригинальной редакции.'
    },
    en: {
      title: 'PEOPLE SIMPLY FORGOT THAT:',
      sections: [
        {
          term: 'Sutler',
          text: 'Sellers of provisions attached to an army during war. The inconveniences associated with transporting and storing goods, the danger of losing all possessions with changes in circumstances at the "fronts" force sutlers to sell their products and goods at extremely high prices.'
        },
        {
          term: 'Materialism',
          text: 'Materialism is such a view of things according to which everything spiritual, supersensible, is considered fiction. Man is nothing more than a perfected animal, having no other purpose than satisfying bodily needs.'
        },
        {
          term: 'Mercantile System',
          text: 'The presence and possession of enormous raw material resources and minerals has a strong influence on people, on their understanding of national wealth.'
        },
        {
          term: 'Misanthropy',
          text: 'Fear of people, hatred of people. This refers not so much to a disease as to a person\'s tendency to fear or hate people.'
        },
        {
          term: 'Coin',
          text: 'The word "money" generally means any object accepted in society as a measure when determining the relative price of various objects.'
        },
        {
          term: 'Monopoly',
          text: 'An exclusive right granted to one or several persons for the processing and sale of any products of human hands and mind.'
        },
        {
          term: 'Monogamy',
          text: 'Marriage of one man with one woman. This is the most ancient and natural form of marriage union, the only one corresponding to the moral nature of man.'
        },
        {
          term: 'Monotheism',
          text: 'Belief in one God as opposed to polytheism, or worship of many gods. Monotheism constitutes the essential foundation of three great religions: Jewish, Christian and Mohammedan.'
        },
        {
          term: 'Morality',
          text: 'The science of morals, of proper human behavior, of good and evil in human relations.'
        },
        {
          term: 'Natural',
          text: 'Natural, not artificial. In application to human activity means such activity that flows from immediate needs and inclinations of nature.'
        },
        {
          term: 'Natural Law',
          text: 'Law arising from the very nature of man, preceding all positive legislation.'
        },
        {
          term: 'Nation',
          text: 'A people constituting a political whole, a state. A nation differs from a simple ethnic tribe in having common government, common laws, common culture and literature.'
        },
        {
          term: 'National Assembly',
          text: 'A representative institution composed of deputies from all classes of the people to discuss and decide state affairs.'
        },
        {
          term: 'Ne Plus Ultra',
          text: 'Latin expression meaning the highest degree of perfection that can be achieved in something; one cannot go further - the limit of perfection.'
        },
        {
          term: 'Necropolis',
          text: 'City of the dead, cemetery. Thus the ancients called burial places, especially when they constituted extensive underground buildings with many tombs.'
        },
        {
          term: 'Nemean Games',
          text: 'One of the four great national festivals of ancient Greece, established in memory of Hercules defeating the Nemean lion.'
        },
        {
          term: 'Neology',
          text: 'Introduction of new words or new meanings of old words into a language. In a narrower sense - inclination to innovations in religion.'
        },
        {
          term: 'Neo-Christianity',
          text: 'Attempt to reconcile Christianity with modern philosophy and science through new interpretation of Christian dogmas.'
        },
        {
          term: 'Nepotism',
          text: 'Patronage of relatives. This was especially the abuse of popes who distributed highest church positions and wealth to their relatives.'
        },
        {
          term: 'Nomenclature',
          text: 'Collection of names, designations of objects in some branch of science or art. In social sense - totality of persons occupying certain positions.'
        },
        {
          term: 'Normal State',
          text: 'State conforming to an established norm, rule. In application to society - state corresponding to its natural development.'
        },
        {
          term: 'Nota Bene',
          text: 'Latin expression used to indicate what should receive special attention. Means: note well, remember.'
        },
        {
          term: 'Notaboli',
          text: 'Most notable, most honorable citizens. In the Middle Ages in some Italian republics, persons belonging to the highest class.'
        },
        {
          term: 'Notary',
          text: 'Official whose duty is to certify various acts: contracts, wills, powers of attorney and other documents to give them legal force.'
        },
        {
          term: 'Innovation',
          text: 'Striving to introduce new things, make innovations. In good sense means useful activity aimed at improving the existing.'
        },
        {
          term: 'Innovator',
          text: 'Person introducing something new in science, art, social life. An innovator differs from a simple inventor.'
        },
        {
          term: 'Novation',
          text: 'Renewal, transformation of something. In legal sense - replacement of one obligation by another.'
        },
        {
          term: 'Obscurant',
          text: 'Opponent of enlightenment, obscurantist. People who from personal or party motives try to keep people in ignorance.'
        },
        {
          term: 'Obscurantism',
          text: 'The fullness and degree of perfection of knowledge and self-consciousness in a person is the foundation of their actual power.'
        },
        {
          term: 'Owenism',
          text: 'Teaching of Robert Owen about transforming society on the principles of socialism.'
        },
        {
          term: 'Oligarchy',
          text: 'Form of government where power is in the hands of the few.'
        },
        {
          term: 'Opposition',
          text: 'Counteraction, resistance. In political sense - party or group opposing the government.'
        },
        {
          term: 'Optimates',
          text: 'The best, most noble people. In ancient Rome the aristocratic party.'
        },
        {
          term: 'Orator',
          text: 'Person possessing the gift of eloquence, able to speak convincingly, captivatingly.'
        },
        {
          term: 'Organic Era',
          text: 'Time of calm, regular development of society, when all its parts are in harmony.'
        },
        {
          term: 'Organizer',
          text: 'Person possessing the ability to arrange, put in order some matter.'
        },
        {
          term: 'Horde',
          text: 'Nomadic tribe, people. In Russian history the Tatar state that conquered Rus in the 13th century.'
        },
        {
          term: 'Ordeals',
          text: 'Judgments of God, trials by fire, water, iron to discover truth in judicial matters.'
        },
        {
          term: 'Oracle',
          text: 'Thus the ancients called either a deity that predicted the future, or a place where divination was located.'
        }
      ],
      footer: 'The text is published in its original edition.'
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
                <h2 className="font-serif text-xl font-bold text-sidebar-foreground mb-2">
                  {language === 'ru' ? 'Словарь' : 'Dictionary'}
                </h2>
                <div className="font-mono text-xs text-muted-foreground">
                  {t.sections.length} {language === 'ru' ? 'терминов' : 'terms'}
                </div>
              </div>

              <Separator className="my-4" />

              <nav className="space-y-1">
                {t.sections.map((section, idx) => (
                  <a
                    key={idx}
                    href={`#term-${idx}`}
                    className="block px-3 py-1.5 text-xs font-mono text-sidebar-foreground hover:text-accent hover:bg-sidebar-accent/50 rounded-sm transition-colors"
                  >
                    {section.term}
                  </a>
                ))}
              </nav>
            </div>
          </ScrollArea>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="border-b border-border bg-card">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-muted-foreground">
                  {language === 'ru' ? 'Философский словарь' : 'Philosophical Dictionary'}
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
                  {language === 'ru' ? 'СЛОВАРЬ' : 'DICTIONARY'}
                  <div className="text-muted-foreground mt-1 text-center">2010-2011</div>
                </div>

                <div className="pt-16 space-y-4 fade-in-up">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                    {t.title}
                  </h1>
                  <p className="font-serif text-lg text-muted-foreground">
                    {language === 'ru' 
                      ? 'Философские и исторические термины из архивных текстов 2010-2011 годов'
                      : 'Philosophical and historical terms from archival texts of 2010-2011'}
                  </p>
                </div>
              </div>

              <Separator className="my-12" />

              <div className="space-y-12">
                {t.sections.map((section, idx) => (
                  <section 
                    key={idx} 
                    id={`term-${idx}`}
                    className="fade-in-up scroll-mt-20"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 document-line pb-2">
                      {section.term}
                    </h2>
                    <p className="font-serif text-base leading-relaxed text-foreground/90">
                      {section.text}
                    </p>
                  </section>
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
                    {t.footer}
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

export default PeopleForgot;
