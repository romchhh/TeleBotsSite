import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './Button';
import HighlightedTextWithDots from './styledComponents/HighlightedTextWithDots';

const PRICE_PLANS = [
	{
	  title: 'Lite',
	  description: 'Для малого бізнесу: автоматизуйте відповіді на популярні запитання та оптимізуйте час. Це найкращий старт для тих, хто хоче зекономити на рутині.',
	  originalPrice: '1500 грн',
	  discountedPrice: '1000 грн',
	  orderText: 'Замовити зараз',
	  orderLink: 'https://t.me/nowayrm',
	  features: [
		'Розробка бота під ваші потреби',
		'Одне оновлення протягом місяця',
		'Хостинг у подарунок на 6 місяців',
		'24/7 моніторинг сервера',
	  ],
	},
	{
	  title: 'Standart',
	  description: 'Оптимальний вибір для середнього бізнесу. Бот із зворотнім зв\'язком і функціями, що збільшать вашу конверсію.',
	  originalPrice: '4000 грн',
	  discountedPrice: '3000 грн',
	  orderText: 'Замовити вигідно',
	  orderLink: 'https://t.me/nowayrm',
	  features: [
		'Розробка індивідуального сценарію',
		'Форма для отримання заявок',
		'Функція зв\'язку з менеджером',
		'Три оновлення протягом місяця',
		'6 місяців хостингу в подарунок',
		'24/7 моніторинг сервера',
	  ],
	},
	{
	  title: 'Premium',
	  description: 'Ідеально для великого бізнесу. Бот з інтеграцією бази даних та можливістю масштабування під будь-які потреби.',
	  originalPrice: '8000 грн',
	  discountedPrice: '6000 грн',
	  orderText: 'Замовити найкраще',
	  orderLink: 'https://t.me/nowayrm',
	  features: [
		'Розробка складного сценарію',
		'Інтеграція з базами даних',
		'Функція зворотнього зв\'язку',
		'Форма заявок для клієнтів',
		'Три оновлення протягом двох місяців',
		'Хостинг 6 місяців безкоштовно',
		'Моніторинг сервера 24/7',
	  ],
	},
  ];

function Prices() {
  const { ref: pricesRef, inView: pricesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className='min-h-screen py-20 bg-gradient-to-b from-gray-50 to-gray-100'
      id='prices'
    >
      <div className='container'>
        <div className='text-center mb-16'>
          <HighlightedTextWithDots className='text-5xl font-bold text-gray-800 mb-4'>
            Ціни на розробку
          </HighlightedTextWithDots>
          <HighlightedTextWithDots className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Виберіть тариф, який найкраще підходить для вашого бізнесу
          </HighlightedTextWithDots>
        </div>
        
        <div
          ref={pricesRef}
          className={`grid xl:grid-cols-3 gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center content-center transition-all duration-1000 ${
            pricesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {PRICE_PLANS.map((plan, index) => (
            <div
              className={`w-full p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                index === 1 ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white'
              }`}
              key={index}
            >
              <HighlightedTextWithDots className='text-3xl font-bold mb-4 text-gray-800'>
                {plan.title}
              </HighlightedTextWithDots>
              <p className='text-gray-600 mb-6'>{plan.description}</p>
              <div className='mb-8'>
                <span className='text-2xl font-bold text-blue-600'>{plan.discountedPrice}</span>
                <span className='ml-2 text-gray-400 line-through'>{plan.originalPrice}</span>
              </div>
              <a
                href={plan.orderLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block mb-8'
              >
                <Button className={`px-8 py-3 rounded-xl text-lg font-semibold ${
                  index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'
                } text-white`}>
                  {plan.orderText}
                </Button>
              </a>
              <div className='features text-left'>
                <HighlightedTextWithDots className='font-semibold mb-4 text-gray-800'>
                  Що входить:
                </HighlightedTextWithDots>
                <ul className='space-y-3'>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start'>
                      <span className='text-blue-500 mr-2'>✓</span>
                      <span className='text-gray-600'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Prices;
