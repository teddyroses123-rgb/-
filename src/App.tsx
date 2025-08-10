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
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8 px-4 overflow-hidden">
        {/* Background water bottle and effects */}
        <div className="absolute inset-0 opacity-20">
          {/* Large 20L bottle in background */}
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
            <div className="w-32 h-48 bg-gradient-to-b from-blue-200 to-blue-300 rounded-t-2xl rounded-b-lg relative">
              {/* Bottle cap */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-blue-400 rounded-t-lg"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-blue-500 rounded-t-md"></div>
              
              {/* Water inside bottle */}
              <div className="absolute bottom-1 left-1 right-1 top-6 bg-gradient-to-b from-blue-100 to-blue-200 rounded-t-xl rounded-b-md opacity-60"></div>
              
              {/* 20L label */}
              <div className="absolute top-12 left-2 right-2 h-16 bg-white bg-opacity-40 rounded-md flex items-center justify-center">
                <span className="text-blue-800 font-bold text-sm">20L</span>
              </div>
            </div>
          </div>
          
          {/* Water splash effects */}
          <div className="absolute top-4 left-20 w-24 h-24 bg-blue-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-40 w-32 h-32 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute top-8 right-40 w-16 h-16 bg-blue-300 rounded-full blur-lg"></div>
          
          {/* Water droplets */}
          <div className="absolute top-6 left-32 w-2 h-2 bg-blue-200 rounded-full"></div>
          <div className="absolute top-12 left-48 w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-8 left-24 w-2 h-2 bg-blue-200 rounded-full"></div>
          <div className="absolute bottom-12 right-32 w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="absolute top-16 right-48 w-2 h-2 bg-blue-200 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Droplets className="w-8 h-8 mr-2" />
            <div>
              <span className="text-2xl font-bold block">АкваДніпро</span>
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
                href="https://instagram.com/akvadnipro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/akvadnipro"
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
      <section className="relative bg-gradient-to-b from-blue-100 via-blue-50 to-white py-20 px-4 overflow-hidden min-h-[600px]">
        {/* Water splash background effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-40 w-20 h-20 bg-blue-200 rounded-full blur-lg"></div>
        </div>
        
        {/* Water droplets scattered around */}
        <div className="absolute top-16 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-48 w-2 h-2 bg-blue-500 rounded-full opacity-70"></div>
        <div className="absolute top-48 right-24 w-4 h-4 bg-blue-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-48 left-48 w-2 h-2 bg-blue-500 rounded-full opacity-70"></div>
        <div className="absolute top-24 left-64 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        
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
              {/* Large water bottle illustration */}
              <div className="relative">
                {/* Bottle body */}
                <div className="w-48 h-80 bg-gradient-to-b from-blue-100 to-blue-200 rounded-t-3xl rounded-b-lg relative shadow-2xl">
                  {/* Bottle cap */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-blue-600 rounded-t-lg"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-blue-700 rounded-t-md"></div>
                  
                  {/* Water inside bottle */}
                  <div className="absolute bottom-2 left-2 right-2 top-8 bg-gradient-to-b from-blue-50 to-blue-100 rounded-t-2xl rounded-b-md opacity-80"></div>
                  
                  {/* Bottle ridges */}
                  <div className="absolute top-16 left-0 right-0 h-px bg-blue-300 opacity-50"></div>
                  <div className="absolute top-32 left-0 right-0 h-px bg-blue-300 opacity-50"></div>
                  <div className="absolute top-48 left-0 right-0 h-px bg-blue-300 opacity-50"></div>
                  
                  {/* Label area */}
                  <div className="absolute top-20 left-4 right-4 h-32 bg-white bg-opacity-60 rounded-lg flex items-center justify-center">
                    <span className="text-blue-800 font-bold text-lg">19L</span>
                  </div>
                </div>
                
                {/* Water splash effects around bottle */}
                <div className="absolute -bottom-8 -left-8 w-24 h-16 bg-blue-200 rounded-full opacity-40 blur-sm"></div>
                <div className="absolute -bottom-4 -right-6 w-20 h-12 bg-blue-300 rounded-full opacity-50 blur-sm"></div>
                
                {/* Floating droplets around bottle */}
                <div className="absolute top-8 -right-4 w-3 h-3 bg-blue-400 rounded-full opacity-70"></div>
                <div className="absolute top-24 -left-6 w-4 h-4 bg-blue-500 rounded-full opacity-60"></div>
                <div className="absolute top-40 -right-8 w-2 h-2 bg-blue-400 rounded-full opacity-80"></div>
                <div className="absolute bottom-16 -left-4 w-3 h-3 bg-blue-500 rounded-full opacity-70"></div>
                <div className="absolute bottom-32 -right-6 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
              </div>
              
              {/* Call-to-action button positioned in bottom right */}
              <div className="absolute bottom-0 right-0">
                <a 
                  href="#order" 
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
            <span className="text-xl font-bold">АкваДніпро</span>
          </div>
          <p className="text-gray-400">
            © 2025 АкваДніпро. Якісна питна вода з доставкою по Дніпру.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;