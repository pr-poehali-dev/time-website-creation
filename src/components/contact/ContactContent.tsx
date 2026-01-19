import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface CommunityContent {
  title: string;
  text: string;
  link: string;
}

interface GuidelinesContent {
  title: string;
  items: string[];
}

interface ContactContentProps {
  language: 'ru' | 'en';
  title: string;
  subtitle: string;
  intro: string;
  community: CommunityContent;
  guidelines: GuidelinesContent;
  note: string;
}

export const ContactContent = ({
  language,
  title,
  subtitle,
  intro,
  community,
  guidelines,
  note
}: ContactContentProps) => {
  return (
    <>
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
          {title}
        </h1>
        <div className="h-1 w-24 bg-accent mb-6"></div>
        <h2 className="font-serif text-2xl text-accent mb-4">
          {subtitle}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      </div>

      <Card className="p-6 mb-6 bg-card/50">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="Users" size={24} className="text-accent" />
          <h3 className="font-serif text-xl font-bold text-foreground">
            {community.title}
          </h3>
        </div>
        <p className="text-muted-foreground mb-4">{community.text}</p>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(community.link, '_blank')}
        >
          <Icon name="MessageCircle" size={16} className="mr-2" />
          {language === 'ru' ? 'Перейти в Telegram' : 'Open Telegram'}
        </Button>
      </Card>

      <Card className="p-6 mb-6 bg-card/50">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="Scale" size={24} className="text-accent" />
          <h3 className="font-serif text-xl font-bold text-foreground">
            {guidelines.title}
          </h3>
        </div>
        <ul className="space-y-2 text-muted-foreground">
          {guidelines.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-accent mb-6">
        <p className="text-sm text-muted-foreground italic">
          {note}
        </p>
      </div>
    </>
  );
};
