import React, { useState } from 'react';
import { 
  Droplets, 
  Clock, 
  Shield, 
  Truck, 
  Phone, 
  Instagram, 
  MessageCircle,
  CheckCircle,
  Users,
  MapPin,
  Bell,
  Sparkles,
  Zap
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert('Дякуємо! Ми зв\'яжемося з вами найближчим часом.');
    setFormData({ name: '', phone: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative bg-gradient-to-br from-sky-200 via-sky-100 to-blue-100 min-h-screen flex items-center px-4 overflow-hidden">
        {/* Background water splashes and bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large water splash on the left */}
          <div className="absolute bottom-0 left-0 w-96 h-96">
            <svg viewBox="0 0 400 400" className="w-full h-full opacity-60">
              <path d="M0,300 Q50,250 100,280 T200,260 T300,290 T400,270 L400,400 L0,400 Z" fill="url(#waterGradient1)" />
              <path d="M0,320 Q60,270 120,300 T240,280 T360,310 T400,290 L400,400 L0,400 Z" fill="url(#waterGradient2)" />
              <defs>
                <linearGradient id="waterGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6"/>
                </linearGradient>
                <linearGradient id="waterGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Water bubbles scattered around */}
          <div className="absolute top-20 right-1/4 w-4 h-4 bg-sky-300 rounded-full opacity-70"></div>
          <div className="absolute top-32 right-1/3 w-3 h-3 bg-blue-300 rounded-full opacity-60"></div>
          <div className="absolute top-16 right-1/5 w-2 h-2 bg-sky-400 rounded-full opacity-80"></div>
          <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-blue-200 rounded-full opacity-50"></div>
          <div className="absolute top-1/4 right-1/6 w-3 h-3 bg-sky-300 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-2/5 w-2 h-2 bg-blue-400 rounded-full opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left relative">
              {/* Large water drop icon */}
              <div className="absolute -left-16 top-1/3 w-16 h-20 bg-gradient-to-b from-cyan-400 to-teal-500 rounded-full opacity-80" 
                   style={{borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'}}></div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-slate-800">
                Чиста вода —<br/>
                без зайвих рухів
              </h1>
              <div className="mb-12">
                <p className="text-2xl md:text-3xl text-slate-700 font-medium mb-3">
                  Доставка питної води
                </p>
                <p className="text-xl md:text-2xl text-slate-600">
                  для дому, офісу та бізнесу
                </p>
              </div>
            </div>
            
            {/* Right side - Water bottle */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Water splash behind bottle */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-60">
                <svg viewBox="0 0 320 240" className="w-full h-full opacity-70">
                  <path d="M50,120 Q100,80 150,110 T250,100 T320,130 Q280,160 230,140 T130,150 T50,120 Z" fill="url(#splashGradient)" />
                  <defs>
                    <linearGradient id="splashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Water bottle */}
              <div className="relative z-20">
                <div className="w-40 h-96 bg-gradient-to-b from-sky-100 to-blue-200 rounded-2xl relative shadow-2xl border border-blue-200 overflow-hidden">
                  {/* Bottle cap */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-xl border-2 border-blue-800">
                    {/* Cap ridges */}
                    <div className="absolute inset-x-0 top-2 space-y-1">
                      <div className="h-0.5 bg-blue-800 mx-2 rounded"></div>
                      <div className="h-0.5 bg-blue-800 mx-2 rounded"></div>
                      <div className="h-0.5 bg-blue-800 mx-2 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Water inside bottle */}
                  <div className="absolute bottom-0 left-0 right-0 h-5/6 bg-gradient-to-t from-blue-300 via-sky-200 to-blue-100 rounded-b-2xl opacity-90"></div>
                  
                  {/* Bottle segments */}
                  <div className="absolute top-20 left-0 right-0 h-px bg-blue-300 opacity-60"></div>
                  <div className="absolute top-32 left-0 right-0 h-px bg-blue-300 opacity-60"></div>
                  <div className="absolute top-44 left-0 right-0 h-px bg-blue-300 opacity-60"></div>
                  <div className="absolute top-56 left-0 right-0 h-px bg-blue-300 opacity-60"></div>
                  
                  {/* Water reflection */}
                  <div className="absolute top-4 left-2 w-8 h-32 bg-white opacity-30 rounded-full blur-sm"></div>
                </div>
              </div>
              
              {/* Order button positioned like in the image */}
              <div className="absolute bottom-0 right-0 z-30">
                <a 
                  href="#order" 
                  className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Замовити воду
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Чиста вода для вашого дому та офісу в Дніпрі
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ми працюємо в Дніпрі вже понад 8 років і доставляємо високоякісну питьевую воду 
            від перевірених виробників. Наша вода проходить багатоступеневу очистку та 
            регулярно тестується в сертифікованих лабораторіях.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Чому обирають саме нас?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Швидка доставка</h4>
              <p className="text-gray-600">Доставляємо в день замовлення або на наступний день</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Чистота</h4>
              <p className="text-gray-600">Всі сертифікати якості та регулярне тестування</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Зручність</h4>
              <p className="text-gray-600">Замовляйте онлайн або по телефону в зручний час</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Нагадування</h4>
              <p className="text-gray-600">Повідомляємо про доставку та нагадуємо про замовлення</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-orange-100 rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center mb-2">
                <Truck className="w-8 h-8 text-orange-600 mr-2" />
                <span className="text-xl font-bold text-orange-800">Безкоштовна доставка</span>
              </div>
              <p className="text-orange-700">від 2 бутлів по всьому Дніпру</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Наші тарифи
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h4 className="text-xl font-semibold mb-4">Стандарт</h4>
              <div className="text-3xl font-bold text-blue-600 mb-4">45 ₴</div>
              <p className="text-gray-600 mb-4">за 1 бутель 19л</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Очищена питьева вода
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Доставка в день замовлення
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-orange-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                Популярний
              </div>
              <h4 className="text-xl font-semibold mb-4">Оптимум</h4>
              <div className="text-3xl font-bold text-blue-600 mb-4">135 ₴</div>
              <p className="text-gray-600 mb-4">за 3 бутлі 19л</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Економія 10₴
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Безкоштовна доставка
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Пріоритетна доставка
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h4 className="text-xl font-semibold mb-4">Максимум</h4>
              <div className="text-3xl font-bold text-blue-600 mb-4">270 ₴</div>
              <p className="text-gray-600 mb-4">за 6 бутлів 19л</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Максимальна економія
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Безкоштовна доставка
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Ідеально для офісу
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Зона доставки
          </h3>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <h4 className="text-2xl font-semibold text-gray-800">
                Працюємо по всьому Дніпру
              </h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-gray-700">
              <div className="space-y-2">
                <p>• Центр</p>
                <p>• Перемога</p>
                <p>• Тополь</p>
                <p>• Сонячний</p>
              </div>
              <div className="space-y-2">
                <p>• Чечелівський</p>
                <p>• Новокодацький</p>
                <p>• Амур-Нижньодніпровський</p>
                <p>• Індустріальний</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-16 px-4 bg-blue-600">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Замовити доставку
          </h3>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Ім'я"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Хочу воду
            </button>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Ми не передаємо дані третім особам.<br/>
              Тільки для зв'язку по доставці.
            </p>
          </form>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Контакти
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                Зона доставки
              </h4>
              <p className="text-gray-600 mb-4">
                Ми доставляємо по всьому Львову та прилеглим районам:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Центр міста</li>
                <li>• Сихів</li>
                <li>• Личаків</li>
                <li>• Замарстинів</li>
                <li>• Франківський район</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Phone className="w-6 h-6 mr-2 text-blue-600" />
                Зв'яжіться з нами
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">Телефон для замовлень:</p>
                  <a 
                    href="tel:+380562789456" 
                    className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    +38 (056) 278-94-56
                  </a>
                </div>
                
                <div className="pt-4">
                  <p className="text-gray-600 mb-4">Ми в соцмережах:</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/akvadnepr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://t.me/akvadnepr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                    <a
                      href="viber://chat?number=+380562789456"
                      className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-colors"
                    >
                      <Phone className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Droplets className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">АкваДнепр</span>
          </div>
          <p className="text-gray-400">
            © 2025 АкваДнепр. Якісна питьева вода з доставкою по Дніпру.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;