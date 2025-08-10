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
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Droplets className="w-8 h-8 mr-2" />
            <div>
              <span className="text-2xl font-bold block">АкваДнепр</span>
              <span className="text-sm text-blue-200">Доставка питьевої води</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="text-right">
              <div className="text-lg font-semibold">+38 (056) 278-94-56</div>
              <div className="text-sm text-blue-200">Працюємо 24/7</div>
            </div>
            <div className="flex space-x-2">
              <a
                href="https://instagram.com/akvadnepr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/akvadnepr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="viber://chat?number=+380562789456"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-200 via-blue-100 to-white py-20 px-4 overflow-hidden min-h-[700px]">
        {/* Water wave background */}
        <div className="absolute inset-0">
          {/* Large water wave at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-64">
            <svg viewBox="0 0 1200 300" className="w-full h-full">
              <path d="M0,200 C300,150 600,250 900,180 C1050,140 1150,160 1200,180 L1200,300 L0,300 Z" 
                    fill="rgba(59, 130, 246, 0.3)" />
              <path d="M0,220 C200,170 400,240 600,200 C800,160 1000,190 1200,170 L1200,300 L0,300 Z" 
                    fill="rgba(59, 130, 246, 0.2)" />
            </svg>
          </div>
          
          {/* Water splash on left */}
          <div className="absolute left-0 top-1/2 w-96 h-48">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <path d="M0,100 C50,50 100,150 150,80 C200,40 250,120 300,70 C350,30 380,60 400,50 L400,200 L0,200 Z" 
                    fill="rgba(59, 130, 246, 0.25)" />
            </svg>
          </div>
          
          {/* Water splash on right */}
          <div className="absolute right-0 top-1/3 w-80 h-40">
            <svg viewBox="0 0 320 160" className="w-full h-full">
              <path d="M320,80 C270,30 220,130 170,60 C120,20 70,100 20,50 C10,40 5,45 0,40 L0,160 L320,160 Z" 
                    fill="rgba(59, 130, 246, 0.2)" />
            </svg>
          </div>
        </div>
        
        {/* Floating water droplets */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-48 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-80 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-blue-500 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-60 left-1/5 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-1/5 w-4 h-4 bg-blue-300 rounded-full opacity-50 animate-bounce" style={{animationDelay: '2.5s'}}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              {/* Water droplet icon */}
              <div className="flex items-center mb-8">
                <div className="relative">
                  <Droplets className="w-16 h-16 text-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full opacity-70"></div>
                </div>
              </div>
              
              {/* Main headline */}
              <h1 className="text-5xl lg:text-7xl font-bold text-blue-900 leading-tight">
                Чиста вода —<br/>
                без зайвих рухів
              </h1>
              
              {/* Subheading */}
              <p className="text-xl lg:text-2xl text-blue-800 font-medium leading-relaxed">
                Доставка питної води<br/>
                для дому, офісу та бізнесу
              </p>
            </div>
            
            {/* Right side - Water bottle */}
            <div className="relative flex justify-center lg:justify-end">
              {/* 20L Water bottle based on reference */}
              <div className="relative">
                {/* 20L Bottle structure */}
                <div className="relative w-56 h-96">
                  {/* Bottle neck */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-blue-300 to-blue-400 rounded-t-lg shadow-lg"></div>
                  
                  {/* Bottle cap */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-14 h-6 bg-blue-600 rounded-t-lg shadow-md"></div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-blue-700 rounded-t-sm"></div>
                  
                  {/* Main bottle body - wider at top, narrower at bottom */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-52 h-80 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 shadow-2xl"
                       style={{
                         clipPath: 'polygon(15% 0%, 85% 0%, 90% 15%, 95% 85%, 85% 100%, 15% 100%, 5% 85%, 10% 15%)',
                         borderRadius: '20px'
                       }}>
                    
                    {/* Water inside bottle */}
                    <div className="absolute inset-2 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 opacity-90"
                         style={{
                           clipPath: 'polygon(15% 5%, 85% 5%, 88% 20%, 92% 80%, 85% 95%, 15% 95%, 8% 80%, 12% 20%)',
                           borderRadius: '15px'
                         }}></div>
                    
                    {/* Bottle ridges/rings */}
                    <div className="absolute top-8 left-0 right-0 h-1 bg-blue-400 opacity-60"></div>
                    <div className="absolute top-16 left-0 right-0 h-1 bg-blue-400 opacity-60"></div>
                    <div className="absolute top-24 left-0 right-0 h-1 bg-blue-400 opacity-60"></div>
                    <div className="absolute bottom-16 left-0 right-0 h-1 bg-blue-400 opacity-60"></div>
                    <div className="absolute bottom-8 left-0 right-0 h-1 bg-blue-400 opacity-60"></div>
                    
                    {/* Handle */}
                    <div className="absolute right-0 top-1/3 w-8 h-16 bg-blue-300 opacity-80"
                         style={{
                           clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)',
                           borderRadius: '0 10px 10px 0'
                         }}></div>
                    
                    {/* Label area */}
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-white bg-opacity-80 rounded-lg flex flex-col items-center justify-center shadow-md">
                      <Droplets className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-blue-800 font-bold text-sm">АКВДА</span>
                      <span className="text-blue-800 font-bold text-sm">ДНЕПР</span>
                      <span className="text-blue-600 text-xs">20L</span>
                    </div>
                  </div>
                  
                  {/* Water reflection highlights */}
                  <div className="absolute top-16 left-8 w-4 h-32 bg-white opacity-30 rounded-full blur-sm"></div>
                  <div className="absolute top-24 right-12 w-2 h-24 bg-white opacity-40 rounded-full blur-sm"></div>
                </div>
                
                {/* Water splash effects around bottle */}
                <div className="absolute -bottom-12 -left-12 w-32 h-20 bg-blue-300 rounded-full opacity-30 blur-lg"></div>
                <div className="absolute -bottom-8 -right-8 w-28 h-16 bg-blue-400 rounded-full opacity-40 blur-md"></div>
                <div className="absolute top-1/4 -right-16 w-20 h-12 bg-blue-200 rounded-full opacity-25 blur-lg"></div>
                
                {/* Floating droplets around bottle */}
                <div className="absolute top-12 -right-6 w-4 h-4 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute top-32 -left-8 w-5 h-5 bg-blue-500 rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-48 -right-12 w-3 h-3 bg-blue-400 rounded-full opacity-80 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-24 -left-6 w-4 h-4 bg-blue-500 rounded-full opacity-70 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute bottom-40 -right-8 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-20 -left-4 w-2 h-2 bg-blue-300 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2.5s'}}></div>
              </div>
              
              {/* Call-to-action button positioned in bottom right */}
              <div className="absolute bottom-8 right-4">
                <a 
                  href="#order" 
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Замовити воду
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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