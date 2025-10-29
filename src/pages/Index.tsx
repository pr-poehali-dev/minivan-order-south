import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      title: 'Корпоративные перевозки',
      description: 'Организуем комфортные поездки для ваших сотрудников и партнеров с гибким графиком',
      icon: 'Briefcase',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Сопровождение мероприятий',
      description: 'Обеспечим транспортное обслуживание конференций, свадеб и других событий',
      icon: 'Calendar',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Заказные перевозки',
      description: 'Индивидуальные маршруты для любых целей с профессиональным водителем',
      icon: 'MapPin',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Трансфер в любую точку РФ',
      description: 'Доставим вас комфортно в любой город России с остановками по маршруту',
      icon: 'Plane',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const advantages = [
    {
      icon: 'CheckCircle2',
      title: 'Комфортабельный транспорт',
      description: 'Новые минивэны с кондиционером',
    },
    {
      icon: 'Shield',
      title: 'Опытные водители',
      description: 'Стаж от 10 лет, знание маршрутов',
    },
    {
      icon: 'Clock',
      title: 'Пунктуальность',
      description: 'Всегда вовремя, 24/7',
    },
    {
      icon: 'DollarSign',
      title: 'Прозрачные цены',
      description: 'Без скрытых доплат',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Bus" size={32} className="text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              МиниВэн ЮГ
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#fleet" className="hover:text-primary transition-colors">
              Автопарк
            </a>
            <a href="#advantages" className="hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Аренда минивэна с водителем{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  по Югу России
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Комфортные перевозки для бизнеса и отдыха. Профессиональные водители, новые автомобили, гибкие маршруты.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить расчет
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Info" size={20} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">1500+</div>
                  <div className="text-sm text-muted-foreground">поездок</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">поддержка</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Предлагаем полный спектр транспортных услуг для любых задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group cursor-pointer overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="ghost" className="mt-4 group-hover:text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы гарантируем качество на каждом этапе вашей поездки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                Путешествуйте с комфортом
              </h2>
              <p className="text-xl text-muted-foreground">
                Наши минивэны оборудованы всем необходимым для дальних поездок: кондиционер, Wi-Fi, USB-зарядки, удобные сиденья.
              </p>
              <ul className="space-y-3">
                {['Вместимость до 8 человек', 'Багажное отделение', 'Детские кресла по запросу', 'Остановки по маршруту'].map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span className="text-lg">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Наш автопарк</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные минивэны в отличном состоянии для вашего комфорта
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/8fd2668d-2a00-48ad-9cea-dea7a59cca54/files/126a0360-8df5-4625-b50b-a85f0a50fe87.jpg"
                  alt="Nissan Serena C27 черный"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Доступен
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3">Nissan Serena C27</h3>
                  <p className="text-lg text-muted-foreground">Черный комфортабельный минивэн для любых задач</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={24} className="text-primary" />
                    <span className="text-lg font-medium">7 мест</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Wind" size={24} className="text-primary" />
                    <span className="text-lg font-medium">Кондиционер</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Wifi" size={24} className="text-primary" />
                    <span className="text-lg font-medium">Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Zap" size={24} className="text-primary" />
                    <span className="text-lg font-medium">USB-порты</span>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/8fd2668d-2a00-48ad-9cea-dea7a59cca54/files/83da0594-1f96-4c8e-b2e1-18dcfb45e9a1.jpg"
                  alt="Nissan Serena C27 белый с багажником"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Доступен
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3">Nissan Serena C27</h3>
                  <p className="text-lg text-muted-foreground">Белый минивэн с багажником на крыше для дальних поездок</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={24} className="text-secondary" />
                    <span className="text-lg font-medium">6 мест</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Package" size={24} className="text-secondary" />
                    <span className="text-lg font-medium">Багажник на крыше</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Wind" size={24} className="text-secondary" />
                    <span className="text-lg font-medium">Кондиционер</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Wifi" size={24} className="text-secondary" />
                    <span className="text-lg font-medium">Wi-Fi</span>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-secondary to-purple-600 text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="text-center mb-8 space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold">Закажите поездку</h2>
                <p className="text-xl text-muted-foreground">
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Детали поездки</label>
                  <Textarea
                    placeholder="Откуда - куда, когда, количество пассажиров..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-lg"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Bus" size={32} className="text-primary" />
                <span className="text-2xl font-bold">МиниВэн ЮГ</span>
              </div>
              <p className="text-gray-400">
                Надежный партнер для ваших поездок по Югу России с 2015 года
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (800) 555-35-35</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@minivan-yug.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Краснодар, Ростов, Сочи</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name="MessageCircle" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name="Phone" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name="Mail" size={24} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МиниВэн ЮГ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;