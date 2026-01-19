import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface FormContent {
  title: string;
  name: string;
  email: string;
  category: string;
  categories: {
    feedback: string;
    research: string;
    media: string;
    other: string;
  };
  message: string;
  submit: string;
  sending: string;
}

interface ContactFormProps {
  language: 'ru' | 'en';
  formContent: FormContent;
}

export const ContactForm = ({ language, formContent }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'feedback',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/1fb58332-456a-4830-959c-06dc2cca6153', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: language === 'ru' ? 'Сообщение отправлено' : 'Message sent',
          description: language === 'ru' 
            ? 'Спасибо за обратную связь. Мы свяжемся с вами в ближайшее время.'
            : 'Thank you for your feedback. We will contact you soon.',
        });
        setFormData({ name: '', email: '', category: 'feedback', message: '' });
      } else {
        toast({
          title: language === 'ru' ? 'Ошибка отправки' : 'Sending error',
          description: language === 'ru'
            ? 'Не удалось отправить сообщение. Попробуйте позже.'
            : 'Failed to send message. Please try again later.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: language === 'ru' ? 'Ошибка' : 'Error',
        description: language === 'ru'
          ? 'Произошла ошибка. Проверьте соединение и попробуйте снова.'
          : 'An error occurred. Check your connection and try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="font-serif text-xl font-bold text-foreground mb-4">
        {formContent.title}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {formContent.name}
          </label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {formContent.email}
          </label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {formContent.category}
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md"
          >
            <option value="feedback">{formContent.categories.feedback}</option>
            <option value="research">{formContent.categories.research}</option>
            <option value="media">{formContent.categories.media}</option>
            <option value="other">{formContent.categories.other}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {formContent.message}
          </label>
          <Textarea
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? formContent.sending : formContent.submit}
        </Button>
      </form>
    </Card>
  );
};
