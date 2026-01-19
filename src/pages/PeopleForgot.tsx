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
          term: 'Обскурантизм',
          text: 'Полнота и степень совершенства знания и самосознания в человеке или для человека есть основа и залог его действительного могущества. Без всезнания всемогущество немыслимо. Обскурантизм вообще является важной составной частью в любом религиозном властительстве или чьем-либо правлении; стараться использовать сами знания как орудие для унижения и оставления народа в еще больше невежестве, объясняя, что ум человеческий ограничен, истина – недосягаема, божество – непонятно.'
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
          text: 'Sellers of provisions attached to an army during war. The inconveniences associated with transporting and storing goods, the danger of losing all possessions with changes in circumstances at the "fronts" force sutlers to sell their products and goods at extremely high prices. Their presence at the front is a necessary evil: they ruin everyone, encouraging excessive spending, often pushing the entourage to plunder in which they actively participate.'
        },
        {
          term: 'Materialism',
          text: 'Materialism is such a view of things according to which everything spiritual, supersensible, is considered fiction. Man is nothing more than a perfected animal, having no other purpose than satisfying bodily needs, but distinguished from other animals by the art of multiplying and refining these needs, anticipating them and satisfying them with calculation and reason.'
        },
        {
          term: 'Mercantile System',
          text: 'The presence and possession of enormous raw material resources and minerals has a strong influence on people, on their understanding of national wealth. They begin to see it in the abundance and excess of precious metals and money, that is, the more a people acquires them by trading their knowledge, products, works, etc., the more successful and wealthier they are.'
        },
        {
          term: 'Misanthropy',
          text: 'Fear of people, hatred of people. This refers not so much to a disease as to a person\'s tendency to fear or hate people. The cause lies not in a person\'s temperament, but in the deficiency or damage of one of their spiritual faculties, primarily reason.'
        },
        {
          term: 'Coin',
          text: 'The word "money" generally means any object accepted in society as a measure when determining the relative price of various objects. A coin is metal that has received a certain form by means of minting and serves as a universally recognized sign of value to facilitate exchange transactions in society. Alongside coins, paper money circulates – banknotes without real backing: such a financial system represents a pyramid, easily leading to bankruptcy and inevitable state upheavals.'
        },
        {
          term: 'Monopoly',
          text: 'An exclusive right granted to one or several persons for the processing and sale of any products of human hands and mind. Monopolies are harmful to public welfare, no matter who they belong to: whether the state or private individuals; because the monopolist is confident in sales and, having no competitors, does not care about improving their products, sets whatever price they want.'
        },
        {
          term: 'Obscurantism',
          text: 'The fullness and degree of perfection of knowledge and self-consciousness in a person or for a person is the foundation and guarantee of their actual power. Without omniscience, omnipotence is unthinkable. Obscurantism is generally an important component of any religious rule or someone\'s governance; trying to use knowledge itself as a tool for humiliation and keeping the people in even greater ignorance, explaining that the human mind is limited, truth is unattainable, deity is incomprehensible.'
        },
        {
          term: 'Oracle',
          text: 'Thus the ancients called either a deity that predicted the future, or a place where divination was located. At their first glance at the world, man sees the supernatural in everything: nature appears as deity, almost any object seems to be the dwelling of deity, every phenomenon of nature – a direct action of deity.'
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
                  {language === 'ru' ? 'Люди просто забыли' : 'People Forgot'}
                </h2>
                <div className="font-mono text-xs text-muted-foreground">
                  {language === 'ru' ? 'Словарь терминов' : 'Dictionary of Terms'}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase text-muted-foreground mb-2">
                  {language === 'ru' ? 'Термины' : 'Terms'}
                </div>
                {t.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="font-serif text-sm py-2 px-3 rounded-sm bg-sidebar-accent/30 text-sidebar-foreground"
                  >
                    {section.term}
                  </div>
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
                  {language === 'ru' ? 'Словарь' : 'Dictionary'}
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
            <div className="max-w-4xl mx-auto p-8 space-y-12 vintage-lines">
              <div className="relative">
                <div className="absolute top-0 right-0 stamp text-xs text-accent">
                  {language === 'ru' ? 'ДЕКЛАССИФИЦИРОВАНО' : 'DECLASSIFIED'}
                  <div className="text-muted-foreground mt-1 text-center">2010</div>
                </div>

                <div className="pt-16 space-y-4 fade-in-up">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                    {t.title}
                  </h1>
                </div>
              </div>

              <Separator className="my-12" />

              <div className="space-y-10">
                {t.sections.map((section, idx) => (
                  <div 
                    key={idx} 
                    className="fade-in-up space-y-4"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <h2 className="font-serif text-2xl font-bold text-accent document-line pb-3">
                      {section.term}
                    </h2>
                    <p className="quote-highlight font-serif text-lg leading-relaxed text-foreground/90">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-12 pb-8">
                <Separator className="mb-6" />
                <div className="font-mono text-xs text-center text-muted-foreground italic">
                  {t.footer}
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
