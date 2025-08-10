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
      <header className="relative bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-200 text-blue-900 py-8 px-4 overflow-hidden">
        {/* Water splash background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-cyan-300 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-blue-400 rounded-full blur-md"></div>
        </div>
        
        {/* Water droplets */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute top-32 right-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-50"></div>
          <div className="absolute top-20 left-1/3 w-2 h-2 bg-cyan-300 rounded-full opacity-80"></div>
        </div>

        <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Droplets className="w-8 h-8 mr-2 text-blue-600" />
            <span className="text-xl font-bold text-blue-800">АкваДнепр</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="tel:+380562789456" 
              className="flex items-center text-blue-800 hover:text-blue-600 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              +38 (056) 278-94-56
            </a>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/akvadnepr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/akvadnepr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="viber://chat?number=+380562789456"
                className="text-blue-700 hover:text-purple-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-blue-900">
                Чиста вода —<br/>
                <span className="text-blue-700">без зайвих рухів</span>
              </h1>
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-blue-800 font-medium mb-2">
                  Доставка питної води
                </p>
                <p className="text-lg md:text-xl text-blue-700">
                  для дому, офісу та бізнесу
                </p>
              </div>
              <a 
                href="#order" 
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Замовити воду
              </a>
            </div>
            
            {/* Right side - Water bottle illustration */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Water splash effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-20 blur-2xl"></div>
              </div>
              
              {/* Bottle representation using CSS */}
              <div className="relative z-10">
                <div className="w-32 h-80 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg relative shadow-lg border-2 border-blue-300">
                  {/* Bottle cap */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-blue-500 rounded-t-lg"></div>
                  
                  {/* Water level */}
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-cyan-200 to-blue-200 rounded-b-lg opacity-80"></div>
                  
                  {/* Bottle rings */}
                  <div className="absolute top-16 left-0 right-0 h-1 bg-blue-300 opacity-60"></div>
                  <div className="absolute top-24 left-0 right-0 h-1 bg-blue-300 opacity-60"></div>
                  <div className="absolute top-32 left-0 right-0 h-1 bg-blue-300 opacity-60"></div>
                </div>
                
                {/* Water droplet icon */}
                <div className="absolute -left-8 top-1/3 bg-cyan-400 w-8 h-8 rounded-full flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
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