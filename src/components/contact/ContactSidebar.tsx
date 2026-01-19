import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Section {
  title: string;
  icon: string;
  items: string[];
}

interface ContactSidebarProps {
  sections: Section[];
}

export const ContactSidebar = ({ sections }: ContactSidebarProps) => {
  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <Card key={index} className="p-4 bg-card/50">
          <div className="flex items-center gap-2 mb-3">
            <Icon name={section.icon as any} size={20} className="text-accent" />
            <h3 className="font-serif font-semibold text-sidebar-foreground">
              {section.title}
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
};
